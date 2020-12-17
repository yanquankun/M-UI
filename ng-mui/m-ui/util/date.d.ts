declare class until {
    add0(m: any): any;
}
export declare class dateFormat extends until {
    constructor();
    timeToTimetamp(para: any, type: any): string;
    format(shijianchuo: any, type: any, unit: any): string;
    getDiffYmdBetweenDate(sDate1: any, sDate2: any): {
        y: number;
        m: number;
        d: number;
    };
    timestampToHourMinute(tmstamp: any, type: any, unit: any): string;
    timestampToHourMinuteSecond(tmstamp: any, unit: any): string;
    timestampToMDHMS(tmstamp: any, unit: any): string;
    getWeekFirstDayDateZeroTime(date: any): any;
    getMonthFirstDayDateZeroTime(date: any): any;
    getDateZeroTime(date: any): any;
    isToday(str: any): boolean;
}
export {};
