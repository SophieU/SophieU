const download = require('download-git-repo')
const template = require('../template.json')
const ora = require('ora')
const chalk = require('chalk')
const program = require('commander')

const create = function(templateName, projectName){
    const tempUrl = template[templateName]
    download(`direct:${tempUrl}`,`${projectName}`,{clone:true}, err=>{
        console.log('回调函数')
        if(err){
            console.log(err)
        }
    })
}
module.exports=create