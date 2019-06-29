class Animal{
    public name;
    public constructor(name) {
        this.name = name;
    }
}
let a = new Animal('TOm');
console.log(a.name);
a.name = 'JAck';
console.log(a.name)