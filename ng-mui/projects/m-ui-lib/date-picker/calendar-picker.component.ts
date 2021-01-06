import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { _weekShow, caledarEvent, infoStatu } from './calendar.type';
import { dateFormat } from 'm-ui-lib/util';
@Component({
  selector: 'm-ui-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.less']
})
export class CalendarPickerComponent implements OnInit {
  // 日历事件触发方式 click 或 mouseenter
  @Input() eventType: 'click' | 'mouseenter' | null = null;
  // 日历选择星期一到星期日的显示方式  'Name' | 'FullName' | 'EnName' | 'FullEnName'
  @Input() weekShowType: 'Name' | 'FullName' | 'EnName' | 'FullEnName' = "Name";
  // 日历记录事件对象 数据类型为 caledarEvent
  _calendarEventArr: Array<caledarEvent> = null;
  @Input()
  get calendarEventArr(): Array<caledarEvent> {
    return this._calendarEventArr;
  }
  set calendarEventArr(val) {
    this._calendarEventArr = val;
  }
  // 日历信息保存事件
  @Output() calendarInfoEmit: EventEmitter<Object> = new EventEmitter<Object>();

  _weekShow: Array<{ id: string | number, Name: string, FullName: string, EnName: string, FullEnName: string }> = _weekShow;
  dateFormat = new dateFormat;
  // 日历每月第一天周几
  monthFirstWeekDay = null;
  // 日历每月第一周偏移量
  firstWeekOffset: number = null;
  // 本月天数
  monthDays: number = null;
  // 当前展示月份的数据结构
  curMonthData = [];
  curMonth = new Date().getMonth() + 1;
  selectMonth = new Date().getMonth() + 1 + "月";
  monthShow: boolean = false;
  curYear = new Date().getFullYear();
  selectYear = new Date().getFullYear() + "年";
  yearShow: boolean = false;
  yearOptions = [];
  monthOptions = [{ id: 1, name: '1月' }, { id: 2, name: '2月' },
  { id: 3, name: '3月' }, { id: 4, name: '4月' }, { id: 5, name: '5月' },
  { id: 6, name: '6月' }, { id: 7, name: '7月' }, { id: 8, name: '8月' },
  { id: 9, name: '9月' }, { id: 10, name: '10月' }, { id: 11, name: '11月' },
  { id: 12, name: '12月' }];
  curDateId: string = "";// 查询的基id  year-month-day
  calendarInfo: string = ""//提示信息
  selectDay: caledarEvent;// 当前选中的日期信息记录
  avtiveDay = null;// 当前需要高亮的日期
  curdate: string = "";// 日历表头展示的日期;
  @ViewChild("info") info: ElementRef<any>;

  constructor() { }

  arrowChange(type: 'left' | 'right', e) {
    e.stopPropagation();
    if (type == 'left') {
      if (this.curMonth == 1) {
        this.curMonth = 12;
        this.curYear -= 1;
        this.selectYear = this.curYear + '年';
      }
      else {
        this.curMonth -= 1;
      }
      this.selectMonth = this.curMonth + '月';
    } else {
      if (this.curMonth != 12) this.curMonth += 1;
      else {
        this.curMonth = 1;
        this.curYear += 1;
        this.selectYear = this.curYear + '年';
      }
      this.selectMonth = this.curMonth + '月';
    }
    const date_arr = this.curDateId.split("-");
    this.curdate = this.dateFormat.format(new Date(this.curYear + "-" + this.curMonth + "-" + date_arr[2]).getTime(), 'YearMonthDay', 13);
    this.initCalendar(this.curYear + "-" + this.curMonth + "-" + date_arr[2]);
  }

  yearChange(year) {
    this.curYear = year.id;
    this.selectYear = year.name;
    this.yearShow = false;
    this.curDateId = year.id + "-" + this.curDateId.split("-").slice(1).join("-");
    this.curdate = this.dateFormat.format(new Date(this.curDateId).getTime(), 'YearMonthDay', 13);
    this.initCalendar(this.curDateId);
  }

