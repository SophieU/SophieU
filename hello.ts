class Animal{
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter '+value)
    }
}

let a = new Animal('Kitty');
a.name = 'Tom';
console.log(a.name)