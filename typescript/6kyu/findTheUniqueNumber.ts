// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

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
