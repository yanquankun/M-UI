import { Component, OnInit } from '@angular/core';
import { selectItem } from 'm-ui-lib/select';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
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
  },];

  constructor() { }

  muiModelChange(e) {
    console.log(e);
  }

  ngOnInit() {
  }

}
