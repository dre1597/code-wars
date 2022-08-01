export class G964 {
  static convert = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  public static dec2FactString = (nb: number): string => {
    const convert = G964.convert.split('');
    let result = '0';
    let i = 2;

    while (nb) {
      result = convert[nb % i] + result;
      nb = Math.floor(nb / i);
      i++;
    }

    return result;
  };
  public static factString2Dec = (str: string): number => {
    const convert = G964.convert.split('');

    const length = str.length;

    return str.split('').reduce((acc, curr, index) => Number(acc) * (length - index) + convert.indexOf(curr), 0);
  };
}
