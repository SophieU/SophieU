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
> - [MySQL管理](#MySQL管理)
> - [数据库操作](#数据库操作)
> - [表操作](#表操作)
> - [记录操作](#记录操作)
NjEcoYFlw4)V
## 安装
所有平台的 MySQL 下载地址为： [MySQL 下载](https://dev.mysql.com/downloads/mysql/) 。 挑选你需要的 MySQL Community Server 版本及对应的平台。
- 注意：安装过程我们需要通过开启管理员权限来安装，否则会由于权限不足导致无法安装。
#### Linux平台下安装
以腾讯云服务器为例[参考文章](https://blog.csdn.net/z13615480737/article/details/78906598)：
- 远程到腾讯云服务器（推荐使用PuttY进行远程访问）
- 安装：
```bash
# 下载安装包
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
# 执行安装包（-ivh安装显示安装进度）
rpm -ivh mysql-community-release-el7-5.noarch.rpm
# yum安装server
yum install mysql-server
```
- 配置my.cnf (在root目录下，`vim etc/my.cnf`)  
```bash
[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
server_id = 1
expire_logs_days = 3
 
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
 
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```
- 启动mysql服务:`service mysqld restart`
- 查看随机密码： `grep "password" /var/log/mysqld.log`
- 登录mysql: `mysql -u root -p xxx` -首次登录密码为上一步的随机码
- 修改初始密码


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

##### 3、初次启动下 MySQL 数据库：

```bash
# 以管理员身份打开 cmd 命令行工具，切换目录到mysql安装目录下的bin目录
cd F:\Program Files\mysql-8.0.13>bin
# 初始化数据库
mysqld --initialize --console
```
>  执行完成后，会输出 root 用户的初始默认密码，其中：`APWCY5ws&hjQ`就是初始密码，后续登录需要用到，你也可以在登陆后修改密码。
```
2016-08-25T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&hjQ
```
> 将mysql安装为windows服务
```bash
# 还是在bin目录下
mysqld install
# 启动mysql
net start mysql

# 提示
F:\Program Files\mysql-8.0.13\bin>net start mysql
MySQL 服务正在启动 ...
MySQL 服务已经启动成功。
```

##### 4、登录 MySQL
当 MySQL 服务已经运行时, 我们可以通过 MySQL 自带的客户端工具登录到 MySQL 数据库中, 首先打开命令提示符, 输入以下格式的命名:

```bash
# 命令：
mysql -h 主机名 -u 用户名 -p

# 如果我们要登录本机的 MySQL 数据库，只需要输入以下命令即可：回车后输入初始密码
mysql -u root -p
```
> 参数说明：
> -h : 指定客户端所要登录的 MySQL 主机名, 登录本机(localhost 或 127.0.0。1)该参数可以省略;
> -u : 登录的用户名;
> -p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。

>> 若密码存在, 输入密码登录, 不存在则直接按回车登录。登录成功后你将会看到 Welecome to the MySQL monitor... 的提示语。然后命令提示符会一直以 mysq> 加一个闪烁的光标等待命令的输入, 输入 exit 或 quit 退出登录。

## MySQL管理
#### windows下启动与关闭
```bash
# 启动 mysql安装目录下bin目录
mysqld --console
# 关闭 cd c:/mysql/bin
mysqladmin -uroot shutdown

# windows服务的启动关闭
net start mysql
net stop mysql
```
#### 重置初始密码
- 在首次进入mysql命令工具中时，任何操作它都会提示：`You must reset your password using ALTER USER statement before executing this statement.`表示 需要先重置初始密码
```bash
# 更新密码
mysql> alter user root@localhost identified by '123456';
# 刷新权限
mysql> flush privileges;
# 退出
exit;
# 重登录
mysql -u root -p
password: ******
```

## MySQL 基础指令
> 服务器、数据库、数据表、记录、字段的关系：
>>  一台mysql服务器可以管理`多个数据库`！
>> 一个数据库存在`多张二维表`！
>> 一张表存在`多条记录（行）`！
>> 一条记录由`多个字段`组成！
>> 字段，才是最终的元数据！

因此，如果需要完成对数据的操作：
1. Step1. 连接数据服务器
2. Step2. 管理某个数据库
3. Step3. 操作某个表的具体数据

## 数据库操作
- 注意：每一条mysql命令都必须以分号结束`;`
##### 创建数据库
`语法：` create database 数据名 [数据库选项]
```bash
# 普通创建
create database test
# 更优的创建
create database `test2`
```
- 注意数据库名的处理：
- 有些词语是mysql的关键字或者保留字，此时可以使用 `反引号 `将库名（库标识符）进行包裹！
- 建议，所有的标识符，都应该加上反引号！尤其在使用字符串拼凑SQL的时候！
此时，当使用了反引号后，几乎所有的字符串都可以作为名字出现：

##### 查询数据库
- 语法： `show databases` (支持使用like 对展示的结果进行过滤：`show databases like 'match'`)
- 注意此处的`databases`复数
```bash
# 显示所有数据库
show databases;
# 筛选
show databases like 'test';
```
- like后面使用字符串作为过滤原则。mysql中的字符串，使用`单引号`进行包裹！（也是支持双引号，但是双引号有特别的含义，因此不建议使用）
- 字符串中可以使用 通配符！（通用匹配符号）**% 百分号，匹配任意字符的任意数量**;**_ 下划线，匹配任意字符的一次出现！**

##### 切换到某一数据库
- 语法： `use [库名]`
```bash
>mysql use test;
+----------------+
| Tables_in_test |
+----------------+
| user           |
+----------------+
1 row in set (0.03 sec)
```
##### 删除数据库
- 语法：drop database 库名
##### 修改数据库选项（了解）
- 语法：alter database 库名 表选项
##### 容错命令
在创建和删除数据库时，可以通过`容错命令`来判断是否进行
- `if not exists` 如果不存在，用在创建时，表示，如果不存在该库时才创建！
- `if exists` 如果存在，删除时使用，表示如果存在，才执行删除工作
- 注意：数据库名是严格区分大小写的
```bash
# 新增
create database if not exists test2;
# 删除
drop database if exists test;
```

## 表操作
#### 创建表（重要）
> 数据保存在字段中，mysql每个字段都要有类型，属于强类型！需要指定字段的名称和类型：
>> 典型的类型：int整型，varchar(M)变长字符串类型，其中M表示最大长度，字符数！
>> 典型的表选项：
>> engine 引擎，表示表的存储类型，常见的有： myisam,innodb,charset 字符集
- 在创建表时，需要指定表所在的数据库：可以在表名上直接指定：完整表名由 ```库名.表名`` 组成！
- 同样支持：if not exists。
- 语法： 
```bash
create table 表名 (
表中字段信息
）[表选项]

# 应用
mysql> create table test.students(
    -> name varchar(20),
    -> age int,
    -> gender varchar(10)
    -> );
```
- 每个表，会在当前的库目录下，生成其所需要的文件，都是以表名为文件名，后缀不同的文件组成：
- **注意**：表名如果与关键字冲突，也需要使用反引号.因此：注意需要将库名与表名独立包裹： `match`.`order`

#### 数据库文件:
- 在mysql安装目录下，`data`文件夹便存放着创建的数据库，如 mysql\data\test 代表test数据库的文件；
- 其中：.frm保存的当前表的结构文件！
- **注意**：不是所有的表生成的文件都是一样的的，取决于表的类型（引擎），引擎不同数据库服务器管理表库数据的结构是不同的，意味着操作不是完全相同！
```bash
create table itsource.t1_myisam(id int) engine=myisam;
create table itsource.t2_innodb(id int) engine=innodb;
```
> 其中：
>>  对于myisam：.frm结构；.myd数据；.myi索引！
>> 对于innodb：.frm结构；数据和索引在其他的文件：

#### 查看表
- 语法：`show tables [like '表名']`

- 查看建表语句,语法： `show create table 表名`
- 查看表结构，语法：`desc 表名`
```bash
mysql> show tables like user;
mysql> show create table user;
mysql> desc user;
```
#### 删除表
语法：`drop table [if exists] 表名`
#### 修改表
- 修改表选项——语法：`alter table 表名 选项=新值`
- 重命名表——语法：`rename table 旧表名 to 新表名`(如果采用 库名.表名的修改语法，导致将A库表，移动到B库中！)
- 添加字段——语法：`alter table 表名 add column 字段定义 位置`
- 删除字段——语法：` alter table 表名 drop column 字段名`
- 修改并重新定义字段： `语法：alter table 表名 change column 旧字段名 新字段定义（名字，类型，属性） 位置`
- 字段只修改定义： `语法：alter table 表名 modify column 字段名 新的定义(类型，属性)`
```bash
# 修改选项
alter table test engine=innodb;
# 重命名
rename table user to newuser;
# 移动
rename table test.user to sys.user;
# 添加字段
alter table newuser add column job varchar(10) after name;
# 删除字段 
alter table newuser drop column job;
# 修改并重新定义
alter table newuser change column age userage varchar first;
# 只修改字段定义
alter table newusr modify column userage int after name;
```

## 记录操作
#### 增加
- 语法：`insert into 表名 (字段列表) values (值列表)`
- 其中，可以省略字段名列表部分，前提是，字段值必须要一一对应。（数量和顺序都一致）
