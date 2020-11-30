const download = require('download-git-repo')
const template = require('../template.json')
const ora = require('ora')
const chalk = require('chalk')
const inquirer = require('inquirer')

const question = [
    {
        name: 'templateName',
        type: 'input',
         message: '请输入模板名称',
         validate(val){
             if(val===''){
                 console.log(chalk.yellow('模板名称不能为空'))
                 console.log(chalk.grey('请通过my-cli list命令查看可用模板'))
                 return
             }else if(!template[val]){
                 console.log(chalk.red('无此模板，请确认模板名称后重试'))
                 return
             }else{
                 return true
             }
         }
    },
    {
        name: 'projectName',
        type: 'input',
        message: '请输入项目名称',
        validate(val){
            if(val===''){
                console.log(chalk.yellow('项目名称不能为空'))
                return
            }
            return true
        }
    }
]
inquirer
    .prompt(question)
    .then(answers=>{
        let {templateName, projectName} = answers
        const spinner = ora('项目模板下载中...')
        spinner.start()
// download(`direct:${tempUrl}`,projectName,{clone:true}, err=>{
//     if(err) {
//         spinner.fail()
//         console.log(chalk.red(`项目生成失败：${err}`))
//         return
//     }
//     spinner.succeed()
//     console.log(chalk.green('项目下载成功'))
//     console.log(chalk.grey(' to Get Start: '))        
//     console.log(chalk.grey(` cd ${projectName}`))
// })
    })


