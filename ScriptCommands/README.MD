<a name="$mvs"></a>

## $mvs
**Kind**: global class

* [$mvs](#$mvs)
    * [new $mvs(interpreter, [indent])](#new_$mvs_new)
    * _instance_
        * [.done()](#$mvs+done)
        * [.calculateAndCall(mvCommand)](#$mvs+calculateAndCall)
        * [.showText(textData, [faceName], [faceIndex], [background], [positionType])](#$mvs+showText)
        * [.showChoices(choiceData, [cancelValue], [defaultValue], [positionType], [background])](#$mvs+showChoices)
        * [.whenChoicesIndex(index, subCommand)](#$mvs+whenChoicesIndex)
        * [.whenChoicesCancel(subCommand)](#$mvs+whenChoicesCancel)
        * [.endWhen()](#$mvs+endWhen)
        * [.inputNumber(variableId, [maxDigits])](#$mvs+inputNumber)
        * [.selectItem(variableId, [itemType])](#$mvs+selectItem)
        * [.showScrollingText(textData, &#x3D;2,speed, &#x3D;false,noFast)](#$mvs+showScrollingText)
        * [.whenFunctionReturnTrue(conditionFunction, subCommand)](#$mvs+whenFunctionReturnTrue)
        * [.whenElse(subCommand)](#$mvs+whenElse)
        * [.loop(subCommand)](#$mvs+loop)
        * [.loopBreak()](#$mvs+loopBreak)
        * [.exitCommand()](#$mvs+exitCommand)
        * [.callCommonEvent(})](#$mvs+callCommonEvent)
        * [.defineLabel(labelName)](#$mvs+defineLabel)
        * [.gotoLabel(labelName)](#$mvs+gotoLabel)
        * [.setSwitchAsValue(srcValue, switchIdStart, [switchIdEnd])](#$mvs+setSwitchAsValue)
        * [.setVariablesAsScriptValue(valueFunction, variablesIdStart, [variablesIdEnd])](#$mvs+setVariablesAsScriptValue)
        * [.setSelfSwitchAsValue(srcValue, selfSwitchName)](#$mvs+setSelfSwitchAsValue)
        * [.startTimer(count)](#$mvs+startTimer)
        * [.stopTimer()](#$mvs+stopTimer)
        * [.changeGold(amount)](#$mvs+changeGold)
        * [.changeItem(itemId, [amount])](#$mvs+changeItem)
        * [.changeWeapons(weaponId, [amount], [includeEquip])](#$mvs+changeWeapons)
        * [.changeArmors(armorId, [amount], [includeEquip])](#$mvs+changeArmors)
        * [.addPartyMember(actorId, [isInitialize])](#$mvs+addPartyMember)
        * [.removePartyMember(actorId)](#$mvs+removePartyMember)
        * [.changeBattleBGM([name], [volume], [pitch], [pan])](#$mvs+changeBattleBGM)
        * [.changeVictoryME([name], [volume], [pitch], [pan])](#$mvs+changeVictoryME)
        * [.changeSaveAccess(isAble)](#$mvs+changeSaveAccess)
        * [.changeMenuAccess(isAble)](#$mvs+changeMenuAccess)
        * [.changeEncounterDisable(isAble)](#$mvs+changeEncounterDisable)
        * [.changeFormationAccess(isAble)](#$mvs+changeFormationAccess)
        * [.changeWindowColor([red], [green], [blue])](#$mvs+changeWindowColor)
        * [.changeDefeatME([name], [volume], [pitch], [pan])](#$mvs+changeDefeatME)
        * [.changeVehicleBGM(vehicleType, [name], [volume], [pitch], [pan])](#$mvs+changeVehicleBGM)
        * [.transferPlayerDirect(mapId, x, y, [d], [fadeType])](#$mvs+transferPlayerDirect)
        * [.setVehicleLocationDirect(vehicleId, mapId, x, y)](#$mvs+setVehicleLocationDirect)
        * [.setEventLocationDirect(eventId, x, y, [d])](#$mvs+setEventLocationDirect)
        * [.exchangeEventLocationWithAnother(eventId, eventId1, d)](#$mvs+exchangeEventLocationWithAnother)
        * [.scrollMap(direction, distance, speed)](#$mvs+scrollMap)
        * [.setMovementRoute(eventId, routeCommandFunc)](#$mvs+setMovementRoute)
        * [.gettingOnOffVehicles()](#$mvs+gettingOnOffVehicles)
        * [.changeTransparency(isTransparent)](#$mvs+changeTransparency)
        * [.showAnimation(eventId, animationId, wait)](#$mvs+showAnimation)
        * [.showBalloonIcon(eventId, balloonId, wait)](#$mvs+showBalloonIcon)
        * [.eraseEvent()](#$mvs+eraseEvent)
        * [.changePlayerFollowers([isShow])](#$mvs+changePlayerFollowers)
        * [.gatherFollowers()](#$mvs+gatherFollowers)
        * [.fadeoutScreen()](#$mvs+fadeoutScreen)
        * [.fadeinScreen()](#$mvs+fadeinScreen)
        * [.tintScreen(red, green, blue, gray, duration, isWait)](#$mvs+tintScreen)
        * [.flashScreen([red], [green], [blue], [intensity], [duration], [isWait])](#$mvs+flashScreen)
        * [.shakeScreen([power], [speed], [duration], [isWait])](#$mvs+shakeScreen)
        * [.wait(duration)](#$mvs+wait)
        * [.showPicture(zindex, picture, origin, x, y, [wScale], [hScale], [Opacity], [blendMode])](#$mvs+showPicture)
        * [.movePicture(zindex, picture, origin, x, y, [wScale], [hScale], [Opacity], [blendMode], [duration], [isWait])](#$mvs+movePicture)
        * [.rotatePicture(zindex, angle)](#$mvs+rotatePicture)
        * [.tintPicture(zindex, [red], [green], [blue], [gray], [duration], [isWait])](#$mvs+tintPicture)
        * [.erasePicture(zindex)](#$mvs+erasePicture)
        * [.setWeatherEffect([type], [power], [duration], [isWait])](#$mvs+setWeatherEffect)
        * [.playBGM([name], [volume], [pitch], [pan])](#$mvs+playBGM)
        * [.fadeoutBGM(duration)](#$mvs+fadeoutBGM)
        * [.saveBGM()](#$mvs+saveBGM)
        * [.resumeBGM()](#$mvs+resumeBGM)
        * [.playBGS([name], [volume], [pitch], [pan])](#$mvs+playBGS)
        * [.fadeoutBGS(duration)](#$mvs+fadeoutBGS)
        * [.playME([name], [volume], [pitch], [pan])](#$mvs+playME)
        * [.playSE([name], [volume], [pitch], [pan])](#$mvs+playSE)
        * [.stopSE()](#$mvs+stopSE)
        * [.playMovie([name])](#$mvs+playMovie)
        * [.changeMapNameDisplay([isMapNameDisplay])](#$mvs+changeMapNameDisplay)
        * [.changeTileset(tilesetId)](#$mvs+changeTileset)
        * [.changeBattleBackground([imageWall], [imageGround])](#$mvs+changeBattleBackground)
        * [.changeParallax(imageName, [repeatX], [repeatY], [xVal], [yVal])](#$mvs+changeParallax)
        * [.battleProcessing(troopId, [subCommandEscape], [subCommandLoss], [subCommandWin])](#$mvs+battleProcessing)
        * [.shopProcessing(isPurchaseOnly, getItems)](#$mvs+shopProcessing)
        * [.nameInputProcessing(actorId, [maxChars])](#$mvs+nameInputProcessing)
        * [.changeHP(actorId, amount, [causeDead])](#$mvs+changeHP)
        * [.changeMP(actorId, amount)](#$mvs+changeMP)
        * [.changeTP(actorId, amount)](#$mvs+changeTP)
        * [.changeState(actorId, op, stateId)](#$mvs+changeState)
        * [.recoverAll(actorId)](#$mvs+recoverAll)
        * [.changeEXP(actorId, amount, [showLevelUp])](#$mvs+changeEXP)
        * [.changeLevel(actorId, amount, [showLevelUp])](#$mvs+changeLevel)
        * [.changeAbility(actorId, type, amount)](#$mvs+changeAbility)
        * [.changeSkill(actorId, op, skillId)](#$mvs+changeSkill)
        * [.changeEquipment(actorId, equipType, equipId)](#$mvs+changeEquipment)
        * [.changeName(actorId, name)](#$mvs+changeName)
        * [.changeClass(actorId, classId, [keepLevel])](#$mvs+changeClass)
        * [.changeActorImages(actorId, characterImageName, characterImageIndex, faceImageName, faceImageIndex, battlerImageName)](#$mvs+changeActorImages)
        * [.changeVehicleImage(vehicleId, imageName, imageIndex)](#$mvs+changeVehicleImage)
        * [.changeClass(actorId, nickName)](#$mvs+changeClass)
        * [.changeProfile(actorId, profile)](#$mvs+changeProfile)
        * [.changeEnemyHP(enemyIndex, amount, [causeDead])](#$mvs+changeEnemyHP)
        * [.changeEnemyMP(enemyIndex, amount)](#$mvs+changeEnemyMP)
        * [.changeEnemyTP(enemyIndex, amount)](#$mvs+changeEnemyTP)
        * [.changeEnemyState(enemyIndex, op, stateId)](#$mvs+changeEnemyState)
        * [.enemyRecoverAll(enemyIndex)](#$mvs+enemyRecoverAll)
        * [.enemyAppear(enemyIndex)](#$mvs+enemyAppear)
        * [.enemyTransform(enemyIndex, enemyId)](#$mvs+enemyTransform)
        * [.showBattleAnimation(enemyIndex, animationId)](#$mvs+showBattleAnimation)
        * [.actorForceBattleAction(actorId, actionId, targetIndex)](#$mvs+actorForceBattleAction)
        * [.enemyForceBattleAction(enemyIndex, actionId, targetIndex)](#$mvs+enemyForceBattleAction)
        * [.abortBattle()](#$mvs+abortBattle)
        * [.openMenuScreen()](#$mvs+openMenuScreen)
        * [.openSaveScreen()](#$mvs+openSaveScreen)
        * [.gameOver()](#$mvs+gameOver)
        * [.returnTitleScreen()](#$mvs+returnTitleScreen)
        * [.callJsFunction(jsFunction)](#$mvs+callJsFunction)
        * [.callPluginCommand(command)](#$mvs+callPluginCommand)
    * _static_
        * [.ItemListGenerator]
        * [.RouteCommandGenerator]

<a name="new_$mvs_new"></a>

### new $mvs(interpreter, [indent])
构造函数


| Param | Type | Description |
| --- | --- | --- |
| interpreter | <code>\*</code> | 事件解析器 |
| [indent] | <code>number</code> | 缩进等级 |

<a name="$mvs+done"></a>

### $mvs.done()
命令串构造完毕，立即执行。

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+calculateAndCall"></a>

### $mvs.calculateAndCall(mvCommand)
经过计算后再调用其它命令，多用临时决定的计算下一个命令的参数值。

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| mvCommand | <code>\*</code> | 计算回调函数 |

<a name="$mvs+showText"></a>

### $mvs.showText(textData, [faceName], [faceIndex], [background], [positionType])
示一个文本窗口

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| textData | <code>Array.&lt;string&gt;</code> |  | 要显示的文本数组 |
| [faceName] | <code>string</code> |  | 角色头像素材名 |
| [faceIndex] | <code>number</code> | <code>0</code> | 角色头像在素材中的序号 |
| [background] | <code>enumBackground</code> | <code>0</code> | 背景：enumBackground |
| [positionType] | <code>enumPositionV</code> | <code>2</code> | 纵向位置：enumPositionV |

<a name="$mvs+showChoices"></a>

### $mvs.showChoices(choiceData, [cancelValue], [defaultValue], [positionType], [background])
显示一个选项窗口

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| choiceData | <code>Array.&lt;string&gt;</code> |  | 选项文本数组 |
| [cancelValue] | <code>number</code> |  | 取消时执行分支序号：-2取消，-1禁止取消 |
| [defaultValue] | <code>number</code> | <code>0</code> | 默认时执行分支序号：-1不执行 |
| [positionType] | <code>enumPositionH</code> | <code>2</code> | 横向位置：enumPositionH |
| [background] | <code>enumBackground</code> | <code>0</code> | 背景：enumBackground |

<a name="$mvs+whenChoicesIndex"></a>

### $mvs.whenChoicesIndex(index, subCommand)
选项窗口选中项目时执行的代码

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | 分支需要 |
| subCommand | <code>\*</code> | 匿名函数类型，分支匹配时执行的脚本 |

<a name="$mvs+whenChoicesCancel"></a>

### $mvs.whenChoicesCancel(subCommand)
选项窗口取消时的执行的代码

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| subCommand | <code>\*</code> | 匿名函数类型，分支匹配时执行的脚本 |

<a name="$mvs+endWhen"></a>

### $mvs.endWhen()
结束条件分支

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+inputNumber"></a>

### $mvs.inputNumber(variableId, [maxDigits])
数值输入处理

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| variableId | <code>number</code> |  | 结果储存的变量id |
| [maxDigits] | <code>number</code> | <code>1</code> | =1,位数1~8 |

<a name="$mvs+selectItem"></a>

### $mvs.selectItem(variableId, [itemType])
物品选择处理

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| variableId | <code>number</code> |  | 结果储存的变量id |
| [itemType] | <code>enumItemType</code> | <code>2</code> | =2,物品类型：enumItemType |

<a name="$mvs+showScrollingText"></a>

### $mvs.showScrollingText(textData, &#x3D;2,speed, &#x3D;false,noFast)
显示滚动文字

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| textData | <code>Array.&lt;string&gt;</code> | 文本数组 |
| =2,speed | <code>number</code> | 速度1~8 |
| =false,noFast | <code>boolean</code> | 禁止快进 |

<a name="$mvs+whenFunctionReturnTrue"></a>

### $mvs.whenFunctionReturnTrue(conditionFunction, subCommand)
根据条件函数返回值创建分支

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| conditionFunction | <code>\*</code> | 匿名函数类型4，条件函数 |
| subCommand | <code>\*</code> | 匿名函数类型，分支匹配时执行的脚本 |

<a name="$mvs+whenElse"></a>

### $mvs.whenElse(subCommand)
条件都不满足时的else分支

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| subCommand | <code>\*</code> | 匿名函数类型，分支匹配时执行的脚本 |

<a name="$mvs+loop"></a>

### $mvs.loop(subCommand)
循环

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| subCommand | <code>\*</code> | 匿名函数类型，循环内部时执行的脚本 |

<a name="$mvs+loopBreak"></a>

### $mvs.loopBreak()
跳出循环

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+exitCommand"></a>

### $mvs.exitCommand()
终止本次事件处理

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+callCommonEvent"></a>

### $mvs.callCommonEvent(})
调用公共事件

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| } | <code>number</code> | eventId 公共事件id |

<a name="$mvs+defineLabel"></a>

### $mvs.defineLabel(labelName)
定义标签

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| labelName | <code>string</code> | 标签名 |

<a name="$mvs+gotoLabel"></a>

### $mvs.gotoLabel(labelName)
跳转到标签

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| labelName | <code>string</code> | 标签名 |

<a name="$mvs+setSwitchAsValue"></a>

### $mvs.setSwitchAsValue(srcValue, switchIdStart, [switchIdEnd])
设置开关值（支持批量）

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| srcValue | <code>enumSwitchValue</code> | 开关值：enumSwitchValue |
| switchIdStart | <code>number</code> | 开关id范围开始 |
| [switchIdEnd] | <code>number</code> | 开关id范围结束，默认等于开始 |

<a name="$mvs+setVariablesAsScriptValue"></a>

### $mvs.setVariablesAsScriptValue(valueFunction, variablesIdStart, [variablesIdEnd])
设置变量的值

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| valueFunction | <code>\*</code> | 取值函数 |
| variablesIdStart | <code>number</code> | 变量id范围开始 |
| [variablesIdEnd] | <code>number</code> | 变量id范围结束，默认等于开始 |

<a name="$mvs+setSelfSwitchAsValue"></a>

### $mvs.setSelfSwitchAsValue(srcValue, selfSwitchName)
设置独立开关值

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| srcValue | <code>enumSwitchValue</code> | 开关值：enumSwitchValue |
| selfSwitchName | <code>enumSelfSwitchName</code> | 独立开关名：enumSelfSwitchName |

<a name="$mvs+startTimer"></a>

### $mvs.startTimer(count)
开始倒计时器

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | 秒数 |

<a name="$mvs+stopTimer"></a>

### $mvs.stopTimer()
收起倒计时器

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+changeGold"></a>

### $mvs.changeGold(amount)
增减金钱

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | 差值 |

<a name="$mvs+changeItem"></a>

### $mvs.changeItem(itemId, [amount])
增减物品

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| itemId | <code>number</code> |  | 物品id |
| [amount] | <code>number</code> | <code>1</code> | =1,差值 |

<a name="$mvs+changeWeapons"></a>

### $mvs.changeWeapons(weaponId, [amount], [includeEquip])
增减武器

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| weaponId | <code>number</code> |  | 武器id |
| [amount] | <code>number</code> | <code>1</code> | =1,差值 |
| [includeEquip] | <code>boolean</code> | <code>false</code> | =false,减少时是否包括已经装备的武器 |

<a name="$mvs+changeArmors"></a>

### $mvs.changeArmors(armorId, [amount], [includeEquip])
增减防具

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| armorId | <code>number</code> |  | 护甲id |
| [amount] | <code>number</code> | <code>1</code> | =1,差值 |
| [includeEquip] | <code>boolean</code> | <code>false</code> | =false,减少时是否包含已经装备的防具 |

<a name="$mvs+addPartyMember"></a>

### $mvs.addPartyMember(actorId, [isInitialize])
角色入队

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| actorId | <code>number</code> |  | 角色id |
| [isInitialize] | <code>boolean</code> | <code>false</code> | =false,是否初始化 |

<a name="$mvs+removePartyMember"></a>

### $mvs.removePartyMember(actorId)
角色离队

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id |

<a name="$mvs+changeBattleBGM"></a>

### $mvs.changeBattleBGM([name], [volume], [pitch], [pan])
更改战斗bgm

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+changeVictoryME"></a>

### $mvs.changeVictoryME([name], [volume], [pitch], [pan])
更改战斗胜利me

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+changeSaveAccess"></a>

### $mvs.changeSaveAccess(isAble)
启用/禁用存档

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| isAble | <code>boolean</code> | 启用/禁用 |

<a name="$mvs+changeMenuAccess"></a>

### $mvs.changeMenuAccess(isAble)
启用/禁用菜单

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| isAble | <code>boolean</code> | 启用/禁用 |

<a name="$mvs+changeEncounterDisable"></a>

### $mvs.changeEncounterDisable(isAble)
启用/禁用遇敌

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| isAble | <code>boolean</code> | 启用/禁用 |

<a name="$mvs+changeFormationAccess"></a>

### $mvs.changeFormationAccess(isAble)
启用/禁用整队

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| isAble | <code>boolean</code> | 启用/禁用 |

<a name="$mvs+changeWindowColor"></a>

### $mvs.changeWindowColor([red], [green], [blue])
更改窗口颜色

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [red] | <code>number</code> | <code>0</code> | =0,-255~255 红色偏移 |
| [green] | <code>number</code> | <code>0</code> | =0,-255~255 绿色偏移 |
| [blue] | <code>number</code> | <code>0</code> | =0,-255~255 蓝色偏移 |

<a name="$mvs+changeDefeatME"></a>

### $mvs.changeDefeatME([name], [volume], [pitch], [pan])
更改战斗失败me

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+changeVehicleBGM"></a>

### $mvs.changeVehicleBGM(vehicleType, [name], [volume], [pitch], [pan])
更改载具bgm

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| vehicleType | <code>enumVehicleType</code> |  | 载具类型：enumVehicleType |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+transferPlayerDirect"></a>

### $mvs.transferPlayerDirect(mapId, x, y, [d], [fadeType])
场所移动

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| mapId | <code>number</code> |  | 地图id |
| x | <code>number</code> |  | x坐标 |
| y | <code>number</code> |  | y坐标 |
| [d] | <code>enumDirection</code> | <code>0</code> | 方向：enumDirection |
| [fadeType] | <code>enumFadeType</code> | <code>0</code> | 淡入淡出：enumFadeType |

<a name="$mvs+setVehicleLocationDirect"></a>

### $mvs.setVehicleLocationDirect(vehicleId, mapId, x, y)
设置载具id

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| vehicleId | <code>number</code> | 载具id |
| mapId | <code>number</code> | 地图id |
| x | <code>number</code> | x坐标 |
| y | <code>number</code> | y坐标 |

<a name="$mvs+setEventLocationDirect"></a>

### $mvs.setEventLocationDirect(eventId, x, y, [d])
设置事件位置

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventId | <code>number</code> |  | 事件id |
| x | <code>number</code> |  | x坐标 |
| y | <code>number</code> |  | y坐标 |
| [d] | <code>enumDirection</code> | <code>0</code> | =0方向：enumDirection |

<a name="$mvs+exchangeEventLocationWithAnother"></a>

### $mvs.exchangeEventLocationWithAnother(eventId, eventId1, d)
交换事件位置

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventId | <code>number</code> |  | 事件id |
| eventId1 | <code>number</code> |  | 事件1id |
| d | <code>enumDirection</code> | <code>0</code> | =0,方向：enumDirection |

<a name="$mvs+scrollMap"></a>

### $mvs.scrollMap(direction, distance, speed)
滚动地图

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| direction | <code>enumDirection</code> | 方向：enumDirection |
| distance | <code>number</code> | 距离 |
| speed | <code>enumSpeed</code> | 速度：enumSpeed |

<a name="$mvs+setMovementRoute"></a>

### $mvs.setMovementRoute(eventId, routeCommandFunc)
设置移动路线

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| eventId | <code>\*</code> | 事件id：-1玩家，0本事件 |
| routeCommandFunc | <code>\*</code> | 生成移动路线的函数\ 例如：\ setMovementRoute(0, function (routeCommand) {\ return routeCommand.moveForward()\ .turn90dRL()\ .end().getCommands(false,false,false);\ }) |

<a name="$mvs+gettingOnOffVehicles"></a>

### $mvs.gettingOnOffVehicles()
载具乘降

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+changeTransparency"></a>

### $mvs.changeTransparency(isTransparent)
更改人物透明状态

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| isTransparent | <code>enumSwitchValue</code> | 是否透明：enumSwitchValue |

<a name="$mvs+showAnimation"></a>

### $mvs.showAnimation(eventId, animationId, wait)
显示动画

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| eventId | <code>number</code> | 事件id：-1玩家，0本事件 |
| animationId | <code>number</code> | 动画id |
| wait | <code>boolean</code> | 等待完成 |

<a name="$mvs+showBalloonIcon"></a>

### $mvs.showBalloonIcon(eventId, balloonId, wait)
显示气球

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| eventId | <code>number</code> | 事件id：-1玩家，0本事件 |
| balloonId | <code>number</code> | 气球id |
| wait | <code>boolean</code> | 等待完成 |

<a name="$mvs+eraseEvent"></a>

### $mvs.eraseEvent()
暂时消除本事件

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+changePlayerFollowers"></a>

### $mvs.changePlayerFollowers([isShow])
更改队列行进

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isShow] | <code>boolean</code> | <code>0</code> | =0,是否 |

<a name="$mvs+gatherFollowers"></a>

### $mvs.gatherFollowers()
集合队列成员

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+fadeoutScreen"></a>

### $mvs.fadeoutScreen()
淡出画面

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+fadeinScreen"></a>

### $mvs.fadeinScreen()
淡入画面

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+tintScreen"></a>

### $mvs.tintScreen(red, green, blue, gray, duration, isWait)
夜晚画风：-68，-68，0，68\0\

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| red | <code>number</code> | <code>0</code> | =0,-255~255 红色偏移 |
| green | <code>number</code> | <code>0</code> | =0,-255~255 绿色偏移 |
| blue | <code>number</code> | <code>0</code> | =0,-255~255 蓝色偏移 |
| gray | <code>number</code> | <code>0</code> | =0,0~255 灰度 |
| duration | <code>number</code> | <code>60</code> | =60,持续多少帧 |
| isWait | <code>boolean</code> | <code>true</code> | =true,是否等待完成 |

<a name="$mvs+flashScreen"></a>

### $mvs.flashScreen([red], [green], [blue], [intensity], [duration], [isWait])
闪烁画面

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [red] | <code>number</code> | <code>255</code> | =255,0~255 红色浓度 |
| [green] | <code>number</code> | <code>255</code> | =255,0~255 绿色浓度 |
| [blue] | <code>number</code> | <code>255</code> | =255,0~255 蓝色浓度 |
| [intensity] | <code>number</code> | <code>170</code> | =170,0~255 强度 |
| [duration] | <code>number</code> | <code>60</code> | =60,持续多少帧 |
| [isWait] | <code>boolean</code> | <code>true</code> | =true,是否等待完成 |

<a name="$mvs+shakeScreen"></a>

### $mvs.shakeScreen([power], [speed], [duration], [isWait])
震动屏幕

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [power] | <code>number</code> | <code>5</code> | =5,1~9强度 |
| [speed] | <code>number</code> | <code>5</code> | =5,1~9速度 |
| [duration] | <code>number</code> | <code>60</code> | =60,持续多少帧 |
| [isWait] | <code>boolean</code> | <code>true</code> | =true,是否等待完成 |

<a name="$mvs+wait"></a>

### $mvs.wait(duration)
等待

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | 持续多少帧 |

<a name="$mvs+showPicture"></a>

### $mvs.showPicture(zindex, picture, origin, x, y, [wScale], [hScale], [Opacity], [blendMode])
显示图片

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| zindex | <code>number</code> |  | 层号 |
| picture | <code>string</code> |  | 图片名 |
| origin | <code>number</code> |  | 原点位置：0左上，1中心 |
| x | <code>number</code> |  | x坐标 |
| y | <code>number</code> |  | y坐标 |
| [wScale] | <code>number</code> | <code>100</code> | =100,0~100宽比例 |
| [hScale] | <code>number</code> | <code>100</code> | =100,0~100高比例 |
| [Opacity] | <code>number</code> | <code>255</code> | =255,0~255不透明度 |
| [blendMode] | <code>enumBlendMode</code> | <code>0</code> | =0,合成模式：enumBlendMode |

<a name="$mvs+movePicture"></a>

### $mvs.movePicture(zindex, picture, origin, x, y, [wScale], [hScale], [Opacity], [blendMode], [duration], [isWait])
移动图片

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| zindex | <code>number</code> | 层号 |
| picture | <code>string</code> | 图片名 |
| origin | <code>number</code> | 原点位置：0左上，1中心 |
| x | <code>number</code> | x坐标 |
| y | <code>number</code> | y坐标 |
| [wScale] | <code>number</code> | =100,0~100宽比例 |
| [hScale] | <code>number</code> | =100,0~100高比例 |
| [Opacity] | <code>number</code> | =255,0~255不透明度 |
| [blendMode] | <code>enumBlendMode</code> | 合成模式：enumBlendMode |
| [duration] | <code>number</code> | 持续多少帧 |
| [isWait] | <code>boolean</code> | 是否等待完成 |

<a name="$mvs+rotatePicture"></a>

### $mvs.rotatePicture(zindex, angle)
旋转图片

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| zindex | <code>number</code> | 层号 |
| angle | <code>number</code> | 90~90角度 |

<a name="$mvs+tintPicture"></a>

### $mvs.tintPicture(zindex, [red], [green], [blue], [gray], [duration], [isWait])
夜晚画风：-68，-68，0，68\0\

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| zindex | <code>number</code> |  | 层号 |
| [red] | <code>number</code> | <code>0</code> | =0,-255~255 红色偏移 |
| [green] | <code>number</code> | <code>0</code> | =0,-255~255 绿色偏移 |
| [blue] | <code>number</code> | <code>0</code> | =0,-255~255 蓝色偏移 |
| [gray] | <code>number</code> | <code>0</code> | =0,0~255 灰度 |
| [duration] | <code>number</code> | <code>60</code> | =60,持续多少帧 |
| [isWait] | <code>boolean</code> | <code>true</code> | =true,是否等待完成 |

<a name="$mvs+erasePicture"></a>

### $mvs.erasePicture(zindex)
擦除图片

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| zindex | <code>number</code> | 层号 |

<a name="$mvs+setWeatherEffect"></a>

### $mvs.setWeatherEffect([type], [power], [duration], [isWait])
设置天气

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [type] | <code>enumWeather</code> |  | ='none',天气类型：enumWeather |
| [power] | <code>number</code> | <code>5</code> | =5,强度1~9 |
| [duration] | <code>number</code> | <code>60</code> | =60,持续多少帧 |
| [isWait] | <code>boolean</code> | <code>true</code> | =true,是否等待完成 |

<a name="$mvs+playBGM"></a>

### $mvs.playBGM([name], [volume], [pitch], [pan])
播放bgm

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+fadeoutBGM"></a>

### $mvs.fadeoutBGM(duration)
淡出bgm

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | 持续多少帧 |

<a name="$mvs+saveBGM"></a>

### $mvs.saveBGM()
保存bgm

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+resumeBGM"></a>

### $mvs.resumeBGM()
恢复bgm

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+playBGS"></a>

### $mvs.playBGS([name], [volume], [pitch], [pan])
播放bgs

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+fadeoutBGS"></a>

### $mvs.fadeoutBGS(duration)
淡出bgs

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | 持续多少帧 |

<a name="$mvs+playME"></a>

### $mvs.playME([name], [volume], [pitch], [pan])
播放me

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+playSE"></a>

### $mvs.playSE([name], [volume], [pitch], [pan])
播放se

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> |  | ='',声音名 |
| [volume] | <code>number</code> | <code>90</code> | =90,0~100音量 |
| [pitch] | <code>number</code> | <code>100</code> | =100,50~150音调 |
| [pan] | <code>number</code> | <code>0</code> | =0,-100~100声相 |

<a name="$mvs+stopSE"></a>

### $mvs.stopSE()
停止se

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+playMovie"></a>

### $mvs.playMovie([name])
播放影片

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | ='',影片名 |

<a name="$mvs+changeMapNameDisplay"></a>

### $mvs.changeMapNameDisplay([isMapNameDisplay])
启用/禁用地图名显示

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| [isMapNameDisplay] | <code>enumSwitchValue</code> | =ON,是否显示地图名：enumSwitchValue |

<a name="$mvs+changeTileset"></a>

### $mvs.changeTileset(tilesetId)
更改地图图块集

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| tilesetId | <code>number</code> | 图块集id |

<a name="$mvs+changeBattleBackground"></a>

### $mvs.changeBattleBackground([imageWall], [imageGround])
设置战斗背景图

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| [imageWall] | <code>string</code> | ='',墙图 |
| [imageGround] | <code>string</code> | ='',地图 |

<a name="$mvs+changeParallax"></a>

### $mvs.changeParallax(imageName, [repeatX], [repeatY], [xVal], [yVal])
更改远景

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| imageName | <code>string</code> |  | 图片名 |
| [repeatX] | <code>boolean</code> | <code>false</code> | =false,横向循环 |
| [repeatY] | <code>boolean</code> | <code>false</code> | =false,纵向循环 |
| [xVal] | <code>number</code> | <code>0</code> | =0,-32~32横向滚动值 |
| [yVal] | <code>number</code> | <code>0</code> | =0,-32~32纵向滚动值 |

<a name="$mvs+battleProcessing"></a>

### $mvs.battleProcessing(troopId, [subCommandEscape], [subCommandLoss], [subCommandWin])
战斗处理

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| troopId | <code>number</code> | 敌群id |
| [subCommandEscape] | <code>\*</code> | 匿名函数类型，逃跑时调用。如需不可逃跑请赋值null |
| [subCommandLoss] | <code>\*</code> | 匿名函数类型，战败时调用。如需不可战败请赋值null |
| [subCommandWin] | <code>\*</code> | 匿名函数类型，成功时调用 |

<a name="$mvs+shopProcessing"></a>

### $mvs.shopProcessing(isPurchaseOnly, getItems)
处理商店

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| isPurchaseOnly | <code>boolean</code> | <code>false</code> | 是否仅能采购 |
| getItems | <code>\*</code> |  | 回调函数，获取物品列表\ 例子：\ this.shopProcessing(false, itemList =>   itemList     .addItem(1)     .addWeapon(3, 100)     .done()  ); |

<a name="$mvs+nameInputProcessing"></a>

### $mvs.nameInputProcessing(actorId, [maxChars])
起名界面

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| actorId | <code>number</code> |  | 角色id |
| [maxChars] | <code>number</code> | <code>8</code> | =8,最大字符数1~16 |

<a name="$mvs+changeHP"></a>

### $mvs.changeHP(actorId, amount, [causeDead])
更改hp

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| actorId | <code>number</code> |  | 角色id：0队列中的全部 |
| amount | <code>number</code> |  | 差值 |
| [causeDead] | <code>boolean</code> | <code>false</code> | =false,如果减少是否能引起死亡 |

<a name="$mvs+changeMP"></a>

### $mvs.changeMP(actorId, amount)
更改mp

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id：0队列中的全部 |
| amount | <code>number</code> | 差值 |

<a name="$mvs+changeTP"></a>

### $mvs.changeTP(actorId, amount)
更改tp

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id：0队列中的全部 |
| amount | <code>number</code> | 差值 |

<a name="$mvs+changeState"></a>

### $mvs.changeState(actorId, op, stateId)
更改角色状态

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id：0队列中的全部 |
| op | <code>enumSwitchValue</code> | 附加/移除：enumSwitchValue |
| stateId | <code>number</code> | 状态id |

<a name="$mvs+recoverAll"></a>

### $mvs.recoverAll(actorId)
完全恢复

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id：0队列中的全部 |

<a name="$mvs+changeEXP"></a>

### $mvs.changeEXP(actorId, amount, [showLevelUp])
更改exp

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| actorId | <code>number</code> |  | 角色id：0队列中的全部 |
| amount | <code>number</code> |  | 差值 |
| [showLevelUp] | <code>boolean</code> | <code>false</code> | =false,如果升级是否显示升级信息 |

<a name="$mvs+changeLevel"></a>

### $mvs.changeLevel(actorId, amount, [showLevelUp])
更改等级

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| actorId | <code>number</code> |  | 角色id：0队列中的全部 |
| amount | <code>number</code> |  | 差值 |
| [showLevelUp] | <code>boolean</code> | <code>false</code> | =false,如果升级是否显示升级信息 |

<a name="$mvs+changeAbility"></a>

### $mvs.changeAbility(actorId, type, amount)
更改角色能力

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id：0队列中的全部 |
| type | <code>enumAbility</code> | 属性类型：enumAbility |
| amount | <code>number</code> | 差值 |

<a name="$mvs+changeSkill"></a>

### $mvs.changeSkill(actorId, op, skillId)
更改角色技能

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id：0队列中的全部 |
| op | <code>enumSwitchValue</code> | 附加/移除：enumSwitchValue |
| skillId | <code>number</code> | 技能id |

<a name="$mvs+changeEquipment"></a>

### $mvs.changeEquipment(actorId, equipType, equipId)
更改装备

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id |
| equipType | <code>number</code> | 装备类别 |
| equipId | <code>number</code> | 装备id |

<a name="$mvs+changeName"></a>

### $mvs.changeName(actorId, name)
更改名字

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id |
| name | <code>string</code> | 名字 |

<a name="$mvs+changeClass"></a>

### $mvs.changeClass(actorId, classId, [keepLevel])
更改角色职业

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| actorId | <code>number</code> |  | 角色id |
| classId | <code>number</code> |  | 职业id |
| [keepLevel] | <code>boolean</code> | <code>false</code> | =false,是否保持等级 |

<a name="$mvs+changeActorImages"></a>

### $mvs.changeActorImages(actorId, characterImageName, characterImageIndex, faceImageName, faceImageIndex, battlerImageName)
更改角色图片

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id |
| characterImageName | <code>string</code> | 行走图名 |
| characterImageIndex | <code>number</code> | 行走图index |
| faceImageName | <code>string</code> | 头像图名 |
| faceImageIndex | <code>number</code> | 头像图index |
| battlerImageName | <code>string</code> | 战斗图名 |

<a name="$mvs+changeVehicleImage"></a>

### $mvs.changeVehicleImage(vehicleId, imageName, imageIndex)
更改载具图

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| vehicleId | <code>number</code> | 载具id |
| imageName | <code>string</code> | 载具图片名 |
| imageIndex | <code>number</code> | 载具图index |

<a name="$mvs+changeClass"></a>

### $mvs.changeClass(actorId, nickName)
更改角色昵称

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id |
| nickName | <code>string</code> | 昵称 |

<a name="$mvs+changeProfile"></a>

### $mvs.changeProfile(actorId, profile)
更改角色简介

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id |
| profile | <code>string</code> | 简介 |

<a name="$mvs+changeEnemyHP"></a>

### $mvs.changeEnemyHP(enemyIndex, amount, [causeDead])
更改敌人hp

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| enemyIndex | <code>number</code> |  | 敌人index：从0开始，-1整个敌群 |
| amount | <code>number</code> |  | 差值 |
| [causeDead] | <code>boolean</code> | <code>false</code> | =false,如果减少是否能引起死亡 |

<a name="$mvs+changeEnemyMP"></a>

### $mvs.changeEnemyMP(enemyIndex, amount)
更改敌人mp

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index：从0开始，-1整个敌群 |
| amount | <code>number</code> | 差值 |

<a name="$mvs+changeEnemyTP"></a>

### $mvs.changeEnemyTP(enemyIndex, amount)
更改敌人tp

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index：从0开始，-1整个敌群 |
| amount | <code>number</code> | 差值 |

<a name="$mvs+changeEnemyState"></a>

### $mvs.changeEnemyState(enemyIndex, op, stateId)
更改角色状态

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index：从0开始，-1整个敌群 |
| op | <code>enumSwitchValue</code> | 附加/移除：enumSwitchValue |
| stateId | <code>number</code> | 状态id |

<a name="$mvs+enemyRecoverAll"></a>

### $mvs.enemyRecoverAll(enemyIndex)
完全恢复

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index：从0开始，-1整个敌群 |

<a name="$mvs+enemyAppear"></a>

### $mvs.enemyAppear(enemyIndex)
敌人出现

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index：从0开始 |

<a name="$mvs+enemyTransform"></a>

### $mvs.enemyTransform(enemyIndex, enemyId)
敌人变身

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index：从0开始 |
| enemyId | <code>number</code> | 敌人id(敌人种类)：从1开始 |

<a name="$mvs+showBattleAnimation"></a>

### $mvs.showBattleAnimation(enemyIndex, animationId)
敌人显示动画

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index：从0开始，-1整个敌群 |
| animationId | <code>number</code> | 动画id |

<a name="$mvs+actorForceBattleAction"></a>

### $mvs.actorForceBattleAction(actorId, actionId, targetIndex)
角色强制释放技能

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| actorId | <code>number</code> | 角色id， |
| actionId | <code>number</code> | 技能id |
| targetIndex | <code>number</code> | 目标index，0开始，-1随机，-2上次选择 |

<a name="$mvs+enemyForceBattleAction"></a>

### $mvs.enemyForceBattleAction(enemyIndex, actionId, targetIndex)
敌人强制释放技能

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| enemyIndex | <code>number</code> | 敌人index，0开始 |
| actionId | <code>number</code> | 技能id |
| targetIndex | <code>number</code> | 目标index，0开始，-1随机，-2上次选择 |

<a name="$mvs+abortBattle"></a>

### $mvs.abortBattle()
中断战斗

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+openMenuScreen"></a>

### $mvs.openMenuScreen()
打开菜单画面

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+openSaveScreen"></a>

### $mvs.openSaveScreen()
打开存档画面

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+gameOver"></a>

### $mvs.gameOver()
游戏结束

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+returnTitleScreen"></a>

### $mvs.returnTitleScreen()
返回标题画面

**Kind**: instance method of [<code>$mvs</code>](#$mvs)
<a name="$mvs+callJsFunction"></a>

### $mvs.callJsFunction(jsFunction)
调用js函数

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| jsFunction | <code>\*</code> | js函数 |

<a name="$mvs+callPluginCommand"></a>

### $mvs.callPluginCommand(command)
调用插件命令

**Kind**: instance method of [<code>$mvs</code>](#$mvs)

| Param | Type | Description |
| --- | --- | --- |
| command | <code>\*</code> | 命令字符串参数 |

