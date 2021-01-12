import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { _weekShow, caledarEvent } from './calendar.type';
import { dateFormat } from 'm-ui-lib/util';
@Component({
  selector: 'm-ui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent implements OnInit {
  // 默认日期 格式：yyyy-m-d | yyyy-mm-dd
  @Input() date = null;
  // 日历选择星期一到星期日的显示方式  'Name' | 'FullName' | 'EnName' | 'FullEnName'
  @Input() weekShowType: 'Name' | 'FullName' | 'EnName' | 'FullEnName' = "Name";
  // 日期选择事件
  @Output() dateChange: EventEmitter<{ date: string }> = new EventEmitter<{ date: string }>();

  curDateId: string = null;// 当前时间id
  // 日历记录事件对象 数据类型为 caledarEvent
  _calendarEventArr: Array<caledarEvent> = null;
  dateFormat = new dateFormat;
  // 当前展示月份的数据结构
  curMonthData = [];
  _weekShow: Array<{ id: string | number, Name: string, FullName: string, EnName: string, FullEnName: string }> = _weekShow;
  showDateContent: boolean = false;
  selectedDate: string = "请选择";// 当前选择日期
  curdate: string = "";// 当前日期;
  headerdate: string = "";// 头部显示日期;
  curYear = null;// 当前年
  curMonth = null;// 当前月
  curDay = null;// 当前日

  constructor() { }

  goToday() {
    this.selectedDate = this.curdate = this.dateFormat.format(new Date().getTime(), 'YearMonthDayNoZero', 13);
    this.headerdate = this.dateFormat.format(new Date().getTime(), 'YearMYearMonthDayonth', 13);
    this.dateChange.emit({ date: this.curdate });
    this.initCalendar(this.selectedDate);
    this.showDateContent = false;
  }

  showContent() {
    this.showDateContent = !this.showDateContent;
    if (this.selectedDate && this.selectedDate != "请选择") {
      this.headerdate = this.dateFormat.format(new Date(this.selectedDate).getTime(), 'YearMonthDay', 13);
      this.initCalendar(this.selectedDate);
    }
  }

  selectDate(day) {
    this.curdate = this.selectedDate = day.id;
    this.showDateContent = false;
    this.dateChange.emit({ date: this.selectedDate });
  }

  arrowChange(arrow: 'left' | 'dbleft' | 'right' | 'dbright'): void {
    const date_arr = this.curDateId.split("-");
    switch (arrow) {
      case 'left':
        if (this.curMonth == 1) {
          this.curMonth = 12;
          this.curYear--;
          this.curDateId = Number(date_arr[0]) - 1 + "-" + 12 + "-" + date_arr[2];
        } else {
          this.curMonth--;
          this.curDateId = date_arr[0] + "-" + this.curMonth + "-" + date_arr[2];
        }
        break;
      case 'dbleft':
        this.curDateId = --this.curYear + "-" + this.curDateId.split("-").slice(1).join("-");
        break;
      case 'right':
        if (this.curMonth == 12) {
          this.curMonth = 1;
          this.curYear++;
          this.curDateId = Number(date_arr[0]) + 1 + "-" + 1 + "-" + date_arr[2];
        } else {
          this.curMonth++;
          this.curDateId = date_arr[0] + "-" + this.curMonth + "-" + date_arr[2];
        }
        break;
      case 'dbright':
        this.curDateId = ++this.curYear + "-" + this.curDateId.split("-").slice(1).join("-");
        break;
    }
    this.headerdate = this.dateFormat.format(new Date(this.curDateId).getTime(), 'YearMonthDay', 13);
    this.curdate = this.curDateId;
    this.initCalendar(this.curDateId);
  }

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
        if (offset.toString() == this.selectedDate.split("-")[2]) isNow = true;
        else if (this.selectedDate && this.selectedDate == '请选择' && offset == now.getDate()) isNow = true;
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
  }

  ngOnInit() {
    const now = new Date();
    this.curYear = this.date ? new Date(this.date).getFullYear() : now.getFullYear();
    this.curMonth = this.date ? new Date(this.date).getMonth() + 1 : now.getMonth() + 1;
    this.curDay = this.date ? new Date(this.date).getDate() : now.getDate();
    this.selectedDate = this.curDateId = this.curdate = `${this.curYear}-${this.curMonth}-${this.curDay}`;
    this.headerdate = `${this.curYear}-${this.curMonth < 10 ? '0' + this.curMonth : this.curMonth}-${this.curDay < 10 ? '0' + this.curDay : this.curDay}`;
    this.initCalendar(this.curDateId);
  }

}
