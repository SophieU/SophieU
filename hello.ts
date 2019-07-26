abstract class Animal{
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}
class Cat extends Animal{
    public eat() {
        console.log(`${this.name} is eatingg`)
    }
    public sayHi() {
        console.log('hehe')
    }
}
let cat = new Cat('Tom');