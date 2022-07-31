// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

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
