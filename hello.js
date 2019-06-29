var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('TOm');
console.log(a.name);
a.name = 'JAck';
console.log(a.name);
