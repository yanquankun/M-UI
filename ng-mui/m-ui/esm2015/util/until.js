/**
 * @fileoverview added by tsickle
 * Generated from: until.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { fromEvent } from "rxjs";
import 'rxjs/Rx';
import { debounce } from "rxjs/operators";
export class until {
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
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW50aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tLXVpLWxpYi91dGlsLyIsInNvdXJjZXMiOlsidW50aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLFNBQVMsQ0FBQTtBQUNoQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsTUFBTSxPQUFPLEtBQUs7Ozs7O0lBRWQsV0FBVzs7Y0FDRCxNQUFNOzs7UUFBRzs7c0JBQ0wsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHO29CQUN2QixRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ25FLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFDbkUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTO2lCQUNoRTs7b0JBQ0csVUFBVSxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTO29CQUFFLFVBQVUsR0FBRyxLQUFLLENBQUM7cUJBQzlCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUU7b0JBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQzs7b0JBQ3hELFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRTtvQkFDdkMsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsS0FBSyxFQUFFLFVBQVU7aUJBQ3BCLENBQUMsQ0FBQztZQUNQLENBQUM7U0FBQSxDQUFBO1FBQ0QsT0FBTyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUM3QixJQUFJLENBQUMsUUFBUTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQzthQUM5QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICdyeGpzL1J4J1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5leHBvcnQgY2xhc3MgdW50aWwge1xyXG4gICAgLy8g5Yik5pat5piv5ZCm5rua6L2u5Yiw6aG25oiW5piv5Yiw5bqV5LqGIOWIsOmhtumDqOS4unRvcCDliLDlupXpg6jkuLpkb3duXHJcbiAgICBzY3JvbGxFdmVudCgpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGwgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtoLCBTSCwgc2Nyb2xsVG9wXSA9IFtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbFR5cGUgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoIXNjcm9sbFRvcCkgc2Nyb2xsVHlwZSA9IFwidG9wXCI7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKFNIID4gaCAmJiBzY3JvbGxUb3AgKyBoID09PSBTSCkgc2Nyb2xsVHlwZSA9IFwiZG93blwiO1xyXG4gICAgICAgICAgICBlbHNlIHNjcm9sbFR5cGUgPSBcInNjcm9sbFwiO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsIFwic2Nyb2xsVHlwZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2Nyb2xsVHlwZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdywgXCJzY3JvbGxcIilcclxuICAgICAgICAgICAgLnBpcGUoZGVib3VuY2UoKCkgPT4gc2Nyb2xsKCkpKVxyXG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKDUwMCk7XHJcbiAgICB9XHJcbn0iXX0=