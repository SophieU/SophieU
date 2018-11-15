---
title: H5新API 
tags: JavaScript
categories: JavaScript
---

## 一、离线应用
> 设备不能上网的情况下仍然可以运行的应用——离线应用。开发离线应用需要几个步骤：
1. 确保应用知道设备是否能上网
2. 必须能访问一定的资源
3. 有一块本地空间用于保存数据

### 1.1 离线检测
- 通过navigator.onLine 可以检测应用是否上网（此方法有兼容性问题，所以不能确定网络是否连通）
- window.online 事件，网络在线时触发
- window.offline 事件，网络离线时触发

## 二、数据存储
> 应用缓存：application cache 简称appcache

### 2.1 Cookie
> 用于在客户端存储会话信息。
> 1）、 限制
- 由于cookie是存在客户端计算机上的，还加入了一些限制确保cookie不会被恶意使用，同时不会占用太多磁盘空间。
- 不同的浏览器支持的每个域的最多cookie数不同
- cookie大小不超过4095B 

> 2、 cookie构成
- 名称：不区分大小写，必须经过URL编码。 name = value中的name
- 值： value，必须被URL编码
- 域：cookie对于哪个域是有效的。如果没有明确设定，则这个域会被认作来自设置cookie的那个域。
- 路径：指定域中的那个路径，应该向服务器发送 cookie。例如，你可以指定 cookie 只有从
http://www.wrox.com/books/ 中才能访问，那么 http://www.wrox.com 的页面就不会发
送 cookie 信息，即使请求都是来自同一个域的。
- 失效时间：表示cookie何时应该被删除的时间戳。 GMT 格式的日期（Wdy, DD-Mon-YYYY HH:MM:SS GMT
- 安全标志： 指定后，cookie只有在使用SSL连接的时候才发送到服务器

```
var CookieUtil = {
    get: function(name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if(cookieStart >-1){
            var cookieEnd = document.cookie.indexOf(";",cookieStart)
            if(cookieEnd > -1){
                cookieEnd = document.cookie.length
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd))
        }
        return cookieValue;
    },
    set: function(name,value,expires,path,domain,secure){
        var cookieText = encodeURIComponent(name) + "=" +
                        encodeURIComponent(value);
        if (expires instanceof Date) {
             cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    unset:function(name,path,domain,secure){
       this.set(name, "", new Date(0), path, domain, secure); 
    }
}
```

### 2.2 web存储
- clear() 删除所有值
- getItem(name) : 获取name对应值
- setItem(name,value) :设置name值
- key(index) :获取index位置处的值
- removeItem(name) :删除name对应的值

#### 2.2.1 sessionStorage 会话存储
> 会话存储只保存到浏览器关闭。当关闭浏览器后就会消失。存在sessionStorage中的数据可跨越页面刷新而存在。
```
sessionStorage.setItem('name','jack'); //使用方法存数据
sessionStorage.name = 'jack'//使用属性丰数据
sessionStorage.getItem('name'); //使用方法获取数据
sessionStorage.name //使用属性获取数据

for(var i,len=sessionStorage.length;i<len;i++){
    var key = sessionStorage.key(i);
    var value = sessionStorage.getItem(key);
    console.log(key + "="+value)
}
```
#### 2.2.2 localStorage 永久存储
> 不会因为浏览器关闭而删除，直到用JS删除或用户清除浏览器缓存
- 限制：
1. 每个来源大小不超过5MB。Chrome，safari限制是2.5MB
#### 2.2.3 storage事件
> 对Storage对象进行任何修改都会触发storage事件，其event对象上有以下属性：
- domain: 发生变化的存储空间域名
- key:设置或删除的键名
- newValue： 如果是设置值，则是新值；如果是删除值，则是null
- oldValue： 键被更改之前的值
#### 2.2.4 IndexedDB 
> indexed database API ，简称IndexedDB，是一种在浏览器中保存结构化数据的数据库。思想是创建一套API，方便保存和读取JavaScript对象，同时还支持查询和搜索。
> 每一次IndexedDB操作，都需要注册onerror或onsuccess事件处理程序，以确保适当的处理结果。
> 目前浏览器使用了提供商前缀的方法实现此API：
- IE10 : msIndexedDB
- firefox4 : mozIndexedDB
- chrome: webkitIndexedDB
> IndexedDB的数据保存在对象存储空间中。创建对象存储空间时，需要定义一个键，然后就可以添加数据。可以使用游标在对象存储空间中查询特定的对象。而索引则是为了提高查询速度而基于特定的属性创建的。
```
var indexedDb = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;
```
> 打开数据库（建立连接）—— 使用对象存储空间——
```
var request ,database;
// 1、若admin已存在，则发送一个打开admin的请求，如果不存在则创建并找开它
request = indexedDB.open('admin'); 
request.onsuccess = function(event){
      database = event.target.result; //指向request本身
}
var user = {
    username: "007",
    firstName: "James",
    lastName: "Bond",
    password: "foo"
}
// keyPath:空间将要保存的对象的一个属性，而这处属性将作为存储空间的键来使用。
var store = db.createObjectStore("users",{keyPath: "username"})
```

