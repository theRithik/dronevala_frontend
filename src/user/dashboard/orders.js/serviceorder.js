import React,{useEffect, useRef} from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import endpoints from "../../../config/config";
import { useQuery } from "@tanstack/react-query";
import { PostData } from "../../../config/vendor/Apiconfig";
import { Empty } from "antd";



const UserServiceorderdetails=()=>{
    const [service,setService]=useState('')
    const componentRef2 = useRef();
    const {id}=useParams()
    const history = useNavigate()
    const [from,setFrom]=useState('')

    const dt ={
        id:id,
        endpoint:endpoints.serviceorderDetail
    }

    const {data}= useQuery({
        queryKey:['userserviceorder',id],
        queryFn:()=>PostData(dt)
    })
    useEffect(()=>{    
                 if(data){
                    setService(data.data)
                    setFrom(data.data[0].bookedDates)
                    }
                   
                  // eslint-disable-next-line
    },[data])

    const booking=()=>{
        if(from.length>11){
            const m1 = from.split('~')[0]
            const m2 = from.split('~')[1]
            //// console.log()(from)
            return(
                <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Dates Booked : </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>From {m1}  To {m2}</h6>
            </div>
            </div>
            )
        }
        else{
            return(
            <div className="row">
            <div className="col-md-5 col-sm-5" >
        <h6>Booked Dates : </h6>
        </div>
        <div className="col-md-7 col-sm-7"> 
        <h6>{from}</h6>
        </div>
        </div>
            )
        }
    }
    const handlePrint = useReactToPrint({
        content:() => componentRef2.current,
      });


    const renderDetails=(data)=>{
        if(data){
            if(data.length>0){
            return data.map((item)=>{
             return(
                   <div key={item.id}  style={{position:'relative'}}>
                     <span onClick={()=>history(-1)} style={{position:'absolute',left:50,top:10,borderRadius:'50%',background:'#e3e5ee',border:'1px solid #e3e5ee',paddingLeft:7,paddingTop:1,paddingBottom:1,paddingRight:7,cursor:'pointer'}}>
                    <i class="bi bi-arrow-left" style={{color:'red'}}></i></span>
                   
                     <button onClick={handlePrint} className="btn btn-primary" style={{position:'absolute',right:'60px',top:'20px',fontSize:'12px',borderRadius:'20px'}}><i className="fa-solid fa-arrow-down"></i> PDF</button>
                    <div className="section6">
                        <div className="detailOd" style={{display:'block',position:'relative'}}>
                     <div style={{paddingLeft:'20px',paddingRight:'20px',marginTop:'40px',width:'100%',position:'relative',zIndex:'3'}} id="bilDiv" >
            
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
            <h6>Service Person : </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>{item.servicePerson}</h6>
            </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Service : </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.orderCategory}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >  
            <h6 >Service Category :</h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 >{item.subCategory}</h6>
            </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Phone Number :</h6>
                </div>
                <div className="col-md-7 col-sm-7">  
                <h6>{item.servicePhone}</h6>
                </div>
                </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Booking :  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>{item.booking}</h6>
            </div>
            </div>
            {booking()}
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Booked on  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 style={{color:'grey'}}>{item.DateandTime}</h6>
            </div>           
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>  Name :</h6>
                </div>
                <div className="col-md-7 col-sm-7">
                <h6>{item.userName}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6> Email :</h6>
                </div>
                <div className="col-md-7 col-sm-7">              
              <h6>{item.userEmail}</h6>
              </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>subTotal :  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>₹ {item.subtotal}</h6>
            </div>
            </div>   
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Tarvel Charges :  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>₹ {item.travelCharges}</h6>
            </div>
            </div>   
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Gst :  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>₹ {item.gst}</h6>
            </div>
            </div>   

            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Total Paid :  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>₹ {item.paid}</h6>
            </div>
            </div>       
            </div>
            </div>
            </div>
                </div>
            )
             })
        }
        else{
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
          
        
        {renderDetails(service)}
        </div>
        </div>
</div>

        </>
    )
}
export default UserServiceorderdetails