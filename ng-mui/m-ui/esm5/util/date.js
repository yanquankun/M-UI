/**
 * @fileoverview added by tsickle
 * Generated from: date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var until = /** @class */ (function () {
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
    tslib_1.__extends(dateFormat, _super);
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
        var checkDate = (/**
         * @param {?} sDate
         * @return {?}
         */
        function (sDate) { });
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
}(until));
export { dateFormat };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL20tdWktbGliL3V0aWwvIiwic291cmNlcyI6WyJkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBQUE7SUFJQSxDQUFDOzs7OztJQUhHLG9CQUFJOzs7O0lBQUosVUFBSyxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUNEO0lBQWdDLHNDQUFLO0lBQ2pDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBQ0Qsc0JBQXNCOzs7Ozs7O0lBQ3RCLG1DQUFjOzs7Ozs7SUFBZCxVQUFlLElBQUksRUFBRSxJQUFJO1FBQ3JCLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQztTQUNiO2FBQU07O2dCQUNHLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7O2dCQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTs7Z0JBQ3RCLENBQUMsR0FDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7O2dCQUN2QixDQUFDLEdBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ2pFLENBQUMsR0FDSCxNQUFNLENBQUMsSUFBSSxD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RUFBRTtZQUN6QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsRTtRQUVELElBQUksT0FBTyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFDRCx5QkFBeUI7Ozs7OztJQUN6Qiw0QkFBTzs7Ozs7O0lBQVAsVUFBUSxHQUFHO1FBQ1AsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzVELElBQUk7WUFDSixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ25DLElBQUk7WUFDSixPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUE1UkQsQ0FBZ0MsS0FBSyxHQTRScEMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB1bnRpbCB7XHJcbiAgICBhZGQwKG0pIHtcclxuICAgICAgICByZXR1cm4gbSA8IDEwID8gXCIwXCIgKyBtIDogbTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgZGF0ZUZvcm1hdCBleHRlbmRzIHVudGlsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKiDml7bpl7Tovazml7bpl7TmiLMgdHlwZeS4ujEw5oiWMTMqL1xyXG4gICAgdGltZVRvVGltZXRhbXAocGFyYSwgdHlwZSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBhcmEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShwYXJhKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHRpbWUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgY29uc3QgbSA9XHJcbiAgICAgICAgICAgICAgICBOdW1iZXIodGltZS5nZXRNb250aCgpICsgMSkgPCAxMFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIwXCIgKyAodGltZS5nZXRNb250aCgpICsgMSlcclxuICAgICAgICAgICAgICAgICAgICA6IHRpbWUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPVxyXG4gICAgICAgICAgICAgICAgTnVtYmVyKHRpbWUuZ2V0RGF0ZSgpKSA8IDEwID8gXCIwXCIgKyB0aW1lLmdldERhdGUoKSA6IHRpbWUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBoID1cclxuICAgICAgICAgICAgICAgIE51bWJlcih0aW1lLmdldEhvdXJzKCkpIDwgMTAgPyBcIjBcIiArIHRpbWUuZ2V0SG91cnMoKSA6IHRpbWUuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgY29uc3QgTSA9XHJcbiAgICAgICAgICAgICAgICBOdW1iZXIodGltZS5nZXRNaW51dGVzKCkpIDwgMTBcclxuICAgICAgICAgICAgICAgICAgICA/IFwiMFwiICsgdGltZS5nZXRNaW51dGVzKClcclxuICAgICAgICAgICAgICAgICAgICA6IHRpbWUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBTID1cclxuICAgICAgICAgICAgICAgIE51bWJlcih0aW1lLmdldFNlY29uZHMoKSkgPCAxMFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIwXCIgKyB0aW1lLmdldFNlY29uZHMoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGltZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1RpbWUgPVxyXG4gICAgICAgICAgICAgICAgeS50b1N0cmluZygpICtcclxuICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgIG0udG9TdHJpbmcoKSArXHJcbiAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICBkLnRvU3RyaW5nKCkgK1xyXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgaC50b1N0cmluZygpICtcclxuICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgIE0udG9TdHJpbmcoKSArXHJcbiAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICBTLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IDEwKSByZXR1cm4gKERhdGUucGFyc2UocmVzVGltZSkgLyAxMDAwKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBteVRtID0gRGF0ZS5wYXJzZShyZXNUaW1lKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG15VG07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyog5pe26Ze05oiz6L2s5pel5pyfICovXHJcbiAgICAvKiB0eXBl5Li6ZGF0YeaYr+aXpeacnyAgdHlwZeS4unRpbWXkuLrml7bpl7QgdW5pdOS4uuaXtumXtOaIs+S9jeaVsCovXHJcbiAgICBmb3JtYXQoc2hpamlhbmNodW8sIHR5cGUsIHVuaXQpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChzaGlqaWFuY2h1byA9PSAwIHx8IHNoaWppYW5jaHVvID09IG51bGwgfHwgc2hpamlhbmNodW8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9zaGlqaWFuY2h1b+aYr+aVtOaVsO+8jOWQpuWImeimgXBhcnNlSW506L2s5o2iXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzaGlqaWFuY2h1byAhPSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHNoaWppYW5jaHVvID0gTnVtYmVyKHNoaWppYW5jaHVvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVuaXQgPT0gMTApIHtcclxuICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZShzaGlqaWFuY2h1byAqIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pdCA9PSAxMykge1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKHNoaWppYW5jaHVvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHkgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdmFyIG0gPSB0aW1lLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBkID0gdGltZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIGggPSB0aW1lLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIG1tID0gdGltZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdmFyIHMgPSB0aW1lLmdldFNlY29uZHMoKTtcclxuICAgICAgICBpZiAodHlwZSA9PSBcImRhdGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgeSArXHJcbiAgICAgICAgICAgICAgICBcIi1cIiArXHJcbiAgICAgICAgICAgICAgICBzdXBlci5hZGQwKG0pICtcclxuICAgICAgICAgICAgICAgIFwiLVwiICtcclxuICAgICAgICAgICAgICAgIHN1cGVyLmFkZDAoZCkgK1xyXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgc3VwZXIuYWRkMChoKSArXHJcbiAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICBzdXBlci5hZGQwKG1tKSArXHJcbiAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICBzdXBlci5hZGQwKHMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiZGF0ZU5vU2Vjb25kXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHkgKyBcIi1cIiArIHN1cGVyLmFkZDAobSkgKyBcIi1cIiArIHN1cGVyLmFkZDAoZCkgKyBcIiBcIiArIHN1cGVyLmFkZDAoaCkgKyBcIjpcIiArIHN1cGVyLmFkZDAobW0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInRpbWVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuYWRkMChoKSArIFwiOlwiICsgc3VwZXIuYWRkMChtbSkgKyBcIjpcIiArIHN1cGVyLmFkZDAocyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiTW9udGhEYXlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuYWRkMChtKSArIFwi5pyIXCIgKyBzdXBlci5hZGQwKGQpICsgXCLml6VcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJZZWFyTW9udGhEYXlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4geSArIFwiLVwiICsgc3VwZXIuYWRkMChtKSArIFwiLVwiICsgc3VwZXIuYWRkMChkKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJtb250aERheVRpbWVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuYWRkMChtKSArIFwiLVwiICsgc3VwZXIuYWRkMChkKSArIFwiIFwiICsgc3VwZXIuYWRkMChoKSArIFwiOlwiICsgc3VwZXIuYWRkMChtbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyog6K6h566X5Lik5Liq5pel5pyf5LmL6Ze055u45beu55qE5bm05pWw5pyI5pWw5aSp5pWwKi9cclxuICAgIGdldERpZmZZbWRCZXR3ZWVuRGF0ZShzRGF0ZTEsIHNEYXRlMikge1xyXG4gICAgICAgIHZhciBmaXhEYXRlID0gZnVuY3Rpb24gKHNEYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBhRCA9IHNEYXRlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhRC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYURbaV0gPSBmaXhaZXJvKHBhcnNlSW50KGFEW2ldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFELmpvaW4oXCItXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGZpeFplcm8gPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICByZXR1cm4gbiA8IDEwID8gXCIwXCIgKyBuIDogbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBmaXhJbnQgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFbaV0gPSBwYXJzZUludChhW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBnZXRNb250aERheXMgPSBmdW5jdGlvbiAoeSwgbSkge1xyXG4gICAgICAgICAgICB2YXIgYU1vbnRoRGF5cyA9IFswLCAzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcclxuICAgICAgICAgICAgaWYgKHkgJSA0MDAgPT0gMCB8fCAoeSAlIDQgPT0gMCAmJiB5ICUgMTAwICE9IDApKSB7XHJcbiAgICAgICAgICAgICAgICBhTW9udGhEYXlzWzJdID0gMjk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFNb250aERheXNbbV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2hlY2tEYXRlID0gZnVuY3Rpb24gKHNEYXRlKSB7IH07XHJcbiAgICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICAgIHZhciBtID0gMDtcclxuICAgICAgICB2YXIgZCA9IDA7XHJcbiAgICAgICAgdmFyIHNUbXA7XHJcbiAgICAgICAgdmFyIGFUbXA7XHJcbiAgICAgICAgc0RhdGUxID0gZml4RGF0ZShzRGF0ZTEpO1xyXG4gICAgICAgIHNEYXRlMiA9IGZpeERhdGUoc0RhdGUyKTtcclxuICAgICAgICBpZiAoc0RhdGUxID4gc0RhdGUyKSB7XHJcbiAgICAgICAgICAgIHNUbXAgPSBzRGF0ZTI7XHJcbiAgICAgICAgICAgIHNEYXRlMiA9IHNEYXRlMTtcclxuICAgICAgICAgICAgc0RhdGUxID0gc1RtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFEYXRlMSA9IHNEYXRlMS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgYURhdGUxID0gZml4SW50KGFEYXRlMSk7XHJcbiAgICAgICAgdmFyIGFEYXRlMiA9IHNEYXRlMi5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgYURhdGUyID0gZml4SW50KGFEYXRlMik7XHJcbiAgICAgICAgLy/orqHnrpfnm7jlt67nmoTlubTku71cclxuICAgICAgICAvKmFUbXAgPSBbYURhdGUxWzBdKzEsZml4WmVybyhhRGF0ZTFbMV0pLGZpeFplcm8oYURhdGUxWzJdKV07XHJcbiAgICAgICAgICB3aGlsZShhVG1wLmpvaW4oJy0nKSA8PSBzRGF0ZTIpe1xyXG4gICAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgICBhVG1wWzBdKys7XHJcbiAgICAgICAgICB9Ki9cclxuICAgICAgICB5ID0gYURhdGUyWzBdIC0gYURhdGUxWzBdO1xyXG4gICAgICAgIGlmIChzRGF0ZTIucmVwbGFjZShhRGF0ZTJbMF0sIFwiXCIpIDwgc0RhdGUxLnJlcGxhY2UoYURhdGUxWzBdLCBcIlwiKSkge1xyXG4gICAgICAgICAgICB5ID0geSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6h566X5pyI5Lu9XHJcbiAgICAgICAgYVRtcCA9IFthRGF0ZTFbMF0gKyB5LCBhRGF0ZTFbMV0sIGZpeFplcm8oYURhdGUxWzJdKV07XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGFUbXBbMV0gPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgIGFUbXBbMF0rKztcclxuICAgICAgICAgICAgICAgIGFUbXBbMV0gPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYVRtcFsxXSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChbYVRtcFswXSwgZml4WmVybyhhVG1wWzFdKSwgYVRtcFsyXV0uam9pbihcIi1cIikgPD0gc0RhdGUyKSB7XHJcbiAgICAgICAgICAgICAgICBtKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iuoeeul+WkqeaVsFxyXG4gICAgICAgIGFUbXAgPSBbYURhdGUxWzBdICsgeSwgYURhdGUxWzFdICsgbSwgYURhdGUxWzJdXTtcclxuICAgICAgICBpZiAoYVRtcFsxXSA+IDEyKSB7XHJcbiAgICAgICAgICAgIGFUbXBbMF0rKztcclxuICAgICAgICAgICAgYVRtcFsxXSAtPSAxMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGFUbXBbMl0gPT0gZ2V0TW9udGhEYXlzKGFUbXBbMF0sIGFUbXBbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBhVG1wWzFdKys7XHJcbiAgICAgICAgICAgICAgICBhVG1wWzJdID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFUbXBbMl0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzVG1wID0gW2FUbXBbMF0sIGZpeFplcm8oYVRtcFsxXSksIGZpeFplcm8oYVRtcFsyXSldLmpvaW4oXCItXCIpO1xyXG4gICAgICAgICAgICBpZiAoc1RtcCA8PSBzRGF0ZTIpIHtcclxuICAgICAgICAgICAgICAgIGQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHk6IHksIG06IG0sIGQ6IGQgfTtcclxuICAgIH1cclxuICAgIC8qIOaXtumXtOaIs+i9rOaXtuWIhiAqL1xyXG4gICAgdGltZXN0YW1wVG9Ib3VyTWludXRlKHRtc3RhbXAsIHR5cGUsIHVuaXQpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vdG1zdGFtcOaYr+aVtOaVsO+8jOWQpuWImeimgXBhcnNlSW506L2s5o2iXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0bXN0YW1wICE9IFwibnVtYmVyXCIpIHRtc3RhbXAgPSBOdW1iZXIodG1zdGFtcCk7XHJcbiAgICAgICAgaWYgKHVuaXQgPT0gMTApIHZhciB0aW1lID0gbmV3IERhdGUodG1zdGFtcCAqIDEwMDApO1xyXG4gICAgICAgIGVsc2UgaWYgKHVuaXQgPT0gMTMpIHZhciB0aW1lID0gbmV3IERhdGUodG1zdGFtcCk7XHJcbiAgICAgICAgdmFyIHkgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdmFyIG0gPSB0aW1lLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBkID0gdGltZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIGggPSB0aW1lLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIG1tID0gdGltZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdmFyIHMgPSB0aW1lLmdldFNlY29uZHMoKTtcclxuICAgICAgICBpZiAodHlwZSA9PSBcImRhdGFcIilcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHkgK1xyXG4gICAgICAgICAgICAgICAgXCItXCIgK1xyXG4gICAgICAgICAgICAgICAgc3VwZXIuYWRkMChtKSArXHJcbiAgICAgICAgICAgICAgICBcIi1cIiArXHJcbiAgICAgICAgICAgICAgICBzdXBlci5hZGQwKGQpICtcclxuICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgIHN1cGVyLmFkZDAoaCkgK1xyXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgc3VwZXIuYWRkMChtbSkgK1xyXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgc3VwZXIuYWRkMChzKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJ0aW1lXCIpIHJldHVybiBzdXBlci5hZGQwKGgpICsgXCI6XCIgKyBzdXBlci5hZGQwKG1tKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiDml7bpl7TmiLPovazml7bliIbnp5IgKi9cclxuICAgIHRpbWVzdGFtcFRvSG91ck1pbnV0ZVNlY29uZCh0bXN0YW1wLCB1bml0KTogc3RyaW5nIHtcclxuICAgICAgICAvL3Rtc3RhbXDmmK/mlbTmlbDvvIzlkKbliJnopoFwYXJzZUludOi9rOaNolxyXG4gICAgICAgIGlmICh0eXBlb2YgdG1zdGFtcCAhPSBcIm51bWJlclwiKSB0bXN0YW1wID0gTnVtYmVyKHRtc3RhbXApO1xyXG4gICAgICAgIGlmICh1bml0ID09IDEwKSB2YXIgdGltZSA9IG5ldyBEYXRlKHRtc3RhbXAgKiAxMDAwKTtcclxuICAgICAgICBlbHNlIGlmICh1bml0ID09IDEzKSB2YXIgdGltZSA9IG5ldyBEYXRlKHRtc3RhbXApO1xyXG4gICAgICAgIHZhciBoID0gdGltZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBtbSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFkZDAoaCkgKyBcIjpcIiArIHN1cGVyLmFkZDAobW0pICsgXCI6XCIgKyBzdXBlci5hZGQwKHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIOaXtumXtOaIs+i9rOaciOWkqeaXtuWIhuenkiAqL1xyXG4gICAgdGltZXN0YW1wVG9NREhNUyh0bXN0YW1wLCB1bml0KTogc3RyaW5nIHtcclxuICAgICAgICAvL3Rtc3RhbXDmmK/mlbTmlbDvvIzlkKbliJnopoFwYXJzZUludOi9rOaNolxyXG4gICAgICAgIGlmICh0eXBlb2YgdG1zdGFtcCAhPSBcIm51bWJlclwiKSB0bXN0YW1wID0gTnVtYmVyKHRtc3RhbXApO1xyXG4gICAgICAgIGlmICh1bml0ID09IDEwKSB2YXIgdGltZSA9IG5ldyBEYXRlKHRtc3RhbXAgKiAxMDAwKTtcclxuICAgICAgICBlbHNlIGlmICh1bml0ID09IDEzKSB2YXIgdGltZSA9IG5ldyBEYXRlKHRtc3RhbXApO1xyXG4gICAgICAgIHZhciBtID0gdGltZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICB2YXIgZCA9IHRpbWUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBoID0gdGltZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBtbSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3VwZXIuYWRkMChtKSArIFwiLVwiICsgc3VwZXIuYWRkMChkKSArIFwiIFwiICsgc3VwZXIuYWRkMChoKSArIFwiOlwiICsgc3VwZXIuYWRkMChtbSkgKyBcIjpcIiArIHN1cGVyLmFkZDAocylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze055qE5ZGo5LiA6Zu254K555qE5pe26Ze05oizXHJcbiAgICBnZXRXZWVrRmlyc3REYXlEYXRlWmVyb1RpbWUoZGF0ZSk6IGFueSB7XHJcbiAgICAgICAgbGV0IG5vd1RlbXAgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBsZXQgb25lRGF5TG9uZyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgbGV0IGNfdGltZSA9IG5vd1RlbXAuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBjX2RheSA9IG5vd1RlbXAuZ2V0RGF5KCkgfHwgNztcclxuICAgICAgICBsZXQgbV90aW1lID0gY190aW1lIC0gKGNfZGF5IC0gMSkgKiBvbmVEYXlMb25nO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldERhdGVaZXJvVGltZShtX3RpbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze055qE5pyI5Yid6Zu254K555qE5pe26Ze05oizXHJcbiAgICBnZXRNb250aEZpcnN0RGF5RGF0ZVplcm9UaW1lKGRhdGUpOiBhbnkge1xyXG4gICAgICAgIGxldCBub3dUZW1wID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbGV0IG9uZURheUxvbmcgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIGxldCBjX3RpbWUgPSBub3dUZW1wLmdldFRpbWUoKTtcclxuICAgICAgICBsZXQgY19kYXkgPSBub3dUZW1wLmdldERhdGUoKTtcclxuICAgICAgICBsZXQgbV90aW1lID0gY190aW1lIC0gKGNfZGF5IC0gMSkgKiBvbmVEYXlMb25nO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldERhdGVaZXJvVGltZShtX3RpbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvLyDojrflj5blvZPliY3ml7bpl7TnmoTlvZPlpKnpm7bngrnnmoTml7bpl7TmiLNcclxuICAgIGdldERhdGVaZXJvVGltZShkYXRlKTogYW55IHtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYXRlIGlzIHVuZGVmaW5lZCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUobmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpLmdldFRpbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5Yik5pat5pe26Ze05oiz5piv5ZCm5piv5LuK5aSpICBzdHLkuLoxM+S9jeaXtumXtOaIs1xyXG4gICAgaXNUb2RheShzdHIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobmV3IERhdGUoc3RyKS50b0RhdGVTdHJpbmcoKSA9PT0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAvL+S7iuWkqVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKHN0cikgPCBuZXcgRGF0ZSgpKSB7XHJcbiAgICAgICAgICAgIC8v5LmL5YmNXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=