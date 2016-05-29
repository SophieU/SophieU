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
> - [JSX语法](#JSX语法)
> - [React组件](#React组件)
> - [Props属性](#Props属性)
> - [State状态](#State状态)

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
- 修改后，打开 http://localhost:3000/ （一般自动刷新）

## JSX语法
> JSX是一种JS的扩展语法（语法糖），JSX本身是一个表达式，通过编译之后变成了常规的`JS对象`，这意味着它可以被当作表达式进行`赋值`或`作为函数的返回值`。

#### JSX作为表达式:

```js
// 用于赋值
const element = (
  <h1>
    Hello, World！
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
//被函数返回
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
- 注意：JSX内部不能使用`if else`语句，但可以使用三元运算

#### JSX属性写法
    * JSX中属性名用驼峰命名法
    * JSX属性值可以是字符串，或`{}`包裹的对象
```js
const element = <img className="logo" src={user.avatarUrl}></img>;
```

#### JSX样式
- React 推荐使用内联样式。React 会在指定元素数字后自动添加 px 。我们可以使用 camelCase 语法来设置内联样式

```js
var myStyle={fontSize:100,color:"#ff0"};
React.render(
     <h1 style = {myStyle}>你好啊。</h1>,
    document.getElementById('example')
)
```

#### 注释
- 注释需要写在花括号中，实例如下：
```js
ReactDOM.render(
    <div>
         <h1>你好啊。</h1>    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```
#### 数组
- JSX 允许在模板中插入数组，`数组会自动展开所有成员`：
```js
var arr = [<h1>阿里云大学</h1>,<h2>学的不仅是技术，更是梦想！</h2>,];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```
#### React组件和HTML标签
- React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。因此引用React引用时，`组件命名必须大写`
```js
// 渲染HTML标签
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
// 渲染React组件
import MyComponet from './mycomponent.js'
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

## React组件
> 定义组件的方式有多种：
> 1. `函数式组件`：将JSX以函数返回值的形式返回的函数即为一个函数式组件【相对第二种组件更加简洁，但功能被阉割了，只能渲染一些静态内容】
> 2. `类组件`：以ES6的class方式定义组件
- 实例如下：
```js
// 函数式组件：
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// 渲染
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
// 类组件 ：mycomponent.js
import React from 'react';
class MyComponent extends React.Component {
    render(){
        return (<div>组件一</div>)
    }
}
export default MyComponent;
// 渲染组件

```
#### 合成组件【复合组件】
- 组件内部引用了其他组件，称为`复合组件`
- React官方推荐将幼小的功能提取出来成为一个组件，方便复用
- 提取组件可能看起来是一个繁琐的工作，但是在大型的 Apps 中可以回报给我们的是大量的可复用组件。

## Props属性
- **Props是只读的**：无论你用函数或类的方法来声明组件, 它都无法修改其自身 props.
- props只是用于传值，所以props基本上也就是从服父级组件向子组件传递的数据。
- 组件中，通过`this.props.xxx`来获取传入的属性值
```js
//父组件
import Say from './say.js';
import React from 'react';
export default class Hello extends React.Component{
    render(){
        return (<Say name="Sophie"/>)
    }
}
// Say组件
import React from 'react';
export default class Say extends React.Component{
    render(){
        return (<div>Hello,{this.props.name}</div>)
    }
}
```

#### 默认参数
- 在组件中，我们最好为props中的参数设置一个defaultProps，并且制定它的类型。
```js
export default class Say extends React.Component{
    render(){
        return (<div>Hello,{this.props.name}</div>)
    }
}
// 默认值
Say.defaultProps = {
  name: 'Hello Props',
};
// 值类型
Say.propTypes = {
  name: PropTypes.string,
};

```
- 关于`propTypes`，可以声明为以下几种类型：
```js
optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,
```
#### 总结Props
> `props`是一个从外部传进组件的参数，主要作为就是从父组件向子组件传递数据，它具有`可读性`和`不变性`，只能通过外部组件主动传入新的props来重新渲染子组件，否则子组件的props以及展现形式不会改变。

## State状态
> 一个组件的显示形态可以由数据状态和外部参数所决定，外部参数也就是`props`，而数据状态就是`state`。
> - state是可以被改变的值，通过`this.setState()`来修改`state`
```js
export default class ItemList extends React.Component{
  constructor(){
    super();
    this.state = {
      itemList:'一些数据',
    }
  }
  // 异步获取数据并修改state值
  componentDidMount(){
    fetch('url')
        .then(response => response.json())
        .then((data) => {
        this.setState({itemList:item});  
        }
    }
  render(){
    return (
      {this.state.itemList}
    )
  }
}
```
- 首先，在组件初始化的时候，通过this.state给组件设定一个初始的state，在第一次render的时候就会用这个数据来渲染组件。