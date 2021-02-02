/* 删除模板 */

const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const tplObj = require('../template.json')

let question = [
    {
        name: 'name',
        message: '请输入要删除的模板名称',
        validate(name){
            if(name===''){
                return 'Name is required'
            }else if(!tplObj[name]){
                return 'Template does not exist!'
            }else{
                return true
            }
        }
    }
]

inquirer
    .prompt(question)
    .then(answers=>{
        let {name} = answers
        delete tplObj[name]
        // 更新template.json
        console.log(chalk.red('模板删除成功，当前'))
        fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(tplObj), 'utf-8', err=>{
            if(err) console.log(err)
        })
    })