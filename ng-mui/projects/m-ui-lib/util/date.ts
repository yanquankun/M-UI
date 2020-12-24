class until {
    add0(m) {
        return m < 10 ? "0" + m : m;
    }
}
export class dateFormat extends until {
    constructor() {
        super();
    }
    /* 时间转时间戳 type为10或13*/
    timeToTimetamp(para, type): string {
        if (para == undefined) {
            return "";
        } else {
            const time = new Date(para);
            const y = time.getFullYear();
            const m =
                Number(time.getMonth() + 1) < 10
                    ? "0" + (time.getMonth() + 1)
                    : time.getMonth() + 1;
            const d =
                Number(time.getDate()) < 10 ? "0" + time.getDate() : time.getDate();
            const h =
                Number(time.getHours()) < 10 ? "0" + time.getHours() : time.getHours();
            const M =
                Number(time.getMinutes()) < 10
                    ? "0" + time.getMinutes()
                    : time.getMinutes();
            const S =
                Number(time.getSeconds()) < 10
                    ? "0" + time.getSeconds()
                    : time.getSeconds();
            const resTime =
                y.toString() +
                "/" +
                m.toString() +
                "/" +
                d.toString() +
                " " +
                h.toString() +
                ":" +
                M.toString() +
                ":" +
                S.toString();
            if (type == 10) return (Date.parse(resTime) / 1000).toString();
            else {
                let myTm = Date.parse(resTime).toString();
                return myTm;
            }
        }
    }

