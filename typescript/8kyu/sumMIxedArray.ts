// Sensei: https://www.codewars.com/users/PG1

/*

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

export function sumMix(x: any[]): number {
  return x.reduce((acc, curr) => Number(acc) + Number(curr), 0);
}
