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
          // console.log(data,'banner')
          if(data.length>0){
            return data.map((item,i)=>{
                return  <img key={i} src={`${endpoints.imageprefix}${item.banner?item.banner:'service/1719061365_back3.1.png'}`} alt="academy" className="serbanner"/>
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
        {data &&
        <div className="sermain1">
                <h1 >{props.details.companyName}</h1>
                <h2>{props.details.firstName} {props.details.middleName} {props.details.lastName}</h2>
                <p className="mainP">Our drone services deliver exceptional results with cutting-edge technology and expert operators. We ensure unmatched efficiency, reliability, and quality for all your aerial needs. Experience the best in the industry with our professional drone services.</p>
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
            <button className="button" onClick={()=>{window.scrollTo(0,600)}}>Book Service</button>
            </div>
}
        </>
    )
}
export default ServiceBanner