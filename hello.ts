interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}