class Animal{
    private name;
    public constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}