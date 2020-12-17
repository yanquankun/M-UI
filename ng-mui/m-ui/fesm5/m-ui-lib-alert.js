import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MuiAlertModule = /** @class */ (function () {
    function MuiAlertModule() {
    }
    MuiAlertModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MuiAlertComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [MuiAlertComponent]
                },] }
    ];
    return MuiAlertModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: m-ui-lib-alert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MuiAlertComponent, MuiAlertModule };

//# sourceMappingURL=m-ui-lib-alert.js.map