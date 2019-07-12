function createArray<T>(length: number, value: <T>): Array < T > {
    let res =[];
    for(let i = 0; i<length; i++) {
        res[i] = value;
    }
    return res;
    
} 
