let arr = [
    {id:1,name:'xx',createTime:'2019-10-15 10.03'},
    {id:2,name:'xx',createTime:'2019-10-15 09.05'},
    {id:3,name:'xx',createTime:'2019-10-15 10.06'},
    {id:4,name:'xx',createTime:'2019-10-15 06.03'},
    {id:5,name:'xx',createTime:'2019-10-15 08.03'},
]
let newArr = [
    {id:0,name:'xx',createTime:'2019-10-15 11.03'},
    {id:1,name:'xx',createTime:'2019-10-15 10.03'},
    {id:2,name:'xx',createTime:'2019-10-15 09.05'},
    {id:3,name:'xx',createTime:'2019-10-15 10.06'},
    {id:4,name:'xx',createTime:'2019-10-15 06.03'},
    {id:5,name:'xx',createTime:'2019-10-15 08.03'},
]

let test = newArr.filter(item => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i].id === item.id) {
            return false;
        } else {
            return true
        }
    }
})
console.log(test)