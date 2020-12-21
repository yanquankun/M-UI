import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { until } from 'm-ui-lib/util';
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
  }
  // 点击叶子节点事件
  @Output() clickActiveNode: EventEmitter<Object> = new EventEmitter<Object>();
  _menuData: Array<Object | string> = [];
  _deep: number = 0;// 最大深度
  private until = new until;
  lastActiveDom = null;

  constructor() { }

  assemble(val) {
    console.log(val)
    this._menuData = this.recursive(val);
  }

  toggle(item) {
    if (!item.children || !item.children.length) {
      if (this.lastActiveDom) this.lastActiveDom.classList.remove('active');
      const childDom = document.getElementById(item.key);
      childDom.classList.add('active');
      this.lastActiveDom = childDom;
      this.clickActiveNode.emit(item.origin);
    } else {
      const childDom = document.getElementById(item.key).getElementsByTagName("ul")[0];
      if (item.visible) {
        childDom.style.display = "none";
      } else {
        childDom.style.display = "block";
      }
    }
    item.visible = !item.visible;
  }

  recursive(menus, _level = 1) {
    menus && menus.length && menus.map((menu, idx) => {
      menu.level = _level;
      !("visible" in menu) && (menu.visible = true);
      Object.defineProperty(menu, 'origin', {
        writable: false,
        value: this.until.deepClone(menu),
      })
      if (menu.children && menu.children.length) {
        const l = menu.level + 1;
        this.recursive(menu.children, l);
      }
    });
    return menus;
  }

  ngOnInit() { }

}
