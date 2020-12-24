## Api 组件ApiData传入值格式

[{

    title:string,
    api:[{
        name:string,
        describe: "string",
        type: "string",
        default: "string"
    }]

}]
Example：[{

    title: "tag 标签",
    api: [{
      name: "tagBgc",
      describe: "是否启动自定义颜色",
      type: "string",
      default: "-"
    }, {
      name: "closeable",
      describe: "是否启动是否可关闭自定义颜色",
      type: "boolean",
      default: "false"
    }, {
      name: "celebrate",
      describe: "是否打开点击tag标签开启庆祝效果,需单独引入celebrate.less文件",
      type: "boolean",
      default: "false"
    }, {
      name: "celebrate",
      describe: "是否打开点击tag标签开启庆祝效果,需单独引入celebrate.less文件",
      type: "boolean",
      default: "false"
    }, {
      name: "closeEvent",
      describe: "关闭事件",
      type: "EventEmitter<{ val: string }>",
      default: ""
    }]

  }]; 
