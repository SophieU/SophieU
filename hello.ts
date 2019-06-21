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
    static isAnimal(a) {
        return a instanceof Animal;
    }
}

let a = new Animal('Kitty');
Animal.isAnimal(a);