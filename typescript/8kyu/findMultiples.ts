// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

export function findMultiples(integer: number, limit: number): number[] {
  return Array.from(Array(limit).keys())
    .map((elem) => elem + 1)
    .filter((elem) => elem % integer === 0);
}
