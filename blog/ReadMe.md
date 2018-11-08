#### 2.2.3 storage事件
> 对Storage对象进行任何修改都会触发storage事件，其event对象上有以下属性：
- domain: 发生变化的存储空间域名
- key:设置或删除的键名
- newValue： 如果是设置值，则是新值；如果是删除值，则是null
- oldValue： 键被更改之前的值