import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  // 菜单风格
  @Input() theme: 'light' | 'dark' = 'light';
  // 菜单元数据
  @Input()
  get menuData() {
    return this._menuData;
  }
  set menuData(val) {
    if (val && val.length) {
      this.assemble(val);
    }
    if (val && val.length) console.log(this._menuData)
  }
  _menuData: Array<Object | string> = [];

  constructor() { }

  assemble(val) {
    this._menuData = val;
  }

  ngOnInit() { }

}
