import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import endpoints from "../../../config/config";
import { VGetData } from "../../../config/vendor/Apiconfig";

const ProductName=(props)=>{
    const [name,setName]=useState('')
const dt = {
    endpoint:endpoints.findRental
}
    const {data} = useQuery({
        queryKey:['RentalProductName'],
        queryFn:()=> VGetData(dt)
    })
    useEffect(()=>{
if(data){
    if(data.data.length>0){
setName(data.data)
    }
}
    },[data])
    
    const courseIDRender5=()=>{
        const idCourse= document.getElementById('courseId5').value
        props.productname(idCourse)
     }
     const renderCourse=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                     <option key={item.id} value={item.rentalID}>{item.productName}</option>
                
                )
            })
        }
     }

    return(
        <>
        <div style={{position:'relative'}}>
 <select className="form-select profileinput"  id='courseId5' onChange={courseIDRender5} aria-label="Default select example">
  <option defaultValue value=''>Select the Product Your want to Update </option>
  {renderCourse(name)}
</select>
<i class="bi bi-arrow-down-circle-fill Instprofileinputicon"></i>
</div>
        </>
    )
}
export default ProductName