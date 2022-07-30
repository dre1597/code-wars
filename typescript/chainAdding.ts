export default function add(x: number): any {
  const counterFn = function (num: number) {
    return add(x + num);
  };

  counterFn.valueOf = function () {
    return x;
  };

  return counterFn;
}
