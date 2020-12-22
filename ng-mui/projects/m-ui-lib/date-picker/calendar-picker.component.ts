import { Component, Input, OnInit } from '@angular/core';
import { _weekShow, caledarEvent } from './calendar';
import { dateFormat } from 'm-ui-lib/util/date';
@Component({
  selector: 'm-ui-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.less']
})
export class CalendarPickerComponent implements OnInit {
  // 日历选择星期一到星期日的显示方式  'Name' | 'FullName' | 'EnName' | 'FullEnName'
  @Input() weekShowType: 'Name' | 'FullName' | 'EnName' | 'FullEnName' = "Name";
  // 日历记录事件对象 数据类型为 caledarEvent
  @Input() calendarEventArr: Array<caledarEvent> = null;
  private _weekShow: Array<{ id: string | number, Name: string, FullName: string, EnName: string, FullEnName: string }> = _weekShow;
  private dateFormat = new dateFormat;
  // 日历每月第一天周几
  monthFirstWeekDay = null;
  // 日历每月第一周偏移量
  firstWeekOffset: number = null;
  // 本月天数
  monthDays: number = null;
  // 当前展示月份的数据结构
  curMonthData = [];

  constructor() { }

  initCalendar() {
    const now = new Date();
    const [preyear, nextyear, premonth, nextmonth] = [now.getMonth() ? now.getFullYear() : now.getFullYear() - 1,
    now.getMonth() == 11 ? now.getFullYear() + 1 : now.getFullYear(),
    now.getMonth() ? now.getMonth() : 12,
    now.getMonth() == 11 ? 1 : now.getMonth() + 1];
    const curMonth = now.getMonth() + 1;
    const curYear = now.getFullYear();
    let offset = 1;// 偏移起始值
    for (let k = 0; k < 6 * 7; k++) {
      let id = "", type = "pre", isNow = false;
      if (k < this.dateFormat.getCurMonthOffset().firstWeekOffset) {
        // 负偏移
        id = preyear + "-" + premonth + "-" + (this.dateFormat.getCurMonthOffset().lastMonthDays - this.dateFormat.getCurMonthOffset().firstWeekOffset + k + 1);
      } else if (k + 1 > this.dateFormat.getCurMonthOffset().monthDays + this.dateFormat.getCurMonthOffset().firstWeekOffset) {
        // 正偏移
        offset > this.dateFormat.getCurMonthOffset().monthDays && (offset = 1);
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
        isNow: isNow
      });
    }
    console.log(this.dateFormat.getCurMonthOffset());
    console.log(this.curMonthData)
  }

  ngOnInit() {
    this.monthFirstWeekDay = this.dateFormat.getFirstDayWeekShow();
    this.firstWeekOffset = this.dateFormat.getCalendarFirstWeekOffset();
    this.monthDays = this.dateFormat.getMonthDays();
    this.initCalendar();
  }

}
