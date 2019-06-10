class Animal{
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`
    }
}

class Cat extends Animal{
    constructor(name) {
        super(name);
        console.log(this.name)
    }
    sayHi() {
        return `Meow,${super.sayHi()}`
    }
}
let c = new Cat('tom')
console.log(c.sayHi())