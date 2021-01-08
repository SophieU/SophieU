#! /usr/bin/env node
const program = require('commander')
const config = require('../package.json')
const chalk = require('chalk')

program.version(config.version, "-V, --version")

// 定义使用方法
program
    .command("create <template-name> <project-name>")
    .arguments('template-name','项目模板名称')
    .description("创建一个模板项目")
    .action( (templateName, projectName) =>{
        if(!templateName){
            console.log(chalk.red('请输入模板名称'))
            console.log(chalk.yellow('通过my-cli list 命令查看当前可用模板'))
            return
        }
        if(!projectName){
            console.log(chalk.red('项目名称不能为空'))
            return 
        }
        console.log(templateName,projectName)
        require("../src/create")(templateName,projectName)
    })

program
    .command("list")
    .description("列出当前可用模板项目")
    .action(()=>{
        require('../src/list')
    })

program
    .command('add')
    .description('添加模板')
    .action(()=>{
        require('../src/add')
    })

program
    .command('delete')
    .description('删除模板')
    .action(()=>{
        require('../src/delete')
    })
    
// 解析参数
program.parse(process.argv)
if(!program.args.length){
    program.help()
}