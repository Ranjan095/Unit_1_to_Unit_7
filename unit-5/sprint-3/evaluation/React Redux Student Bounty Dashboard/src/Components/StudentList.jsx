/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getData } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  let dispatch = useDispatch();
  let location = useLocation();
  let [searchParam, setSearchParam] = useSearchParams();
  let students = useSelector((store) => store.studentReducer.students);
console.log(searchParam.getAll("batch"))

  let filterdata = {
    params: {
      batch: searchParam.getAll("batch"),
      _page:searchParam.get("page"),
      _limit:10
    },
  };

  useEffect(() => {
    dispatch(getData(filterdata));
    // getData()
  }, [location.search]);
  // console.log(students)
  return (
    <div>
      <div
        data-testid="student-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4 ,1fr)",
          gap: "7px",
        }}
      >
        {/* Map through the student list using StudentCard component  */}
        {students?.map((ele) => (
          <StudentCard key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  );
};
