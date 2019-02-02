---
title: docker入门
date: 2019-02-02
tag: docker
categories: 后端学习
---
Docker是一个使用Go语言开发的开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的机器上。
- 什么是Docker?一个用来装应用的容器，开源的，托管在github（`对 Docker 最简单并且带有一定错误的认知就是 “Docker 是一种性能非常好的虚拟机”。`）.[官网](https://www.docker.com/)
- Docker 相比于传统虚拟机的技术来说先进了不少，具体表现在 Docker 不是在宿主机上虚拟出一套硬件后再虚拟出一个操作系统，而是让 Docker 容器里面的进程直接运行在宿主机上（Docker 会做文件、网络等的隔离），这样一来 Docker 会 “体积更轻、跑的更快、同宿主机下可创建的个数更多”。

> **Docker的思想**
> 1. 集装箱：每一个容器可以看成是一个单独的集装箱，它们各自载有自己的应用
> 2. 标准化： 当需要把一个应用转移到另一个容器中时，需要按照*运输方式的标准*来转移。应用的存储也对应了*存储方式的标准化*，以及*API接口的标准化*
> 3. 隔离：每个容器的内容是相互隔离互不影响的

> **Docker解决了什么问题**
> 1. 如一个开发项目在本地运行没有问题，放在服务器上却跑不起为。*原因*：系统环境以及依赖版本不一致
> 2. 服务系统很卡，某个程序卡死了服务器。*原因*：某个程序会影响整个系统的内存，这时Docker可以解决
> 3. 双11来了，服务器撑不住了？ Docker可以很快的分出很多“服务器”（快速扩展，弹性伸缩）
> 4. 安装软件太慢，比如安装mongodb，要下载下来要好久，而docker只需要一条命令就可以跑起来
<!--more-->

## Docker核心
#### 1、Image(Docker镜像)
- **Docker 把应用程序及其依赖，打包在 image 文件里面。**,有通过这个文件，才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。
- image 文件是通用的，一台机器的 image 文件拷贝到另一台机器，照样可以使用。一般来说，为了节省时间，我们应该尽量使用别人制作好的 image 文件，而不是自己制作。即使要定制，也应该基于别人的 image 文件进行加工，而不是从零开始制作。
#### 2、Container(容器)
 容器的存在离不开镜像的支持，他是镜像运行时的一个载体（类似于实例和类的关系）。依托 Docker 的虚拟化技术，给容器创建了独立的端口、进程、文件等“空间”，Container 就是一个与宿机隔离 “容器”。容器可宿主机之间可以进行 port、volumes、network 等的通信。
#### 3、Repository(仓库)
仓库的作用在于传输镜像，当需要把一个镜像传输到另一个地方时可能通过Docker的仓库先上传本机的镜像，然后在另一台机器上通过仓库下载对应镜像。 Docker 的仓库和 git 的仓库比较相似，拥有仓库名、tag。在本地构建完镜像之后，即可通过仓库进行镜像的分发。常用的 Docker hub 有 https://hub.docker.com/、 https://cr.console.aliyun.com/、https://c.163.com 等。 Docker也支持私有仓库镜相。

## Docker安装 
Docker在Windows,linux,Mac OS下都可安装。
- windows下安装教程：https://docs.docker.com/docker-for-windows/install/
- macOS下安装教程：https://docs.docker.com/docker-for-mac/install/
- linux系统下：`curl -s https://get.docker.com|sh`,官网教程：https://docs.docker.com/install/linux/docker-ce/centos/

 