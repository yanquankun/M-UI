import { Component, OnInit } from '@angular/core';
import { selectItem } from 'm-ui-lib/select';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  size: 'small' | 'default' | 'large' = 'default';
  data: Array<selectItem> = [{
    key: 1,
    name: "option1"
  }, {
    key: 2,
    name: "option2"
  }, {
    key: 3,
    name: "option3"
  }, {
    key: 4,
    name: "option4"
  }, {
    key: 5,
    name: "option5"
  }]
  data2: Array<{ label: string, options: Array<selectItem> }> = [{
    label: '分类1',
    options: [{
      key: 1,
      name: "option1"
    }, {
      key: 2,
      name: "option2"
    }]
  }, {
    label: '分类2',
    options: [{
      key: 3,
      name: "option3"
    }, {
      key: 4,
      name: "option4"
    }]
  }]
  ApiData: Array<Object> = [{
    title: "[select 下拉列表]",
    api: [{
      name: "data",
      describe: "select 元数据",
      type: "Array<selectItem | { label: string, options: Array<selectItem> }>",
      default: "-"
    }, {
      name: "selectSize",
      describe: "select 大小",
      type: "'small' | 'default' | 'large'",
      default: "default"
    }, {
      name: "multipleSelect",
      describe: "是否启用多选框",
      type: "boolean",
      default: "false"
    }, {
      name: "muiModelChange",
      describe: "点击选项回调",
      type: "EventEmitter<{ key: string | number, name: string | number } | Array<{ key: string | number, name: string | number }>>",
      default: ""
    },]
  },];
  ItemApiData: Array<Object> = [{
    title: "[selectItem 下拉列表]",
    api: [{
      name: "value",
      describe: "选项value值 唯一id",
      type: "number | string",
      default: "-"
    }, {
      name: "name",
      describe: "选项显示名称",
      type: "number | string",
      default: "-"
    }, {
      name: "checked",
      describe: "是否被选中",
      type: "string",
      default: "'false'"
    }, {
      name: "selectEmit",
      describe: "点击选项回调",
      type: "EventEmitter<{ key: string | number, name: string | number }>",
      default: ""
    }]
  },];

  constructor() { }

  muiModelChange(e) {
    console.log(e);
  }

  ngOnInit() {
  }

}
