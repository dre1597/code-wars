// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

export function countPositivesSumNegatives(input: any) {
  if (!input || input.length === 0) {
    return [];
  }

  let count = 0;
  let sum = 0;

  input.forEach((elem: number) => {
    elem > 0 ? count++ : (sum += elem);
  });

  return [count, sum];
}
