const delay = timeout=>new Promise(resolve=>setTimeout(resolve,timeout))

async function f() {
    await delay(1000);
    await delay(2000);
    return 'done'
}
f().then(v=>console.log(v))