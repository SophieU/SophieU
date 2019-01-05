---
title: MySQL入门教程
date: 2016-08-07
tag: MySQL
categories: 后端学习
---
MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。参考学习：[菜鸟教程-mysql](http://www.runoob.com/mysql/mysql-install.html)
<!--more-->

## MySQL特点
- MySQL 是开源的，所以你不需要支付额外的费用；
- MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。
- MySQL 使用标准的 SQL 数据语言形式。
- MySQL 可以运行于多个系统上，并且支持多种语言。【这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby 和 Tcl 等。】
- MySQL 支持大型数据库，支持 5000 万条记录的数据仓库，32 位系统表文件最大可支持 4GB，64 位系统支持最大的表文件为8TB。
。MySQL 是可以定制的，采用了 GPL 协议，你可以修改源码来开发自己的 MySQL 系统。


## 目录

> - [安装](#安装)
> - [HelloWorld](#HelloWorld)
> - [Express应用生成器](#Express应用生成器)
> - [Router路由](#Router路由)

## 安装
所有平台的 MySQL 下载地址为： [MySQL 下载](https://dev.mysql.com/downloads/mysql/) 。 挑选你需要的 MySQL Community Server 版本及对应的平台。
- 注意：安装过程我们需要通过开启管理员权限来安装，否则会由于权限不足导致无法安装。

#### Windows平台下安装

##### 1、下载
- windows下载地址：https://dev.mysql.com/downloads/mysql/
![进入下载](http://www.runoob.com/wp-content/uploads/2014/03/20DBD7BA-A653-4AE3-887E-2A16E6EBB2E3.png)

- 下载完后，我们将 zip 包解压到相应的目录，这里我将解压后的文件夹放在 F:\Program Files\mysql-8.0.11 下。

##### 2、新建配置文件
在刚刚解压的目录位置新建`my.ini` 配置文件，编辑 my.ini 配置以下基本信息：
```bash
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=F:\Program Files\mysql-8.0.11
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=C:\\web\\sqldata
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```
