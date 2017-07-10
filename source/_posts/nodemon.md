---
title: nodemon-解决开发时无限npm start的痛点
date: 2017-10-25
tag: Node
categories: 后端学习
---
- 刚开始学习Node时，每次做了修改，都要重新`npm start`启动服务才能查看上次修改结果，而`nodemon`就是为了开发node时进行热更新的一款工具
<!--more-->

## 目录
> 
>> -[安装](#安装)
>> -[配置nodemon](#配置nodemon)

## 安装
- 先全局安装，再以开发依赖形式安装

```bash
# 全局安装
npm install nodemon -g
# 依赖安装
npm install nodemon -D
```

## 配置nodemon
