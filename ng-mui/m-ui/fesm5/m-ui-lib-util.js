import { fromEvent } from 'rxjs';
import 'rxjs/Rx';
import { debounce } from 'rxjs/operators';
import { __awaiter, __generator, __read, __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: until.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var until = /** @class */ (function () {
    function until() {
    }
    // 判断是否滚轮到顶或是到底了 到顶部为top 到底部为down
    // 判断是否滚轮到顶或是到底了 到顶部为top 到底部为down
    /**
     * @return {?}
     */
    until.prototype.scrollEvent = 
    // 判断是否滚轮到顶或是到底了 到顶部为top 到底部为down
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scroll = (/**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, h, SH, scrollTop, scrollType;
                return __generator(this, function (_b) {
                    _a = __read([
                        document.documentElement.clientHeight || document.body.clientHeight,
                        document.documentElement.scrollHeight || document.body.scrollHeight,
                        document.documentElement.scrollTop || document.body.scrollTop,
                    ], 3), h = _a[0], SH = _a[1], scrollTop = _a[2];
                    scrollType = "";
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
                    return [2 /*return*/];
                });
            });
        });
        return fromEvent(window, "scroll")
            .pipe(debounce((/**
         * @return {?}
         */
        function () { return scroll(); })))
            .debounceTime(500);
    };
    return until;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var until$1 = /** @class */ (function () {
    function until() {
    }
    /**
     * @param {?} m
     * @return {?}
     */
    until.prototype.add0 = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return m < 10 ? "0" + m : m;
    };
    return until;
}());
var dateFormat = /** @class */ (function (_super) {
    __extends(dateFormat, _super);
    function dateFormat() {
        return _super.call(this) || this;
    }
    /* 时间转时间戳 type为10或13*/
    /* 时间转时间戳 type为10或13*/
    /**
     * @param {?} para
     * @param {?} type
     * @return {?}
     */
    dateFormat.prototype.timeToTimetamp = /* 时间转时间戳 type为10或13*/
    /**
     * @param {?} para
     * @param {?} type
     * @return {?}
     */
    function (para, type) {
        if (para == undefined) {
            return "";
        }
        else {
            /** @type {?} */
            var time = new Date(para);
            /** @type {?} */
            var y = time.getFullYear();
            /** @type {?} */
            var m = Number(time.getMonth() + 1) < 10
                ? "0" + (time.getMonth() + 1)
                : time.getMonth() + 1;
            /** @type {?} */
            var d = Number(time.getDate()) < 10 ? "0" + time.getDate() : time.getDate();
            /** @type {?} */
            var h = Number(time.getHours()) < 10 ? "0" + time.getHours() : time.getHours();
            /** @type {?} */
            var M = Number(time.getMinutes()) < 10
                ? "0" + time.getMinutes()
                : time.getMinutes();
            /** @type {?} */
            var S = Number(time.getSeconds()) < 10
                ? "0" + time.getSeconds()
                : time.getSeconds();
            /** @type {?} */
            var resTime = y.toString() +
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
                var myTm = Date.parse(resTime).toString();
                return myTm;
            }
        }
    };
    /* 时间戳转日期 */
    /* type为data是日期  type为time为时间 unit为时间戳位数*/
    /* 时间戳转日期 */
    /* type为data是日期  type为time为时间 unit为时间戳位数*/
    /**
     * @param {?} shijianchuo
     * @param {?} type
     * @param {?} unit
     * @return {?}
     */
    dateFormat.prototype.format = /* 时间戳转日期 */
    /* type为data是日期  type为time为时间 unit为时间戳位数*/
    /**
     * @param {?} shijianchuo
     * @param {?} type
     * @param {?} unit
     * @return {?}
     */
    function (shijianchuo, type, unit) {
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
                _super.prototype.add0.call(this, m) +
                "-" +
                _super.prototype.add0.call(this, d) +
                " " +
                _super.prototype.add0.call(this, h) +
                ":" +
                _super.prototype.add0.call(this, mm) +
                ":" +
                _super.prototype.add0.call(this, s));
        }
        else if (type == "dateNoSecond") {
            return y + "-" + _super.prototype.add0.call(this, m) + "-" + _super.prototype.add0.call(this, d) + " " + _super.prototype.add0.call(this, h) + ":" + _super.prototype.add0.call(this, mm);
        }
        else if (type == "time") {
            return _super.prototype.add0.call(this, h) + ":" + _super.prototype.add0.call(this, mm) + ":" + _super.prototype.add0.call(this, s);
        }
        else if (type == "MonthDay") {
            return _super.prototype.add0.call(this, m) + "月" + _super.prototype.add0.call(this, d) + "日";
        }
        else if (type == "YearMonthDay") {
            return y + "-" + _super.prototype.add0.call(this, m) + "-" + _super.prototype.add0.call(this, d);
        }
        else if (type == "monthDayTime") {
            return _super.prototype.add0.call(this, m) + "-" + _super.prototype.add0.call(this, d) + " " + _super.prototype.add0.call(this, h) + ":" + _super.prototype.add0.call(this, mm);
        }
    };
    /* 计算两个日期之间相差的年数月数天数*/
    /* 计算两个日期之间相差的年数月数天数*/
    /**
     * @param {?} sDate1
     * @param {?} sDate2
     * @return {?}
     */
    dateFormat.prototype.getDiffYmdBetweenDate = /* 计算两个日期之间相差的年数月数天数*/
    /**
     * @param {?} sDate1
     * @param {?} sDate2
     * @return {?}
     */
    function (sDate1, sDate2) {
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
    };
    /* 时间戳转时分 */
    /* 时间戳转时分 */
    /**
     * @param {?} tmstamp
     * @param {?} type
     * @param {?} unit
     * @return {?}
     */
    dateFormat.prototype.timestampToHourMinute = /* 时间戳转时分 */
    /**
     * @param {?} tmstamp
     * @param {?} type
     * @param {?} unit
     * @return {?}
     */
    function (tmstamp, type, unit) {
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
                _super.prototype.add0.call(this, m) +
                "-" +
                _super.prototype.add0.call(this, d) +
                " " +
                _super.prototype.add0.call(this, h) +
                ":" +
                _super.prototype.add0.call(this, mm) +
                ":" +
                _super.prototype.add0.call(this, s));
        else if (type == "time")
            return _super.prototype.add0.call(this, h) + ":" + _super.prototype.add0.call(this, mm);
    };
    /* 时间戳转时分秒 */
    /* 时间戳转时分秒 */
    /**
     * @param {?} tmstamp
     * @param {?} unit
     * @return {?}
     */
    dateFormat.prototype.timestampToHourMinuteSecond = /* 时间戳转时分秒 */
    /**
     * @param {?} tmstamp
     * @param {?} unit
     * @return {?}
     */
    function (tmstamp, unit) {
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
        return _super.prototype.add0.call(this, h) + ":" + _super.prototype.add0.call(this, mm) + ":" + _super.prototype.add0.call(this, s);
    };
    /* 时间戳转月天时分秒 */
    /* 时间戳转月天时分秒 */
    /**
     * @param {?} tmstamp
     * @param {?} unit
     * @return {?}
     */
    dateFormat.prototype.timestampToMDHMS = /* 时间戳转月天时分秒 */
    /**
     * @param {?} tmstamp
     * @param {?} unit
     * @return {?}
     */
    function (tmstamp, unit) {
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
        return (_super.prototype.add0.call(this, m) + "-" + _super.prototype.add0.call(this, d) + " " + _super.prototype.add0.call(this, h) + ":" + _super.prototype.add0.call(this, mm) + ":" + _super.prototype.add0.call(this, s));
    };
    // 获取当前时间的周一零点的时间戳
    // 获取当前时间的周一零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    dateFormat.prototype.getWeekFirstDayDateZeroTime = 
    // 获取当前时间的周一零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var nowTemp = new Date(date);
        /** @type {?} */
        var oneDayLong = 24 * 60 * 60 * 1000;
        /** @type {?} */
        var c_time = nowTemp.getTime();
        /** @type {?} */
        var c_day = nowTemp.getDay() || 7;
        /** @type {?} */
        var m_time = c_time - (c_day - 1) * oneDayLong;
        /** @type {?} */
        var result = this.getDateZeroTime(m_time);
        return result;
    };
    // 获取当前时间的月初零点的时间戳
    // 获取当前时间的月初零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    dateFormat.prototype.getMonthFirstDayDateZeroTime = 
    // 获取当前时间的月初零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var nowTemp = new Date(date);
        /** @type {?} */
        var oneDayLong = 24 * 60 * 60 * 1000;
        /** @type {?} */
        var c_time = nowTemp.getTime();
        /** @type {?} */
        var c_day = nowTemp.getDate();
        /** @type {?} */
        var m_time = c_time - (c_day - 1) * oneDayLong;
        /** @type {?} */
        var result = this.getDateZeroTime(m_time);
        return result;
    };
    // 获取当前时间的当天零点的时间戳
    // 获取当前时间的当天零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    dateFormat.prototype.getDateZeroTime = 
    // 获取当前时间的当天零点的时间戳
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (typeof date == "undefined") {
            throw new Error("date is undefined!");
        }
        if (typeof date == "number") {
            return new Date(new Date(date).toLocaleDateString()).getTime();
        }
        if (typeof date == "object") {
            return new Date(date.toLocaleDateString()).getTime();
        }
    };
    // 判断时间戳是否是今天  str为13位时间戳
    // 判断时间戳是否是今天  str为13位时间戳
    /**
     * @param {?} str
     * @return {?}
     */
    dateFormat.prototype.isToday = 
    // 判断时间戳是否是今天  str为13位时间戳
    /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (new Date(str).toDateString() === new Date().toDateString()) {
            //今天
            return true;
        }
        else if (new Date(str) < new Date()) {
            //之前
            return false;
        }
    };
    return dateFormat;
}(until$1));

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