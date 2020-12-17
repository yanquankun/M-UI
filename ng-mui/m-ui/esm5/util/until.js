/**
 * @fileoverview added by tsickle
 * Generated from: until.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { fromEvent } from "rxjs";
import 'rxjs/Rx';
import { debounce } from "rxjs/operators";
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
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a, h, SH, scrollTop, scrollType;
                return tslib_1.__generator(this, function (_b) {
                    _a = tslib_1.__read([
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
export { until };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW50aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tLXVpLWxpYi91dGlsLyIsInNvdXJjZXMiOlsidW50aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLFNBQVMsQ0FBQTtBQUNoQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUM7SUFBQTtJQXNCQSxDQUFDO0lBckJHLGlDQUFpQzs7Ozs7SUFDakMsMkJBQVc7Ozs7O0lBQVg7O1lBQ1UsTUFBTTs7O1FBQUc7Ozs7b0JBQ0wsS0FBQSxlQUFxQjt3QkFDdkIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZO3dCQUNuRSxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVk7d0JBQ25FLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUztxQkFDaEUsSUFBQSxFQUpNLENBQUMsUUFBQSxFQUFFLEVBQUUsUUFBQSxFQUFFLFNBQVMsUUFBQTtvQkFLbkIsVUFBVSxHQUFHLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxTQUFTO3dCQUFFLFVBQVUsR0FBRyxLQUFLLENBQUM7eUJBQzlCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUU7d0JBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQzs7d0JBQ3hELFVBQVUsR0FBRyxRQUFRLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRTt3QkFDdkMsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsS0FBSyxFQUFFLFVBQVU7cUJBQ3BCLENBQUMsQ0FBQzs7OztTQUNOLENBQUE7UUFDRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQzdCLElBQUksQ0FBQyxRQUFROzs7UUFBQyxjQUFNLE9BQUEsTUFBTSxFQUFFLEVBQVIsQ0FBUSxFQUFDLENBQUM7YUFDOUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCAncnhqcy9SeCdcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuZXhwb3J0IGNsYXNzIHVudGlsIHtcclxuICAgIC8vIOWIpOaWreaYr+WQpua7mui9ruWIsOmhtuaIluaYr+WIsOW6leS6hiDliLDpobbpg6jkuLp0b3Ag5Yiw5bqV6YOo5Li6ZG93blxyXG4gICAgc2Nyb2xsRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBbaCwgU0gsIHNjcm9sbFRvcF0gPSBbXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxUeXBlID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKCFzY3JvbGxUb3ApIHNjcm9sbFR5cGUgPSBcInRvcFwiO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChTSCA+IGggJiYgc2Nyb2xsVG9wICsgaCA9PT0gU0gpIHNjcm9sbFR5cGUgPSBcImRvd25cIjtcclxuICAgICAgICAgICAgZWxzZSBzY3JvbGxUeXBlID0gXCJzY3JvbGxcIjtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCBcInNjcm9sbFR5cGVcIiwge1xyXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNjcm9sbFR5cGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csIFwic2Nyb2xsXCIpXHJcbiAgICAgICAgICAgIC5waXBlKGRlYm91bmNlKCgpID0+IHNjcm9sbCgpKSlcclxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSg1MDApO1xyXG4gICAgfVxyXG59Il19