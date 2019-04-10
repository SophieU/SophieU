let myname: string = 'xadf';
interface My{
    name: string;
    age: number;
    gender?: string;
    [propName: string]: any;
}
let tom: My = {
    name: 'tom',
    age: 12,
    gender: 'man',
    job:'engener'
}