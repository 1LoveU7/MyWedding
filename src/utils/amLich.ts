// Chuẩn VN – Hồ Ngọc Đức (GMT+7)
const PI = Math.PI;

function INT(d: number) {
  return Math.floor(d);
}

function jdFromDate(dd: number, mm: number, yy: number) {
  const a = INT((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  return dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
}

// function jdToDate(jd: number) {
//   let a = jd + 32044;
//   let b = INT((4 * a + 3) / 146097);
//   let c = a - INT((b * 146097) / 4);
//   let d = INT((4 * c + 3) / 1461);
//   let e = c - INT((1461 * d) / 4);
//   let m = INT((5 * e + 2) / 153);
//   return [e - INT((153 * m + 2) / 5) + 1, m + 3 - 12 * INT(m / 10), b * 100 + d - 4800 + INT(m / 10)];
// }

function getNewMoonDay(k: number, timeZone: number) {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 += 0.00033 * Math.sin(((166.56 + 132.87 * T - 0.009173 * T2) * PI) / 180);
  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
  let C1 = (0.1734 - 0.000393 * T) * Math.sin((M * PI) / 180) + 0.0021 * Math.sin((2 * M * PI) / 180);
  C1 -= 0.4068 * Math.sin((Mpr * PI) / 180);
  C1 += 0.0161 * Math.sin((2 * Mpr * PI) / 180);
  C1 -= 0.0004 * Math.sin((3 * Mpr * PI) / 180);
  C1 += 0.0104 * Math.sin((2 * F * PI) / 180);
  C1 -= 0.0051 * Math.sin(((M + Mpr) * PI) / 180);
  C1 -= 0.0074 * Math.sin(((M - Mpr) * PI) / 180);
  C1 += 0.0004 * Math.sin(((2 * F + M) * PI) / 180);
  C1 -= 0.0004 * Math.sin(((2 * F - M) * PI) / 180);
  C1 -= 0.0006 * Math.sin(((2 * F + Mpr) * PI) / 180);
  C1 += 0.001 * Math.sin(((2 * F - Mpr) * PI) / 180);
  C1 += 0.0005 * Math.sin(((2 * Mpr + M) * PI) / 180);
  const deltat = T < -11 ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3 : -0.000278 + 0.000265 * T + 0.000262 * T2;
  const JdNew = Jd1 + C1 - deltat;
  return INT(JdNew + 0.5 + timeZone / 24);
}

// function getSunLongitude(jdn: number, timeZone: number) {
//   const T = (jdn - 2451545.5 - timeZone / 24) / 36525;
//   const T2 = T * T;
//   let dr = PI / 180;
//   let M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
//   let L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
//   let DL =
//     (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M) + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M);
//   let L = L0 + DL;
//   L = L * dr;
//   L = L - PI * 2 * INT(L / (PI * 2));
//   return INT((L / PI) * 6);
// }

export function solarToLunar(dd: number, mm: number, yy: number, timeZone = 7) {
  const dayNumber = jdFromDate(dd, mm, yy);
  const k = INT((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = getNewMoonDay(k + 1, timeZone);
  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone);
  }

  let a11 = getNewMoonDay(INT((jdFromDate(31, 12, yy) - 2415021.076998695) / 29.530588853), timeZone);
  let b11 = a11;
  let lunarYear;
  if (a11 >= monthStart) {
    lunarYear = yy;
    a11 = getNewMoonDay(INT((jdFromDate(31, 12, yy - 1) - 2415021.076998695) / 29.530588853), timeZone);
  } else {
    lunarYear = yy + 1;
    b11 = getNewMoonDay(INT((jdFromDate(31, 12, yy + 1) - 2415021.076998695) / 29.530588853), timeZone);
  }

  const lunarDay = dayNumber - monthStart + 1;
  const diff = INT((monthStart - a11) / 29);
  let lunarLeap = 0;
  let lunarMonth = diff + 11;
  if (b11 - a11 > 365) {
    const leapMonthDiff = diff;
    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
      if (diff === leapMonthDiff) lunarLeap = 1;
    }
  }
  if (lunarMonth > 12) lunarMonth -= 12;
  if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;

  return {
    day: lunarDay,
    month: lunarMonth,
    year: lunarYear,
    isLeap: lunarLeap === 1,
  };
}
