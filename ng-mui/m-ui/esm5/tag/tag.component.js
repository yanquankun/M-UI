/**
 * @fileoverview added by tsickle
 * Generated from: tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { dateFormat } from 'm-ui-lib/util';
var TagComponent = /** @class */ (function () {
    function TagComponent() {
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
    TagComponent.prototype.tagClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var tag = this.tag.nativeElement;
        if (this.celebrate) {
            /** @type {?} */
            var particles_1 = [];
            /** @type {?} */
            var color_1 = this.randomColor();
            /** @type {?} */
            var particle = document.createElement('span');
            particle.classList.add('particle', 'move');
            // const { x, y } = this.randomLocation();
            var _a = { x: 50 + "px", y: -(e['clientY'] - 50) + "px" }, x_1 = _a.x, y_1 = _a.y;
            particle.style.setProperty('--x', x_1);
            particle.style.setProperty('--y', y_1);
            particle.style.background = color_1;
            tag.appendChild(particle);
            particles_1.push(particle);
            setTimeout((/**
             * @return {?}
             */
            function () {
                for (var i = 0; i < 100; i++) {
                    /** @type {?} */
                    var innerP = document.createElement('span');
                    innerP.classList.add('particle', 'move');
                    innerP.style.transform = "translate(" + x_1 + ", " + y_1 + ")";
                    /** @type {?} */
                    var xs = Math.random() * 200 - 100 + 'px';
                    /** @type {?} */
                    var ys = Math.random() * 200 - 100 + 'px';
                    innerP.style.setProperty('--x', "calc(" + x_1 + " + " + xs + ")");
                    innerP.style.setProperty('--y', "calc(" + y_1 + " + " + ys + ")");
                    innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
                    innerP.style.background = color_1;
                    tag.appendChild(innerP);
                    particles_1.push(innerP);
                }
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    particles_1.forEach((/**
                     * @param {?} particle
                     * @return {?}
                     */
                    function (particle) {
                        particle.remove();
                    }));
                }), 1000);
            }), 1000);
        }
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.randomLocation = /**
     * @return {?}
     */
    function () {
        return {
            x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
            y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
        };
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.randomColor = /**
     * @return {?}
     */
    function () {
        return "hsl(" + Math.floor(Math.random() * 361) + ", 100%, 50%)";
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.hideTag = true;
        /** @type {?} */
        var val = this.content.nativeElement.outerText;
        /** @type {?} */
        var output = {
            val: val,
        };
        this.closeEvent.emit(output);
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var d = new dateFormat;
        console.log(d.format(new Date().getTime(), "date", 13));
    };
    TagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'm-ui-tag',
                    template: "<span class=\"mui-tag\" #tag (click)=\"tagClick($event)\"\n  [ngStyle]=\"{'background':tagBgc?tagBgc:'','border':tagBgc?'none':''}\" *ngIf=\" !hideTag\">\n  <span class=\"mui-tag-content\" #content>\n    <ng-content selector=\" mui-tag\"></ng-content>\n  </span>\n  <i class=\"mui-tag-close\" (click)=\"close()\" *ngIf=\"closeable\">&#xe6ac;</i>\n</span>",
                    styles: ["#primary{background-color:#fafafa;color:rgba(0,0,0,.65);border-color:#d9d9d9}.mui-tag{cursor:pointer;padding:2px 5px;display:inline-block;border:1px solid #d9d9d9;border-radius:5px;font-size:15px;background-color:#fafafa;color:rgba(0,0,0,.65)}.mui-tag-close{font-family:mui-icon-close!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;cursor:pointer}.mui-tag :hover{opacity:.85}"]
                }] }
    ];
    /** @nocollapse */
    TagComponent.ctorParameters = function () { return []; };
    TagComponent.propDecorators = {
        tagBgc: [{ type: Input }],
        closeable: [{ type: Input }],
        celebrate: [{ type: Input }],
        closeEvent: [{ type: Output }],
        content: [{ type: ViewChild, args: ["content",] }],
        tag: [{ type: ViewChild, args: ["tag",] }]
    };
    return TagComponent;
}());
export { TagComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL20tdWktbGliL3RhZy8iLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQztJQW1CRTs7UUFaUyxXQUFNLEdBQVcsRUFBRSxDQUFDOztRQUVwQixjQUFTLEdBQVksS0FBSyxDQUFDOztRQUUzQixjQUFTLEdBQVksS0FBSyxDQUFDOztRQUUxQixlQUFVLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRzFGLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQUVOLENBQUM7Ozs7O0lBRWpCLCtCQUFROzs7O0lBQVIsVUFBUyxDQUFDOztZQUNGLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDWixXQUFTLEdBQUcsRUFBRTs7Z0JBQ2QsT0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7O2dCQUUxQixRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDL0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztZQUdyQyxJQUFBLHFEQUEyRCxFQUF6RCxVQUFDLEVBQUUsVUFBc0Q7WUFDakUsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUMsQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFDLENBQUMsQ0FBQztZQUNyQyxR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RSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6RCxDQUFDOztnQkF6RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiw4V0FBbUM7O2lCQUVwQzs7Ozs7eUJBR0UsS0FBSzs0QkFFTCxLQUFLOzRCQUVMLEtBQUs7NkJBRUwsTUFBTTswQkFDTixTQUFTLFNBQUMsU0FBUztzQkFDbkIsU0FBUyxTQUFDLEtBQUs7O0lBNEVsQixtQkFBQztDQUFBLEFBM0ZELElBMkZDO1NBdEZZLFlBQVk7OztJQUV2Qiw4QkFBNkI7O0lBRTdCLGlDQUFvQzs7SUFFcEMsaUNBQW9DOztJQUVwQyxrQ0FBMEY7O0lBQzFGLCtCQUErQzs7SUFDL0MsMkJBQXVDOztJQUN2QywrQkFBeUI7O0lBQ3pCLGlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGF0ZUZvcm1hdCB9IGZyb20gJ20tdWktbGliL3V0aWwnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbS11aS10YWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFnLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFnLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8g5piv5ZCm5ZCv5Yqo6Ieq5a6a5LmJ6aKc6ImyXG4gIEBJbnB1dCgpIHRhZ0JnYzogc3RyaW5nID0gXCJcIjtcbiAgLy8g5piv5ZCm5Y+v5YWz6ZetXG4gIEBJbnB1dCgpIGNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyDmmK/lkKbmiZPlvIDngrnlh7t0YWfmoIfnrb7lvIDlkK/luobnpZ3mlYjmnpxcbiAgQElucHV0KCkgY2VsZWJyYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIOWFs+mXreS6i+S7tlxuICBAT3V0cHV0KCkgY2xvc2VFdmVudDogRXZlbnRFbWl0dGVyPHsgdmFsOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsOiBzdHJpbmcgfT4oKTtcbiAgQFZpZXdDaGlsZChcImNvbnRlbnRcIikgY29udGVudDogRWxlbWVudFJlZjxhbnk+O1xuICBAVmlld0NoaWxkKFwidGFnXCIpIHRhZzogRWxlbWVudFJlZjxhbnk+O1xuICBoaWRlVGFnOiBib29sZWFuID0gZmFsc2U7XG4gIGJlZm9yZUJnYyA9IFwiI2ZhZmFmYVwiO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdGFnQ2xpY2soZSkge1xuICAgIGNvbnN0IHRhZyA9IHRoaXMudGFnLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuY2VsZWJyYXRlKSB7XG4gICAgICBjb25zdCBwYXJ0aWNsZXMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5yYW5kb21Db2xvcigpO1xuXG4gICAgICBjb25zdCBwYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ3BhcnRpY2xlJywgJ21vdmUnKTtcblxuICAgICAgLy8gY29uc3QgeyB4LCB5IH0gPSB0aGlzLnJhbmRvbUxvY2F0aW9uKCk7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHsgeDogNTAgKyBcInB4XCIsIHk6IC0oZVsnY2xpZW50WSddIC0gNTApICsgXCJweFwiIH07XG4gICAgICBwYXJ0aWNsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS14JywgeCk7XG4gICAgICBwYXJ0aWNsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgeSk7XG4gICAgICBwYXJ0aWNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG5cbiAgICAgIHRhZy5hcHBlbmRDaGlsZChwYXJ0aWNsZSk7XG5cbiAgICAgIHBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBpbm5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgaW5uZXJQLmNsYXNzTGlzdC5hZGQoJ3BhcnRpY2xlJywgJ21vdmUnKTtcbiAgICAgICAgICBpbm5lclAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9LCAke3l9KWA7XG5cbiAgICAgICAgICBjb25zdCB4cyA9IE1hdGgucmFuZG9tKCkgKiAyMDAgLSAxMDAgKyAncHgnO1xuICAgICAgICAgIGNvbnN0IHlzID0gTWF0aC5yYW5kb20oKSAqIDIwMCAtIDEwMCArICdweCc7XG4gICAgICAgICAgaW5uZXJQLnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCBgY2FsYygke3h9ICsgJHt4c30pYCk7XG4gICAgICAgICAgaW5uZXJQLnN0eWxlLnNldFByb3BlcnR5KCctLXknLCBgY2FsYygke3l9ICsgJHt5c30pYCk7XG4gICAgICAgICAgaW5uZXJQLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDIwMCArICdtcyc7XG4gICAgICAgICAgaW5uZXJQLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcblxuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChpbm5lclApO1xuICAgICAgICAgIHBhcnRpY2xlcy5wdXNoKGlubmVyUClcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnJlbW92ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICByYW5kb21Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGggLyAyICsgJ3B4JyxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICsgJ3B4JyxcbiAgICB9XG4gIH1cblxuICByYW5kb21Db2xvcigpIHtcbiAgICByZXR1cm4gYGhzbCgke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2MSl9LCAxMDAlLCA1MCUpYDtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaGlkZVRhZyA9IHRydWU7XG4gICAgY29uc3QgdmFsID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQub3V0ZXJUZXh0O1xuICAgIGNvbnN0IG91dHB1dCA9IHtcbiAgICAgIHZhbDogdmFsLFxuICAgIH1cbiAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdChvdXRwdXQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZCA9IG5ldyBkYXRlRm9ybWF0O1xuICAgIGNvbnNvbGUubG9nKGQuZm9ybWF0KG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBcImRhdGVcIiwgMTMpKVxuICB9XG5cbn1cbiJdfQ==