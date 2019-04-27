/*
1、返回了新的函数
2、参数默认跟随传递
3、this指向改变
4、new 出来的constructor指向原函数
*/
/*
1、显示原型：prototype(函数的)
2、隐式原型：__proto__(对象的)
*/
function Foo() { }
var foo = new Foo();
console.log(Foo.prototype.constructor===Foo)
console.log(foo.__proto__===Foo.prototype)