(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('m-ui-lib/alert'), require('m-ui-lib/tag')) :
    typeof define === 'function' && define.amd ? define('m-ui-lib', ['exports', '@angular/core', '@angular/common', 'm-ui-lib/alert', 'm-ui-lib/tag'], factory) :
    (factory((global['m-ui-lib'] = {}),global.ng.core,global.ng.common,global['m-ui-lib'].alert,global['m-ui-lib'].tag));
}(this, (function (exports,core,common,alert,tag) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: m-ui-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MUiLibModule = /** @class */ (function () {
        function MUiLibModule() {
        }
        /**
         * @return {?}
         */
        MUiLibModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: MUiLibModule,
                };
            };
        MUiLibModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [alert.MuiAlertModule, tag.TagModule],
                        providers: [],
                        declarations: []
                    },] }
        ];
        return MUiLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: m-ui-lib.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MuiAlertComponent = alert.MuiAlertComponent;
    exports.MuiAlertModule = alert.MuiAlertModule;
    exports.TagComponent = tag.TagComponent;
    exports.TagModule = tag.TagModule;
    exports.MUiLibModule = MUiLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=m-ui-lib.umd.js.map