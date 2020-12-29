import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { selectItem } from './select.type';
@Component({
  selector: 'm-ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  // select 元数据
  @Input()
  get data(): Array<selectItem | { label: string, options: Array<selectItem> }> {
    return this._data;
  }
  set data(val) {
    this.initOptions(val);
  }
  // select 大小 默认defalut
  @Input() selectSize: 'small' | 'default' | 'large' = 'default';
  // 点击选项回调
  @Output() muiModelChange: EventEmitter<{ key: string | number, name: string | number }> = new EventEmitter<{ key: string | number, name: string | number }>();

  _data: Array<selectItem | { label: string, options: Array<selectItem> }> = [];
  showContent: boolean = false;
  _selectValue: string | number = null;// 选择的id 单选
  _selectName: string | number = null;// 选择的值 单选
  showIcon: 'down' | 'clear' | 'search' = 'down';// 输入框右侧图标
  showLabelOpt: boolean = false;// 是否显示特殊的下拉菜单

  @ViewChild("select") select: ElementRef;

  constructor() { }

  initOptions(_data) {
    this._data = [];
    if (_data.length && ('label' in _data[0])) {
      this.showLabelOpt = true;
    } else {
      this.showLabelOpt = false;
      _data.map(v => {
        if (!v.key) v.key = v.name;
        if (!v.checked) v.checked = false;
      })
    }
    // use deepcopy 
    // Bug that prevents multiple drop-down boxes from being selected when they have the same ID
    this._data = JSON.parse(JSON.stringify(_data));
    console.log(_data)
  }

  selectEmit(e) {
    this._selectValue = e.key;
    this._selectName = e.name;
    if (this.showLabelOpt) {
      for (let k = 0; k < this._data.length; k++) {
        this._data[k]['options'] && this._data[k]['options'].length && this._data[k]['options'].forEach(v => {
          if (v['key'] == e.key) v['checked'] = true;
          else v['checked'] = false;
        });
      }
    } else {
      this._data.forEach(v => {
        if (v['key'] == e.key) v['checked'] = true;
        else v['checked'] = false;
      });
    }
    this.muiModelChange.emit({ key: e.key, name: e.name });
  }

  // Clear all selections
  clear(event) {
    event.stopPropagation();
    this._selectValue = null;
    this._selectName = null;
    if (this.showLabelOpt) {
      for (let k = 0; k < this._data.length; k++) {
        this._data[k]['options'] && this._data[k]['options'].length && this._data[k]['options'].forEach(v => {
          v['checked'] = false;
        });
      }
    } else {
      this._data.forEach(v => {
        v['checked'] = false;
      });
    }
  }

  // mouse enter 如果有选中值，变为清除按钮
  selectMouseEnter() {
    if (this._selectValue) {
      this.showIcon = 'clear';
    }
  }

  selectMouseLeave() {
    this.showIcon = 'down';
  }

  ngAfterViewInit() {
    this.select && this.select.nativeElement.addEventListener("click", () => {
      this.showContent = !this.showContent;
    }, false);
  }

  ngOnInit() {
  }

}
