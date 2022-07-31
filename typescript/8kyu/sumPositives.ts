// https://www.codewars.com/kata/5715eaedb436cf5606000381

export function positiveSum(arr: number[]): number {
  return arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc + 0), 0);
}
