import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  ApiData: Array<Object> = [{
    title: "[alert 提示框]",
    api: [{
      name: "alertTitle",
      describe: "Alert 标题",
      type: "string",
      default: "-"
    }, {
      name: "type",
      describe: "Alert 类型",
      type: "AlertType'success' | 'danger' | 'warning' | 'info'",
      default: "info"
    }, {
      name: "showIcon",
      describe: "是否显示图标，用于支持用户自定义图标",
      type: "boolean",
      default: "true"
    }, {
      name: "closeDelayTime",
      describe: "关闭延迟时间,false不关闭",
      type: "number | boolean",
      default: "2000"
    }, {
      name: "closeable",
      describe: "是否可关闭",
      type: " boolean",
      default: "false"
    }, {
      name: "closeEvent",
      describe: "关闭事件",
      type: "EventEmitter<boolean | string>",
      default: ""
    }]
  },];

  constructor() { }

  ngOnInit() {
  }

}