# 24章：最佳实践
## 一、可维护性
> 可维护的代码的特点： 可理解性、直观性、可适应性、可扩展性、可高度性
-  可理解性——其他人可以接手代码并理解它的意图和一般途径，而无需原开发人员的完整解释。
-  直观性——代码中的东西一看就能明白，不管其操作过程多么复杂。
-  可适应性——代码以一种数据上的变化不要求完全重写的方法撰写。
-  可扩展性——在代码架构上已考虑到在未来允许对核心功能进行扩展。
-  可调试性——当有地方出错时，代码可以给予你足够的信息来尽可能直接地确定问题所在。
### 1.1 代码约定
#### 1、可读性
- 代码工整，缩进大小为4个空格
- 如下代码需要用到注释：
    1. 函数和方法 （@param,return,@descrip 等）
    2. 大段代码—：用于宬单个任务的多行代码前需注释
    3. 复杂的算法
    4. Hack
- 命名规范：
    1. 变量名：为名词
    2. 函数名：以动词开始，如getName()
    3. 不用担心长度问题，因为后期会压缩处理
#### 2、松散耦合
> 只要应用中某一部分过分依赖另一部分，代码就是耦合过紧，难于维护。如：对象的直接引用另一个对象，当修改其中一个的同时就会修改另一个。
- 解耦 HTML/JavaScript
    1. 使用外联javascript而不是直接在html页面中用script标签来
    2. 避免在JS代码中出现HTML代码。HTML呈现应该尽可能与JavaScript保持分享。.
- 解耦 CSS/JavaScript
    1. 避免在JS中直接通过element.style.property的方式来修改或设置元素CSS样式
    2. 使用className的方式来代码直接切换样式
- 解耦应用逻辑/事件处理程序
    1. 避免在事件处理程序中直接包含应用逻辑，而是把具体的业务逻辑单独出来为函数，在事件中适时调用
    2. 勿将event对象直接传给其他方法，而是只传来自event对象中所需的数据；
    3. 任何可以在应用层面的动作都应该可以在不执行任何事件处理程序的情况下进行；
    4. 任何事件处理程序都应该处理事件，然后将处理转交给应用逻辑
### 1.2 编程实践
#### 1、尊重对象所有权
> 在多人合作开发的过程中，如果你不负责创建或维护某个对象、它的对象或它的方法，那就不能对其进行修改。（不要为实例或原型添加属性方法，或重定义）
#### 2、避免全局量
> 避免过多的使用全局变量或函数，而是通过命名空间的方式，将变量或函数以 一个全局变量的属性或方法的形式创建
### 1.3 性能
#### 1、 注意作用域
- 避免全局查找 （如使用document对象）
- 避免with语句 ： with语句会创建自己的作用域，因此会增加执行代码的作用域链长度。
- 优化循环：
    1. 减值迭代 ： 从最大值开始，在循环中不断减值的迭代器会更高效
    2. 原生方法较快
    3. Switch语句较快： 相比一系列if-else语句
    4. 位运算符较快
