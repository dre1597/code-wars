// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

export default function add(x: number): any {
  const counterFn = function (num: number) {
    return add(x + num);
  };

  counterFn.valueOf = function () {
    return x;
  };

  return counterFn;
}
