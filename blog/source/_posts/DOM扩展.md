---
title: DOM扩展 
tags: JavaScript
categories: JavaScript高级程序设计
---
## 一、DOM扩展
> DOM扩展主要包含两方面：Selector API，HTML5
### 1.1 选择符API
> level 1 : 
- querySelector() :传入css选择器选中第一个匹配项
- querySelectorAll() ：传入css选择器返回的有匹配项
> level 2:
- matchesSelector: 传入css选择符，如果调用元素与该选择符匹配则返回true
- 注意：此方法直至2011年中都没浏览器支持。目前可部分浏览器有兼容性问题
- IE9+ ： msMatchesSelector()
- Firefox 3.6+ ： mozMathcesSelector()
- Safari 5+ & Chrome  :   webkitMatchesSelector()
```
//使用matchesSelector的兼容处理
function matchesSelector(el,selector){
    if(el.matchesSelector){
        return el.matchesSelector(selector)
    } else if(el.msMathcesSelector){
        return el.msMatchesSelector(selector)
    }else if(el.mozMatchesSelector){
        return el.mozMatchesSelector(selector)
    }else if(el.webkitMatchesSelector){
        return el.webkitMatchesSelector(selector)
    }else{
        throw new Error("Not supported.");
    }
}
```
### 1.2 元素遍历
> 场景: 对于元素间的空格，IE9及之前版本不会返回文本节点，而其他所有浏览器都会返回文本节点。这样，
就导致了在使用 childNodes 和 firstChild 等属性时的行为不一致。

> Element Traversal API 为DOM元素添加了5个属性方便DOM元素的查找
- childELementCount: 返回子元素（不包括文本节点和注释）的个数
- firstElementChild: 指向第一个子元素
- lastElementChild: 指向最后一个子元素
- previousElementSibling: 指向前一个同辈元素
- nextElementSibling: 指向下一个同辈元素
> 支持 Element Traversal 规范的浏览器有 IE 9+、Firefox 3.5+、Safari 4+、Chrome 和 Opera 10+。
### 1.3 HTML5
> 1、与class相关的扩充
- getElementsByClassName() 返回对应classname的元素
- classList 属性， H5新增的用于简化操作元素的className属性的API。
    1. el.classList.add(value) : 添加class
    2. el.classList.contains(value):判断列表中是否存在给定值
    3. el.classList.remove()：移除给定值
    4. el.classList.toggle() :切换给定值
    5. 支持 classList 属性的浏览器有 Firefox 3.6+和 Chrome。
- 焦点管理
    1. document.activeElement 获取当前获取焦点的元素
    2. el.focus(); 获得焦点
- 自定义属性data-*
    1. el.dataset.name  获取name值
    2. el.dataset.name = value 设置name值
- 插入标记
    1. innerHTML
    2. innerText
### 1.4 专有扩展
#### 1、文档模式  —— 文档模式决定了你可以使用哪个级别的 CSS，可以在 JavaScript 中使用哪些 API，以及
如何对待文档类型（doctype）。

> 要强制浏览器以某种模式渲染页面，可以使用 HTTP 头部信息 X-UA-Compatible ，或通过等价的
\<meta> 标签来设置：
```
<meta http-equiv="X-UA-Compatible" content="IE=IEVersion">
```
> 注意：这里 IE 的版本（ IEVersion ）有以下一些不同的值，而且这些值并不一定与上述 4 种文档
模式对应。
 Edge ：始终以最新的文档模式来渲染页面。忽略文档类型声明。对于 IE8，始终保持以 IE8 标
准模式渲染页面。对于 IE9，则以 IE9 标准模式渲染页面。
- EmulateIE9 ：如果有文档类型声明，则以 IE9 标准模式渲染页面，否则将文档模式设置为 IE5。
- EmulateIE8 ：如果有文档类型声明，则以 IE8 标准模式渲染页面，否则将文档模式设置为 IE5。
- EmulateIE7 ：如果有文档类型声明，则以 IE7 标准模式渲染页面，否则将文档模式设置为 IE5。
- 9 ：强制以 IE9 标准模式渲染页面，忽略文档类型声明。
- 8 ：强制以 IE8 标准模式渲染页面，忽略文档类型声明。
- 7 ：强制以 IE7 标准模式渲染页面，忽略文档类型声明。
- 5 ：强制将文档模式设置为 IE5，忽略文档类型声明。
比如，要想让文档模式像在 IE7 中一样，可以使用下面这行代码：
```
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
```
#### 2、children属性
> el.children == el.childNodes
#### 3、contains()方法
> 检测节点是否是其后代

## 第12章 DOM2和DOM3
> 1、分级的概念
- DOM1级主要定义的是HTML和XML文档的底层结构
- DOM2级和DOM3级则在这个结构的基础上引入了更多的交互能力

#### 2、元素大小
> 2.1 偏移量
- offsetHeight: 元素在垂直方向上占用的空间，包括元素高度、水平滚动条，上下边框高度
- offsetWidth: 水平占用空间大小，宽+边框+垂直滚动条宽
- offsetTop: 元素上外边框到包含元素的上内边框之间的像素距离。
- offsetLeft: 元素的左外边框至包含元素的左内边框之间的像素距离。
> 2.2 客户区大小
- clientWidth： 内容+padding
- clientHeight： 内容+padding
> 2.3 滚动大小
- scrollHeight: 在没有滚动条的情况下，元素内容的总高度
- scrollWidth: 在没有滚动条的情况下，元素内容的总宽度
- scrollLeft: 被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置。
- scrollTop ：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置。
> DOM2级样式
- 每个元素都有一个关联的 style 对象，可以用来确定和修改行内的样式。
- 要确定某个元素的计算样式（包括应用给它的所有 CSS 规则），可以使用 getComputedStyle()
方法。
- IE不支持 getComputedStyle() 方法，但为所有元素都提供了能够返回相同信息 currentStyle
属性。
- 可以通过 document.styleSheets 集合访问样式表。
- 除 IE 之外的所有浏览器都支持针对样式表的这个接口，IE 也为几乎所有相应的 DOM功能提供
了自己的一套属性和方法。
> DOM2级遍历和范围
- 遍历即使用 NodeIterator 或 TreeWalker 对 DOM 执行深度优先的遍历。
- NodeIterator 是一个简单的接口，只允许以一个节点的步幅前后移动。而 TreeWalker 在提
供相同功能的同时，还支持在 DOM 结构的各个方向上移动，包括父节点、同辈节点和子节点等
方向。
- 范围是选择 DOM结构中特定部分，然后再执行相应操作的一种手段。
- 使用范围选区可以在删除文档中某些部分的同时，保持文档结构的格式良好，或者复制文档中
的相应部分。
- IE8 及更早版本不支持“DOM2 级遍历和范围”模块，但它提供了一个专有的文本范围对象，可
以用来完成简单的基于文本的范围操作。IE9 完全支持 DOM遍历。