function createArray(length: number, value: any): Array<any>{
    let res = [];
    for (let i = 0; i < length; i++){
        res[i] = value;
    }
    return res;
}
createArray(3, 'x')