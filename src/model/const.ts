import { Room } from "./enum";
export const bracketRegex = new RegExp(/[(](.*?)[)]/, 'g');
// export const roomList:{index:number}[] = new Map()
// roomList.set("유치반",Room.KINDERGARTEN);
// roomList.set("유년",Room.ELEMENTARY);
// roomList.set("중등",Room.TEENAGER);
// roomList.set("장년",Room.ADULT);
export const banList = [
    "유치반",
    "유년",
    "중등",
    "장년"
]
export const weeklyList = ["첫째 주일", "둘째 주일", "셋째 주일", "넷째 주일", "다섯째 주일"];


export const startYear = 2021;
// month start zero
export const startMonth = 6;
export const startDate = 4;

export const getStartDate = (): Date => {
    const d = new Date();
    d.setFullYear(startYear)
    d.setMonth(startMonth)
    d.setDate(startDate)
    return d;
}
export const getWeekly = (targetDate: Date): number => {
    const firstDate = new Date();
    // firstDate.setHours(0, 0, 0, 0)
    firstDate.setFullYear(targetDate.getFullYear())
    firstDate.setMonth(targetDate.getMonth(),1)
    // firstDate.setDate(1)

    var weeks = Math.floor(
        (targetDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24 * 7)
    );
    return weeks;
}
export const getDate = (year: number, month: number, week: number): Date => {
    const d = new Date();
    d.setFullYear(year);
    d.setMonth(month - 1,1);
    d.setHours(0);
    // d.setDate(1);

    // d.setHours(0, 0, 0, 0);

    //day indexing >> lord's day:0, mon:1 ~
    var initDay  = d.getDay()
    console.log('getDate init D', d);
    console.log("year:",d.getUTCFullYear(),",month:",d.getUTCMonth(),",day:",d.getUTCDate());
    if( initDay == 0){
        let leftDate  = (week - 1) * 7;
        d.setDate(1 + leftDate);
    } else {
        let nextOffsetOfSundayFromInitDay = 7 - initDay
        let leftDate = (week - 1) * 7 
        d.setDate(1 + nextOffsetOfSundayFromInitDay + leftDate)
    }
    return d;
}
export const getDiffWeek = (targetDate: Date): number => {
    var weeks = Math.floor(
        (targetDate.getTime() - getStartDate().getTime()) / (1000 * 3600 * 24 * 7)
    );
    return weeks;
}

