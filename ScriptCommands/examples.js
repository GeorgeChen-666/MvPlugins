//选项窗口例子
new $mvs(itpr)
  .showText(["是否退出"])
  .showChoices(["是", "否"])
  .whenChoicesIndex(0, subc => subc.openMenuScreen())
  .whenChoicesIndex(1, subc =>
    //注意，这里的js代码会立即执行
    //alert('')
    subc.callJsFunction(() => {
      //只有callJsFunction里的js代码才是在interpreter中执行的
      alert("吓我一大蹦，我以为你真要走呢。");
    })
  )
  .endWhen()
  .done();

//分支条件的例子
new $mvs(itpr)
  .whenFunctionReturnTrue(
    () => $gameVariables[1] === 3,
    subc => {
      subc.showText(["条件满足"]);
    }
  )
  .whenElse(subc => {
    subc.showText(["条件不满足"]);
  })
  .endWhen()
  .done();

//循环的例子
new $mvs(itpr)
  .loop(subc => {
    subc
      .whenFunctionReturnTrue(
        () => $gameVariables[1] === 100,
        subc => {
          subc
            .showText(
              ["跳出循环"],
              "",
              0,
              $mvs.enumBackground.Transparent,
              $mvs.enumPositionV.Middle
            )
            .loopBreak();
        }
      )
      .whenElse(subc => {
        subc.callJsFunction(() => {
          $gameVariables[1] = $gameVariables[1] || 0;
          $gameVariables[1] = $gameVariables[1] + 1;
        });
      })
      .endWhen();
  })
  .done();

//商店的例子
new $mvs(itpr)
  .shopProcessing(false, items =>
    items // items为ItemListGenerator实例
      .addItem(2, 100)
      .addWeapon(3)
      .addArmor(5, 1000)
      .done()
  )
  .done();

//设置移动路线
new $mvs(itpr)
  .setMovementRoute(0, rcmd =>
    rcmd //rcmd为RouteCommandGenerator实例
      .moveForward()
      .turn90dR()
      .jump(0, 0)
      .end()
      .getCommands(false, false, false)
  )
  .done();
