import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiAlertModule } from 'm-ui-lib/alert';
export { MuiAlertComponent, MuiAlertModule } from 'm-ui-lib/alert';
import { TagModule } from 'm-ui-lib/tag';
export { TagComponent, TagModule } from 'm-ui-lib/tag';

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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [MuiAlertModule, TagModule],
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

export { MUiLibModule };

//# sourceMappingURL=m-ui-lib.js.map