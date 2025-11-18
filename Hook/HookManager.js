//=============================================================================
// HookManager.js
//=============================================================================

/*:
 * @plugindesc v1.0.0 函数钩子管理器
 * @author Your Name
 *
 * @help
 * ============================================================================
 * 简介
 * ============================================================================
 *
 * 这个插件提供了一个强大的函数钩子系统，用于扩展和修改游戏的核心功能。
 *
 * 特性：
 * - 优先级控制
 * - 性能监控
 * - 条件执行
 * - 自动兼容旧版写法
 *
 * ============================================================================
 * 使用方法
 * ============================================================================
 *
 *   HookManager.regHook('Game_Player.prototype.update', function(next) {
 *     next();
 *     console.log('玩家更新');
 *   }, {
 *     priority: 100,
 *     label: 'MyPlugin-PlayerUpdate'
 *   });
 *
 */

(() => {
  'use strict';

  class MvHookManager {
    constructor() {
      this.hooks = new Map();
      this.conditionCache = new Map();
      this.stats = new Map();

      this.globalOptions = {
        enableProfiling: false,
        enableStats: false,
        defaultPriority: 50,
        conditionCacheTime: 100
      };

      this._profiler = {
        manager: this,
        startTime: 0,
        currentHook: null,

        measure(hook, func, thisArg, next, args) {
          this.startTime = performance.now();
          this.currentHook = hook;

          let result;
          try {
            result = func.call(thisArg, next, ...args);
          } catch (error) {
            console.error(`[HookManager] Error in hook "${hook.label}":`, error);
            if (this.manager.globalOptions.enableStats) {
              this.manager.stats.get(hook.id).errors++;
            }
            result = next();
          }

          const duration = performance.now() - this.startTime;

          if (this.manager.globalOptions.enableStats) {
            const stats = this.manager.stats.get(hook.id);
            stats.callCount++;
            stats.totalTime += duration;
            stats.maxTime = Math.max(stats.maxTime, duration);
            stats.minTime = Math.min(stats.minTime, duration);
          }

          const icon = duration > hook.threshold ? '⚠️' : '✓';
          console.log(`${icon} [Profile] ${hook.label}: ${duration.toFixed(2)}ms`);

          if (duration > hook.threshold && hook.onSlow) {
            hook.onSlow(duration);
          }

          return result;
        }
      };
    }
    // 注册钩子（新版写法）
    regHook(target, hookFunc, options = {}) {
      const { obj, method, key } = this._parseTarget(target);

      if (!obj || typeof obj[method] !== 'function') {
        throw new Error(`[HookManager] Invalid hook target: ${key}`);
      }

      if (!this.hooks.has(key)) {
        this._initializeHookChain(obj, method, key);
      }

      const hookInfo = {
        id: Symbol('hook'),
        func: hookFunc,
        priority: options.priority ?? this.globalOptions.defaultPriority,
        condition: options.condition || null,
        profile: options.profile ?? this.globalOptions.enableProfiling,
        label: options.label || `Hook-${this.hooks.get(key).chain.length}`,
        onSlow: options.onSlow || null,
        threshold: options.threshold || 16.67,
        enabled: true
      };

      const hookData = this.hooks.get(key);
      hookData.chain.push(hookInfo);
      hookData.needsSort = true;

      if (this.globalOptions.enableStats) {
        this.stats.set(hookInfo.id, {
          callCount: 0,
          totalTime: 0,
          maxTime: 0,
          minTime: Infinity,
          errors: 0
        });
      }

      return () => this._removeHook(key, hookInfo.id);
    }

    regBatchHooks(hookMap = {}) {
      return Object.entries(hookMap).map(([target, config]) => {
        const { hook, ...options } = config;
        return this.regHook(target, hook, options);
      });
    }

    // 注册钩子（旧版兼容）
    regLegacyHook(target, legacyHookFunc, options = {}) {
      console.warn(`[HookManager] 使用了旧版 API: ${target}`);
      console.warn('[HookManager] 建议迁移到新版写法: function(next) { next(); }');

      const modernHook = function(next, ...args) {
        const original = function() {
          return next.apply(this, arguments);
        };

        const newFunc = legacyHookFunc.call(this, original);

        if (typeof newFunc === 'function') {
          return newFunc.apply(this, args);
        } else {
          console.error('[HookManager] 旧版钩子必须返回函数');
          return next();
        }
      };

      return this.regHook(target, modernHook, {
        ...options,
        label: options.label || `Legacy-${target}`
      });
    }

    regBatchLegacyHooks(hookMap = {}) {
      return Object.entries(hookMap).map(([target, config]) => {
        const { hook, ...options } = config;
        return this.regLegacyHook(target, hook, options);
      });
    }
    // 初始化钩子链
    _initializeHookChain(obj, method, key) {
      const original = obj[method];

      const proxied = new Proxy(original, {
        apply: (target, thisArg, args) => {
          return this._executeHookChain(key, target, thisArg, args);
        }
      });

      proxied.__isProxied__ = true;
      proxied.__original__ = original;
      proxied.__hookKey__ = key;

      obj[method] = proxied;

      this.hooks.set(key, {
        original,
        proxied,
        chain: [],
        target: obj,
        method,
        needsSort: false
      });
    }

    // 执行钩子链
    _executeHookChain(key, originalFunc, thisArg, args) {
      const hookData = this.hooks.get(key);

      if (!hookData) {
        return originalFunc.apply(thisArg, args);
      }

      if (hookData.needsSort) {
        this._sortHookChain(key);
        hookData.needsSort = false;
      }

      const { chain } = hookData;

      if (chain.length === 0) {
        return originalFunc.apply(thisArg, args);
      }

      if (chain.length === 1) {
        const hook = chain[0];
        if (hook.enabled && !hook.condition && !hook.profile) {
          const next = () => originalFunc.apply(thisArg, args);
          try {
            return hook.func.call(thisArg, next, ...args);
          } catch (error) {
            console.error(`[HookManager] Error in hook "${hook.label}":`, error);
            return next();
          }
        }
      }

      return this._executeFullChain(chain, originalFunc, thisArg, args);
    }

    // 执行完整钩子链
    _executeFullChain(chain, originalFunc, thisArg, args) {
      let currentIndex = 0;

      const next = () => {
        while (currentIndex < chain.length) {
          const hook = chain[currentIndex++];

          if (!hook.enabled) continue;

          if (!this._shouldExecuteHook(hook, thisArg, args)) {
            continue;
          }

          if (hook.profile) {
            return this._profiler.measure(hook, hook.func, thisArg, next, args);
          } else {
            try {
              return hook.func.call(thisArg, next, ...args);
            } catch (error) {
              console.error(`[HookManager] Error in hook "${hook.label}":`, error);
              if (this.globalOptions.enableStats) {
                this.stats.get(hook.id).errors++;
              }
              continue;
            }
          }
        }

        return originalFunc.apply(thisArg, args);
      };

      return next();
    }
    // 判断是否应该执行钩子
    _shouldExecuteHook(hook, thisArg, args) {
      if (!hook.condition) return true;

      const cacheKey = hook.id;
      const now = performance.now();

      const cached = this.conditionCache.get(cacheKey);
      if (cached && (now - cached.time < this.globalOptions.conditionCacheTime)) {
        return cached.result;
      }

      let result;
      try {
        result = hook.condition.call(thisArg, ...args);
      } catch (error) {
        console.error(`[HookManager] Error in condition for "${hook.label}":`, error);
        result = false;
      }

      this.conditionCache.set(cacheKey, { result, time: now });
      return result;
    }

    // 排序钩子链
    _sortHookChain(key) {
      const hookData = this.hooks.get(key);
      if (!hookData) return;

      hookData.chain.sort((a, b) => b.priority - a.priority);
    }

    // 移除钩子
    _removeHook(key, hookId) {
      const hookData = this.hooks.get(key);
      if (!hookData) return;

      const index = hookData.chain.findIndex(h => h.id === hookId);
      if (index === -1) return;

      hookData.chain.splice(index, 1);
      this.conditionCache.delete(hookId);
      this.stats.delete(hookId);

      if (hookData.chain.length === 0) {
        hookData.target[hookData.method] = hookData.original;
        this.hooks.delete(key);
      }
    }

    // 解析目标路径
    _parseTarget(target) {
      let obj, method, key;

      if (typeof target === 'string') {
        key = target;
        const parts = target.split('.');
        method = parts.pop();
        obj = parts.reduce((prev, curr) => prev?.[curr], window);
      } else if (Array.isArray(target)) {
        [obj, method] = target;
        key = `${obj.constructor?.name || 'Object'}.${method}`;
      } else {
        throw new Error('[HookManager] Invalid target format');
      }

      return { obj, method, key };
    }
    // 启用/禁用钩子
    setHookEnabled(key, hookId, enabled) {
      const hookData = this.hooks.get(key);
      if (!hookData) return false;

      const hook = hookData.chain.find(h => h.id === hookId);
      if (hook) {
        hook.enabled = enabled;
        return true;
      }
      return false;
    }

    // 获取统计信息
    getStats(hookId) {
      if (!this.stats.has(hookId)) return null;

      const stats = this.stats.get(hookId);
      return {
        ...stats,
        avgTime: stats.callCount > 0 ? stats.totalTime / stats.callCount : 0
      };
    }

    // 打印统计信息
    printStats() {
      console.log('=== Hook Performance Statistics ===');

      this.hooks.forEach((hookData, key) => {
        console.log(`\n${key}:`);
        hookData.chain.forEach(hook => {
          const stats = this.getStats(hook.id);
          if (stats) {
            console.log(`  ${hook.label}:`);
            console.log(`    Calls: ${stats.callCount}`);
            console.log(`    Avg: ${stats.avgTime.toFixed(2)}ms`);
            console.log(`    Min: ${stats.minTime.toFixed(2)}ms`);
            console.log(`    Max: ${stats.maxTime.toFixed(2)}ms`);
            console.log(`    Total: ${stats.totalTime.toFixed(2)}ms`);
            console.log(`    Errors: ${stats.errors}`);
          }
        });
      });
    }

    // 清除所有钩子
    clearAll() {
      this.hooks.forEach((hookData) => {
        hookData.target[hookData.method] = hookData.original;
      });
      this.hooks.clear();
      this.stats.clear();
      this.conditionCache.clear();
    }
  }
  // 创建全局实例
  window.HookManager = new MvHookManager();

  // PluginManager 兼容层（自动检测旧版写法）
  PluginManager.regHook = function(target, hookFunc, options) {
    // 通过函数源码检测是否是旧版写法
    const funcStr = hookFunc.toString();
    const isLegacy = /return\s+function/.test(funcStr);

    if (isLegacy) {
      console.warn(`[PluginManager] 检测到旧版写法: ${target}`);
      console.warn('[PluginManager] 建议迁移到新版: function(next) { next(); }');
      return HookManager.regLegacyHook(target, hookFunc, options);
    } else {
      return HookManager.regHook(target, hookFunc, options);
    }
  };

  PluginManager.regBatchHooks = function(hookMap) {
    return Object.entries(hookMap).map(([target, config]) => {
      const { hook, ...options } = config;
      return PluginManager.regHook(target, hook, options);
    });
  };

  console.log('[HookManager] v1.0.0 已加载');

})();
