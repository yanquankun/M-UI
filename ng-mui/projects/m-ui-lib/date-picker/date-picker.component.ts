import { Component, OnInit } from '@angular/core';
import { _weekShow, caledarEvent } from './calendar.type';
import { dateFormat } from 'm-ui-lib/util';
@Component({
  selector: 'm-ui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent implements OnInit {
  curDateId: string = null;// 当前时间id
  // 日历记录事件对象 数据类型为 caledarEvent
  _calendarEventArr: Array<caledarEvent> = null;
  dateFormat = new dateFormat;
  // 当前展示月份的数据结构
  curMonthData = [];
  showDateContent: boolean = false;

  constructor() { }

  initCalendar(curDateId) {
    this.curMonthData = [];
    const now = new Date(curDateId);
    const [preyear, nextyear, premonth, nextmonth] = [now.getMonth() ? now.getFullYear() : now.getFullYear() - 1,
    now.getMonth() == 11 ? now.getFullYear() + 1 : now.getFullYear(),
    now.getMonth() ? now.getMonth() : 12,
    now.getMonth() == 11 ? 1 : now.getMonth() + 2];
    const curMonth = now.getMonth() + 1;
    const curYear = now.getFullYear();
    let offset = 1;// 偏移起始值
    for (let k = 0; k < 6 * 7; k++) {
      let id = "", type = "pre", isNow = false;
      if (k < this.dateFormat.getCurMonthOffset(curDateId).firstWeekOffset) {
        // 负偏移
        id = preyear + "-" + premonth + "-" + (this.dateFormat.getCurMonthOffset(curDateId).lastMonthDays - this.dateFormat.getCurMonthOffset(curDateId).firstWeekOffset + k + 1);
      } else if (k + 1 > this.dateFormat.getCurMonthOffset(curDateId).monthDays + this.dateFormat.getCurMonthOffset(curDateId).firstWeekOffset) {
        // 正偏移
        offset > this.dateFormat.getCurMonthOffset(curDateId).monthDays && (offset = 1);
        id = nextyear + "-" + nextmonth + "-" + offset;
        offset++;
        type = "next";
      } else {
        // 不偏移
        id = curYear + "-" + curMonth + "-" + offset;
        if (offset == now.getDate()) isNow = true;
        offset++;
        type = "cur";
      }
      this.curMonthData.push({
        id: id,
        name: id.split("-")[2],
        type: type,
        isNow: isNow,
        disabled: false
      });
    }
    console.log(this.curMonthData)
  }

  ngOnInit() {
    const now = new Date();
    this.curDateId = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    this.initCalendar(this.curDateId);
  }

}
