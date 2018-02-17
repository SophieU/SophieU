---
title: vue打包优化
date: 2018-01-10
tag: vue
categories: 前端开发
---
通常在使用Vue开发单面应用时，由于第三方库大都是在main.js中进行引用的，而webpack在打包时，会将所引用的第三方库都打包到vendor.js中，导致vendor.js过大。针对这个问题可以进行以下优化：

<!--more-->
