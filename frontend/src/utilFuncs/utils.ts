import { kNums } from "../consts";

export function toggleElement(id: string) {
  const el = document.getElementById('side-nav') as HTMLElement;

  if(el.getAttribute('data-state') === 'off') 
    el.setAttribute('data-state', 'on')

  else
    el.setAttribute('data-state', 'off')
}

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
    return `${num} ${kNumDict[key]}`;
  return num.toString();
}

export function doubleDeci(num: number): number {
  return Number(String(num)[0]) + (Number(String(num)[1]) / 10);
}