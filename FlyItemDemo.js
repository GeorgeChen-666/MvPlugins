//需要给技能增加备注：<flyAnimation:动画ID>， 如<flyAnimation:1>
(() => {
    let flyAnimationFrames = 0;
    Game_Battler.prototype.setSprite = function (sprite) {
        this._sprite = sprite;
    };
    Game_Enemy.prototype.setSprite = function (sprite) {
        Game_Battler.prototype.setSprite.call(this, sprite);
    };
    Game_Actor.prototype.setSprite = function (sprite) {
        Game_Battler.prototype.setSprite.call(this, sprite);
    };
    const Sprite_Battler_prototype_setBattler = Sprite_Battler.prototype.setBattler;
    Sprite_Battler.prototype.setBattler = function (battler) {
        battler?.setSprite?.(this);
        Sprite_Battler_prototype_setBattler.call(this, battler);
    };

    let lastBaseDelay = function () {
        return 0;
    };
    Window_BattleLog.prototype.setBaseDelay = function () {
        lastBaseDelay = Window_BattleLog.prototype.animationBaseDelay;
        Window_BattleLog.prototype.animationBaseDelay = function () {
            return flyAnimationFrames * 4;
        }
    }
    Window_BattleLog.prototype.restoreBaseDelay = function () {
        Window_BattleLog.prototype.animationBaseDelay = lastBaseDelay;
    }
    let lastTempAnimation = {};
    Window_BattleLog.prototype.setTempAnimation = function (subject, targets, animationId) {
        const animation = $dataAnimations[animationId];
        flyAnimationFrames = (animation?.frames?.length || 1) - 1;
        lastTempAnimation = JSON.parse(JSON.stringify(animation));

        const fromX = subject._sprite.x;
        const fromY = subject._sprite.y;
        const toX = targets[0]._sprite.x;
        const toY = targets[0]._sprite.y;

        const stepX = (toX - fromX) / flyAnimationFrames;
        const stepY = (toY - fromY) / flyAnimationFrames;

        for (let f = 1; f < animation.frames.length; f++) {
            const frame = animation.frames[f];
            if (frame) {
                frame.forEach((fo, foIndex) => {
                    const lastFo = lastTempAnimation.frames[f][foIndex];
                    fo[1] = lastFo[1] - stepX * (flyAnimationFrames - f);
                    fo[2] = lastFo[2] - stepY * (flyAnimationFrames - f);
                })
            }
        }
    }
    Window_BattleLog.prototype.restoreTempAnimation = function (animationId) {
        $dataAnimations[animationId] = lastTempAnimation;
    }

    Window_BattleLog.prototype.startAction = function (subject, action, targets) {
        const item = action.item();
        this.push('performActionStart', subject, action);
        this.push('waitForMovement');
        this.push('performAction', subject, action);
        const flyAnimationId = Number.parseInt(item.meta?.flyAnimation);
        if (flyAnimationId) {
            this.push('setTempAnimation', subject, targets.clone(), flyAnimationId);
            this.push('showAnimation', subject, targets.clone(), flyAnimationId);
            this.push('restoreTempAnimation', flyAnimationId);
        }
        this.push('setBaseDelay');
        this.push('waitForEffect');
        this.push('showAnimation', subject, targets.clone(), item.animationId);
        this.push('restoreBaseDelay');
        this.displayAction(subject, item);
    };
})()