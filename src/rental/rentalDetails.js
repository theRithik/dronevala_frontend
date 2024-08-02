import React, { useEffect, useState } from "react";
import './rentalDetails.css'
import SuspenseLoad from "../suspense/suspence";
import RentalBanner from "./components/banner";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import endpoints from "../config/config";
import { PostData } from "../config/vendor/Apiconfig";
import { useQuery } from "@tanstack/react-query";
import RenGallery from "./components/rentlagallery";
import RentalReview from "./components/rentalReviews";
import { DatePicker, message } from "antd";
const RentalDetails =()=>{
    const {id,productName,brand} = useParams()
    const [details,setDetails]=useState([])
    const [features,setFeatures]=useState('')
    const [nDate,setNdate]=useState('')
    const[dates,setDates]=useState('')
    const history = useNavigate()
    const det={
        id:id,
        endpoint:endpoints.rentalDetails
      }
      
      const {data}=  useQuery({
          queryKey:['rentalDetails',det.id],
          queryFn:()=>PostData(det)
        })

        useEffect(()=>{
if(data){
    setDetails(data[0])
    let dronT = data[0].features
   const feat = dronT.split("#")
    const dType =[]
   if(feat.length>1){
    for(let i=0;i<feat.length;i++){
        let obj={}
        if(feat[i]!==''){
            obj['id']=i
            obj['tech']=feat[i]
            dType.push(obj)
        }
    }
    setFeatures(dType)
}else{
    setFeatures(dronT)
}
}
// eslint-disable-next-line
        },[data])

        const feaRender=(value)=>{
            if(value.length>0){
                return value.map((item,i)=>{
                    return(
                        <div  className="serdronefea"  key={i}>
                              <i class="bi bi-plus plusicon"></i>
                            <span className="sertext">{item.tech}</span>
                        </div>
                    )
                })
            }
            else{
            return(
              <span id="lstD"style={{fontSize:'13px'}}>{features}</span>
            )
            }
            }

            const pimage=(data)=>{
if(data.image){
    return data.image ?(
        
        <img  src={`${endpoints.imageprefix}${data.image}`} style={{maxWidth:'90%',borderRadius:30}} alt="product"/>
    ):(
        <div style={{position:'relative'}}>
        <img src="/images/wallpaper2.webp" className="card5img" style={{maxWidth:'90%',borderRadius:30}} alt="academy"/>
    <p style={{position:'absolute',top:15,right:"20%",color:'orange',fontSize:10,fontWeight:700}}>No Image Provided</p>
    </div>
    )
}else{
    return(
        <img src="" alt="product"/>
    )
}
            }

            const datepicked=(dates,dateStrings)=>{
                console.log(dates,dateStrings)
                if(dateStrings.length>1){
                    setNdate(dateStrings.length)
                    setDates(dateStrings)
                }else{
                    setNdate(1)
                    setDates(dateStrings)
                }
            }

            const bookProduct=()=>{
                const lc = localStorage.getItem('token')
                if(lc && lc!==''){
                if(dates!==''){
                history('/rental/booking',{state:{data:details,nDate:nDate,dates:dates}})
                }else{
                    message.info('Please select a date to order')
                }
            }else{
                message.info('Please login to proceed')
            }
            }

    return(
        <>
           <div  className="academyDetailPage" >
        <Helmet>
        <title>{`${productName} - Dronevala`}</title>
        <link rel="Dronevala" href="https://dronevala.com/rental/"/>
        <meta name="description" content={details.description}/>
        <link rel="canonical" href={`https://dronevala.com/rental/${brand}/${productName}/${id}`} />
        <meta name="keywords" content="drone course, Drone training academy,UAV pilot school,Drone certification courses, Learn to fly drones,Best drone academy,Drone flight training,Professional UAV training,Remote pilot license,Drone education programs,Drone school near me"/>
        <meta property="og:title" content="Dronevala -Academy" />
        <meta property="og:url" content={`https://dronevala.com/rental/${brand}/${productName}/${id}`} />
        <meta property="og:image" content="https://dronevala.com/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={details.description}/>
    </Helmet>
    {details ?(
    <div>
            <div style={{position:'relative',padding:20,height:600,width:'100%'}}>
           <RentalBanner id={id}  details={details}/>
            </div>
            </div>
    ):(
                <SuspenseLoad/>
              )
            }

<div className="acddiv1" style={{padding:'10%',paddingTop:'5%'}}>
                  <div className="row">
                    <div className="col-md-8">
                        <div >
                           {pimage(details)}
                             </div>
                        <div style={{marginTop:30}}>
                        <h6 className="serheading" style={{marginBottom:5}}>{details.productName}</h6>
                            <p className="sertext" style={{color:'orange',fontSize:18}}>{details.brand}</p>
                            <p className="acdtext" style={{marginTop:20}}>{details.description}</p>
                        </div>
                        <div style={{marginTop:50}}>
                        <h6 className="acdheading">Features</h6>

                        {feaRender(features)}
                        </div>
                        <RenGallery id ={id}/>
                        </div>
                        <div className="col-md-4">

                       <div className="acdetailcard">
                       <i class="bi bi-arrow-up-right-circle-fill arrup"></i> 
                        <h6 className="acdheading" style={{fontSize:18,marginBottom:10}}>Order Now</h6>
 
                       <span className="price" >₹ <span style={{fontWeight:600}}>{details.price} </span> /-</span>
                        <h6 className="acdpricenote" style={{color:'orange'}}>This is price per day/24 hours</h6>
                        <DatePicker  highlightToday={false} needConfirm onChange={datepicked} multiple className="serrangeDate" format="DD/MM/YYYY" id='calDate'/>
                        <button className="pricebutton" style={{marginTop:20}} onClick={bookProduct} >Order </button>
                    </div>
                       </div>
                        </div>

                        <div style={{marginTop:'10%'}}>
                        <h6 className="acdheading">Reviews</h6>
                       <RentalReview id={id}/>
                       </div>

                        </div>
            </div>
        </>
    )
}
export default RentalDetails