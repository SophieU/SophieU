---
title: JavaScript模式【O'Reilly出版】·附网盘链接
date: 2018-02-10
banner: images/sleep.jpg
thumbnail: images/sleep.jpg
tag: JavaScript
categories: 读书笔记
---
模式：指一个通用问题的解决方案。一个模式不仅仅是一个可以用来复制粘贴的代码解决方案，更多地是提供了一个更好的实践经验、有用的抽象化表示和解决一类问题的模板。

<!--more-->

## 目录
- [PDF地址](#PDF地址)
- [基本技巧](#基本技巧)

## PDF地址
- 网盘地址：https://pan.baidu.com/s/1Kwgim2OQL86hSGjZftTR4Q  
- 云盘密码：qizu


## 基本技巧

### 编写可维护的代码

易维护的代码意味着代码具有如下特性:
* 阅读性好
* 具有一致性
* 预见性好
* 看起来如同一个人编写
* 有文档
* 尽量少用全局变量

> 变量释放时的副作用
* 全局变量不能通过`delete`删除，而对象的属性可以

#### 编码时的建议

* 单一的var模式：在函数内部，将变量的定义放在函数头部,便于维护，提高代码要读性。
* 对for循环的建议：
    1. 逐步减至0，这样通常更快，因为同0比较比同数组的长度比较，或者同非0数组比较更有效率。
    2. 实践证明，while循环速度更快
    
```js
var i,arr=[];
// 改进：使用while循环
while(i--){//xxx}
```
* 对for...in循环的建议： `for...in`又称为`枚举`，在使用枚举时，可通过`Object.hasOwnProperty`来检测key是否为对象本身属性。
