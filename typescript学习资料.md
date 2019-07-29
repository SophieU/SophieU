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
#### 5. 数组的类型
- 【类型+方括号】表示法; `let fibonacci:number[]=[1,1,2,3,5]`
#### 6. 函数的类型
- 一个函数有输入和输出，要在typescript中对其进行约束，需要把输入和输出都考虑到
```js
function test(x:number,y:number):number{
    return x + y;
}
let test2:(x:number,y:number)=>number:function(x:number,y:number):number{
    return x+y;
}
```
#### 7. 类型断言Type Assertion用来手动指定一个值的类型
- 语法：`<类型>值` 或 `值 as 类型`
```js
function getLen(input:string|number):number{
    if((<string>input).length){
        return (<string>input).length;
    }else{
        return something.toString().length;
    }
}
```
#### 8. 声明文件
- 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全，接口提示等功能
#### 9. 类型别名
- `type Alias = string`  关键字`type`
