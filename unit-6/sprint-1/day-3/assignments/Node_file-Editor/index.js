/** @format */

const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
const newName = process.argv[4];


// fs.writeFileSync(file,content)

switch (operation) {
  // complete the fillowing function.
 case "create":{
fs.writeFile(file,'',(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log('created')
  }
})
 }
 break
  case "delete":
    {
      fs.unlinkSync(file);
    }
    break;
  case "read":
    {
      //  let data= fs.readFileSync(file)
      //  console.log(data)
      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
    break;
  case "append":
    {
      fs.appendFile(file, `\n${content}`, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
    break;
  case "rename": {
    fs.rename(file, newName, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file name is changed");
      }
    });
  }
  break;
  case "list":{
    let dir=file;
    fs.readdir(dir,(err,files)=>{
      if(err){
        console.log(err)
      }else{
        console.log(files)
      }
    })
  }
  default:
    console.log(`Invalid operation '${operation}'`);
}
