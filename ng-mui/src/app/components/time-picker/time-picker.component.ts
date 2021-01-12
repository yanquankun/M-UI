import { Component, OnInit } from '@angular/core';
import { caledarEvent, infoStatu } from 'm-ui-lib/date-picker/calendar.type';
@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.less']
})
export class TimePickerComponent implements OnInit {
  ApiData: Array<Object> = [{
    title: "[calendar 日历]",
    api: [{
      name: "eventType",
      describe: "日历事件触发方式 click ，null表示不触发点击事件",
      type: "'click' | null",
      default: "null"
    }, {
      name: "weekShowType",
      describe: "日历选择星期一到星期日的显示方式",
      type: "'Name' | 'FullName' | 'EnName' | 'FullEnName' ",
      default: "Name"
    }, {
      name: "calendarEventArr",
      describe: "日历记录事件对象",
      type: "Array<caledarEvent>",
      default: "-"
    }, {
      name: "calendarInfoEmit",
      describe: "日历信息保存事件",
      type: "EventEmitter<Object>",
      default: ""
    }]
  },];
  ApiData2: Array<Object> = [{
    title: "[datepicker 日期选择]",
    api: [{
      name: "date",
      describe: "默认日期",
      type: "yyyy-m-d | yyyy-mm-dd",
      default: "null"
    }, {
      name: "weekShowType",
      describe: "日历选择星期一到星期日的显示方式",
      type: "'Name' | 'FullName' | 'EnName' | 'FullEnName' ",
      default: "Name"
    }, {
      name: "dateChange",
      describe: "日期选择事件",
      type: "EventEmitter<{ date: string }>",
      default: "-"
    }]
  },];
  calendarEventArr: Array<caledarEvent> = [{
    "id": "2020-11-21",
    "info": "哈哈",
    "statu": infoStatu.NEW
  }, {
    "id": "2020-12-1",
    "info": "今天是个好日子",
    "statu": infoStatu.NEW
  }, {
    "id": "2020-12-22",
    "info": "明天是个好日子",
    "statu": infoStatu.NEW
  }];

  constructor() { }

  calendarInfoEmit(e) {
    console.log(e);
  }

  dateChange(e) {
    console.log(e);
  }

  ngOnInit() {
  }

}
