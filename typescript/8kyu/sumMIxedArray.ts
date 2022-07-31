// https://www.codewars.com/kata/57eaeb9578748ff92a000009

export function sumMix(x: any[]): number {
  return x.reduce((acc, curr) => Number(acc) + Number(curr), 0);
}
