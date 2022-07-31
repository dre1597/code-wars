// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

export function cockroachSpeed(s: number): number {
  const kmHrToCmSec = 100000 / 3600;

  return Math.floor(s * kmHrToCmSec);
}
