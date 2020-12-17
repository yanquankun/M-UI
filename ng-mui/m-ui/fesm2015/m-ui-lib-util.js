import { __awaiter } from 'tslib';
import { fromEvent } from 'rxjs';
import 'rxjs/Rx';
import { debounce } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: until.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class until {
    // 判断是否滚轮到顶或是到底了 到顶部为top 到底部为down
    /**
     * @return {?}
     */
    scrollEvent() {
        /** @type {?} */
        const scroll = (/**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function* () {
                const [h, SH, scrollTop] = [
                    document.documentElement.clientHeight || document.body.clientHeight,
                    document.documentElement.scrollHeight || document.body.scrollHeight,
                    document.documentElement.scrollTop || document.body.scrollTop,
                ];
                /** @type {?} */
                let scrollType = "";
                if (!scrollTop)
                    scrollType = "top";
                else if (SH > h && scrollTop + h === SH)
                    scrollType = "down";
                else
                    scrollType = "scroll";
                Object.defineProperty(event, "scrollType", {
                    writable: false,
                    value: scrollType,
                });
            });
        });
        return fromEvent(window, "scroll")
            .pipe(debounce((/**
         * @return {?}
         */
        () => scroll())))
            .debounceTime(500);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class until$1 {
    /**
     * @param {?} m
     * @return {?}
     */
    add0(m) {
        return m < 10 ? "0" + m : m;
    }
}
class dateFormat extends until$1 {
    constructor() {
        super();
    }
    /* 时间转时间戳 type为10或13*/
    /**
     * @param {?} para
     * @param {?} type
     * @return {?}
     */
    timeToTimetamp(para, type) {
        if (para == undefined) {
            return "";
        }
        else {
            /** @type {?} */
            const time = new Date(para);
            /** @type {?} */
            const y = time.getFullYear();
            /** @type {?} */
            const m = Number(time.getMonth() + 1) < 10
                ? "0" + (time.getMonth() + 1)
                : time.getMonth() + 1;
            /** @type {?} */
            const d = Number(time.getDate()) < 10 ? "0" + time.getDate() : time.getDate();
            /** @type {?} */
            const h = Number(time.getHours()) < 10 ? "0" + time.getHours() : time.getHours();
            /** @type {?} */
            const M = Number(time.getMinutes()) < 10
                ? "0" + time.getMinutes()
                : time.getMinutes();
            /** @type {?} */
            const S = Number(time.getSeconds()) < 10
                ? "0" + time.getSeconds()
                : time.getSeconds();
            /** @type {?} */
            const resTime = y.toString() +
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
            if (type == 10)
                return (Date.parse(resTime) / 1000).toString();
            else {
                /** @type {?} */
                let myTm = Date.parse(resTime).toString();
                return myTm;
            }
        }
    }
    /* 时间戳转日期 */
    /* type为data是日期  type为time为时间 unit为时间戳位数*/
    /**
     * @param {?} shijianchuo
     * @param {?} type
     * @param {?} unit
     * @return {?}
     */
    format(shijianchuo, type, unit) {
        if (shijianchuo == 0 || shijianchuo == null || shijianchuo == "") {
            return "";
        }
        //shijianchuo是整数，否则要parseInt转换
        if (typeof shijianchuo != "number") {
            shijianchuo = Number(shijianchuo);
        }
        if (unit == 10) {
            /** @type {?} */
            var time = new Date(shijianchuo * 1000);
        }
        else if (unit == 13) {
            /** @type {?} */
            var time = new Date(shijianchuo);
        }
        /** @type {?} */
        var y = time.getFullYear();
        /** @type {?} */
        var m = time.getMonth() + 1;
        /** @type {?} */
        var d = time.getDate();
        /** @type {?} */
        var h = time.getHours();
        /** @type {?} */
        var mm = time.getMinutes();
        /** @type {?} */
        var s = time.getSeconds();
        if (type == "date") {
            return (y +
                "-" +
                super.add0(m) +
                "-" +
                super.add0(d) +
                " " +
                super.add0(h) +
                ":" +
                super.add0(mm) +
                ":" +
                super.add0(s));
        }
        else if (type == "dateNoSecond") {
            return y + "-" + super.add0(m) + "-" + super.add0(d) + " " + super.add0(h) + ":" + super.add0(mm);
        }
        else if (type == "time") {
            return super.add0(h) + ":" + super.add0(mm) + ":" + super.add0(s);
        }
        else if (type == "MonthDay") {
            return super.add0(m) + "月" + super.add0(d) + "日";
        }
        else if (type == "YearMonthDay") {
            return y + "-" + super.add0(m) + "-" + super.add0(d);
        }
        else if (type == "monthDayTime") {
            return super.add0(m) + "-" + super.add0(d) + " " + super.add0(h) + ":" + super.add0(mm);
        }
    }
    /* 计算两个日期之间相差的年数月数天数*/
    /**
     * @param {?} sDate1
     * @param {?} sDate2
     * @return {?}
     */
    getDiffYmdBetweenDate(sDate1, sDate2) {
        /** @type {?} */
        var fixDate = (/**
         * @param {?} sDate
         * @return {?}
         */
        function (sDate) {
            /** @type {?} */
            var aD = sDate.split("-");
            for (var i = 0; i < aD.length; i++) {
                aD[i] = fixZero(parseInt(aD[i]));
            }
            return aD.join("-");
        });
        /** @type {?} */
        var fixZero = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            return n < 10 ? "0" + n : n;
        });
        /** @type {?} */
        var fixInt = (/**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            for (var i = 0; i < a.length; i++) {
                a[i] = parseInt(a[i]);
            }
            return a;
        });
        /** @type {?} */
        var getMonthDays = (/**
         * @param {?} y
         * @param {?} m
         * @return {?}
         */
        function (y, m) {
            /** @type {?} */
            var aMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
                aMonthDays[2] = 29;
            }
            return aMonthDays[m];
        });
        /** @type {?} */
        var y = 0;
        /** @type {?} */
        var m = 0;
        /** @type {?} */
        var d = 0;
        /** @type {?} */
        var sTmp;
        /** @type {?} */
        var aTmp;
        sDate1 = fixDate(sDate1);
        sDate2 = fixDate(sDate2);
        if (sDate1 > sDate2) {
            sTmp = sDate2;
            sDate2 = sDate1;
            sDate1 = sTmp;
        }
        /** @type {?} */
        var aDate1 = sDate1.split("-");
        aDate1 = fixInt(aDate1);
        /** @type {?} */
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
            }
            else {
                aTmp[1]++;
            }
            if ([aTmp[0], fixZero(aTmp[1]), aTmp[2]].join("-") <= sDate2) {
                m++;
            }
            else {
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
            }
            else {
                aTmp[2]++;
            }
            sTmp = [aTmp[0], fixZero(aTmp[1]), fixZero(aTmp[2])].join("-");
            if (sTmp <= sDate2) {
                d++;
            }
            else {
                break;
            }
        }
        return { y: y, m: m, d: d };
    }
    /* 时间戳转时分 */
    /**
     * @param {?} tmstamp
     * @param {?} type
     * @param {?} unit
     * @return {?}
     */
    timestampToHourMinute(tmstamp, type, unit) {
        //tmstamp是整数，否则要parseInt转换
        if (typeof tmstamp != "number")
            tmstamp = Number(tmstamp);
        if (unit == 10)
            /** @type {?} */
            var time = new Date(tmstamp * 1000);
        else if (unit == 13)
            /** @type {?} */
            var time = new Date(tmstamp);
        /** @type {?} */
        var y = time.getFullYear();
        /** @type {?} */
        var m = time.getMonth() + 1;
        /** @type {?} */
        var d = time.getDate();
        /** @type {?} */
        var h = time.getHours();
        /** @type {?} */
        var mm = time.getMinutes();
        /** @type {?} */
        var s = time.getSeconds();
        if (type == "data")
            return (y +
                "-" +
                super.add0(m) +
                "-" +
                super.add0(d) +
                " " +
                super.add0(h) +
                ":" +
                super.add0(mm) +
                ":" +
                super.add0(s));
        else if (type == "time")
            return super.add0(h) + ":" + super.add0(mm);
    }
    /* 时间戳转时分秒 */
    /**
     * @param {?} tmstamp
     * @param {?} unit
     * @return {?}
     */
    timestampToHourMinuteSecond(tmstamp, unit) {
        //tmstamp是整数，否则要parseInt转换
        if (typeof tmstamp != "number")
            tmstamp = Number(tmstamp);
        if (unit == 10)
            /** @type {?} */
            var time = new Date(tmstamp * 1000);
        else if (unit == 13)
            /** @type {?} */
            var time = new Date(tmstamp);
        /** @type {?} */
        var h = time.getHours();
        /** @type {?} */
        var mm = time.getMinutes();
        /** @type {?} */
        var s = time.getSeconds();
        return super.add0(h) + ":" + super.add0(mm) + ":" + super.add0(s);
    }
    /* 时间戳转月天时分秒 */
    /**
     * @param {?} tmstamp
     * @param {?} unit
     * @return {?}
     */
    timestampToMDHMS(tmstamp, unit) {
        //tmstamp是整数，否则要parseInt转换
        if (typeof tmstamp != "number")
            tmstamp = Number(tmstamp);
        if (unit == 10)
            /** @type {?} */
            var time = new Date(tmstamp * 1000);
        else if (unit == 13)
            /** @type {?} */
            var time = new Date(tmstamp);
        /** @type {?} */
        var m = time.getMonth() + 1;
        /** @type {?} */
        var d = time.getDate();
        /** @type {?} */
        var h = time.getHours();
        /** @type {?} */
        var mm = time.getMinutes();
        /** @type {?} */
        var s = time.getSeconds();
        return (super.add0(m) + "-" + super.add0(d) + " " + super.add0(h) + ":" + super.add0(mm) + ":" + super.add0(s));
    }
    // 获取当前时间的周一零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekFirstDayDateZeroTime(date) {
        /** @type {?} */
        let nowTemp = new Date(date);
        /** @type {?} */
        let oneDayLong = 24 * 60 * 60 * 1000;
        /** @type {?} */
        let c_time = nowTemp.getTime();
        /** @type {?} */
        let c_day = nowTemp.getDay() || 7;
        /** @type {?} */
        let m_time = c_time - (c_day - 1) * oneDayLong;
        /** @type {?} */
        let result = this.getDateZeroTime(m_time);
        return result;
    }
    // 获取当前时间的月初零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    getMonthFirstDayDateZeroTime(date) {
        /** @type {?} */
        let nowTemp = new Date(date);
        /** @type {?} */
        let oneDayLong = 24 * 60 * 60 * 1000;
        /** @type {?} */
        let c_time = nowTemp.getTime();
        /** @type {?} */
        let c_day = nowTemp.getDate();
        /** @type {?} */
        let m_time = c_time - (c_day - 1) * oneDayLong;
        /** @type {?} */
        let result = this.getDateZeroTime(m_time);
        return result;
    }
    // 获取当前时间的当天零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    getDateZeroTime(date) {
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
    /**
     * @param {?} str
     * @return {?}
     */
    isToday(str) {
        if (new Date(str).toDateString() === new Date().toDateString()) {
            //今天
            return true;
        }
        else if (new Date(str) < new Date()) {
            //之前
            return false;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: m-ui-lib-util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { until, dateFormat };

//# sourceMappingURL=m-ui-lib-util.js.map