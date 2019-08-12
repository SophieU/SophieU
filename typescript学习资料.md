## 一、入门
- [TypeScript入门教程](https://ts.xcatliu.com/)
### 1.1 基础关键字
#### 1. 原始数据类型
- 原始数据类型：boolean,string,number,undefined,null,Symbol
- 对象类型：Object
#### 2. 任意值
- Any:用于表示允许赋值为任意类型。（`let test:any='seven'`）
#### 3. 联合类型
- `let test:string|number`，表示聚会可以为多种类型中的一种（:string|number)
#### 4. 对象的类型（接口）
- typescript中使用`接口(interfaces)`来定义对象的类型
```js
interface Person {
    name:string;
    age:number;
    gender?:string; //可选属性
    [propName: string]: any; //任意属性
}
let tom:Person={
    name:'tom',
    age:25
}
```