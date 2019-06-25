class Animal{
    constructor(name) {
        return this.name;
    }
    sayHi() {
        console.log(`hello,this is ${this.name} talking`)
    }
}
// 继承
class Cat extends Animal{
    constructor(name) {
        super(name); 
        console.log(this.name);
    }
    sayHi() {
        return `Meow, ` + super.sayHi();
    }
}