#### 2、最小化语句数
 1. 多个变量声明造成浪费：
 ```
 var count = 5; var color = 'blue';var values = [1,2,3]; //浪费
 var count = 5, color = 'blue',values = [1,2,3] //推荐
 ```
 2. 插入迭代值
```
var name = values[i]; i++; //浪费
var name = values[i++]; //推荐
```
# 25章 新兴的API
## 1、地理信息：Geolocation API
- navigator.geolocation对象（以geo简写）包含了地理定位信息的API
- geo.getCurrentPosition() 事件：获取实时的地理位置信息
- geo.watchPosition() :跟踪用户位置。参数与getCurrentPosition方法相同。实际上watchPosition就是在定时调用getCurrentPosition。返回watchId
- clearWatch() :清除跟踪
```
// getCurrentPosition(success,error,options){} ,success成功的回调，position为成功后的数据载体，error错误回调，options更多配置
navigator.geolocation.getCurrentPosition(function(position){ 
    var lat = position.coords.latitude,  //position.coords 包含位置信息
        long = position.coords.longitude;
},function(error){
    console.log(error.code)
    console.log(error.message)
},{
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 25000
})
```
## 2、文件信息 File API
- 支持 File API 的浏览器有 IE10+、Firefox 4+、Safari 5.0.5+、Opera 11.1+和 Chrome
- 文件输入元素（input type = file）都有一个files集合，在通过文件输入字段选择一个或多个文件时，files集合中将包含一组File对象。
- 每个File对象对应着一个文件。且包含如下只读属性：
    1. name：本地文件系统中的文件名
    2. size： 文件字节大小
    3. type： 文件的MIME类型
    4. lastModifiedData: 上一次被修改的时间（只有Chrome中有这个属性）
### 文件读取 FileReader
> FileReader类型实现了文件读取机制 ： var reader = new FileReader()
> 方法：
 1. reader.readAsText(file,encoding) ：以纯文本形式读取文件，读取的到的文本保存到result 属性中
 2. reader.readAsDataURL(file) :以URI形式
 3. reader.readAsBinaryString(file) :
 4. reader.readAsArrayBuffer(file)
> 事件：
 1. progress 读取新数据
 2. error： 发生错误
 3. load： 已经读完
 > 图片回显
 ```
 var input = document.getElementById('myFile');
 input.addEventListener('change',function(){
     var file = input.files[0],
        reader = new FileReader(file);
    reader.onload = function (event){
         var src = event.target.result, //也指向了reader.result
            img = document.creageElement('img');
        img.setAttribute('src',src);
        document.body.append(img)
    }
 },false)
 ```
 ### 读取拖放的文件
 > 在页面上创建了自定义的放置目标之后，你可以从桌面上把文件拖放到该目标。通过H5的drop拖放APi和文件API实现
 ```
 var droptarget = document.getElementById( "droptarget");
function handleEvent(event){
    var info = "",
    output = document.getElementById("output"),
    files, i, len;
    EventUtil.preventDefault(event);
    if (event.type == "drop"){
        files = event.dataTransfer.files;
            i = 0;
            len = files.length;
        while (i < len){
            info += files[i].name + " (" + files[i].type + ", " + files[i].size +
        " bytes)<br>";
             i++;
        }
         output.innerHTML = info;
    }
}
EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);
 ```
 > 总结:
- requestAnimationFrame() ：是一个着眼于优化 JavaScript 动画的 API，能够在动画运行期间
发出信号。通过这种机制，浏览器就能够自动优化屏幕重绘操作。
-  Page Visibility API：让开发人员知道用户什么时候正在看着页面，而什么时候页面是隐藏的。
-  Geolocation API：在得到许可的情况下，可以确定用户所在的位置。在移动 Web 应用中，这个
API 非常重要而且常用。
-  File API：可以读取文件内容，用于显示、处理和上传。与 HTML5 的拖放功能结合，很容易就
能创造出拖放上传功能。
-  Web Timing：给出了页面加载和渲染过程的很多信息，对性能优化非常有价值。
-  Web Workers：可以运行异步 JavaScript 代码，避免阻塞用户界面。在执行复杂计算和数据处理
的时候，这个 API 非常有用；要不然，这些任务轻则会占用很长时间，重则会导致用户无法与
页面交互。
