import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {  VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import './order.css'
import { useReactToPrint } from "react-to-print";

const ServiceOrderDetails =()=>{
    const {id}= useParams()
    const [order,setOrder]=useState('')
    const [locDms,setLocDms]=useState('')
    const dt={
        endpoint:endpoints.vendorServiceOrderID,
        id:id
    }
    const {data,isLoading} = useQuery({
        queryKey:['serviceorder',id],
        queryFn:()=> VPostData(dt)
    })
    useEffect(()=>{
        if(data){
            // console.log(data)
            setOrder(data.data[0])
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
    },[data])

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
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
         <div className="profilecard" ref={componentRef}>
         <div className="profilecard2"  style={{padding:0}}>
         <div className="orderHeader">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<h5 style={{fontWeight:600}}>Order Id: {order.id}</h5>
<button className="button" onClick={handlePrint} style={{fontSize:12,fontWeight:600,marginTop:0,display:'flex',alignItems:'center',gap:5}}><i class="bi bi-arrow-down-circle-fill" style={{fontSize:15}}></i><span>Save</span></button>
                </div>
                <p className="odHeadTag">Order Confirmed</p>
                <div style={{marginTop:30,display:'flex',alignItems:'center',gap:20,flexWrap:'wrap'}}>
                    <p className="odHeadTag2">Paid On: <span>{order.DateandTime}</span></p>
                    <p className="odHeadTag2">Booked Dates: <span>{order.bookedDates}</span></p>
                </div>
            </div>
            <div>
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
                                <th scope="row">Service Person</th>
                                <td>: {order.servicePerson}</td>
                            </tr>
                            <tr>
                                <th scope="row">Service Order</th>
                                <td>: {order.orderCategory}</td>
                            </tr>
                            <tr>
                                <th scope="row">Booking</th>
                                <td>: {order.booking}</td>
                            </tr>
                            <tr>
                                <th scope="row">Booking Dates</th>
                                <td>: ₹ {order.bookedDates}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="col-md-6 orderBody" style={{marginBottom:'5%'}}>
                <div className="">
                <h6 style={{fontWeight:600,marginBottom:20}}> Address</h6>
                <p style={{fontSize:12,color:'grey',marginBottom:5,lineHeight:'200%',fontWeight:500}}>{order.Address}</p>
                <p style={{fontSize:12,color:'grey',marginBottom:5,fontWeight:500}}>Travel Distance : <span>{order.distance}</span></p>
                <p style={{fontSize:12,color:'grey',marginBottom:5,fontWeight:500}}>Location:  <a href={`https://www.google.com/maps/place/${locDms}/@${order.latitude},${order.longitude},18z/data=!3m1!4b1!4m4!3m3!8m2!3d16.535219!4d80.640256?entry=ttu`} style={{marginLeft:20}} rel="noopener noreferrer" target="_blank" >
                    <button className="btn btn-primary" style={{borderRadius:'20px',fontSize:13}}><i class="bi bi-geo-alt-fill" style={{fontSize:11}}></i> Map</button></a>    
           </p>
                </div>
                </div>
            </div>
            <div className="orderBody" style={{marginBottom:20}}>
                <h6 style={{fontWeight:600}}>Service Ordered</h6>
                <table class="table invoicetabel" style={{marginTop:'5%'}}>
  <thead>
    <tr>
      <th scope="col">Service Name</th>
      <th scope="col">Category </th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td className="tdblack">{order.subCategory}</td>
    <td>{order.orderCategory}</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.subtotal}</td>
    <td style={{fontFamily:'sans-serif'}}> {order.booking}</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.subtotal}</td>
</tr>
<tr style={{marginTop:20}}>
    <td></td>
    <td></td>
    <td></td>
    <td style={{color:'grey',fontSize:12}}>Subtotal</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.subtotal}</td>
</tr>
<tr>
    <td>Travel</td>
    <td style={{color:'grey'}}>{order.distance}</td>
    <td></td>
    <td style={{color:'grey',fontSize:12}}>Travel Charges</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.travelCharges}</td>

</tr>
<tr>
    <td>Tax</td>
    <td style={{color:'grey'}}>18%</td>
    <td></td>
    <td style={{color:'grey',fontSize:12}}>Tax Amount</td>
    <td style={{fontFamily:'sans-serif'}}>₹ {order.gst}</td>
</tr>

<tr>
    <td style={{color:'grey'}}>Currency: Rupee</td>
    <td></td>
    <td></td>
    <td style={{fontWeight:600}} className="tdblack">Total</td>
    <td className="tdblack" style={{fontFamily:'sans-serif',fontWeight:600,fontSize:15}}>₹ {order.paid}</td>
</tr>
  </tbody>
  </table>
            </div>
            </div>

         </div>
         </div>
         </div>

        </>
    )
}
export default ServiceOrderDetails