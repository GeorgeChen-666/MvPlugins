# 气球对话框

这是一个可以让自己或者 NPC 显示一个气球对话框的插件。大概最多显示 16 个字。

## 使用方法

在事件编辑器中输入脚本。

### 为当前事件弹出气球

this.setupTextBalloon('你好呀~~！');

### 为玩家弹出气球

this.setupTextBalloon('你好呀~~！',-1);

### 为指定 event 弹出气球(n 为 event id)

this.setupTextBalloon('你好呀~~！',n);

### 气球消失前阻止后面的脚本执行。

this.setupTextBalloon('你好呀~~！',n, true);
