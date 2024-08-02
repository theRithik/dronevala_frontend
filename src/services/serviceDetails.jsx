import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './serviceDetail.css'
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { PostData } from "../config/vendor/Apiconfig";
import endpoints from "../config/config";
import ServiceBanner from "./components/banner";
import SerGallery from "./components/gallery";
import ServiceReviews from "./components/reviews";
import { DatePicker, message } from "antd";
import SuspenseLoad from "../suspense/suspence";

const {RangePicker} = DatePicker

const ServiceDetails=()=>{
    const {id,company,person,serivcestype}=useParams()
    const [details,setDetails]=useState('')
    const [type,setType]= useState('')
    const [stype,setStype]=useState('')
    const [pdiff,setPdiff]=useState('')
    const [serviceT,setServiceT]=useState('')
    const [ltime,setLtime]=useState('')
    const [ddata,setDdata]=useState('')
    const [tech,setTech]=useState('')
    const [typePr,setTypePr]=useState('')
    const [seltST,setSelST] = useState('')
    const [selectedDates,setSelectedDates]=useState('')
    const [available,setAvailable]=useState(false)
    const [droneimage,setDroneImage]=useState('')
    const history = useNavigate()
   const dn ={
    id:id,
    endpoint:endpoints.serviceperson
   }
 const {data}=   useQuery({
        queryFn:()=>PostData(dn),
        queryKey:['ServiceDetails',dn.id]
    })
    const dn2={
        id:id,
        endpoint:endpoints.Typeofservicesoffer
    }
    const dn3={
        id:id,
        endpoint:endpoints.droneType
    }
    const {data:typedata}=   useQuery({
        queryFn:()=>PostData(dn2),
        queryKey:['ServiceDetails',dn.id,'type']
    })


    const {data:dronetype}= useQuery({
        queryFn:()=>PostData(dn3),
        queryKey:['ServiceDetails',dn3.id,'drone']
    })

    useEffect(()=>{
      window.scrollTo(0,0)
if(data){
    setDetails(data[0])
    setServiceT(data[0].service)
}
if(typedata){
    // console.log(typedata)
    const resType = Object.values(typedata[0])
    resType.splice(0,3)
    const arrType =[]
    const pricety= []
    for(let i=0;i<resType.length;i++){
        let obj={}
        if( /[a-zA-Z]/g.test(resType[i])){
            obj['id']=i
            obj['type']=resType[i]
            arrType.push(obj)
        }
    }
    arrType.pop()
    setStype(typedata[0].priceType)
    setType(arrType)
    if(typedata[0].priceType==='Hour'|| typedata[0].priceType==='Day' ||typedata[0].priceType==='Task' ){
      setLtime('Number of')
    }
    if(typedata[0].priceType==='Arc' || typedata[0].priceType==='Hector' || typedata[0].priceType==='Km' || typedata[0].priceType==='SqKm'){
      setLtime('Land Size')
    }

    const resType3 = Object.values(typedata[0])
    resType3.splice(0,20)
    for(let i=0;i<resType3.length;i++){
      let pob={}
      if(/^[0-9]+$/.test(resType3[i])){
        pob['id']=i
        pob['priceType']=resType3[i]
        pricety.push(pob)
      }
    }
    setPdiff(pricety)

    if(dronetype){
      setDroneImage(dronetype[0].droneImage)
        let dronT = dronetype[0].tech
        setTech(dronT)
       const dronType = dronT.split("#")
        const dType =[]
       
        for(let i=0;i<dronType.length;i++){
            let obj={}
            if(dronType[i]!==''){
                obj['id']=i
                obj['tech']=dronType[i]
                dType.push(obj)
            }
        }
        setDdata(dType)
    }
}
    },[data,typedata,dronetype])

    const typeRender=()=>{
        if(type){
            return type.map((item,i)=>{
                return(
                  <div key={i} className="sertypesoffer">
      <span  style={{marginLeft:'0',fontSize:'11px',color:'black',}}>{item.type} </span>
      </div>
                )
            })
        }
    }

    const droneRender=()=>{
        if(ddata.length>0){
            return ddata.map((item,i)=>{
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
          <span id="lstD"style={{fontSize:'13px'}}>{tech}</span>
        )
        }
        }
 
        const ServTRender=()=>{
            if(type){
              return type.map((item)=>{
                return(  
        <option key={item.id} value={item.id}>{item.type}</option>
                )
              })
            }
          }

          const priceRen=()=>{
            const ptd=  document.getElementById('serviceRen').value
      // console.log(ptd)
            if(ptd!=='Select Service Type' && ptd!==''){
            if(pdiff){
                  const mpd = pdiff.filter((item)=>{
                    return Number(item.id) === Number(ptd)
                  })
                  // console.log(mpd[0].priceType)
                  setTypePr(mpd[0].priceType)
                  if(type){
                  const finalTp = type.filter((item)=>{
                    return Number(item.id) === Number(ptd)
                  })
               // console.log(finalTp[0].type)
                  setSelST(finalTp[0].type)
                }
              }   
            }
              else{
                setTypePr('')
            //     setMsg('please select the service type you want')
            //     const toastLiveExample = document.getElementById('liveToast2')
            //     toastLiveExample.classList.add('show')
            // setTimeout(()=>{
            //   toastLiveExample.classList.remove('show')
            // },4000)
              }
          }

          const datepicked=(dates,dateStrings)=>{
            // // console.log('From: ', dates[0], ', to: ', dates[1]);
            // // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
            let value
            if(dates){
              if(dateStrings[0] === dateStrings[1]){
             value =document.getElementById('calDate').value
              }
              else{
                value = `${dateStrings[0]} ~ ${dateStrings[1]}`
              }
            // console.log(value)
            setSelectedDates(value)
            const mdt= data[0].availableDates
              let dfg;
              const val = mdt.split('~')
              const val1 = val[0].split('/').reverse().join('/')
              const val2 = val[1].split('/').reverse().join('/')
              const d1 = new Date(val1)
              const d2 = new Date(val2)
            if(value.length>10){
          value=value.split('~')
          const start = value[0].split('/').reverse().join('/')
          const end = value[1].split('/').reverse().join('/')
          const s1 = new Date(start)
          const s2 = new Date(end)
          
           dfg = d1 <= s1  && d2>=s2
          
            }
            else{
              const start = value.split('/').reverse().join('/')
               dfg = d1<=new Date(start) && d2 >= new Date(start) 
            }
          if(dfg===false){
            setAvailable(false)
          document.getElementById('alertbtn').style.display='block'
          document.getElementById('alertbtn2').style.display='none'
           
          }
          else{
            setAvailable(true)
          document.getElementById('alertbtn').style.display='none'
          document.getElementById('alertbtn2').style.display='block'
          }
          }
          else{
            message.error('Date should be selected')
          }
          }

          const bookservice=()=>{
            const size=  document.getElementById('qnum')?.value
            const local = localStorage.getItem('token')
            if(local){
            if(size!=='' && seltST!=='' && selectedDates!=='' && typePr!=='' &&available){
              const ty = seltST.replace(/\s+/g, '-')
              const com = company.replace(/\s+/g, '-')
            history(`/services/booking/${serivcestype}/${ty}/${com}`,{state:{data:details,date:selectedDates,typepr:typePr,stype:stype,seltST:seltST,size:size,id:id}})
          }else{
            message.error('Please Select Service you want and fill the details')
          }
        }else{
          message.info('Please Login First to Proceed ')
        }
        }
    return(
        <>
        <div className="serviceDetailPage">
        <Helmet>
        <title>{`${serivcestype} ${company} - Dronevala`}</title>
        <meta name="description" content={details.description}/>
        <link rel="canonical" href={`https://dronevala.com/services/${serivcestype}/${company}/${person}/${id}`} />
        <meta name="keywords" content={`${serivcestype} Drone, drone services , uav Services,Aerial services,Drone solutions,Drone operations`}/>
        <meta property="og:title" content={`Dronevala -${serivcestype} service`} />
        <meta property="og:url" content={`https://dronevala.com/services/${serivcestype}/${company}/${person}/${id}`} />
        <meta property="og:image" content="https://dronevala.com/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={details.description}/>
    </Helmet>
{data ?(
<div>
    <div style={{position:'relative',padding:20,height:600,width:'100%'}}>
     
        <ServiceBanner id={id} details={details}/>
        </div>
        <div className="serdetailPagediv1">
            <div className="row">
                <div className="col-md-8">
                    <div className="serprof" >
                    {details.serviceImage ?(
 <img src={`${endpoints.imageprefix}${details.serviceImage}`} className="card5img" alt="academy"/>
                        ):(
                            <div className="card5img">
                            <img src="/images/wallpaper2.webp"  style={{borderRadius:30}} alt="academy"/>
                        <p style={{position:'absolute',top:15,right:15,color:'orange',fontSize:10,fontWeight:700}}>No Image Provided</p>
                        </div>
                        )}
                        <div>
                            <h6 className="serheading" style={{marginBottom:5}}>{details.firstName} {details.middleName} {details.lastName}</h6>
                            <p className="sertext" style={{color:'orange',fontSize:18}}>{details.companyName}</p>
                           {/* <p className="sertext"> <i class="bi bi-patch-check-fill" style={{color:'blue'}}></i>Verified</p> */}
                            <p className="sertext">Welcome to {details.companyName}, your premier drone service provider dedicated to delivering innovative and reliable aerial solutions. We specialize in leveraging cutting-edge drone technology to offer a wide array of services tailored to meet the unique needs of various industries. Our team of skilled pilots and technicians is committed to providing exceptional service, ensuring safety, precision, and efficiency in every project.</p>
                            <p className="serOffer"  style={{display:'flex'}}><i class="bi bi-geo-alt-fill" style={{color:'orange',fontSize:20,marginRight:10}}></i>  <span>{details.serviceLocations}</span> </p>
                        <p className="serOffer">Services Offer : </p>
                        {typeRender()}
                        </div>
                    </div>
                   
                    <div className="row" style={{marginTop:'10%'}}>
                        <div className="col-md-4"style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:20}}>
                         {droneimage ? (
                          <img src={`${endpoints.imageprefix}${dronetype[0].droneImage}`} style={{width:'100%'}} alt="drone"/>
                         ):(
                         
                         <div>
                          <img src="/images/demodrone.png" alt="drone" style={{width:'100%'}}/>
                          <p style={{fontSize:8,color:'grey'}}>Drone Image not added by the service provider</p>
                        </div>
                         )
                         }
                         
                        </div>
                        <div className="col-md-8">
                        <div className="serDiv">
                            <h6 className="serheading">Drone Features</h6>
                            {droneRender()}
                            </div>
                            
                        </div>
                    </div>

                   <SerGallery id={id}/>
                </div>
                <div className="col-md-4">
                <div className="serdetailcard">
                <i class="bi bi-arrow-up-right-circle-fill arrup"></i> 
                   <div >
                    <h5 className="sercardheading" style={{fontSize:23,fontWeight:700}}>Service</h5>
                    <h6 className="sercardtext">{serviceT}</h6>
                </div>
                 <div style={{marginTop:'20px'}} >
                  {/* <h6 className="sercardheading">Select Service type</h6> */}
                   <select className="form-select serinput" id="serviceRen" onChange={priceRen} aria-label="Default select example">
  <option defaultValue=''>Select Service Type</option>
                  {ServTRender()}
                  </select>
                </div>
                {typePr &&
                <div>
                <div style={{marginTop:'20px'}}>
                <h6 className="sercardheading" style={{fontSize:14}}>Price per/{stype}</h6>
                <h6 className="sercardheading" style={{fontSize:16,marginTop:10}} id="optprice">₹{typePr}</h6>
                 </div>

                <div className="row" style={{marginTop:'20px'}}>
                <h6 className="sercardheading" style={{fontSize:14}}>{ltime}/{stype}</h6>
                <input type="number" className="form-control serinput" style={{width:'90%',marginLeft:'5%'}} id="qnum"  placeholder="Ex : 50"/>
                </div>
                </div>
}
                <div style={{marginTop:'40px'}}>
              <h6 className="sercardheading">Wanted Dates</h6>
              <div id="alertbtn">
                    <span> Sorry, Service person is not available on that day </span>
                  </div>
                  <div id="alertbtn2">
                    <span> Good News Service person is available on that day </span>
                  </div>
     <RangePicker  highlightToday={false} onChange={datepicked} className="serrangeDate" format="DD/MM/YYYY" id='calDate'/>
    
              </div>
              <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
         <button className="button" onClick={bookservice} id="modelClick">Book Service</button>
              </div>
              <div className="" style={{marginTop:'50px'}}>
                </div>
                </div>
                </div>
            </div>
            <div style={{marginTop:'10%'}}>
                        <h6 className="serheading" style={{zIndex:2,position:'relative'}}>Reviews</h6>
                       <ServiceReviews id={id}/>
                       </div> 
        </div>

        </div>
):(
  <SuspenseLoad/>
)}
        </div>
        </>
    )
}
export default ServiceDetails