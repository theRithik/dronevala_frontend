import React, { useEffect, useRef, useState } from "react";
import './order.css'
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { useReactToPrint } from "react-to-print";
const CourseOrdersDetails =()=>{
    const {id}= useParams()
    const [order,setOrder]=useState('')
    const componentRef2 = useRef();
    const df={
        endpoint:endpoints.vendorCourseOrder,
        id:id
    }
    const {data,isLoading} = useQuery({
        queryKey:['courseorders',id],
        queryFn:()=> VPostData(df)
    })
    useEffect(()=>{
        if(data){
            console.log(data)
            setOrder(data.data[0])
        }
    },[data])
    
    const handlePrint = useReactToPrint({
        content:() => componentRef2.current,
      });

    if(isLoading){
        return(
            <div className="homesection" >
         <div className="profilecard">
         <div className="profilecard2" style={{padding:0,display:'flex',justifyContent:'center'}}>
                <img src="/images/loading2.gif" alt="loading" style={{width:50}}/>
            </div>
            </div>
            </div>
        )
    }

   

    return(
        <>
          <div className="homesection" >
         <div className="profilecard" ref={componentRef2}>
         <div className="profilecard2" style={{padding:0}}>
            <div className="orderHeader">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<h5 style={{fontWeight:600}}>Order Id: {order.id}</h5>
<button className="button" onClick={handlePrint} style={{fontSize:12,fontWeight:600,marginTop:0,display:'flex',alignItems:'center',gap:5}}><i class="bi bi-arrow-down-circle-fill"  style={{fontSize:15}}></i><span>Save</span></button>
                </div>
                <p className="odHeadTag">Order Confirmed</p>
                <div style={{marginTop:30,display:'flex',alignItems:'center',gap:20,flexWrap:'wrap'}}>
                    <p className="odHeadTag2">Paid On: <span>{order.DateandTime}</span></p>
                    <p className="odHeadTag2">Enrolled: <span>{order.courseStartDate}</span></p>
                </div>
            </div>
            <div className="row" style={{marginTop:'5%'}}>
                <div className="col-md-6" style={{marginBottom:'5%'}}>
                    <div className="orderBody">
                    <h6 style={{fontWeight:600}}>Customer & Order</h6>
                    <table class="table ordersTabel">
                        <tbody>
                            <tr>
                                <th scope="row">Name</th>
                                <td>: {order.userName}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>: {order.userEmail}</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>: {order.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course Id</th>
                                <td>: {order.courseID}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course Duration</th>
                                <td>: {order.courseDuration}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course Date</th>
                                <td>: {order.courseStartDate}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course Price</th>
                                <td>: ₹ {order.price}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="col-md-6 orderBody" style={{marginBottom:'5%'}}>
                <div className="">
                <h6 style={{fontWeight:600,marginBottom:20}}>Address</h6>
                <p style={{fontSize:12,color:'grey',marginBottom:5,lineHeight:'200%'}}>{order.address}</p>
                <p style={{fontSize:13,color:'grey',marginBottom:5}}>{order.city}</p>
                <p style={{fontSize:12,color:'grey',marginBottom:5}}>{order.state}</p>
                </div>
                </div>
            </div>
            <div className="orderBody" style={{marginBottom:20}}>
                <h6 style={{fontWeight:600}}>Course Ordered</h6>
                <table class="table invoicetabel" style={{marginTop:'5%'}}>
  <thead>
    <tr>
      <th scope="col">Course Name</th>
      <th scope="col">Course Id</th>
      <th scope="col">Price</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td  className="tdblack" >{order.courseName}</td>
    <td>{order.courseID}</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.subtotal}</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.subtotal}</td>
</tr>
<tr style={{marginTop:20}}>
    <td></td>
    <td></td>
    <td style={{color:'grey',fontSize:12}}>Subtotal</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.subtotal}</td>
</tr>
<tr>
    <td>Tax</td>
    <td style={{color:'grey'}}>18%</td>
    <td style={{color:'grey',fontSize:12}}>Tax Amount</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.gst}</td>
</tr>

<tr>
    <td style={{color:'grey'}}>Currency: Rupee</td>
    <td></td>
    <td  className="tdblack"  style={{fontWeight:600}}>Total</td>
    <td  className="tdblack"  style={{fontFamily:'sans-serif',fontWeight:600,fontSize:15}}>₹ {order.paid}</td>
</tr>
  </tbody>
  </table>
            </div>
            </div>
            </div>
         </div>
        </>
    )
}
export default CourseOrdersDetails