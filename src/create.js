const download = require('download-git-repo')
const template = require('../template.json')
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora('项目模板下载中...')

const create = function(templateName, projectName){
    const tempUrl = template[templateName]
    spinner.start()
    download(`direct:${tempUrl}`,projectName,{clone:true}, err=>{
        if(err) {
            spinner.fail()
            console.log(chalk.red(`项目生成失败：${err}`))
        }
    })
}
module.exports=create