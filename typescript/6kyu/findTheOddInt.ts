// https://www.codewars.com/kata/54da5a58ea159efa38000836

export const findOdd = (xs: number[]): number => {
  const numberCountMapping: Map<number, number> = new Map<number, number>();
  for (let num: number = 0; num < xs.length; num++) {
    if (numberCountMapping.has(xs[num])) {
      const count: number | undefined = numberCountMapping.get(xs[num]);
      if (count) {
        numberCountMapping.set(xs[num], count + 1);
      }
    } else {
      numberCountMapping.set(xs[num], 1);
    }
  }

  let odd: number | undefined;
  for (let [key, value] of numberCountMapping) {
    if (value % 2 !== 0) {
      odd = key;
    }
  }
  return odd || 0;
};
