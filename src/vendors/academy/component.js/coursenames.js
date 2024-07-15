import { useQuery } from "@tanstack/react-query";
import React  from "react";
import {VGetData} from "../../../config/vendor/Apiconfig";
import endpoints from "../../../config/config";

const CourseNames =(props)=>{
    const dp={
        endpoint:endpoints.findCourses,
      }
    const {data:coursedata}=useQuery({
        queryKey:['courseNames'],
        queryFn:()=>VGetData(dp)
    })


    const courseIDRender4=()=>{
        const idCourse= document.getElementById('courseId4').value
        props.courseID(idCourse)
     }
    
     
    const renderCourse=(data)=>{
        console.log(data)
        if(coursedata){
            return data.data.map((item)=>{
                return(
                     <option key={item.id} value={item.courseID}>{item.course}</option>
                
                )
            })
        }
    }
    return(
        <>
         <select className="form-select profileinput" id='courseId4' onChange={courseIDRender4} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
        </>
    )
}
export default CourseNames