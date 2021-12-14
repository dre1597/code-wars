// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

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
