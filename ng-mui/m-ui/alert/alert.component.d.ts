import { OnInit, EventEmitter } from '@angular/core';
import { AlertType } from './type';
export declare class MuiAlertComponent implements OnInit {
    alertTitle: string;
    type: AlertType;
    showIcon: boolean;
    closeDelayTime: number | boolean;
    closeable: boolean;
    closeEvent: EventEmitter<boolean | string>;
    hide: boolean;
    constructor();
    close(): void;
    ngOnInit(): void;
}
