#!/usr/bin/env node

const download = require('download-git-repo')
const template = require('../template.json')
const ora = require('ora') // loading效果
const chalk = require('chalk')  // 添加颜色
const inquirer = require('inquirer')    // 交互命令
const handlebars = require('handlebars') // 元信息替换
const getUser = require('./libs/git-user')
const fs = require('fs')

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
        const tempUrl = template[templateName]
        spinner.start()
        download(`direct:${tempUrl}`,projectName,{clone:true}, err=>{
            if(err) {
                spinner.fail()
                console.log(chalk.red(`项目生成失败：${err}`))
                return
            }
            spinner.succeed()
            let packageJSON = require(`${projectName}/package.json`)
            let template = handlebars.compile(packageJSON)
            let gitUser = getUser()
            let metaData = {
                name: projectName,
                author: gitUser.name,
                description: 'Project description'
            }
            let result = template(metaData)
            console.log(result)
            
            fs.writeFile(`${projectName}/package.json`,JSON.stringify(result), 'utf-8', err=>{
                if(err) console.log(chalk.red(err))
                console.log(chalk.green('s k8s umi react fiddler ant-design flutter'))
                console.log('react antd dva electron ')
                console.log('VP8  SFU webrtc  ')
                console.log('mysql   redis  nginx apollo')
            })
        })
    })


