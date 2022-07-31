// https://www.codewars.com/kata/5601409514fc93442500010b

export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  classPoints.push(yourPoints);

  const average = classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;

  return yourPoints > average;
}
