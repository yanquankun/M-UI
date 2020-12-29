import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
  ApiData: Array<Object> = [{
    title: "[progress 进度条]",
    api: [{
      name: "progressHeight",
      describe: "进度条高度 5<=progressHeight<=20,单位px",
      type: "number",
      default: "10"
    }, {
      name: "progress",
      describe: "进度比 0<=progressHeight<=100,单位%",
      type: "number",
      default: "20"
    }, {
      name: "progressColor",
      describe: "进度条颜色",
      type: "string",
      default: "#1890ff"
    }, {
      name: "coloursProgress",
      describe: "是否采用彩色进度条",
      type: "boolean",
      default: "false"
    }, {
      name: "progressColor",
      describe: "彩色进度条颜色 颜色数组 必须为两个色值",
      type: "Array<string>",
      default: "['#1890ff', '#FFFF00']"
    }, {
      name: "showTail",
      describe: "是否采用进度条尾部内容",
      type: "boolean",
      default: "false"
    },]
  },];

  constructor() { }

  ngOnInit() {
  }

}
