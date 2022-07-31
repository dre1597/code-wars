// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

export const likes = (people: string[]): string => {
  switch (people.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${people[0]} likes this`;
    case 2:
      return `${people[0]} and ${people[1]} like this`;
    case 3:
      return `${people[0]}, ${people[1]} and ${people[2]} like this`;
    default:
      return `${people[0]}, ${people[1]} and ${people.length - 2} others like this`;
  }
};
