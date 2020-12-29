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
  // 是否启用多选框
  @Input() multipleSelect: boolean = false;
  // 点击选项回调
  @Output() muiModelChange: EventEmitter<{ key: string | number, name: string | number } | Array<{ key: string | number, name: string | number }>> = new EventEmitter<{ key: string | number, name: string | number } | Array<{ key: string | number, name: string | number }>>();

  _data: Array<selectItem | { label: string, options: Array<selectItem> }> = [];
  showContent: boolean = false;
  _selectValue: string | number = null;// 选择的id 单选
  _selectName: string | number = null;// 选择的值 单选
  _multiSelectValue: Array<string | number> = [];// 选择的id 多选
  _multiSelectName: Array<string | number> = [];// 选择的值 多选
  _multiSelect: Array<{ key: string | number, name: string | number }> = [];// 多选发射的值
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
  }

  selectEmit(e) {
    if (this.multipleSelect) {
      // 多选
      /** There is no indication that it is selected */
      if (!this._multiSelect.filter(v => v.key == e.key).length) {
        this._multiSelect.push(e);
        this._multiSelectValue.push(e.key);
        this._multiSelectName.push(e.name);
      }
      /** Uncheck if it exists */
      else {
        const idx = this._multiSelect.findIndex(v => v.key == e.key);
        this._multiSelect.splice(idx, 1);
        this._multiSelectName.splice(this._multiSelectName.findIndex(v => v == e.name), 1);
        this._multiSelectValue.splice(this._multiSelectValue.findIndex(v => v == e.key), 1);
      }
      if (this.showLabelOpt) {
        for (let k = 0; k < this._data.length; k++) {
          this._data[k]['options'] && this._data[k]['options'].length && this._data[k]['options'].forEach(v => {
            if (v['key'].toString() == e.key) v['checked'] = !v['checked'];
          });
        }
      } else {
        this._data.forEach(v => {
          if (v['key'].toString() == e.key) v['checked'] = !v['checked'];
        });
      }
      this.muiModelChange.emit(this._multiSelect);
    } else {
      // 单选
      this._selectValue = e.key;
      this._selectName = e.name;
      this.changeItemChecked(e);
      this.muiModelChange.emit({ key: e.key, name: e.name });
    }
  }

  changeItemChecked(e?, negation = false) {
    if (this.showLabelOpt) {
      for (let k = 0; k < this._data.length; k++) {
        this._data[k]['options'] && this._data[k]['options'].length && this._data[k]['options'].forEach(v => {
          if (negation && v.key == e.key) v['checked'] = !v['checked'];
          else if (!negation && e && v['key'].toString() == e.key) v['checked'] = true;
          else if (!negation) v['checked'] = false;
        });
      }
    } else {
      this._data.forEach(v => {
        if (negation && v['key'].toString() == e.key) v['checked'] = !v['checked'];
        else if (!negation && e && v['key'] == e.key) v['checked'] = true;
        else if (!negation) v['checked'] = false;
      });
    }
  }

  closeEvent(e, tag) {
    const idx = this._multiSelect.findIndex(v => v.key == tag.key);
    this._multiSelect.splice(idx, 1);
    this._multiSelectName.splice(this._multiSelectName.findIndex(v => v == e.name), 1);
    this._multiSelectValue.splice(this._multiSelectValue.findIndex(v => v == e.key), 1);
    this.changeItemChecked(tag, true);
  }

  // Clear all selections
  clear(event) {
    event.stopPropagation();
    if (this.multipleSelect) {
      // 多选
      this._multiSelectValue = [];
      this._multiSelectName = [];
      this._multiSelect = [];
    } else {
      this._selectValue = null;
      this._selectName = null;
    }
    this.changeItemChecked();
  }

  // mouse enter 如果有选中值，变为清除按钮
  selectMouseEnter() {
    if (this._selectValue || this._multiSelectName.length) {
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
