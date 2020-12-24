import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.less']
})
export class SilderComponent implements OnInit {
  menuData: any = [];

  constructor(private router: Router) { }

  clickActiveNode(e) {
    console.log(e)
    this.router.navigate([e.url || 'start']);
  }

  ngOnInit() {
    this.menuData = [
      {
        "name": "起步",
        "key": "_start",
        "url": "/start",
        "pid": null,
      }, {
        "name": "导航",
        "key": "_nav",
        "pid": null,
        "children": [
          {
            "name": "menu 菜单",
            "key": "_menu",
            "url": "/menu",
            "pid": "_nav",
          },
        ]
      }, {
        "name": "展示",
        "key": "_exhibition",
        "pid": null,
        "children": [
          {
            "name": "tag 标签",
            "key": "_tag",
            "url": "/tag",
            "pid": "_exhibition",
          }, {
            "name": "time-picker 时间选择",
            "key": "_timepicker",
            "url": "/timepicker",
            "pid": "_exhibition",
          },
        ]
      }, {
        "name": "提示",
        "key": "_prompt",
        "pid": null,
        "children": [
          {
            "name": "alert 提示框",
            "key": "_alert",
            "url": "/alert",
            "pid": "_prompt",
          },
        ]
      }, {
        "name": "指令",
        "key": "_directive",
        "pid": null,
        "children": [
          {
            "name": "dragZoom 拖拽缩放",
            "key": "_dragZoom",
            "url": "/drag-zoom",
            "pid": "_directive",
          },
        ]
      },
    ]
  }

}
