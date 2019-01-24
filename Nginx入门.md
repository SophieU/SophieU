# 简介
Nginx是一个轻量级的HTTP服务框架
优点：
- 支持海量高并发
- 内存消耗少
- 免费使用可以商业化
- 配置文件简单

## Linux下运维环境搭建
教程默认在Linux操作系统中安装使用，此交使用的是CentOS 7.4
```bash
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim
```
#### 建立目录
根据本人喜好建立如下目录：
步骤如下(此步骤根据自己喜欢建立)：
1. 进入系统后，在目录下建立了一个`myNginx`的文件夹。
2. 进入 `myNginx`文件夹 ,命令是 `cd myNginx`
3. 分别使用mkdir建立 app,backup,download,logs,work文件夹。

## Nginx环境搭建
#### 安装
1. 先安装Nginx源（用于yum安装）
```bash
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```
2. 再安装Nginx
```bash
yum install -y nginx
```
3. Nginx默认目录:`whereis nginx`

> 以下是Nginx的默认路径：
> (1) Nginx配置路径：/etc/nginx/
> (2) PID目录：/var/run/nginx.pid
> (3) 错误日志：/var/log/nginx/error.log
> (4) 访问日志：/var/log/nginx/access.log
> (5) 默认站点目录：/usr/share/nginx/html
> **事实上，只需知道Nginx配置路径，其他路径均可在/etc/nginx/nginx.conf 以及/etc/nginx/conf.d/default.conf 中查询到。**
4. 查看Nginx版本：`nginx -v`

## 查询与配置
#### 1. 查看Nginx安装目录
```bash
rpm -ql nginx
```
- `rpm`是linux的rpm包管理工具，`-q`代表询问模式，`-l`代表返回列表

#### 2. 配置文件
nginx.conf文件是Nginx总配置文件，在我们搭建服务器时经常调整这个文件。目录一般在：`etc/nginx`
- 如下是一个nginx.conf的一般内容
```bash
#运行用户，默认即是nginx，可以不进行设置
user  nginx;
#Nginx进程，一般设置为和CPU核数一样
worker_processes  1;   
#错误日志存放目录
error_log  /var/log/nginx/error.log warn;
#进程pid存放位置
pid        /var/run/nginx.pid;
events {
    worker_connections  1024; # 单个后台进程的最大并发数
}
http {
    include       /etc/nginx/mime.types;   #文件扩展名与类型映射表
    default_type  application/octet-stream;  #默认文件类型
    #设置日志模式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;   #nginx访问日志存放位置
    sendfile        on;   #开启高效传输模式
    #tcp_nopush     on;    #减少网络报文段的数量
    keepalive_timeout  65;  #保持连接的时间，也叫超时时间
    #gzip  on;  #开启gzip压缩
    include /etc/nginx/conf.d/*.conf; #包含的子配置项位置和文件
```
- 最后一行包含的是子配置项的内容，可以进入到conf.d目录，使用`vim default.conf`进行查看
```bash
# default.conf文件内容
server {
    listen       80;   #配置监听端口
    server_name  localhost;  //配置域名
    #charset koi8-r;     
    #access_log  /var/log/nginx/host.access.log  main;
    location / {
        root   /usr/share/nginx/html;     #服务默认启动目录
        index  index.html index.htm;    #默认访问文件
    }
    #error_page  404              /404.html;   # 配置404页面
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;   #错误状态码的显示页面，配置后需要重启
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```
- 上面可见，服务目录放在`/usr/share/nginx/html`下

## 操作nginx
#### 1. 启动nginx
- 通过命令：`nginx`直接启动nginx
```bash
# 普通
nginx
# 常用启动方式
systemctl start nginx.service
```
- 启动后没有任何提示，可以通过下面命令查询服务
```bash
ps aux | grep nginx
```
> 启动nginx服务后，如果是在阿里云或腾讯云服务器上装的，那么通过设置安全组信息（放开80端口）后，就可以通过公网IP进行访问了。
> 若有域名，可以将域名先解析到服务器的公网IP，再通过域名访问更方便

#### 2. 停止Nginx服务
```bash
# 立即停止服务，强制性的
nginx -s stop
# 从容停止服务，完成当前工作后停止
nginx -s quit
# 杀死nginx进程
killall nginx
# 系统服务方式停止
systemctl stop nginx.service
```

#### 3. 重启nginx服务
```bash
# 重启
systemctl restart nginx.service
# 重新载入配置文件【若修改了nginx配置文件，都需要重载一下】
nginx -s reload
# 查看端口号
netstat -tlnp
```
- 一般情况下nginx启动通过80端口提供HTTP访问

## Nginx反向代理的设置
我们现在的web模式基本的都是标准的CS结构，即Client端到Server端。那代理就是在Client端和Server端之间增加一个提供特定功能的服务器，这个服务器就是我们说的代理服务器。

- **正向代理**：如翻墙工具就是一个典型的正向代理工具。代理服务器proxy代理客户端去访问服务器
![正向代理](http://jspang.com/static/upload/20181024/wxDZWDrFC_o9Xf5e2j-mRc2g.png)

- **反向代理**：现在基本所有大型网站的页面都是用的反向代理。代理服务器proxy代理服务端
    - 客户端发送的请求，想要访问server服务器上的内容。发送的内容被发送到代理服务器上，这个代理服务器再把请求发送到自己设置好的内部服务器上，而用户真实想获得的内容就在这些设置好的服务器上。
![反向代理](http://jspang.com/static/upload/20181024/5AwF_4MfkSxPtmre19xfPLgK.png)

> 通过图片的对比，应该看出一些区别，这里proxy服务器代理的并不是客户端，而是服务器,即向外部客户端提供了一个统一的代理入口，客户端的请求都要先经过这个proxy服务器。具体访问那个服务器server是由Nginx来控制的。再简单点来讲，`一般代理指代理的客户端，反向代理是代理的服务器。`

#### 反向代理的用途和好处
- **安全性**：正向代理的客户端能够在隐藏自身信息的同时访问任意网站，这个给网络安全代理了极大的威胁。因此，我们必须把服务器保护起来，使用反向代理客户端用户只能通过外来网来访问代理服务器，并且用户并不知道自己访问的真实服务器是那一台，可以很好的提供安全保护。
- **功能性**：反向代理的主要用途是为多个服务器提供负债均衡、缓存等功能。负载均衡就是一个网站的内容被部署在若干服务器上，可以把这些机子看成一个集群，那Nginx可以将接收到的客户端请求“均匀地”分配到这个集群中所有的服务器上，从而实现服务器压力的平均分配，也叫负载均衡。

#### 举例
- 如将访问HTTP的首页代理到http://www.baidu.com去（即当访问公网IP时，会跳转到baidu）
```bash
server {
     listen 80;
    server_name _;
    location / {
            proxy_pass http://www.baidu.com;
    }
}
```