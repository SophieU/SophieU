#! /usr/bin/env node
const program = require('commander')
const config = require('../package.json')

program.version(config.version, "-V, --version")

// 定义使用方法
program
    .command("create <template-name> [project-name]")
    .description("创建一个模板项目")
    .action(()=>{
        require("../src/create")
    })

program.parse(process.argv)
if(!program.args.length){
    program.help()
}
console.log(process.argv)