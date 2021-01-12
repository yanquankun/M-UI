import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  ApiData: Array<Object> = [{
    title: "[button 按钮]",
    api: [{
      name: "muiType",
      describe: "按钮类型",
      type: "default|danger|primary|dashed",
      default: "default"
    }, {
      name: "muiSize",
      describe: "按钮大小",
      type: "large|default|small",
      default: "default"
    }, {
      name: "prefix",
      describe: "按钮前缀",
      type: "ElementRef<any>",
      default: "-"
    }, {
      name: "suffix",
      describe: "按钮后缀",
      type: "ElementRef<any>",
      default: "-"
    }, {
      name: "disabled",
      describe: "禁用按钮",
      type: "boolean|''",
      default: "false"
    }]
  },];
  size = 'default';

  constructor() { }

  ngOnInit() {
  }

}
