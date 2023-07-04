import { Link, useParams } from "react-router-dom";


export const StudentCard = ({id,Poster,name,batch,green_card}) => {

  
  // console.log(param)
  

  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <img width='250px' className="student-image" src={Poster}/>
      <p className="student-name">{name}</p>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card">{green_card}</h3>
      <Link to={`/student/${id}`}><button className="student-detail" >student-detail</button></Link>
    </div>
  );
};
