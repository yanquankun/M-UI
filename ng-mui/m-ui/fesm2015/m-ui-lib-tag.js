import { dateFormat } from 'm-ui-lib/util';
import { Component, Input, Output, EventEmitter, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TagComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TagModule {
}
TagModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TagComponent],
                imports: [
                    CommonModule
                ],
                exports: [TagComponent]
            },] }
];

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

export { TagComponent, TagModule };

//# sourceMappingURL=m-ui-lib-tag.js.map