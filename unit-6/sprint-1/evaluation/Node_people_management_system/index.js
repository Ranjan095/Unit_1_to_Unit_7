
const http=require('http')
const fs=require('fs')
const os=require("os")
const data=require("./data.json")
const yodasay=require('yodasay');

const server=http.createServer((req,res)=>{
if(req.url=='/'){
    res.setHeader("Content-type","text/html")
    res.end(`<h1>Welcome to the Home Page</h1>`)
}

else if(req.url=='/gencount'){
    let Male=0,Female=0;

fs.readFile("./data.json","utf-8",(err,dataa)=>{
if(err){
    res.end(err)
}else{
    // const myData=data
   let data=JSON.parse(dataa)
    
   for(let i=0; i<data.length; i++){
    if(data[i]["gender"]=="Female"){
        Female++
    }else if(data[i]["gender"]=="Male"){
        Male++
    }
   }
//    console.log("male ="+Male+" Female="+Female )
  
   fs.writeFile("logs.txt",`The initial Male count is ${Male} and Female count is ${Female} at ${Date()}\n`,(err)=>{
    err ? res.end(err) : res.end('The count has been updated in the logs file')
})
}
})

}
else if(req.url=="/addnew"){
    let obj={
        id:26,
        first_name:os.userInfo().username,
        last_name:os.userInfo().username,
        email:'ranjan@gmail.com',
        gender:'Mail'
    }
    data.push(obj);
    fs.writeFile("./data.json",JSON.stringify(data),(err)=>{
        err ? res.end(err): res.end("The data has been updated, go and check the data file")
    })

}
else if(req.url=="/yoda"){
    let data=fs.readFileSync("people.txt","utf-8").toString();
    res.end(yodasay.say({
        text:data
    }))
}


})

// server.listen(8089,()=>{
//     console.log('server is running in port 8089')
// })

module.exports=server;
// Do not forget to export the server.
// e.g => module.exports = server;
