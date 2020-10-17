#!/usr/bin/env node
const exec = require('child_process').execSync

module.exports = ()=>{
    let name
    let email

    try{
        name = exec('git config --get user.name')
        email = exec('git config --get user.email')
    }catch(e){}
    return {name: name||'', email: email||''}
}