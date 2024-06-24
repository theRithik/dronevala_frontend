import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './servicebooking.css'
import Servicemap from "./servicemap";
import { useQuery } from "@tanstack/react-query";
import { GetData } from "../config/vendor/Apiconfig";
import endpoints from "../config/config";
const ServiceBooking=()=>{
    const location=useLocation()
    const [details,setDetails]=useState(true)
    const [loca,SetLoca]=useState(null)
    const [total,setTotal]=useState(null)
    const [bill,setBill]=useState(null)
    const [lat,setLat]=useState('')
    const [lng,setLng]=useState('')
  const [tdist,setTdist]=useState('')
   const [travelCharges,setTravelCharges]=useState('')
   const [click,setClick] =useState(true)
   const [selectedDates,setSelectedDates]=useState('')
  
   const [subTotal ,setSubtotal]=useState('')
   const [gst,setGst] = useState('')
    
    const [form,setForm]=useState({
        name:'',
        email:'',
        phone:''
    })
    const api ={
        endpoint:endpoints.travelcharges
    }
    const {data:tchar}=useQuery({
        queryKey:['travelcharges'],
        queryFn:()=>GetData(api)
    })
   
    useEffect(()=>{
        console.log(location)
        window.scrollTo(0,0)
        setSelectedDates(location.state.date)
        // eslint-disable-next-line 
    },[])
   

    const inputchange=(e)=>{
        const vl = e.target.value
        if(vl.length>0){
            e.target.previousSibling.style.display="block"
        }
        else{
            e.target.previousSibling.style.display="none"
        }
        console.log(e.target.name,e.target.value)
        setForm(prev =>({
            ...prev,
            [e.target.name]:vl
    }))
        console.log(form)
    }
    const latlng=(data)=>{
        console.log(data)
        const radius = location.state.data.serviceRadius?.split('K')[0]
    let trv;
    if(data){
      setLat(data.lat)
      setLng(data.lng)
    console.log(radius)
    if(Number(radius)>=Number(data.dist)){
 setTdist(data.dist)
 const distance = data.dist
    
      const filt = tchar.filter((item)=>{ 
        return Number(item.distanceB) >= Number(distance) && Number(distance)>=Number(item.distanceA)
      })
      //console.log()(filt)
      console.log(filt,radius,data.dist)
      setTravelCharges(filt[0].price)
      trv=filt[0].price
      //console.log()(trv)
      const sprice = Number(location.state.typepr)
      const subTot = sprice*Number(location.state.size)
      const travel = Number(trv)
      const ttp = subTot+travel
      const gt = ttp*18/100
      const ts = ttp+gt
      // const rz=ts*2/100
      // const rz2= rz.toFixed(2)
      const tot = (ts).toFixed(2)
      console.log(subTot,tot,gt)
      setSubtotal(subTot)
      setTotal(tot)
      setGst(gt)
      // setPlatform(rz2)
      setClick(false)

   
    
  }
  else{
   console.log('else')
  }
}
    }
    const detailClick=()=>{
        setDetails(false)
        SetLoca(true)
    }
    const locaClick=()=>{
        SetLoca(false)
        setBill(true)
    }

    const bookedDates=()=>{
        if(selectedDates.length<12){
          return <td>{selectedDates}</td>
        }
        else{
          const spt = selectedDates.split('~')
      const start = spt[0]
      const end = spt[1]
      return <td>From <span>{start}</span> <br/><span>To <span>{end}</span></span></td>
        }
      }
    

    return(
        <>
         <div  className="servicebillPage" >
        {/* <div className="row" style={{background:'aliceblue',paddingTop:'3%',paddingBottom:'10%'}}>
            <div className="col-md-6">
                <div className="checkoutcard">
                    <h2 className="heading2" style={{textAlign:'left'}}>Fill Your details</h2>
                    <p className="disclamerText">As mentioned in your Identity proof</p>
                    <div style={{marginTop:20}}>
                        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Name</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="name" required name="name" placeholder="Name" className="form-control profileinput"/>
          <i class="bi bi-person-circle Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Email</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="email" required name="email" placeholder="Email" className="form-control profileinput"/>
          <i class="bi bi-envelope-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Phone Number</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="number" id="phone" required name="phone" placeholder="Phone Number" className="form-control profileinput"/>
          <i class="bi bi-telephone-inbound-fill Instprofileinputicon"></i>
        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div style={{margin:30}}>
                    <h2 className="heading2" style={{textAlign:'left'}}>Course Details</h2>

                    <table class="table acdcheckout " style={{padding:20}}>
                        <tbody>
                            <tr>
                                <th scope="row">Company:</th>
                                <td> {location.state.data.companyName}</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row"> Service:</th>
                                <td>{location.state.data.service}</td>
                            </tr>
                            <tr >
                                <th scope="row"> Service Type:</th>
                                <td>{location.state.seltST}</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row"> Sub Total:</th>
                                <td>₹1</td>
                            </tr>
                            <tr>
                                <th scope="row">Gst: </th>
                                <td>₹0.18</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row" style={{fontSize:16,fontWeight:600}}>Total:</th>
                                <td style={{fontSize:15,fontWeight:500}}>₹1.18</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{position:'relative',marginTop:40}}>
                <h6 className="serheading" style={{textAlign:'center'}}>Service Booking Location</h6>
        <Servicemap latlng={(data)=>latlng(data)}/>
        </div>
        </div> */}
       <div  className="billcard">
       {details &&
        <div className="billcard2">
            <h6 className="serheading" style={{color:'orange'}}>Check Out</h6>
            <h6 className="serheading" style={{fontSize:50,color:'orange',fontWeight:500}}>01 <span style={{color:'black',fontSize:35,fontWeight:500}}>Billing Details</span></h6>
            <div className="checkoutcard">
                    <p className="disclamerText">As mentioned in your Identity proof</p>
                    <div style={{marginTop:20}}>
                        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Name</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="name" required name="name" placeholder="Name" className="form-control profileinput"/>
          <i class="bi bi-person-circle Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Email</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="email" required name="email" placeholder="Email" className="form-control profileinput"/>
          <i class="bi bi-envelope-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Phone Number</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="number" id="phone" required name="phone" placeholder="Phone Number" className="form-control profileinput"/>
          <i class="bi bi-telephone-inbound-fill Instprofileinputicon"></i>
        </div>
                    </div>
                    <button className="button" onClick={detailClick}>Submit</button>
                </div>
        </div>
}
{loca &&
<div className="billcard2">
<h6 className="serheading" style={{color:'orange'}}>Check Out</h6>
            <h6 className="serheading" style={{fontSize:50,color:'orange',fontWeight:500}}>02 <span style={{color:'black',fontSize:35,fontWeight:500}}>Service Location</span></h6>
            <p className="disclamerText">Select the location were you want the service</p>
                   
            <div style={{position:'relative',marginTop:40}}>
        <Servicemap latlng={(data)=>latlng(data)} ms={location.state.data.latitude} ms2={location.state.data.longitude}/>
        </div>
        <button className="button" onClick={locaClick}> Submit</button>
</div>
}

{bill &&
<div className="billcard2"style={{padding:0,overflow:'hidden'}}>

<div className="row">
    <div className="col-md-5" style={{padding:'5%'}}>
    <h6 className="serheading" style={{color:'orange',marginBottom:20}}>Billing</h6>
<div style={{display:'flex',gap:30,alignItems:'center',marginBottom:20}}>
    <h6 className="serheading" style={{fontSize:16,marginBottom:0,width:150}}>Name</h6>
    <p className="sertext" >{form.name}</p>
    </div>
    <div style={{display:'flex',gap:30,alignItems:'center',marginBottom:20}}>
    <h6 className="serheading" style={{fontSize:16,marginBottom:0,width:150}}>Email</h6>
    <p className="sertext" >{form.email}</p>
    </div>
    <div style={{display:'flex',gap:30,alignItems:'center',marginBottom:20}}>
    <h6 className="serheading" style={{fontSize:16,marginBottom:0,width:150}}>Phone Number</h6>
    <p className="sertext" >{form.phone}</p>
    </div>
    <div style={{display:'flex',gap:30,alignItems:'center',marginBottom:20}}>
    <h6 className="serheading" style={{fontSize:16,marginBottom:0,width:150}}> Service:</h6>
    <p className="sertext" >{location.state.data.service}</p>
    </div>
    <div style={{display:'flex',gap:30,alignItems:'center',marginBottom:20}}>
    <h6 className="serheading" style={{fontSize:16,marginBottom:0,width:150}}> Service Type:</h6>
    <p className="sertext" >{location.state.seltST}</p>
    </div>
    <div class="form-check" style={{marginTop:50}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" id="checklabel">
  I have reviewed and agree to the bill details above. I understand that by proceeding with the payment, I am authorizing to my selected payment method.
  </label>
</div>
   
    </div>
    <div className="col-md-7" style={{background:'orange',padding:'5%'}}>
    <h6 className="serheading" style={{color:'#fff',marginBottom:20}}>Order Details</h6>
    <table class="table acdcheckout " style={{padding:20}}>
                        <tbody>
                            <tr>
                                <th scope="row">Company:</th>
                                <td> {location.state.data.companyName}</td>
                            </tr>
                           
                            <tr>
                                <th scope="row">Booked Dates</th>
                                {bookedDates()}
                            </tr>
                            <tr className="table-active">
                                <th scope="row"> Sub Total:</th>
                                <td>₹{subTotal}</td>
                            </tr>
                            <tr className="">
                                <th scope="row">Travel Charges:</th>
                                <td>₹{travelCharges}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gst: </th>
                                <td>₹{gst}</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row" style={{fontSize:16,fontWeight:600}}>Total:</th>
                                <td style={{fontSize:15,fontWeight:500}}>₹{total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="buttonblue" style={{borderRadius:'20px',paddingLeft:'20px',paddingRight:'20px',float:'right'}} disabled={click}  data-bs-dismiss="modal"><i class="bi bi-shield-lock-fill"></i><span id="loader" style={{marginLeft:'10px'}}>Pay</span></button>
      
   </div>
</div>
</div>
}

       </div>
        </div> 
        </>
    )
}
export default ServiceBooking