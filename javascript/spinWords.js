function spinWords(string) {
  let splitted = string.split(' ');
  let spined = splitted.map((elem) => {
    if (elem.length >= 5) return elem.split('').reverse().join('');
    return elem;
  });
  return spined.join(' ');
}
