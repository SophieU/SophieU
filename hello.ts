interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc;
createArray = function <T>(length: number, value: T): Array<T> { 
    let res: T[] = [];
    
}
createArray(3,'x')