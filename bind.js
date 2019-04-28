/*
1、返回了新的函数
2、参数默认跟随传递
3、this指向改变
4、new 出来的constructor指向原函数
*/

var Foo = function (){}
console.log(Foo.prototype.constructor)