import { useQuery } from "@tanstack/react-query";
import React from "react";
import { VGetData } from "../../../config/vendor/Apiconfig";
import endpoints from "../../../config/config";

const ServiceNames =(props)=>{
    const dp={
        endpoint:endpoints.servicesFind,
      }
    const {data:servicedata}=useQuery({
        queryKey:['serviceNames'],
        queryFn:()=>VGetData(dp)
    })


    const courseIDRender4=()=>{
        const idCourse= document.getElementById('courseId4').value
        props.serviceID(idCourse)
     }
    
     const renderCourse=(data)=>{
        if(data){
            return data.data.map((item)=>{
                return(
                     <option key={item.id} value={item.serviceID}>{item.firstName} {item.middleName} {item.lastName}</option>
                
                )
            })
        }
     }

    return(
        <>
         <div style={{position:'relative',width:'100%'}}>
         <select className="form-select profileinput" id='courseId4' onChange={courseIDRender4} aria-label="Default select example">
  <option defaultValue value=''>Select Service person Name </option>
  {renderCourse(servicedata)}
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}} ></i>
</div>
        </>
    )
}
export default ServiceNames