import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menuData: any = [];
  menuData2: any = [];
  ApiData: Array<Object> = [{
    title: "[menu 菜单]",
    api: [{
      name: "theme",
      describe: "菜单风格",
      type: "'light' | 'dark'",
      default: "light"
    }, {
      name: "menuData",
      describe: "菜单元数据",
      type: "Array",
      default: "-"
    }, {
      name: "clickActiveNode",
      describe: "点击叶子节点事件",
      type: "EventEmitter<Object>",
      default: ""
    }]
  },];

  constructor(private http: HttpClient, private router: Router) { }

  clickActiveNode(e) {
    console.log(e)
    e.url && this.router.navigate([e.url]);
  }

  ngOnInit() {
    this.http.request("get", "./assets/mock/menu.json").subscribe(res => {
      this.menuData = [].concat(res);
    })
    this.menuData2 = [
      {
        "name": "起步",
        "key": "_startdemo",
        "pid": null,
      }, {
        "name": "提示",
        "key": "_promptdemo",
        "pid": null,
        "children": [
          {
            "name": "alert 提示框",
            "key": "_alertdemo",
            "pid": "_promptdemo",
          },
        ]
      }, {
        "name": "菜单demo",
        "key": "_demo",
        "pid": null,
        "children": [
          {
            "name": "demo子级",
            "key": "_demoChild",
            "pid": "_demo",
          },
        ]
      }
    ]
  }

}
