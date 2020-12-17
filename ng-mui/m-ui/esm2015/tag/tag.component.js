/**
 * @fileoverview added by tsickle
 * Generated from: tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { dateFormat } from 'm-ui-lib/util';
export class TagComponent {
    constructor() {
        // 是否启动自定义颜色
        this.tagBgc = "";
        // 是否可关闭
        this.closeable = false;
        // 是否打开点击tag标签开启庆祝效果
        this.celebrate = false;
        // 关闭事件
        this.closeEvent = new EventEmitter();
        this.hideTag = false;
        this.beforeBgc = "#fafafa";
    }
    /**
     * @param {?} e
     * @return {?}
     */
    tagClick(e) {
        /** @type {?} */
        const tag = this.tag.nativeElement;
        if (this.celebrate) {
            /** @type {?} */
            const particles = [];
            /** @type {?} */
            const color = this.randomColor();
            /** @type {?} */
            const particle = document.createElement('span');
            particle.classList.add('particle', 'move');
            // const { x, y } = this.randomLocation();
            const { x, y } = { x: 50 + "px", y: -(e['clientY'] - 50) + "px" };
            particle.style.setProperty('--x', x);
            particle.style.setProperty('--y', y);
            particle.style.background = color;
            tag.appendChild(particle);
            particles.push(particle);
            setTimeout((/**
             * @return {?}
             */
            () => {
                for (let i = 0; i < 100; i++) {
                    /** @type {?} */
                    const innerP = document.createElement('span');
                    innerP.classList.add('particle', 'move');
                    innerP.style.transform = `translate(${x}, ${y})`;
                    /** @type {?} */
                    const xs = Math.random() * 200 - 100 + 'px';
                    /** @type {?} */
                    const ys = Math.random() * 200 - 100 + 'px';
                    innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
                    innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
                    innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
                    innerP.style.background = color;
                    tag.appendChild(innerP);
                    particles.push(innerP);
                }
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    particles.forEach((/**
                     * @param {?} particle
                     * @return {?}
                     */
                    particle => {
                        particle.remove();
                    }));
                }), 1000);
            }), 1000);
        }
    }
    /**
     * @return {?}
     */
    randomLocation() {
        return {
            x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
            y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
        };
    }
    /**
     * @return {?}
     */
    randomColor() {
        return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
    }
    /**
     * @return {?}
     */
    close() {
        this.hideTag = true;
        /** @type {?} */
        const val = this.content.nativeElement.outerText;
        /** @type {?} */
        const output = {
            val: val,
        };
        this.closeEvent.emit(output);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const d = new dateFormat;
        console.log(d.format(new Date().getTime(), "date", 13));
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'm-ui-tag',
                template: "<span class=\"mui-tag\" #tag (click)=\"tagClick($event)\"\n  [ngStyle]=\"{'background':tagBgc?tagBgc:'','border':tagBgc?'none':''}\" *ngIf=\" !hideTag\">\n  <span class=\"mui-tag-content\" #content>\n    <ng-content selector=\" mui-tag\"></ng-content>\n  </span>\n  <i class=\"mui-tag-close\" (click)=\"close()\" *ngIf=\"closeable\">&#xe6ac;</i>\n</span>",
                styles: ["#primary{background-color:#fafafa;color:rgba(0,0,0,.65);border-color:#d9d9d9}.mui-tag{cursor:pointer;padding:2px 5px;display:inline-block;border:1px solid #d9d9d9;border-radius:5px;font-size:15px;background-color:#fafafa;color:rgba(0,0,0,.65)}.mui-tag-close{font-family:mui-icon-close!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;cursor:pointer}.mui-tag :hover{opacity:.85}"]
            }] }
];
/** @nocollapse */
TagComponent.ctorParameters = () => [];
TagComponent.propDecorators = {
    tagBgc: [{ type: Input }],
    closeable: [{ type: Input }],
    celebrate: [{ type: Input }],
    closeEvent: [{ type: Output }],
    content: [{ type: ViewChild, args: ["content",] }],
    tag: [{ type: ViewChild, args: ["tag",] }]
};
if (false) {
    /** @type {?} */
    TagComponent.prototype.tagBgc;
    /** @type {?} */
    TagComponent.prototype.closeable;
    /** @type {?} */
    TagComponent.prototype.celebrate;
    /** @type {?} */
    TagComponent.prototype.closeEvent;
    /** @type {?} */
    TagComponent.prototype.content;
    /** @type {?} */
    TagComponent.prototype.tag;
    /** @type {?} */
    TagComponent.prototype.hideTag;
    /** @type {?} */
    TagComponent.prototype.beforeBgc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL20tdWktbGliL3RhZy8iLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxNQUFNLE9BQU8sWUFBWTtJQWN2Qjs7UUFaUyxXQUFNLEdBQVcsRUFBRSxDQUFDOztRQUVwQixjQUFTLEdBQVksS0FBSyxDQUFDOztRQUUzQixjQUFTLEdBQVksS0FBSyxDQUFDOztRQUUxQixlQUFVLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRzFGLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQUVOLENBQUM7Ozs7O0lBRWpCLFFBQVEsQ0FBQyxDQUFDOztjQUNGLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixTQUFTLEdBQUcsRUFBRTs7a0JBQ2QsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7O2tCQUUxQixRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDL0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztrQkFHckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFDakUsUUFBUSxDQUFDLEtBQUss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LENBQUMsR0FBRyxJQUFJLFVBQVU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekQsQ0FBQzs7O1lBekZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsOFdBQW1DOzthQUVwQzs7Ozs7cUJBR0UsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7eUJBRUwsTUFBTTtzQkFDTixTQUFTLFNBQUMsU0FBUztrQkFDbkIsU0FBUyxTQUFDLEtBQUs7Ozs7SUFSaEIsOEJBQTZCOztJQUU3QixpQ0FBb0M7O0lBRXBDLGlDQUFvQzs7SUFFcEMsa0NBQTBGOztJQUMxRiwrQkFBK0M7O0lBQy9DLDJCQUF1Qzs7SUFDdkMsK0JBQXlCOztJQUN6QixpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRhdGVGb3JtYXQgfSBmcm9tICdtLXVpLWxpYi91dGlsJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ20tdWktdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhZy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIOaYr+WQpuWQr+WKqOiHquWumuS5ieminOiJslxuICBASW5wdXQoKSB0YWdCZ2M6IHN0cmluZyA9IFwiXCI7XG4gIC8vIOaYr+WQpuWPr+WFs+mXrVxuICBASW5wdXQoKSBjbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8g5piv5ZCm5omT5byA54K55Ye7dGFn5qCH562+5byA5ZCv5bqG56Wd5pWI5p6cXG4gIEBJbnB1dCgpIGNlbGVicmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyDlhbPpl63kuovku7ZcbiAgQE91dHB1dCgpIGNsb3NlRXZlbnQ6IEV2ZW50RW1pdHRlcjx7IHZhbDogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbDogc3RyaW5nIH0+KCk7XG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50XCIpIGNvbnRlbnQ6IEVsZW1lbnRSZWY8YW55PjtcbiAgQFZpZXdDaGlsZChcInRhZ1wiKSB0YWc6IEVsZW1lbnRSZWY8YW55PjtcbiAgaGlkZVRhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBiZWZvcmVCZ2MgPSBcIiNmYWZhZmFcIjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHRhZ0NsaWNrKGUpIHtcbiAgICBjb25zdCB0YWcgPSB0aGlzLnRhZy5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmNlbGVicmF0ZSkge1xuICAgICAgY29uc3QgcGFydGljbGVzID0gW107XG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMucmFuZG9tQ29sb3IoKTtcblxuICAgICAgY29uc3QgcGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBwYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdwYXJ0aWNsZScsICdtb3ZlJyk7XG5cbiAgICAgIC8vIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5yYW5kb21Mb2NhdGlvbigpO1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSB7IHg6IDUwICsgXCJweFwiLCB5OiAtKGVbJ2NsaWVudFknXSAtIDUwKSArIFwicHhcIiB9O1xuICAgICAgcGFydGljbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0teCcsIHgpO1xuICAgICAgcGFydGljbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0teScsIHkpO1xuICAgICAgcGFydGljbGUuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQocGFydGljbGUpO1xuXG4gICAgICBwYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaW5uZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIGlubmVyUC5jbGFzc0xpc3QuYWRkKCdwYXJ0aWNsZScsICdtb3ZlJyk7XG4gICAgICAgICAgaW5uZXJQLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fSwgJHt5fSlgO1xuXG4gICAgICAgICAgY29uc3QgeHMgPSBNYXRoLnJhbmRvbSgpICogMjAwIC0gMTAwICsgJ3B4JztcbiAgICAgICAgICBjb25zdCB5cyA9IE1hdGgucmFuZG9tKCkgKiAyMDAgLSAxMDAgKyAncHgnO1xuICAgICAgICAgIGlubmVyUC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS14JywgYGNhbGMoJHt4fSArICR7eHN9KWApO1xuICAgICAgICAgIGlubmVyUC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgYGNhbGMoJHt5fSArICR7eXN9KWApO1xuICAgICAgICAgIGlubmVyUC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyMDAgKyAnbXMnO1xuICAgICAgICAgIGlubmVyUC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG5cbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQoaW5uZXJQKTtcbiAgICAgICAgICBwYXJ0aWNsZXMucHVzaChpbm5lclApXG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBwYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5yZW1vdmUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmFuZG9tTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMiArICdweCcsXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0IC8gMiArICdweCcsXG4gICAgfVxuICB9XG5cbiAgcmFuZG9tQ29sb3IoKSB7XG4gICAgcmV0dXJuIGBoc2woJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjEpfSwgMTAwJSwgNTAlKWA7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVUYWcgPSB0cnVlO1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50Lm91dGVyVGV4dDtcbiAgICBjb25zdCBvdXRwdXQgPSB7XG4gICAgICB2YWw6IHZhbCxcbiAgICB9XG4gICAgdGhpcy5jbG9zZUV2ZW50LmVtaXQob3V0cHV0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGQgPSBuZXcgZGF0ZUZvcm1hdDtcbiAgICBjb25zb2xlLmxvZyhkLmZvcm1hdChuZXcgRGF0ZSgpLmdldFRpbWUoKSwgXCJkYXRlXCIsIDEzKSlcbiAgfVxuXG59XG4iXX0=