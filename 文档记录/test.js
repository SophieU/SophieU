function sleep(){
    return new Promise(resolve=>{
        setTimeout(function () {
            console.log('finish');
            resolve("sleep");
            console.log(111)
        }, 2000);
    })
}

async function test(){
    let value = await sleep();
    console.log(value)
    console.log("object");
}
test();