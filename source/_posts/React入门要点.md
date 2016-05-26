---
title: React入门要点
date: 2016-05-25
tags: React
categories: 前端开发
---
<img src="https://edu.aliyun.com/files/course/2017/09-24/2251313c14c9920899.png" />
React 是一个用于构建用户界面的 JAVASCRIPT 库。主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。

React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
<!--more-->
## 目录
> - [安装](#安装)
> - [HelloWorld](#HelloWorld)

* 引用文档：[React教程阿里云大学](https://edu.aliyun.com/lesson_483_5255?spm=5176.10731542.0.0.JAX9ZT#_5255)
> * **React 特点**
> 1. 声明式设计 −React采用声明范式，可以轻松描述应用。
> 2. 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
> 3. 灵活 −React可以与已知的库或框架很好地配合。
> 4. JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
> 5. 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
> 6. 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

## 安装
React有两种使用方式：
1. CDN方式：通过script 标签直接引用并使用
2. 通过npm安装使用
#### CDN方式使用
```html
<!DOCTYPE html><html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      ReactDOM.render(        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );    </script>
  </body></html>
```
* **react.min.js**：React的核心库
* **react-dom.min.js**：提供与DOM相关的功能
* **babel.min.js**: 用于提供浏览器对ES6以及JSX的语法支持

#### NPM方式
```bash
$ npm install -g creat-react-app
$ creat-react-app my-app
$ cd my-app 
$ npm start
```
- 以上通过安装官方脚手架`creat-react-app`来直接生成react项目目录
- 通过修改src/App.js开始上手

```js
import React, { Component } from 'react';import logo from './logo.svg';import './App.css'; 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到阿里云大学</h2>
        </div>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
      </div>    );  }}
 export default App;
```