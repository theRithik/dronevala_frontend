import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
const ServiceBanner=(props)=>{
const dn ={
    id:props.id,
    endpoint:endpoints.serviceBanner
}
  const {data}=  useQuery({
        queryKey:['ServiceDetails',props.id,'banner'],
        queryFn:()=>PostData(dn)
    })
    const bannerRender=(data)=>{
        if(data){
          console.log(data,'banner')
          if(data.length>0){
            return data.map((item,i)=>{
                return  <img key={i} src={item.banner?item.banner:'/images/back3.1.png'} alt="academy" className="serbanner"/>
      
            })
          }else{
            return <img  src="/images/back3.1.png" alt="service" className="serbanner"/>
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
        {bannerRender(data)}
        <div className="sermain1">
                <h1 >{props.details.companyName}</h1>
                <h2>{props.details.firstName} {props.details.middleName} {props.details.lastName}</h2>
                <p className="mainP">we offer comprehensive course designed to equip you with the skills and knowledge required to excel in the field of drone technology. Our curriculum is tailored to meet industry standards and covers a wide range of topics</p>
            <div className="ser1Div">
<div className="sernumeff">
  <h3>01</h3>
<div>
  <p>Location</p>
  <span>{props.details.currentLocation}</span>
</div>
</div>
<div className="sernumeff">
  <h3>02</h3>
<div>
  <p>Service</p>
  <span>{props.details.service}</span>
</div>
</div>
<div className="sernumeff">
  <h3>03</h3>
<div>
  <p> Service location</p>
  <span>{props.details.serviceLocations}</span>
</div>
</div>

            </div>
            <button className="button">Book Service</button>
            </div>
        </>
    )
}
export default ServiceBanner