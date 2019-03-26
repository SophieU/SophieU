function test(x: number, y: number): number{
    return x + y;
}
let test: (x: number, y: number): number = function (x: number, y: number): number{
    return x + y;
}