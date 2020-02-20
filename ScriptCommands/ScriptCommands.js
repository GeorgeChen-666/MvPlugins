(() => {
  /**
   * 扩展解释器，在解析器当前执行的命令后面插入命令
   */

  Game_Interpreter.prototype.insertCommands = function(jsonCmds) {
    if (!this._list) {
      // 没有此处判断仅能在地图事件中调用insertCommands插入命令，有此判断后可以随时随地插入命令。
      this.clear();
      this.setup(jsonCmds);
    } else {
      var listCmds = this._list; // 命令列表
      var listCount = listCmds.length; // 这个事件队列中一共多少条命令
      var cuCmdIndex = this._index; // 当前执行的是第几条命令
      var cuCmdIndent = this._indent; // 当前代码的缩进级别
      jsonCmds.forEach(function(e) {
        // 将参数命令的indent拼接到当前的indent级别下，参数的indent一定要从0开始。
        e.indent += cuCmdIndent;
      });
      this._list = listCmds
        .slice(0, cuCmdIndex + 1) // 在当前执行的事件后面插入
        .concat(jsonCmds)
        .concat(listCmds.slice(cuCmdIndex + 1, listCount));
    }
  };
  /**
   * 条件支持js代码
   */
  const Game_Interpreter_prototype_command111 =
    Game_Interpreter.prototype.command111;
  Game_Interpreter.prototype.command111 = function() {
    if (typeof this._params[0] === "function") {
      const result = !!this._params[0].apply(this);
      this._branch[this._indent] = result;
      if (this._branch[this._indent] === false) {
        this.skipBranch();
      }
      return true;
    } else {
      Game_Interpreter_prototype_command111();
    }
  };

  /**
   * 支持JS代码
   */
  const Game_Interpreter_prototype_command355 =
    Game_Interpreter.prototype.command355;
  Game_Interpreter.prototype.command355 = function() {
    if (typeof this._params[0] === "function") {
      this._params[0].apply(this);
      return true;
    } else {
      return Game_Interpreter_prototype_command355();
    }
  };
})();
class MvCommand {
  constructor(interpreter, indent) {
    this.interpreter = interpreter;
    this.indent = indent || this.interpreter._indent;
  }

  showText(
    textData,
    { faceName = "", faceIndex = 0, background = 1, positionType = 0 }
  ) {
    this.interpreter.insertCommands([
      {
        code: 101,
        indent: this.indent,
        parameters: [faceName, faceIndex, background, positionType]
      },
      ...textData.map(text => ({
        code: 401,
        indent: this.indent,
        parameters: [text]
      }))
    ]);
    return this;
  }
  showChoices(
    choiceData,
    { cancelValue = -2, defaultValue = 0, positionType = 2, background = 0 }
  ) {
    this.interpreter.insertCommands([
      {
        code: 102,
        indent: this.indent,
        parameters: [
          choiceData,
          cancelValue,
          defaultValue,
          positionType,
          background
        ]
      }
    ]);
    return this;
  }
  whenChoicesIndex(index, subCommand) {
    this.interpreter.insertCommands([
      { code: 402, indent: this.indent, parameters: [index] }
    ]);
    this.indent++;
    subCommand.call(this, this);
    this.indent--;
    return this;
  }
  whenChoicesElse() {} //403
  endChoices() {} //404
}
