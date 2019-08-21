let a = {
    age: undefined,
    sex: Symbol('male'),
    jobs: function () { },
    name:'yck'
}
let b = JSON.parse(JSON.stringify(a))
console.log(b)