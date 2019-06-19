class Test<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let test = new Test<number>();
test.zeroValue = 0;
test.add = function (x, y) { return x + y;}