    /* 时间戳转日期 */
    /* type为data是日期  type为time为时间 unit为时间戳位数*/
    format(shijianchuo, type, unit): string {
        if (shijianchuo == 0 || shijianchuo == null || shijianchuo == "") {
            return "";
        }
        //shijianchuo是整数，否则要parseInt转换
        if (typeof shijianchuo != "number") {
            shijianchuo = Number(shijianchuo);
        }
        if (unit == 10) {
            var time = new Date(shijianchuo * 1000);
        } else if (unit == 13) {
            var time = new Date(shijianchuo);
        }
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        if (type == "date") {
            return (
                y +
                "-" +
                super.add0(m) +
                "-" +
                super.add0(d) +
                " " +
                super.add0(h) +
                ":" +
                super.add0(mm) +
                ":" +
                super.add0(s)
            );
        } else if (type == "dateNoSecond") {
            return y + "-" + super.add0(m) + "-" + super.add0(d) + " " + super.add0(h) + ":" + super.add0(mm);
        } else if (type == "time") {
            return super.add0(h) + ":" + super.add0(mm) + ":" + super.add0(s);
        } else if (type == "MonthDay") {
            return super.add0(m) + "月" + super.add0(d) + "日";
        } else if (type == "YearMonthDay") {
            return y + "年" + super.add0(m) + "月" + super.add0(d) + "日";
        } else if (type == "YearMonthDay") {
            return y + "-" + super.add0(m) + "-" + super.add0(d);
        } else if (type == "monthDayTime") {
            return super.add0(m) + "-" + super.add0(d) + " " + super.add0(h) + ":" + super.add0(mm);
        }
    }
    /* 计算两个日期之间相差的年数月数天数*/
    getDiffYmdBetweenDate(sDate1, sDate2) {
        var fixDate = function (sDate) {
            var aD = sDate.split("-");
            for (var i = 0; i < aD.length; i++) {
                aD[i] = fixZero(parseInt(aD[i]));
            }
            return aD.join("-");
        };
        var fixZero = function (n) {
            return n < 10 ? "0" + n : n;
        };
        var fixInt = function (a) {
            for (var i = 0; i < a.length; i++) {
                a[i] = parseInt(a[i]);
            }
            return a;
        };
        var getMonthDays = function (y, m) {
            var aMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
                aMonthDays[2] = 29;
            }
            return aMonthDays[m];
        };
        var checkDate = function (sDate) { };
        var y = 0;
        var m = 0;
        var d = 0;
        var sTmp;
        var aTmp;
        sDate1 = fixDate(sDate1);
        sDate2 = fixDate(sDate2);
        if (sDate1 > sDate2) {
            sTmp = sDate2;
            sDate2 = sDate1;
            sDate1 = sTmp;
        }
        var aDate1 = sDate1.split("-");
        aDate1 = fixInt(aDate1);
        var aDate2 = sDate2.split("-");
        aDate2 = fixInt(aDate2);
        //计算相差的年份
        /*aTmp = [aDate1[0]+1,fixZero(aDate1[1]),fixZero(aDate1[2])];
          while(aTmp.join('-') <= sDate2){
              y++;
              aTmp[0]++;
          }*/
        y = aDate2[0] - aDate1[0];
        if (sDate2.replace(aDate2[0], "") < sDate1.replace(aDate1[0], "")) {
            y = y - 1;
        }
        //计算月份
        aTmp = [aDate1[0] + y, aDate1[1], fixZero(aDate1[2])];
        while (true) {
            if (aTmp[1] == 12) {
                aTmp[0]++;
                aTmp[1] = 1;
            } else {
                aTmp[1]++;
            }
            if ([aTmp[0], fixZero(aTmp[1]), aTmp[2]].join("-") <= sDate2) {
                m++;
            } else {
                break;
            }
        }
        //计算天数
        aTmp = [aDate1[0] + y, aDate1[1] + m, aDate1[2]];
        if (aTmp[1] > 12) {
            aTmp[0]++;
            aTmp[1] -= 12;
        }
        while (true) {
            if (aTmp[2] == getMonthDays(aTmp[0], aTmp[1])) {
                aTmp[1]++;
                aTmp[2] = 1;
            } else {
                aTmp[2]++;
            }
            sTmp = [aTmp[0], fixZero(aTmp[1]), fixZero(aTmp[2])].join("-");
            if (sTmp <= sDate2) {
                d++;
            } else {
                break;
            }
        }
        return { y: y, m: m, d: d };
    }
    /* 时间戳转时分 */
    timestampToHourMinute(tmstamp, type, unit): string {
        //tmstamp是整数，否则要parseInt转换
        if (typeof tmstamp != "number") tmstamp = Number(tmstamp);
        if (unit == 10) var time = new Date(tmstamp * 1000);
        else if (unit == 13) var time = new Date(tmstamp);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        if (type == "data")
            return (
                y +
                "-" +
                super.add0(m) +
                "-" +
                super.add0(d) +
                " " +
                super.add0(h) +
                ":" +
                super.add0(mm) +
                ":" +
                super.add0(s)
            );
        else if (type == "time") return super.add0(h) + ":" + super.add0(mm);
    }

    /* 时间戳转时分秒 */
    timestampToHourMinuteSecond(tmstamp, unit): string {
        //tmstamp是整数，否则要parseInt转换
        if (typeof tmstamp != "number") tmstamp = Number(tmstamp);
        if (unit == 10) var time = new Date(tmstamp * 1000);
        else if (unit == 13) var time = new Date(tmstamp);
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return super.add0(h) + ":" + super.add0(mm) + ":" + super.add0(s);
    }

    /* 时间戳转月天时分秒 */
    timestampToMDHMS(tmstamp, unit): string {
        //tmstamp是整数，否则要parseInt转换
        if (typeof tmstamp != "number") tmstamp = Number(tmstamp);
        if (unit == 10) var time = new Date(tmstamp * 1000);
        else if (unit == 13) var time = new Date(tmstamp);
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return (
            super.add0(m) + "-" + super.add0(d) + " " + super.add0(h) + ":" + super.add0(mm) + ":" + super.add0(s)
        );
    }
    // 获取当前时间的周一零点的时间戳
    getWeekFirstDayDateZeroTime(date): any {
        let nowTemp = new Date(date);
        let oneDayLong = 24 * 60 * 60 * 1000;
        let c_time = nowTemp.getTime();
        let c_day = nowTemp.getDay() || 7;
        let m_time = c_time - (c_day - 1) * oneDayLong;
        let result = this.getDateZeroTime(m_time);
        return result;
    }

    // 获取当前时间的月初零点的时间戳
    getMonthFirstDayDateZeroTime(date): any {
        let nowTemp = new Date(date);
        let oneDayLong = 24 * 60 * 60 * 1000;
        let c_time = nowTemp.getTime();
        let c_day = nowTemp.getDate();
        let m_time = c_time - (c_day - 1) * oneDayLong;
        let result = this.getDateZeroTime(m_time);
        return result;
    }
    // 获取当前时间的当天零点的时间戳
    getDateZeroTime(date): any {
        if (typeof date == "undefined") {
            throw new Error("date is undefined!");
        }

        if (typeof date == "number") {
            return new Date(new Date(date).toLocaleDateString()).getTime();
        }

        if (typeof date == "object") {
            return new Date(date.toLocaleDateString()).getTime();
        }
    }
    // 判断时间戳是否是今天  str为13位时间戳
    isToday(str): boolean {
        if (new Date(str).toDateString() === new Date().toDateString()) {
            //今天
            return true;
        } else if (new Date(str) < new Date()) {
            //之前
            return false;
        }
    }
    // 获取本月第一天是星期几
    getFirstDayWeekShow(unix?: string): number | string {
        const now = unix ? new Date(unix) : new Date();
        const t = `${now.getMonth() + 1}/1/${now.getFullYear()}`;
        return new Date(t).getDay();
    }
    // 获取日历第一周偏移量
    getCalendarFirstWeekOffset(unix?: string): number {
        return !this.getFirstDayWeekShow(unix) ? 6 : Number(this.getFirstDayWeekShow(unix)) - 1;
    }
    // 获取本月天数 type pre上个月 cur本月 next下个月
    getMonthDays(type = 'cur', unix?: string): number {
        const now = unix ? new Date(unix) : new Date();
        const [preyear, nextyear, premonth, nextmonth] = [now.getMonth() ? now.getFullYear() : now.getFullYear() - 1,
        now.getMonth() == 11 ? now.getFullYear() + 1 : now.getFullYear(),
        now.getMonth() ? now.getMonth() : 12,
        now.getMonth() == 11 ? 1 : now.getMonth() + 1];
        return new Date(type == 'cur' ? now.getFullYear() : type == 'pre' ? preyear : nextyear, type == 'cur' ? now.getMonth() + 1 : type == 'pre' ? premonth : nextmonth, 0).getDate();
    }
    // 获取当月日历正反偏移量
    getCurMonthOffset(unix) {
        return {
            "monthFirstWeekDay": this.getFirstDayWeekShow(unix),
            "firstWeekOffset": this.getCalendarFirstWeekOffset(unix),
            "monthDays": this.getMonthDays('cur'),
            "lastMonthDays": this.getMonthDays('pre', unix),
            "nextMonthDays": this.getMonthDays('next', unix),
        }
    }
}