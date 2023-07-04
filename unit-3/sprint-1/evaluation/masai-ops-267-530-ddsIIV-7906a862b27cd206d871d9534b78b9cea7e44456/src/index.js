function studentData() {
  
  return {
    firstName:"Vivek",
    lastName:"Agarwal",
    fullName:'Vivek Agarwal',
    age:38,
    marksArray:[50,60,70],
    hobbies:['Singing', 'Coding', 'Meditating'],
    getInfo:function(){
      return this.fullName+"'s age is "+this.age+".";
    },
    getResult:function(){
      let totalMark=0;
      for(let i=0;i<this.marksArray.length;i++){
        totalMark+=this.marksArray[i];
      }
      let average=totalMark/this.marksArray.length;
      if(average<50){
        return  'Result: FAIL'
      }
      else if(average>=50){
        return 'Result: PASS'
      }
    }
  };
 
  
}








export {studentData}