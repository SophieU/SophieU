abstract class Animal{
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}
let a = new Animal('Jack')