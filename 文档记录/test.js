var a = [
    {name:'haha',age:18,desc:'苹果'},
    {name:'lala',age:12,desc:'草莓'},
    {name:'lala',age:11,desc:'梨子'},
    {name:'lala',age:12,desc:'香蕉'},
]
var fruit = '桃子';

console.log(a.some((item)=>item.desc===fruit))