// https://www.codewars.com/kata/550498447451fbbd7600041c

const comp = (a1: number[] | null, a2: number[] | null): boolean => {
  if (!a1 || !a2 || a1.length !== a2.length) return false;

  const sortedA1 = a1.sort((a, b) => a - b);
  const sortedA2 = a2.sort((a, b) => a - b);

  return sortedA1.every((elem, index) => elem * elem === sortedA2[index]);
};
