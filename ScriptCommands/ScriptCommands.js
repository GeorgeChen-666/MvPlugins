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
    this.commands = [];
  }
  done() {
    this.interpreter.insertCommands(this.commands);
    this.commands = [];
  }
  showText(
    textData,
    { faceName = "", faceIndex = 0, background = 1, positionType = 0 }
  ) {
    this.commands = this.commands.concat([
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
    this.commands.push({
      code: 102,
      indent: this.indent,
      parameters: [
        choiceData,
        cancelValue,
        defaultValue,
        positionType,
        background
      ]
    });
    return this;
  }
  whenChoicesIndex(index, subCommand) {
    this.commands.push({ code: 402, indent: this.indent, parameters: [index] });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenChoicesCancel(subCommand) {
    this.commands.push({ code: 403, indent: this.indent });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  endWhen() {
    this.commands.push({ code: 404, indent: this.indent });
    //this.commands.push({ code: 412, indent: this.indent });
    return this;
  }
  inputNumber(variableId, maxDigits) {
    this.commands.push({
      code: 103,
      indent: this.indent,
      parameters: [variableId, maxDigits]
    });
    return this;
  }
  selectItem(variableId, itemType) {
    this.commands.push({
      code: 104,
      indent: this.indent,
      parameters: [variableId, itemType]
    });
    return this;
  }
  showScrollingText(textData, speed, noFast) {
    this.commands = this.commands.concat([
      {
        code: 105,
        indent: this.indent,
        parameters: [speed, noFast]
      },
      ...textData.map(text => ({
        code: 405,
        indent: this.indent,
        parameters: [text]
      }))
    ]);
    return this;
  }
  whenSwitchIs(switchId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [0, switchId, value]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableEqualToValue(variableId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId, 0, value, 0]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableEqualToVariable(variableId1, variableId2, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId1, 1, variableId2, 0]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableGreaterEqualThanValue(variableId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId, 0, value, 1]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableGreaterEqualThanVariable(variableId1, variableId2, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId1, 1, variableId2, 1]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableLessEqualThanValue(variableId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId, 0, value, 2]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableLessEqualThanVariable(variableId1, variableId2, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId1, 1, variableId2, 2]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableGreaterThanValue(variableId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId, 0, value, 3]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableGreaterThanVariable(variableId1, variableId2, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId1, 1, variableId2, 3]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableLessThanValue(variableId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId, 0, value, 4]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableLessThanVariable(variableId1, variableId2, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId1, 1, variableId2, 4]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableNotEqualToValue(variableId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId, 0, value, 5]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenVariableNotEqualToVariable(variableId1, variableId2, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [1, variableId1, 1, variableId2, 5]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenSelfSwitchIs(selfSwitchId, value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [2, selfSwitchId, value]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenTimerGreaterEqualThanValue(value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [3, value, 0]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenTimerLessEqualThanValue(value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [3, value, 1]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenActorInParty(actorId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [4, actorId, 0]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenActorNameIs(actorId, name, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [4, actorId, 1, name]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenActorClassidIs(actorId, classId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [4, actorId, 2, classId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenActorHasSkill(actorId, skillId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [4, actorId, 3, skillId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenActorHasWeapon(actorId, weaponId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [4, actorId, 4, weaponId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenActorHasArmor(actorId, armorId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [4, actorId, 5, armorId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenActorIsStateAffected(actorId, stateId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [4, actorId, 6, stateId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenEnemyIsAppeared(enemyId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [5, enemyId, 0]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenEnemyIsStateAffected(enemyId, stateId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [5, enemyId, 1, stateId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenCharacterDirectionIs(characterId, directionType, subCommand) {
    //characterId -1 Player,0 current event
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [6, characterId, directionType]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenGoldGreaterEqualThanValue(value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [7, value, 0]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenGoldLessEqualThanValue(value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [7, value, 1]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenGoldLessThanValue(value, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [7, value, 2]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenHasItem(itemId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [8, itemId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenHasWeapon(weaponId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [9, weaponId, true]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenHasArmor(armorId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [10, armorId, true]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenButtonIsPressed(buttonId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [11, buttonId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenScriptReturnTrue(userScript, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [12, userScript]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenCurrentVehicleIs(vehicleId, subCommand) {
    this.commands.push({
      code: 111,
      indent: this.indent,
      parameters: [13, vehicleId]
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  whenElse(subCommand) {
    this.indent++;
    subCommand(this);
    this.indent--;
    return this;
  }
  loop(subCommand) {
    this.commands.push({
      code: 112,
      indent: this.indent
    });
    this.indent++;
    subCommand(this);
    this.indent--;
    this.commands.push({
      code: 413,
      indent: this.indent
    });
    return this;
  }
  loopBreak() {
    this.commands.push({
      code: 113,
      indent: this.indent
    });
    return this;
  }
  exitCommand() {
    this.commands.push({
      code: 115,
      indent: this.indent
    });
    return this;
  }
  callCommonEvent(eventId) {
    this.commands.push({
      code: 117,
      indent: this.indent,
      parameters: [eventId]
    });
    return this;
  }
  defineLabel(labelName) {
    this.commands.push({
      code: 118,
      indent: this.indent,
      parameters: [labelName]
    });
    return this;
  }
  gotoLabel(labelName) {
    this.commands.push({
      code: 119,
      indent: this.indent,
      parameters: [labelName]
    });
    return this;
  }
  setSwitchAsValue(srcValue, switchIdStart, switchIdEnd = switchIdStart) {
    this.commands.push({
      code: 121,
      indent: this.indent,
      parameters: [switchIdStart, switchIdEnd, srcValue]
    });
    return this;
  }
  setVariablesAsValue(
    srcValue,
    variablesIdStart,
    variablesIdEnd = variablesIdStart
  ) {
    this.commands.push({
      code: 122,
      indent: this.indent,
      parameters: [variablesIdStart, variablesIdEnd, 0, 0, srcValue]
    });
    return this;
  }
  setVariablesAsVariables(
    srcVariablesId,
    variablesIdStart,
    variablesIdEnd = variablesIdStart
  ) {
    this.commands.push({
      code: 122,
      indent: this.indent,
      parameters: [variablesIdStart, variablesIdEnd, 0, 1, srcVariablesId]
    });
    return this;
  }
  setVariablesAsScriptReturnValue(userScript) {
    this.commands.push({
      code: 122,
      indent: this.indent,
      parameters: [variablesIdStart, variablesIdEnd, 0, 4, userScript]
    });
    return this;
  }
  setSelfSwitchAsValue(srcValue, selfSwitchId) {
    this.commands.push({
      code: 123,
      indent: this.indent,
      parameters: [selfSwitchId, srcValue]
    });
    return this;
  }
  startTimer(count) {
    this.commands.push({
      code: 124,
      indent: this.indent,
      parameters: [0, count]
    });
    return this;
  }
  stopTimer() {
    this.commands.push({
      code: 124,
      indent: this.indent,
      parameters: [1]
    });
    return this;
  }
  addGold(value) {
    this.commands.push({
      code: 125,
      indent: this.indent,
      parameters: [0, 0, value]
    });
    return this;
  }
  addItem(itemId, count) {
    this.commands.push({
      code: 125,
      indent: this.indent,
      parameters: [itemId, 0, 0, count]
    });
    return this;
  }
}
