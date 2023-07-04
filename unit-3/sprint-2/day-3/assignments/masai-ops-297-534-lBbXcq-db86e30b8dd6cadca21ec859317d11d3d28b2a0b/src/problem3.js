let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90, 
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
  }
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Python",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95, 
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
  }
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
  let massagedData =allStudentsMarksData.reduce((acc,ele)=>{
    let obj={};

    obj["name"]=ele.name;
    obj["marks"]=[];

    ele.subject1 && obj.marks.push({subject:ele.subject1,score:ele.marks1})
    ele.subject2 && obj.marks.push({subject:ele.subject2,score:ele.marks2})
    ele.subject3 && obj.marks.push({subject:ele.subject3,score:ele.marks3})
    ele.subject4 && obj.marks.push({subject:ele.subject4,score:ele.marks4})
    ele.subject5 && obj.marks.push({subject:ele.subject5,score:ele.marks5})

    acc.push(obj);
    return acc;

  },[])
  
  // console.log(massagedData);
  
  /*
   ------------------------------------------------
   massage the `allStudentsMarksData` to get a new 
   array called `massagedData`
  
   Instead of separate enties for 5 subjects and their marks,
   in the new array, we just have one entry called marks. 
   marks is an array of objects. the objects of marks
   contains subject and score.
   ------------------------------------------------
  
    Expected output from `massagedData`
  
    [
       {
         name: "Prateek", 
         marks: [
           {subject: 'HTML', score: 81},
           {subject: 'CSS', score: 80}
         ]
       },
       {
         name: "Nrupul", 
         marks: [
           {subject: 'Java', score: 95},
           {subject: 'Python', score: 85}
         ]
       },
  
    ]
  
  */


export {massagedData};