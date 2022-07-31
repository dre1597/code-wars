// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  const splitted = string.split(' ');

  const spined = splitted.map((elem) => {
    if (elem.length >= 5) {
      return elem.split('').reverse().join('');
    }
    return elem;
  });

  return spined.join(' ');
}
