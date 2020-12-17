(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('m-ui-lib/util'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('m-ui-lib/tag', ['exports', 'm-ui-lib/util', '@angular/core', '@angular/common'], factory) :
    (factory((global['m-ui-lib'] = global['m-ui-lib'] || {}, global['m-ui-lib'].tag = {}),global['m-ui-lib'].util,global.ng.core,global.ng.common));
}(this, (function (exports,util,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: tag.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TagComponent = /** @class */ (function () {
        function TagComponent() {
            // 是否启动自定义颜色
            this.tagBgc = "";
            // 是否可关闭
            this.closeable = false;
            // 是否打开点击tag标签开启庆祝效果
            this.celebrate = false;
            // 关闭事件
            this.closeEvent = new core.EventEmitter();
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
                    setTimeout(( /**
                     * @return {?}
                     */function () {
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
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            particles_1.forEach(( /**
                             * @param {?} particle
                             * @return {?}
                             */function (particle) {
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
                var d = new util.dateFormat;
                console.log(d.format(new Date().getTime(), "date", 13));
            };
        TagComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'm-ui-tag',
                        template: "<span class=\"mui-tag\" #tag (click)=\"tagClick($event)\"\n  [ngStyle]=\"{'background':tagBgc?tagBgc:'','border':tagBgc?'none':''}\" *ngIf=\" !hideTag\">\n  <span class=\"mui-tag-content\" #content>\n    <ng-content selector=\" mui-tag\"></ng-content>\n  </span>\n  <i class=\"mui-tag-close\" (click)=\"close()\" *ngIf=\"closeable\">&#xe6ac;</i>\n</span>",
                        styles: ["#primary{background-color:#fafafa;color:rgba(0,0,0,.65);border-color:#d9d9d9}.mui-tag{cursor:pointer;padding:2px 5px;display:inline-block;border:1px solid #d9d9d9;border-radius:5px;font-size:15px;background-color:#fafafa;color:rgba(0,0,0,.65)}.mui-tag-close{font-family:mui-icon-close!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;cursor:pointer}.mui-tag :hover{opacity:.85}"]
                    }] }
        ];
        /** @nocollapse */
        TagComponent.ctorParameters = function () { return []; };
        TagComponent.propDecorators = {
            tagBgc: [{ type: core.Input }],
            closeable: [{ type: core.Input }],
            celebrate: [{ type: core.Input }],
            closeEvent: [{ type: core.Output }],
            content: [{ type: core.ViewChild, args: ["content",] }],
            tag: [{ type: core.ViewChild, args: ["tag",] }]
        };
        return TagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: tag.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TagModule = /** @class */ (function () {
        function TagModule() {
        }
        TagModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TagComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [TagComponent]
                    },] }
        ];
        return TagModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: m-ui-lib-tag.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TagComponent = TagComponent;
    exports.TagModule = TagModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=m-ui-lib-tag.umd.js.map