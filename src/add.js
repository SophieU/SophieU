/* 添加模板信息 */
const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const tplObj = require('../package.json')

let question = [
    {
        name: 'name',
        type: 'input',
        message: '请输入模板名称',
        validate(val){
            if(val===''){
                return 'Name is required'
            }else if(tplObj[val]){
                return 'Template name has already existed!'
            }else{
                return  true
            }
        }
    }
]