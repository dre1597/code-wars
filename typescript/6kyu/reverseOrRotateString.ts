// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function checkCube(chunk: string[]): boolean {
  let sum = 0;

  for (let value of chunk) {
    sum += Math.pow(+value, 3);
  }

  return sum % 2 === 0;
}

function shiftLeft(chunk: string[]): string[] {
  const firstPosition = chunk.shift();
  chunk.push(firstPosition!);
  return chunk;
}

export function revRot(s: string, sz: number): string {
  if (sz <= 0) {
    return '';
  }

  if (s.length === 0) {
    return '';
  }

  if (sz > s.length) {
    return '';
  }

  const chunks: string[][] = [];

  const array = Array.from(s);

  while (array.length >= sz) {
    const chunk = array.splice(0, sz);
    chunks.push(chunk);
  }

  for (let chunk of chunks) {
    if (checkCube(chunk)) {
      chunk.reverse();
    } else {
      chunk = shiftLeft(chunk);
    }
  }

  return chunks.toString().split(',').join('');
}
