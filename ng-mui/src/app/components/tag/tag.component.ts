import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
  ApiData: Array<Object> = [{
    title: "[tag 标签]",
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
      name: "closeEvent",
      describe: "关闭事件",
      type: "EventEmitter<{ val: string }>",
      default: ""
    }]
  },];

  constructor() { }

  closeEvent(e) {
    console.log(e)
  }


  ngOnInit() {
  }

}
