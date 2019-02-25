## Cookie
1. 包含信息：name，value,expire,所属域名，生效的路径(cookie是同源的，只有在当前域名下的操作才是有效的)
2. 大小4Kb
3. 自动发送到服务器
4. document.cookie查看当前网页的cookie
5. 服务器通过设置set-cookie来添加cookie发送到浏览器
6. cookie的属性有：
- Expires，Max-Age(若同时设置了Expires和Max-Age那Age优先生效 )