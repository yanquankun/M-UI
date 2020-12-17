/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class MuiAlertComponent {
    constructor() {
        // Alert 标题
        this.alertTitle = "";
        // Alert 类型
        this.type = 'info';
        // 是否显示图标，用于支持用户自定义图标
        this.showIcon = true;
        // 关闭延迟时间
        this.closeDelayTime = 2000;
        // 是否可关闭
        this.closeable = false;
        // 关闭回调
        this.closeEvent = new EventEmitter();
        this.hide = false;
    }
    /**
     * @return {?}
     */
    close() {
        this.closeEvent.emit("close");
        this.hide = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.closeDelayTime && setTimeout((/**
         * @return {?}
         */
        () => {
            this.close();
        }), Number(this.closeDelayTime));
    }
}
MuiAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'm-ui-alert',
                template: "<div class=\"mui-alert {{'mui-alert-'+type}}\" *ngIf=\"!hide\">\n  <span class=\"mui-alert-icon-{{ type }}\" *ngIf=\"showIcon\">\n    <i *ngIf=\"type=='success'\" class=\"iconfont {{type+'-icon'}}\">&#xe68e;</i>\n    <i *ngIf=\"type=='info'||type=='warning'\" class=\"iconfont {{type+'-icon'}}\">&#xe641;</i>\n    <i *ngIf=\"type=='danger'\" class=\"iconfont {{type+'-icon'}}\">&#xe6b0;</i>\n  </span>\n  <div *ngIf=\"alertTitle\" class=\"mui-alert-title\">{{alertTitle}}</div>\n  <i class=\"mui-alert-close\" (click)=\"close()\" *ngIf=\"closeable\">&#xe6ac;</i>\n  <div [ngStyle]=\"{'margin-left':alertTitle?'20px':'0px','display':alertTitle?'block':'inline-block'}\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: ["@font-face{font-family:mui-icon-success;src:url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.eot);src:url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.svg#iconfont) format('svg')}@font-face{font-family:mui-icon-info;src:url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.eot);src:url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.svg#iconfont) format('svg')}@font-face{font-family:mui-icon-danger;src:url(//at.alicdn.com/t/font_2262438_fjvcoayz639.eot);src:url(//at.alicdn.com/t/font_2262438_fjvcoayz639.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.svg#iconfont) format('svg')}@font-face{font-family:mui-icon-close;src:url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.eot);src:url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.svg#iconfont) format('svg')}.iconfont{font-size:20px;font-style:normal;margin-right:5px;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.mui-alert{color:rgba(0,0,0,.85);width:auto;padding:5px 20px;max-width:400px;position:relative}.mui-alert-success{background:#f6ffed;border:1px solid #b7eb8f;display:inline-block;padding:5px 16px}.mui-alert-info{background:#e6f7ff;border:1px solid #91d5ff;display:inline-block;padding:5px 16px}.mui-alert-danger{background:#fff2f0;border:1px solid #ffccc7;display:inline-block;padding:5px 16px}.mui-alert-warning{background:#fffbe6;border:1px solid #ffe58f;display:inline-block;padding:5px 16px}.mui-alert-icon-success{font-family:mui-icon-success!important;color:#52c41a}.mui-alert-icon-info{font-family:mui-icon-info!important;color:#1890ff}.mui-alert-icon-warning{font-family:mui-icon-info!important;color:#faad14}.mui-alert-icon-danger{font-size:17px;font-family:mui-icon-danger!important;color:#f5222d}.mui-alert-title{text-align:left;font-weight:700;display:inline-block}.mui-alert-close{font-family:mui-icon-close!important;font-size:24px;font-style:normal;margin-right:5px;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;cursor:pointer;margin-left:8px;font-weight:900;position:absolute;right:7px;top:0}"]
            }] }
];
/** @nocollapse */
MuiAlertComponent.ctorParameters = () => [];
MuiAlertComponent.propDecorators = {
    alertTitle: [{ type: Input }],
    type: [{ type: Input }],
    showIcon: [{ type: Input }],
    closeDelayTime: [{ type: Input }],
    closeable: [{ type: Input }],
    closeEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MuiAlertComponent.prototype.alertTitle;
    /** @type {?} */
    MuiAlertComponent.prototype.type;
    /** @type {?} */
    MuiAlertComponent.prototype.showIcon;
    /** @type {?} */
    MuiAlertComponent.prototype.closeDelayTime;
    /** @type {?} */
    MuiAlertComponent.prototype.closeable;
    /** @type {?} */
    MuiAlertComponent.prototype.closeEvent;
    /** @type {?} */
    MuiAlertComponent.prototype.hide;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbS11aS1saWIvYWxlcnQvIiwic291cmNlcyI6WyJhbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxpQkFBaUI7SUFlNUI7O1FBYlMsZUFBVSxHQUFXLEVBQUUsQ0FBQzs7UUFFeEIsU0FBSSxHQUFjLE1BQU0sQ0FBQzs7UUFFekIsYUFBUSxHQUFHLElBQUksQ0FBQzs7UUFFaEIsbUJBQWMsR0FBcUIsSUFBSSxDQUFDOztRQUV4QyxjQUFTLEdBQUcsS0FBSyxDQUFDOztRQUVqQixlQUFVLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQzVGLFNBQUksR0FBRyxLQUFLLENBQUM7SUFFRyxDQUFDOzs7O0lBRWpCLEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLElBQUksVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsR0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMHRCQUFxQzs7YUFFdEM7Ozs7O3lCQUdFLEtBQUs7bUJBRUwsS0FBSzt1QkFFTCxLQUFLOzZCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxNQUFNOzs7O0lBVlAsdUNBQWlDOztJQUVqQyxpQ0FBa0M7O0lBRWxDLHFDQUF5Qjs7SUFFekIsMkNBQWlEOztJQUVqRCxzQ0FBMkI7O0lBRTNCLHVDQUE0Rjs7SUFDNUYsaUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydFR5cGUgfSBmcm9tICcuL3R5cGUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbS11aS1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVpQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBBbGVydCDmoIfpophcbiAgQElucHV0KCkgYWxlcnRUaXRsZTogc3RyaW5nID0gXCJcIjtcbiAgLy8gQWxlcnQg57G75Z6LXG4gIEBJbnB1dCgpIHR5cGU6IEFsZXJ0VHlwZSA9ICdpbmZvJztcbiAgLy8g5piv5ZCm5pi+56S65Zu+5qCH77yM55So5LqO5pSv5oyB55So5oi36Ieq5a6a5LmJ5Zu+5qCHXG4gIEBJbnB1dCgpIHNob3dJY29uID0gdHJ1ZTtcbiAgLy8g5YWz6Zet5bu26L+f5pe26Ze0XG4gIEBJbnB1dCgpIGNsb3NlRGVsYXlUaW1lOiBudW1iZXIgfCBib29sZWFuID0gMjAwMDtcbiAgLy8g5piv5ZCm5Y+v5YWz6ZetXG4gIEBJbnB1dCgpIGNsb3NlYWJsZSA9IGZhbHNlO1xuICAvLyDlhbPpl63lm57osINcbiAgQE91dHB1dCgpIGNsb3NlRXZlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHN0cmluZz4oKTtcbiAgaGlkZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZUV2ZW50LmVtaXQoXCJjbG9zZVwiKTtcbiAgICB0aGlzLmhpZGUgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbG9zZURlbGF5VGltZSAmJiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9LCBOdW1iZXIodGhpcy5jbG9zZURlbGF5VGltZSkpO1xuICB9XG5cbn1cbiJdfQ==