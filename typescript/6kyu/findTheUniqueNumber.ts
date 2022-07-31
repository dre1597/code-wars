// Sensei: https://www.codewars.com/users/isqua

/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findDuplicatedElemIndex(arr: number[]): number {
  const dict: any = {};

  for (const [index, value] of arr.entries()) {
    if (dict.hasOwnProperty(value)) {
      return dict[value];
    }

    dict[value] = index;
  }

  return -1;
}

export function findUniq(arr: number[]): number {
  const notUniqueIndex = findDuplicatedElemIndex(arr);
  const notUniqueElem = arr[notUniqueIndex];

  const noDuplicates = [...new Set(arr)];

  const indexDuplicated = noDuplicates.findIndex((elem) => elem === notUniqueElem);

  noDuplicates.splice(indexDuplicated, 1);

  return noDuplicates[0];
}
