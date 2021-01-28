import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  size = 'default';
  value = "我是默认值"
  ApiData: Array<Object> = [{
    title: "[input 输入框]",
    api: [{
      name: "size",
      describe: "输入框尺寸",
      type: "large|default|small",
      default: "default"
    },]
  }, {
    title: "[m-ui-input-tpl 输入框模板]",
    api: [{
      name: "prefix",
      describe: "输入框前缀",
      type: "ElementRef<any>",
      default: "-"
    }, {
      name: "suffix",
      describe: "输入框后缀",
      type: "ElementRef<any>",
      default: "-"
    },]
  },];

  constructor() { }

  ngOnInit() {
  }

}
