import React from "react";
import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";
import { useQuery } from "@tanstack/react-query";

const Banner=(props)=>{
   
    const det={
      id:props.id,
      endpoint:endpoints.getBanner
    }

 const {data}=   useQuery({
      queryKey:['academyDetails',det.id,'banner'],
      queryFn:()=>PostData(det)
    })
   

      const imageRender=(data)=>{
        if(data){
          console.log(data,'bannner')
          if(data.length>0){
            return data.map((item,i)=>{
                return  <img key={i} src={item.banner_Image} alt="academy" className="acdbanner"/>
            })
          }else{
return <img  src="/images/slide2.webp" alt="academy" className="acdbanner"/>
      
          }
        }
        else{
return  (
    <div className="col-md-12 col-sm-12 placeholder-wave">
    <span className="placeholder-wave col-12" style={{width:'100%',height:'600px',borderRadius:'30px'}} ></span>
    </div>
)
        }
      }

    return(
        <>
        {imageRender(data)}
       <div className="acadmain1">
                <h1 >{props.details.institute_name}</h1>
                <h2>{props.details.course}</h2>
                <p className="mainP">we offer comprehensive course designed to equip you with the skills and knowledge required to excel in the field of drone technology. Our curriculum is tailored to meet industry standards and covers a wide range of topics</p>
            <div className="main1Div">
<div className="mainnumeff">
  <h3>01</h3>
<div>
  <p>Course Duration</p>
  <span>{props.details.courseDuration}</span>
</div>
</div>
<div className="mainnumeff">
  <h3>02</h3>
<div>
  <p>Drone Category</p>
  <span>{props.details.droneCategory}</span>
</div>
</div>
<div className="mainnumeff">
  <h3>03</h3>
<div>
  <p>location</p>
  <span>{props.details.city}</span>
</div>
</div>

            </div>
            <button className="button">Enroll Now</button>
            </div>
        </>
    )
}
export default Banner