// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

export function duplicateCount(text: string): number {
  const ignoredCaseText: string = text.toLowerCase();
  const letterCountMapping: Map<string, number> = new Map<string, number>();

  for (let letter: number = 0; letter < ignoredCaseText.length; letter++) {
    if (letterCountMapping && letterCountMapping.has(ignoredCaseText[letter])) {
      const count: number | undefined = letterCountMapping.get(ignoredCaseText[letter]);
      if (count) {
        letterCountMapping.set(ignoredCaseText[letter], count + 1);
      }
    } else {
      letterCountMapping.set(ignoredCaseText[letter], 1);
    }
  }

  const moreThanOne: number[] = [];

  for (let value of letterCountMapping.values()) {
    if (value > 1) {
      moreThanOne.push(value);
    }
  }

  return moreThanOne.length;
}
