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
> - [处理事件](#处理事件)
> - [渲染](#渲染)
> - [Form表单](#Form表单)

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
  // componentDidMount() 钩子在组件输出被渲染到 DOM 之后运行。
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
- 当我们调用`this.setState`方法时，React会更新组件的数据状态`state`，并且重新调用`render`方法，也就是会对组件进行重新渲染。
- **注意：通过this.state=来初始化state，使用this.setState来修改state，constructor是唯一能够初始化的地方。**
- 一个组件可以选择将 state(状态) 向下传递，作为其子组件的 props(属性)【单身数据流】

#### setState
- `this.setState`方法可以接受两个参数，参数1：对象，参数2：函数 
- 参数1：对象即可改变的state值
- 参数2：函数会在`setState`调用完成并且组件开始重新渲染时被调用，可以`用来监听渲染是否完成`
```js
this.setState({
  name:'xb'
},()=>console.log('setState finished'))
```
#### 总结State
> `stat`e的主要作用是用于组件保存、控制以及修改自己的状态，它只能在`constructor`中初始化，它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的`this.setState`来修改，修改`state`属性会导致组件的重新渲染。

#### State和Props的区别
1. state是组件自己管理数据，控制自己的状态，可变；
2. props是外部传入的数据参数，不可变；
3. 没有state的叫做无状态组件，有state的叫做有状态组件；
4. 多用props，少用state。也就是多写无状态组件。

## 处理事件
- React 事件使用`驼峰命名`，而不是全部小写。
- 通过 JSX , 你传递一个函数作为事件处理程序，而不是一个字符串。
- 在React中只能通过`preventDefault `来组件默认行为，而不能通过`return false`

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }
// 事件作为类上的一个方法被定义
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```
#### 绑定this
-  在 JavaScript 中，类方法默认没有 绑定的.如果你忘记绑定 this.handleClick 并将其传递给onClick，那么在直接调用该函数时，this 会是 undefined 。
- 几种绑定this指定的语法：
    1. 使用`箭头函数`来定义事件处理函数
    2. 使用`bind`
```js
// 箭头函数定义
handleClick=（)=>{...}
// bind
constructor(){
    super();
    this.state={};
    this.handleClick=this.handleClick.bind(this);
}
```

#### 传参
```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 渲染
- 条件渲染：使用`if`或`&&`来判断并渲染正确组件
- 列表渲染：
#### 条件渲染
```js
// if 条件渲染
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // 修改为 isLoggedIn={true} 试试:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

// && 条件渲染 在 {}表达式中
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

// 三元运算
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
```
- 在 JavaScript 中，` true && expression `总是会评估为 `expression` ，而 false && expression 总是执行为 false 。

##### 阻止组件渲染【隐藏组件】
- 通过在组件中`return null`

在下面的例子中，根据名为warn的 prop 值，呈现 <WarningBanner /> 。如果 prop 值为 false ，则该组件不渲染：
```js
// warning组件
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
// 父组件
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```
#### 列表渲染
- 通过`map`进行列表渲染
- 在列表渲染过程中，通过`Keys`来帮助 React 标识哪个项被修改、添加或者移除了。数组中的每一个元素都应该有一个唯一不变的键(Keys)来标识：
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

- 在JSX中内嵌`map`
```js
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      )}
    </ul>
  );
}
```

## Form表单
- 在React中的表单可以分为 `受控组件`和`非受控组件`
- 在表现形式上看，`受控组件`即为设置了`value`属性值组件，而`非受控组件`为没有value属性的组件，其通过`defaultValue`来设置初始值

#### 受控组件
- 表单元素如` <input>，<textarea> 和 <select>`通常保持自己的状态，并根据用户输入进行更新。在 React 中，可变状态一般保存在组件的 state(状态) 属性中，并且`只能通过 setState() 更新`。即用户输入值的显示由`setState`的值决定。
- 如下示例：处理多个受控组件
```js
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```
- 当value的值为`undefined`或`null`时，表单元素的输入首先被锁定，但在短暂的延迟后可以编辑。
- react中数据是单向流动的.从示例中,我们能看出来表单的数据来源于组件的state,并通过props传入,这也称为单向数据绑定.然后,我们又通过onChange事件处理器将新的表单数据写回到state,完成了双向数据绑定.
**总结受控组件**
1. 可以通过初始state中设置表单的默认值;
2. 每当表单的值发生变化时,调用onChange事件处理器;
3. 事件处理器通过合成事件对象e拿到改变后的状态,并更新应用的state.
4. setState触发视图的重新渲染,完成表单组件值得更新

#### 非受控组件
- 如果一个表单组件没有value props(单选按钮和复选按钮对应的是 checked props)时,就可以称为非受控组件;
- 使用defaultValue和defaultChecked来表示组件的默认状态;
- 通过 defaultValue和defaultChecked来设置组件的默认值,它仅会被渲染一次,在后续的渲染时并不起作用
```js
import React, { Component } from 'react';

class UnControlled extends Component {
    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        console.log(this.name.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={i => this.name = i} defaultValue="BeiJing" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default UnControlled;
```
#### 受控与非受控的对比
```js
// 受控组件
<input
    type="text"
    value={this.state.value}
    onChange={(e) => {
        this.setState({
            value: e.target.value.toUpperCase(),
        });
    }}
/>
// 非受控组件
<input
    type="text"
    defaultValue={this.state.value}
    onChange={(e) => {
        this.setState({
            value: e.target.value.toUpperCase(),
        });
    }}
/>
```
1. 性能上的问题
> 在受控组件中,每次表单的值发生变化,都会调用一次onChange事件处理器,这确实会带来性能上的的损耗,虽然使用费受控组件不会出现这些问题,但仍然不提倡使用非受控组件,这个问题可以通过Flux/Redux应用架构等方式来达到统一组件状态的目的.
2. 是否需要事件绑定
> 使用受控组件需要为每一个组件绑定一个change事件,并且定义一个事件处理器来同步表单值和组件的状态,这是一个必要条件.当然,某些情况可以使用一个事件处理器来处理多个表单域【  `this.setState({[name]: value, });`】
            
       