import { roomList } from '../model/const';
import { Room } from '../model/enum';
import { FrontHeaderTable } from '../model/table';

export function getFrontHeaderTableList(): Array<FrontHeaderTable> {
  let list: Array<FrontHeaderTable> = [];

  getNextSundayAndWeekOrder((nextSunday: Date, weekly: number) => {
    roomList.forEach((room, ban) => {
      const header = new FrontHeaderTable(
        getNextNo(room),
        room,
        nextSunday,
        weekly,
        ban
      );
      list.push(header);
    });
  });
  return list;
}

export function getDefaultDate(): Date {
  let date = new Date();
  date.setFullYear(2021);
  date.setMonth(6);
  date.setDate(4);
  date.setHours(0);
  return date;
}
export function getNextNo(room: Room) {
  let date1 = new Date();
  let date2 = getDefaultDate();
  date1.setDate(1);

  var weeks = Math.round(
    (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 7)
  );
  // console.log(weeks);
  return room + weeks;
}
export function getNextSundayAndWeekOrder(
  callback: (nextSunday: Date, order: number) => void
) {
  let now = new Date();
  let first = new Date();
  var order = 0;
  first.setDate(1);
  while (true) {
    let day = first.getDay();
    if (day == 0) {
      console.log(first);
      order++;
      break;
    } else {
      first.setDate(first.getDate() + 1);
    }
  }
  while (true) {
    if (now.getDate() - first.getDate() > 7) {
      first.setDate(first.getDate() + 7);
      order++;
    } else {
      first.setDate(first.getDate() + 7);
      order++;
      console.log(first, ' order:', order);
      break;
    }
  }
  callback(first, order);
}

export const now = new Date();
export const nowYear = now.getFullYear();
console.log("now year",nowYear);

export function getYears(): Array<Number> {
  let first = new Date();
  let list: Array<Number> = [];
  first.setFullYear(2018);
  while (true) {
    const compareYear = first.getFullYear();
    if (compareYear <= nowYear) {
      list.push(compareYear);
      first.setFullYear(compareYear + 1);
    } else break;
  }
  return list;
}

export function getMonth(year: Number): Array<Number> {
  const list = [];
  if (year < nowYear) {
    for (let index = 0; index < 12; index++) {
      list[index] = index + 1;
    }
  } else {
    for (let index = 0; index < now.getMonth() + 1; index++) {
      list[index] = index + 1;
    }
  }
  return list;
}
