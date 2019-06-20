function createArray<T = string>(length: number, value: T): Array<T>{
    let res: T[] = [];
    for (let i = 0; i < length; i++){
        res[i] = value;
    }
    return res;
}