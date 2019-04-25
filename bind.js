/*
1、返回了新的函数
2、参数默认跟随传递
3、this指向改变
4、new 出来的constructor指向原函数
*/
/*
1、显示原型：prototype(函数的),指向函数的原型对象
2、隐式原型：__proto__(对象的)
3、对象的__proto__属性指向的是创建该对象的构造函数的prototype
4、构造函数的prototype的constructor指向该构造函数自身
5、prototype显示原型用于实现基于原型的继承和属性共享
6、__proto__用于构成原型链，并实现继承

Object.__proto__ === Function.prototype
Function.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ ===null;
*/
