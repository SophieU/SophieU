const download = require('download-git-repo')
const template = require('../template.json')
const ora = require('ora')
const chalk = require('chalk')
const program = require('commander')

const tempUrl = template.admin.url
const create = function(){
    
    download(`direct:${tempUrl}`,'./tmp',{clone:true}, err=>{
        console.log('回调函数')
        if(err){
            console.log(err)
        }
    })
}