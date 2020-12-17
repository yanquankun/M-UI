import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class TagComponent implements OnInit {
    tagBgc: string;
    closeable: boolean;
    celebrate: boolean;
    closeEvent: EventEmitter<{
        val: string;
    }>;
    content: ElementRef<any>;
    tag: ElementRef<any>;
    hideTag: boolean;
    beforeBgc: string;
    constructor();
    tagClick(e: any): void;
    randomLocation(): {
        x: string;
        y: string;
    };
    randomColor(): string;
    close(): void;
    ngOnInit(): void;
}
