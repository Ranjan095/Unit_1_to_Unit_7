import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentDetail = () => {

let {id}=useParams()
console.log(id)

let store=useSelector((store)=>store.studentReducer.students)
console.log(store)
let pro=store.find((ele)=>ele.id===+id);
console.log(pro)

  return (
    <div className={"student-card"}>
      <h3 className="student-id">{id}
        {/* Show Student Id here */}</h3>
        <img width='300px' className="student-image" src={pro.Poster}/>
        <p className="student-name">{pro.name}</p>
        <p className="student-code">{pro.student_code}</p>
        <p className="student-batch">{pro.batch}</p>
        <p className="student-score">{pro.score}</p>
        <h3 className="student-green-card">{pro.green_card}</h3>

    </div>
  );
};
