/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var MuiAlertComponent = /** @class */ (function () {
    function MuiAlertComponent() {
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
    MuiAlertComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeEvent.emit("close");
        this.hide = true;
    };
    /**
     * @return {?}
     */
    MuiAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.closeDelayTime && setTimeout((/**
         * @return {?}
         */
        function () {
            _this.close();
        }), Number(this.closeDelayTime));
    };
    MuiAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'm-ui-alert',
                    template: "<div class=\"mui-alert {{'mui-alert-'+type}}\" *ngIf=\"!hide\">\n  <span class=\"mui-alert-icon-{{ type }}\" *ngIf=\"showIcon\">\n    <i *ngIf=\"type=='success'\" class=\"iconfont {{type+'-icon'}}\">&#xe68e;</i>\n    <i *ngIf=\"type=='info'||type=='warning'\" class=\"iconfont {{type+'-icon'}}\">&#xe641;</i>\n    <i *ngIf=\"type=='danger'\" class=\"iconfont {{type+'-icon'}}\">&#xe6b0;</i>\n  </span>\n  <div *ngIf=\"alertTitle\" class=\"mui-alert-title\">{{alertTitle}}</div>\n  <i class=\"mui-alert-close\" (click)=\"close()\" *ngIf=\"closeable\">&#xe6ac;</i>\n  <div [ngStyle]=\"{'margin-left':alertTitle?'20px':'0px','display':alertTitle?'block':'inline-block'}\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    styles: ["@font-face{font-family:mui-icon-success;src:url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.eot);src:url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_3rb2zhuvufo.svg#iconfont) format('svg')}@font-face{font-family:mui-icon-info;src:url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.eot);src:url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_ilae3l0d1uk.svg#iconfont) format('svg')}@font-face{font-family:mui-icon-danger;src:url(//at.alicdn.com/t/font_2262438_fjvcoayz639.eot);src:url(//at.alicdn.com/t/font_2262438_fjvcoayz639.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_fjvcoayz639.svg#iconfont) format('svg')}@font-face{font-family:mui-icon-close;src:url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.eot);src:url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.woff2) format('woff2'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.woff) format('woff'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.ttf) format('truetype'),url(//at.alicdn.com/t/font_2262438_04gmj82wq66a.svg#iconfont) format('svg')}.iconfont{font-size:20px;font-style:normal;margin-right:5px;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.mui-alert{color:rgba(0,0,0,.85);width:auto;padding:5px 20px;max-width:400px;position:relative}.mui-alert-success{background:#f6ffed;border:1px solid #b7eb8f;display:inline-block;padding:5px 16px}.mui-alert-info{background:#e6f7ff;border:1px solid #91d5ff;display:inline-block;padding:5px 16px}.mui-alert-danger{background:#fff2f0;border:1px solid #ffccc7;display:inline-block;padding:5px 16px}.mui-alert-warning{background:#fffbe6;border:1px solid #ffe58f;display:inline-block;padding:5px 16px}.mui-alert-icon-success{font-family:mui-icon-success!important;color:#52c41a}.mui-alert-icon-info{font-family:mui-icon-info!important;color:#1890ff}.mui-alert-icon-warning{font-family:mui-icon-info!important;color:#faad14}.mui-alert-icon-danger{font-size:17px;font-family:mui-icon-danger!important;color:#f5222d}.mui-alert-title{text-align:left;font-weight:700;display:inline-block}.mui-alert-close{font-family:mui-icon-close!important;font-size:24px;font-style:normal;margin-right:5px;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;cursor:pointer;margin-left:8px;font-weight:900;position:absolute;right:7px;top:0}"]
                }] }
    ];
    /** @nocollapse */
    MuiAlertComponent.ctorParameters = function () { return []; };
    MuiAlertComponent.propDecorators = {
        alertTitle: [{ type: Input }],
        type: [{ type: Input }],
        showIcon: [{ type: Input }],
        closeDelayTime: [{ type: Input }],
        closeable: [{ type: Input }],
        closeEvent: [{ type: Output }]
    };
    return MuiAlertComponent;
}());
export { MuiAlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbS11aS1saWIvYWxlcnQvIiwic291cmNlcyI6WyJhbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBb0JFOztRQWJTLGVBQVUsR0FBVyxFQUFFLENBQUM7O1FBRXhCLFNBQUksR0FBYyxNQUFNLENBQUM7O1FBRXpCLGFBQVEsR0FBRyxJQUFJLENBQUM7O1FBRWhCLG1CQUFjLEdBQXFCLElBQUksQ0FBQzs7UUFFeEMsY0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFFakIsZUFBVSxHQUFtQyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUM1RixTQUFJLEdBQUcsS0FBSyxDQUFDO0lBRUcsQ0FBQzs7OztJQUVqQixpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsY0FBYyxJQUFJLFVBQVU7OztRQUFDO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsR0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsMHRCQUFxQzs7aUJBRXRDOzs7Ozs2QkFHRSxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSztpQ0FFTCxLQUFLOzRCQUVMLEtBQUs7NkJBRUwsTUFBTTs7SUFnQlQsd0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSxpQkFBaUI7OztJQUU1Qix1Q0FBaUM7O0lBRWpDLGlDQUFrQzs7SUFFbEMscUNBQXlCOztJQUV6QiwyQ0FBaUQ7O0lBRWpELHNDQUEyQjs7SUFFM0IsdUNBQTRGOztJQUM1RixpQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0VHlwZSB9IGZyb20gJy4vdHlwZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtLXVpLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWlBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIEFsZXJ0IOagh+mimFxuICBASW5wdXQoKSBhbGVydFRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICAvLyBBbGVydCDnsbvlnotcbiAgQElucHV0KCkgdHlwZTogQWxlcnRUeXBlID0gJ2luZm8nO1xuICAvLyDmmK/lkKbmmL7npLrlm77moIfvvIznlKjkuo7mlK/mjIHnlKjmiLfoh6rlrprkuYnlm77moIdcbiAgQElucHV0KCkgc2hvd0ljb24gPSB0cnVlO1xuICAvLyDlhbPpl63lu7bov5/ml7bpl7RcbiAgQElucHV0KCkgY2xvc2VEZWxheVRpbWU6IG51bWJlciB8IGJvb2xlYW4gPSAyMDAwO1xuICAvLyDmmK/lkKblj6/lhbPpl61cbiAgQElucHV0KCkgY2xvc2VhYmxlID0gZmFsc2U7XG4gIC8vIOWFs+mXreWbnuiwg1xuICBAT3V0cHV0KCkgY2xvc2VFdmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPigpO1xuICBoaWRlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdChcImNsb3NlXCIpO1xuICAgIHRoaXMuaGlkZSA9IHRydWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsb3NlRGVsYXlUaW1lICYmIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0sIE51bWJlcih0aGlzLmNsb3NlRGVsYXlUaW1lKSk7XG4gIH1cblxufVxuIl19