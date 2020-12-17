import { fromEvent } from "rxjs";
import 'rxjs/Rx'
import { debounce } from "rxjs/operators";
export class until {
    // 判断是否滚轮到顶或是到底了 到顶部为top 到底部为down
    scrollEvent() {
        const scroll = async function () {
            const [h, SH, scrollTop] = [
                document.documentElement.clientHeight || document.body.clientHeight,
                document.documentElement.scrollHeight || document.body.scrollHeight,
                document.documentElement.scrollTop || document.body.scrollTop,
            ];
            let scrollType = "";
            if (!scrollTop) scrollType = "top";
            else if (SH > h && scrollTop + h === SH) scrollType = "down";
            else scrollType = "scroll";
            Object.defineProperty(event, "scrollType", {
                writable: false,
                value: scrollType,
            });
        };
        return fromEvent(window, "scroll")
            .pipe(debounce(() => scroll()))
            .debounceTime(500);
    }
}