import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  // 菜单元数据
  @Input()
  get menuData() {
    return this._menuData;
  }
  set menuData(val) {
    if (val && val.length) this._menuData = val;
    if (val && val.length) console.log(this._menuData)
  }
  _menuData: Array<Object | string> = [];

  constructor() { }

  ngOnInit() { }

}
