import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { Link } from "react-router-dom";

const Homeacademy =()=>{
    const data2  ={
        endpoint:endpoints.AllCourses
    }

 const {data} =  useQuery({
        queryKey:['homeAcademy'],
        queryFn:()=>GetData(data2)
    })

const renderCourses =(data)=>{
    if(data){
        if(data.length>0){
            return data.map((item)=>{
                let nm = item.institute_name.replace(/\s+/g, '-');
                let cu = item.course.replace(/\s+/g, '-');
                return(
                    <Link to={`/academy/${nm}/${cu}/${item.courseID}`} key={item.id} >
                    <div className="acdcard">
    <img src="/images/r1.jpg" className="card5img" alt="academy"/>
    <div className="cardbody">
<h3>{item.institute_name}</h3>
<div>
    <h6>{item.course}</h6>
    <p>₹ {item.fees} </p>
    <div style={{display:'flex'}}>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> {item.city}</h5>
    <i class="bi bi-suit-heart likeicon"></i>
    </div>
</div>
    </div>
</div>
</Link>
                )
            })
        }else{
            return(
                <>
                <img src="/images/no-results.png" alt="No Result" style={{width:'50%'}}/>
                </>
            )
        }
    }else{
        const ld=[1,2,3,4]
            return ld.map((item)=>{
                return(
                    
                    <div className="acdcard" key={item} aria-hidden="true" id="cardPlaceholder">
                  <p className="placeholder-wave" style={{marginBottom:0}}>
                  <span className="placeholder col-12" style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}></span>
                  </p>
                  
                  <div className="cardbody" style={{padding:10}}>
                  <p className="card-text placeholder-wave" style={{padding:10,marginBottom:0}}>
                  <i className="placeholder col-10"></i>
                  <i className="placeholder col-6"></i>
                  <i className="placeholder col-8"></i>
                  </p>
                  <span className="button disabled placeholder col-6" style={{height:40,borderRadius:20,marginTop:0}} aria-disabled="true"></span>
                  </div>
                  </div>
                
                )
            })
    }
}
    return(
        <>
        {renderCourses(data)}
        </>
    )
}
export default Homeacademy