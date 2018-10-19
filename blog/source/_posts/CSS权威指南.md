---
title: CSS权威指南 
tags: CSS
categories: 开发技巧
---
#### 1、文档引入CSS的几种方式
- link 方法，rel="stylesheet",type="text/css" 引用外部样式表
- style方法，使用style标签包裹，type="text/css" 文档内部样式
- @import方法：@import url(sheet.css) 在css中引用外部样式表
- 行为style属性：内联样式
#### 2、选择器
- 普通的： 标签选择器，class,id,包含选择器，子代选择器，组合选择器
- 特殊的：兄弟选择器+,伪类选择器(：hover,:first-child,:nth-child(n),:focus)，伪元素
> 新get
- :first-letter,:first-line可用于处理段文字中的第一个或第一行单独样式
#### 3、选择器优先级
- 优先级的大小可以用四个维度表示，初始值：0,0,0,0
- id选择器： 0,1,0,0
- class选择，属性选择，伪类选择： 0,0,1,0
- 标签选择： 0,0,0,1
- 行内样式：1,0,0,0
- *通配符没有优先级
- !important>行内 > id > class或属性 >标签
#### 4、padding，margin的细节
- 当padding，margin的值为百分数时，是相对于其父元素的width计算的，如果父元素width改变，则它们会改变
#### 5、color及背景、浮动
- 边框色由内容色决定，当设置了内容的color时，如果边框不设置颜色那默认是内容的颜色
- 浮动元素会自动转为块级元素
#### 6、cursor属性
- cursor:url() pointer;可用于自定义鼠标样式,当url不可用时，会查看第二个参数的值