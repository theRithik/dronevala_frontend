import React,{useEffect, useRef} from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import endpoints from "../../../config/config";
import { useQuery } from "@tanstack/react-query";
import { PostData } from "../../../config/vendor/Apiconfig";
import { Empty } from "antd";



const UserCourseorderdetails=()=>{
    const [course,setCourse]=useState('')
    const componentRef2 = useRef();
    const {id}=useParams()
    const [locDms,setLocDms]=useState('')
    const history = useNavigate()

    const dt ={
        id:id,
        endpoint:endpoints.courseorderDetail
    }

    const {data}= useQuery({
        queryKey:['usercourseorder',id],
        queryFn:()=>PostData(dt)
    })
    useEffect(()=>{
           
                   
                 if(data){
                        setCourse(data.data)
                        function toDMS(deg) {
                            var d = Math.floor(deg);
                            var min = Math.floor((deg - d) * 60);
                            var sec = ((deg - d - min / 60) * 3600).toFixed(2);
                            return d + "°" + min + "'" + sec + "\"";
                        }
                        
                        function convertLatLngToDMS(lat, lng) {
                            var latDMS = lat >= 0 ? "N" : "S";
                            var lngDMS = lng >= 0 ? "E" : "W";
                            
                            lat = Math.abs(lat);
                            lng = Math.abs(lng);
                            
                            var latDMSString = toDMS(lat);
                            var lngDMSString = toDMS(lng);
                            
                            return latDMSString + " " + latDMS + " " + lngDMSString + " " + lngDMS;
                        }
                        const lat = Number(data.data[0].latitude)
                        const lng = Number(data.data[0].longitude)

                         const dms = convertLatLngToDMS(lat, lng)
                         setLocDms(dms)
                    }
                   
                  // eslint-disable-next-line
    },[data])

    const handlePrint = useReactToPrint({
        content:() => componentRef2.current,
      });


    const renderDetails=(data)=>{
        if(data){
            if(data.length>0){
            return data.map((item)=>{
             return(
                   <div key={item.id}  style={{position:'relative'}}>
                     <span onClick={()=>history(-1)} style={{position:'absolute',left:30,top:10,borderRadius:'50%',background:'#e3e5ee',border:'1px solid #e3e5ee',paddingLeft:7,paddingTop:1,paddingBottom:1,paddingRight:7,cursor:'pointer'}}>
                    <i class="bi bi-arrow-left " style={{color:'red'}}></i></span>
                   
                     <button onClick={handlePrint} className="btn btn-primary" style={{position:'absolute',right:'60px',top:'20px',fontSize:'12px',borderRadius:'20px'}}><i className="fa-solid fa-arrow-down"></i> PDF</button>
                    <div className="section6" >
                    <div className="detailOd" style={{display:'block',position:'relative'}}>
                     <div style={{paddingLeft:'20px',paddingRight:'20px',marginTop:'40px',width:'96%'}} id="bilDiv" >
                     <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Payment ID : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.paymentID}</h6>
                </div>
                </div>
                    
                     <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Course Name : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.courseName}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >  
            <h6 >Institute Name :</h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 >{item.instituteName}</h6>
            </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>State : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.state}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>City : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.city}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Address : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.address}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Location : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6> <a href={`https://www.google.com/maps/place/${locDms}/@${item.latitude},${item.longitude},18z/data=!3m1!4b1!4m4!3m3!8m2!3d16.535219!4d80.640256?entry=ttu`} rel="noopener noreferrer" target="_blank" >
                    <button className="btn btn-primary" style={{borderRadius:'20px'}}><i className="fa-solid fa-location-dot" style={{fontSize:'14px'}}></i> Google</button></a>    
           </h6>
                </div>
                </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Start Date : </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>{item.courseStartDate}</h6>
            </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >  
            <h6 >Course Fees :</h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 >₹{item.price}</h6>
            </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Enroll Date  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 style={{color:'grey'}}>{item.DateandTime}</h6>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Student Name :</h6>
                </div>
                <div className="col-md-7 col-sm-7">
                <h6>{item.userName}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Student Email :</h6>
                </div>
                <div className="col-md-7 col-sm-7">              
              <h6>{item.userEmail}</h6>
              </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Student Phone :</h6>
                </div>
                <div className="col-md-7 col-sm-7">  
                <h6>{item.phone}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >  
            <h6 >Gst :</h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 >₹{item.gst}</h6>
            </div>
            </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Total Paid : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>₹{item.paid}</h6>
                </div>
                </div>
           
            </div>
            
          
            </div>
            </div>
            </div>
                </div>
            )
             })
        }else{
           return(
             <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 100 }}
            description={
              <h6 style={{fontSize:12,fontWeight:700}}> No Order Placed</h6>
            }
            style={{margin:'auto'}}
          >
          </Empty>
           )
        }
    }
        else{
            return(
                <>
                  <div style={{marginTop:'20%',display:'flex',justifyContent:'center'}}>
                   <img src='/images/loading2.gif' style={{width:100}} alt='loader'/>
            </div>
            </>
            )
        }
        
    }
    return(
        <>
         <div className="homesection" >
         <div className="profilecard" ref={componentRef2}>
         <div className="profilecard2" style={{padding:0}}>
          
        
        {renderDetails(course)}
        </div>
        </div>
</div>

        </>
    )
}
export default UserCourseorderdetails