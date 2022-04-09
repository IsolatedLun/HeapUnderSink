import { kNums } from "../consts";

/**
 * @param id
 * @summary Toggles the [data-state] of an element (on, off)
*/
export function toggleElement(id: string) {
  const el = document.getElementById('side-nav') as HTMLElement;

  if(el.getAttribute('data-state') === 'off') 
    el.setAttribute('data-state', 'on')

  else
    el.setAttribute('data-state', 'off')
}

/**
 * @param num
 * @summary Humanizes a number
 * @example humanizeNumber(89456) => "89.4k"
*/
export function humanizeNumber(num: number): string {
  const kNumDict = kNums as any;
  let index = 0;
  let key = null;

  Object.keys(kNumDict).forEach(kNum => {
    if(num > Number(kNum)) {
      key = kNum;
      index++;
    }
  })

  if(num > 999)
    num = doubleDeci(num);

  if(key)
    return `${num}${kNumDict[key]}`;
  return num.toString();
}

/**
 * @param num
 * @summary Puts the 1st integer as the whole and 2nd integer as the float
 * @example humanizeNumber(89456) => "89.4"
*/
export function doubleDeci(num: number): number {
  return Number(String(num)[0]) + (Number(String(num)[1]) / 10);
}