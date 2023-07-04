let subjectsData = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'HTML'},
    {id: 3, name: 'CSS'},
    {id: 4, name: 'Java'},
    {id: 5, name: 'Rust'},
  ]
  
  let res=subjectsData.reduce((acc,ele)=>{
    acc[ele.id]=ele.name;

    return acc;
  },{})

  // function res(x){
  //   let sub;
  //   subjectsData.forEach((ele)=>{
  //     if(ele.id==x){
  //       sub=ele.name;
  //     }
  //   });
  //   return sub;
  // }
  // code your key-value object for subjects here
   
  let students = [
    {id: 1, name: 'Prateek', subjectID: 5},
    {id: 2, name: 'Yogesh', subjectID: 2},
    {id: 3, name: 'Nrupul', subjectID: 4},
    {id: 4, name: 'Prateek', subjectID: 1},
  ]
    

  let newObj = students.reduce((acc,ele)=>{
    let name=ele.name;
    let id=ele.subjectID;
    let sub=res[id];

    acc[name]=acc[name]||[];
    acc[name].push(sub);

    return acc
    
  },{})
  
  // console.log(ne wObj);
  
  /* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsData` array.
  
  Hint: consider creating an extra key-value object for quickly accessing subject names
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */

 export {newObj};