  monthChange(month) {
    this.curMonth = month.id;
    this.selectMonth = month.name;
    this.monthShow = false;
    const date_arr = this.curDateId.split("-");
    this.curDateId = date_arr[0] + "-" + month.id + "-" + date_arr[2];
    this.curdate = this.dateFormat.format(new Date(this.curDateId).getTime(), 'YearMonthDay', 13);
    this.initCalendar(this.curDateId);
  }

  dateSelect(day) {
    this.selectDay = day;
    this.calendarInfo = day.info || "";
    this.avtiveDay = day.id;
    this.curdate = this.dateFormat.format(new Date(day.id).getTime(), 'YearMonthDay', 13);
  }

  goNow() {
    const now = new Date();
    this.curMonth = now.getMonth() + 1;
    this.selectMonth = now.getMonth() + 1 + "月";
    this.curYear = now.getFullYear();
    this.selectYear = now.getFullYear() + "年";
    this.curDateId = this.curYear + "-" + this.curMonth + "-" + now.getDate();
    this.curdate = this.dateFormat.format(new Date(this.curDateId).getTime(), 'YearMonthDay', 13);
    this.avtiveDay = this.curDateId;
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
        if (offset == now.getDate()) isNow = true;
        offset++;
        type = "cur";
      }
      const curDayInfo = this._calendarEventArr.filter(v => v.id == id);
      !curDayInfo.length && this.curMonthData.push({
        id: id,
        name: id.split("-")[2],
        type: type,
        isNow: isNow
      });
      curDayInfo.length && this.curMonthData.push({
        id: id,
        name: id.split("-")[2],
        type: type,
        isNow: isNow,
        info: curDayInfo[0].info,
        statu: curDayInfo[0].statu
      });
    }
    console.log(this.calendarEventArr)
    console.log(this.curMonthData)
  }

  initYearOptions() {
    let start = this.curYear - 50;
    for (let k = 0; k < 101; k++) {
      this.yearOptions.push({
        id: start,
        name: start + '年'
      })
      start++;
    }
  }

  save() {
    this.selectDay.info = this.calendarInfo;
    if (!this.calendarInfo && this.selectDay.statu) delete this.selectDay.statu;
    else if (this.calendarInfo && !this.selectDay.statu) {
      this.calendarInfoEmit.emit(this.selectDay);
      this.selectDay.statu = infoStatu.NEW;
    } else if (this.calendarInfo && this.selectDay.statu == infoStatu.NEW) {
      this.selectDay.statu = infoStatu.READ;
    }
    console.log(this.selectDay)
  }

  ngOnInit() {
    const now = new Date();
    this.avtiveDay = this.curDateId = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    this.curdate = this.dateFormat.format(now.getTime(), 'YearMonthDay', 13);
    this.initYearOptions();
    this.initCalendar(this.curDateId);
    this.eventType && window.addEventListener(this.eventType, ($event) => {
      const dom = $event.target;
      if (dom['classList'].contains('calendar-body-day-show') || dom['classList'].contains('calendar-body-day')) {
        if (this.info.nativeElement.style.display == "none" || !this.info.nativeElement.style.display) {
          const [x, y] = [$event.x, $event.y];
          this.info.nativeElement.style.display = "block";
          this.info.nativeElement.style.top = y + "px";
          this.info.nativeElement.style.left = x + "px";
          document.body.appendChild(this.info.nativeElement);
        } else {
          this.info.nativeElement.style.display = "none";
          document.body.removeChild(this.info.nativeElement);
          if (this.calendarInfo && this.selectDay.statu == infoStatu.NEW) {
            this.selectDay.statu = infoStatu.READ;
          }
        }
      } else if (!dom['classList'].contains('calendar-info-textarea')) {
        this.info.nativeElement.style.display = "none";
        if (this.calendarInfo && this.selectDay.statu == infoStatu.NEW) {
          this.selectDay.statu = infoStatu.READ;
        }
        // document.body.removeChild(this.info.nativeElement);
      }
    }, true)
  }

}
