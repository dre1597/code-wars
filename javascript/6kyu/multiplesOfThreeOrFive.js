// https://www.codewars.com/kata/514b92a657cdc65150000006

function multiplesOfThreeOrFive(number) {
  if (number < 0) return 0;
  const multiplesOfThree = [];
  const multiplesOfFive = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0) {
      multiplesOfThree.push(i);
    } else if (i % 5 == 0) {
      multiplesOfFive.push(i);
    }
  }
  const threesSum = multiplesOfThree.length > 0 ? multiplesOfThree.reduce((acc, curr) => acc + curr, 0) : 0;
  const fivesSum = multiplesOfFive.length > 0 ? multiplesOfFive.reduce((acc, curr) => acc + curr, 0) : 0;
  return threesSum + fivesSum;
}
