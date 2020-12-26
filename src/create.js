const download = require('download-git-repo')
const template = require('../template.json')
const ora = require('ora')
const chalk = require('chalk')
const inquirer = require('inquirer')

const question = [
    {name: 'templateName', message: '请输入模板名称'}
]

const spinner = ora('项目模板下载中...')

spinner.start()
download(`direct:${tempUrl}`,projectName,{clone:true}, err=>{
    if(err) {
        spinner.fail()
        console.log(chalk.red(`项目生成失败：${err}`))
        return
    }
    spinner.succeed()
    console.log(chalk.green('项目下载成功'))
    console.log(chalk.grey(' to Get Start: '))        
    console.log(chalk.grey(` cd ${projectName}`))
})

module.exports=create