---
title: Node Web开发框架-Express
date: 2016-10-25
banner: images/deer.jpg
thumbnail: images/deer.jpg
tag: Node
categories: 后端学习
---

Express是基于`Node.js`平台的极简的经典Web开发框架。[中文官网](http://www.expressjs.com.cn/)

<!--more-->

## 目录
> - [安装](#安装)
> - [HelloWorld](#HelloWorld)
> - [Express应用生成器](#Express应用生成器)

## 安装
- 前提：已安装`Node.js`

```bash
$ mkdir myapp
$ cd myapp

# 初始化文件[中间会出现一些询问命令按需进行]
$ npm init

# 安装
$ npm install express -S
```

## HelloWorld
- `myapp`目录下，新建`app.js`作为入口文件
- 示例：用express创建一个简单的web服务
```js
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

```

```bash
node app.js
```
- 访问`localhost:3000`可以看到页面显示了`Hello World`，访问其他页面会出现404，这就是一个简单的web应用服务

## Express应用生成器
- express提供了用于快速生成一个web应用程序的工具`express-generator`，它可以快速创建项目骨架，并包含多个基本应用模块

```bash
# 安装
$ npm install express-generator -g
# 查看express指令
$ express -h
# 创建一个以ejs为模板引擎的应用
$ express --view=ejs myapp
```