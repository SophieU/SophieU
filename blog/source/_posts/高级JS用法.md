---
title: 高级JS用法 
tags: JavaScript
categories: JavaScript高级程序设计
---
> 前言：JS是一种灵活的语言，其具有多种风格。在编写JS时，要么使用 面向过程，要么使用 面向对象的方式。

# 一、高级技术

## 1.1 高级函数
> 高级函数的用法有如下几类：
-  安全检测数据类型
- 作用域安全的构造函数
- 惰性载入函数
- 函数绑定
- 函数柯里化
### 1.1.1 安全类型检测
> JS 内置的类型检测并非完全可靠。如：safari 对正则表达式用typeof操作符时会返回function,而instanceof在存在多个全局使用域的情况下，也有很多问题。
> 问题：如何区分某个对象是原生的还是非原生的JS对象？？（只有区分了是否原生才能确定其有哪些功能）
```
// 通过Object.prototype.toString()方法可以查看对象的构造函数
function isArray(value){
    return Object.prototype.toString.call(value) =='[object Array]'
}
function isFunction(value){
    return Object.prototype.toString.call(value) == '[object Function]'
}
function isRegExp(value){
    return Object.prototype.toString.call(value) == '[object RegExp]'
}
var isNativeJSON = window.JSON && Object.prototype.toString.call(value) == '[object JSON]'
```
### 1.1.2 作用域安全的构造函数
> 问题：对于构造函数，使用new Fn()可以实例化出对象来，Fn中的this也指向了创建的实例。但如果直接调用Fn()，那么Fn中的this就指向了window对象，这里Fn中设置的属性可能会修改window对象中原生的属性从而造成不可预估的错误。为了避免直接调用Fn时可能出现的错误。可以进行作用域安全判断。
- 作用域安全的构造函数在进行任何更改前，首先确认this对象是正确类型的实例。如果不是，那么会创建新的实例返回。
```
function Person(name,age,job){
    if(this instanceof Person){
        this.name = name;
        this.age = age;
        this.job = job;
    }else {
        return new Person(name,age,job);
    }
}
```
> 问题2：如果要使用继承的方式来获取一个作用域安全的构造函数的属性，则会出现继承失败的现象
```
function Polygon(sides){
    if (this instanceof Polygon) {
    this.sides = sides;
    this.getArea = function(){
        return 0;
    };
    } else {
        return new Polygon(sides);
    }
}
function Rectangle(width, height){
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function(){
        return this.width * this.height;
    };
}
Rectangle.prototype = new Polygon(); //使用原型继承的方式让rectangle的实例同时也是polygon的实例
var rect = new Rectangle(5, 10);
alert(rect.sides); //2
```
### 1.1.3 惰性载入函数
> 为了解决在函数内部，每次调用函数时都要执行if分支判断导致性能浪费的问题。
> 实现方式：
- 在函数第一次调用的过程中，通过一次if分支判断后，将正确的值覆盖原函数，这样对原函数的调用都将是按照第一次判断后的结果执行了。
```
function createXHR(){
    if(typeof XMLHttpRequest != "undefined"){
        createXHR = function () { //用新函数覆盖createXHR
            return new XMLHttpRequest();
        }
    } 
}
```
- 在函数声明时就指定适当的函数。
```
var createXHR = (function(){
    if(typeof XMLHttpRequest != 'undefined'){
        return function (){ //返回正确的函数
            return new XMLHttpRequest();
        }
    }
})()
```
### 1.1。4 函数绑定
> 问题：在特定的this环境中，以指定参数调用另一个函数，而另一个函数中需要用到的this往往会因为调用方式的不同而发生变化。如：
```
var handler ={
    message : 'hello world',
    handleClick: function(event){
        alert(this.message);
    }
}
var btn = document.getElementById('myBtn');
//此处点击btn时，触发事件，alert弹出的为undefined。因为此时this指向btn
btn.addEventListener('click',handler.handleClick,false);
```
> 解决方案：
```
// 1、使用闭包在处理函数内部调用handler
btn.addEventListener('click',function(event){
    handler.handleClick(event)
},false)
// 2、使用bind函数
function bind(fn,context){
    return function(){
        return fn.apply(context,arguments);
    };
}
//将hanleClick中的this指定为handler
btn.addEventListener('click',bind(handler.handleClick,handler),false) 
```
> ES5中给出了原生的bind()方法，用于绑定函数作用域中的this。传入的参数即为作为this调用的对象。
```
btn.addEventListener('click',handler.handleClick.bind(handler),false);
//如上：将handleClick的作用域绑定到handler中。
//原生bind的支持情况：IE9+，firefox4+,chrome
```
> 只要是将某个函数指针以值的形式进行传递，同时该函数必须在特定环境中执行，被绑定函数的效
用就突显出来了。
### 1.1.5 函数柯里化（function currying)
> 柯里化：把接受多个参数的函数变换成接收一个单一参数（最初函数的第一个参数）的函数，并返回接受其余的参数且返回结果的新函数的技术。
> 作用：提高适用性，固定易变因素，延迟执行。
```
function curry(fn){
    var args = Array.prototype.slice.call(arguments,1); //截取第一个固定参数后的剩余部分。
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments); //所有参数
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null,finalArgs);
    }
}
function add(num1,num2){
    return num1+num2;
}
var curriedAdd = curry(add,5);
alert(curriedAdd(3));//8  
//当调用curriedAdd()并传入3时，3会成为add的第二个参数，同时第一个参数依然是5。
var curriedAdd2 = curry(add,5,12);
alert(curriedAdd2()); //17 当传入参数为add，5，12时直接计算出结果
```
> curry() 函数的主要工作就是将被返回函数的参数进行排序。 curry() 的第一个参数是要进行柯里
化的函数，其他参数是要传入的值(不确定数量)。
> 以上可知：柯里化函数可以使函数具有更好的适用性，在不知道参数个数的情况下，可以最大限度的使用。
## 二、防篡改对象
> 任何对象可以被在同一环境中运行的代码修改，如果修改的是原生对象，则会造成很大的问题。ES5增加了几个方法用于指定对象的行为。但注意：一旦把对象定义为防篡改，就无法撤销了。
### 2.1 不可扩展对象 —— Object.preventExtension()
```
var person = {'name':'jack'}
Object.preventExtension(person); //使用此方法防止对象被扩展
person.age= 18; //严格模式下此行会报错
console.log(person.age) //undefined
```
注：防扩展，但可以修改已有属性
### 2.2 密封的对象
> 不可扩展，不可删除，可以修改
```
var person = {'name':'jack'}
Object.seal(person); //使用此方法防止对象被扩展
person.age= 18; //严格模式下此行会报错
console.log(person.age) //undefined`
delete person.name;
console.log(person.name); //jack
```
注：通过Object.isSeal()确定对象是否密封，Object.isExtensible()检测密封的对象是否可扩展
### 2.3 冻结对象
> 不可扩展，不可删除，不可修改
```
Object.freeze(person);
Object.isFrozen(person); //true
```
## 三、高级定时器
> JS是单线程运程的程序，当设置了定时器后，会将对象的代码添加到时间队列中（注：只是按照定时器设置的时间来添加代码到队列中），待程序空闲时就开始执行。
- setTimeoute(fn,time)
- setInterval(fn,time)

### 3.1 函数节流
原理：某些代码不可以在没有间断的情况连续重复执行。第一次调用函数，创建一个定时器，在指定的时间间隔之后运行代码。当第二次调用该函数时，它会清除前一次的定时器并设置另一个。如果前一个定时器已经执行过了，这个操作就没有任何意义。然而，如果前一个定时器尚未执行，其实就是将其替换为一个新的定时器。目的是只有在执行函数的请求停止了一段时间之后才执行。
```
var processor = {
    timeoutId : null,
    performProcessing: function(){},
    process:function(){
        ClearTimeout(this.timeouteId);
        var that = this;
        this.timeouteId = setTimeout(function(){
            that.performProcessing();
        },100);
    }
}
```
## 四、自定义事件
> 事件是一种叫 “观察者”的设计模式，这是一种创建松散耦合代码的技术。
- 观察者模式由两类对象组成：主体 ， 观察者。主体负责发布事件，同时观察者通过订阅这些事件来观察该主体。