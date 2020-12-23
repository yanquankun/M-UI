enum infoStatu {
    'READ',
    'NEW',
    'DELETE',
    'DISABLED',
}
enum eventTypeEnum {
    CLICK = 'click',
    MOUSEENTER = 'mouseenter',
    MOUSELEAVE = 'mouseleave',
}
export const _weekShow: Array<{ id: string | number, Name: string, FullName: string, EnName: string, FullEnName: string }> = [{
    id: 1,
    Name: "一",
    FullName: "星期一",
    EnName: "Mon",
    FullEnName: "Monday"
}, {
    id: 2,
    Name: "二",
    FullName: "星期二",
    EnName: "Tue",
    FullEnName: "Tuesday"
}, {
    id: 3,
    Name: "三",
    FullName: "星期三",
    EnName: "Wed",
    FullEnName: "Wednesday"
}, {
    id: 4,
    Name: "四",
    FullName: "星期四",
    EnName: "Thurs",
    FullEnName: "Thursday"
}, {
    id: 5,
    Name: "五",
    FullName: "星期五",
    EnName: "Fri",
    FullEnName: "Friday"
}, {
    id: 6,
    Name: "六",
    FullName: "星期六",
    EnName: "Sat",
    FullEnName: "Saturday"
}, {
    id: 0,
    Name: "日",
    FullName: "星期日",
    EnName: "Sun",
    FullEnName: "Sunday"
}]
export interface caledarEvent {
    id: string,
    info?: string,
    statu?: infoStatu,
}