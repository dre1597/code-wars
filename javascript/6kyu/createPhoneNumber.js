// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  const firstGroup = numbers.slice(0, 3).join('');
  const secondGroup = numbers.slice(3, 6).join('');
  const thirdGroup = numbers.slice(6, 11).join('');
  return `(${firstGroup}) ${secondGroup}-${thirdGroup}`;
}
