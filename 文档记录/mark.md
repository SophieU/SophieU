## Cookie
1. 包含信息：name，value,expire,所属域名，生效的路径(cookie是同源的，只有在当前域名下的操作才是有效的)
2. 大小4Kb
3. 自动发送到服务器
4. document.cookie查看当前网页的cookie
5. 服务器通过设置set-cookie来添加cookie发送到浏览器
6. cookie的属性有：
- Expires，Max-Age(若同时设置了Expires和Max-Age那Age优先生效 )
- Domain,Path _____ Domain指定浏览器发出Http请求时，哪些域名要附带这个Cookie，如果没有指定 域名，浏览器默认会将其设为当前URL的一级域名 ， Path是请求路径的开关一部分，头信息里会带上这个Cookie，如path为/根路径，那域名下的所有子文件都能带该Cookie
- Secure,HttpOnly:   Secure指定浏览器只有在加密协议HTTPS下，才能带这个Cookie， HTTPOnly指定该Cookie无法 通过JS脚本拿到，主要是Document.cookie，XMLHttpRequest属性和Request API都拿不到该属性。这样就防止该Cookie被脚本拿到。
7. document.cookie读写当前网页的cookie,  可读，可写，一次只能写入一个cookie，document.cookie="name=user;expires=Fri,31 Dec 2020 23:59:59 GMT;"

document.cookie

script标签的type属性有两值：text/javascript , application/javascript 当其值不为其中的一个时，script不会识别也不会执行其内容，但其仍然存在于DOM文档中，可以通过document节点来访问到    
事件属性
工作原理
DOMContentLoaded

浏览器= 渲染引擎 + JS引擎