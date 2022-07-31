// https://www.codewars.com/kata/5517fcb0236c8826940003c9

function findGreatestCommonDivisor(a: number, b: number): number {
  return b ? findGreatestCommonDivisor(b, a % b) : a;
}

export function sumFracts(l: number[][]): string | null {
  if (l.length === 0) {
    return null;
  }

  if (l.length === 0) return null;
  const [numerator, denominator] = l.reduce(([a, x], [b, y]) => [a * y + x * b, x * y]);

  const greatestCommonDivisor = findGreatestCommonDivisor(numerator, denominator);

  return greatestCommonDivisor === denominator
    ? `${numerator / denominator}`
    : `[${numerator / greatestCommonDivisor}, ${denominator / greatestCommonDivisor}]`;
}
