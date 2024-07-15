import React, { useEffect, useState } from "react";
import './Acdbooking.css'
import { message } from "antd";
import { useLocation } from "react-router-dom";
import { PostData } from "../config/vendor/Apiconfig";
import endpoints from "../config/config";

const AcdBooking=()=>{
    const [form,setForm]= useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })
    const [details,setDetails]=useState(true)
    const [bill,setBill]=useState(null)
    const location = useLocation()
    const [totalPaid,setTotalPaid]=useState('')
    const [gst,setGst]=useState('')
    const [subT,setSubT]=useState('')
    const [advance,setAdvance]=useState('')
    const [click,setClick] =useState(false)
    useEffect(()=>{
        console.log(location)
        document.querySelector('footer').style.marginTop="0px"
        const fe = location.state.advance
        setAdvance(fe)
        const gt = Number(fe)*18/100
        setGst(gt)
        const pt = Number(fe) + gt
        setTotalPaid(pt)
        setSubT(fe)
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
}

const detailClick=()=>{
    if(form.name!=='' && form.email!=='' && form.phone!==''){
        console.log(form.name)
    setDetails(false)
    setBill(true)
}else{
    message.info('Please fill the details')
}
}
const back2=()=>{
    setBill(false)
    setDetails(true)
}


const payClick=async()=>{
try{
    const checked = document.getElementById('flexCheckDefault').checked
    const instid= location.state.details.Institute_id
    const instName=location.state.details.institute_name
    const cid = location.state.details.courseID
    const course = location.state.details.course
    const addr = location.state.details.address
    const fee = location.state.details.fees
    const state = location.state.details.state
    const city = location.state.details.city
    const start = location.state.details.startDate
    const lat = location.state.details.latitude
    const lng = location.state.details.longitude
    const duration = location.state.details.courseDuration
    const discount = location.state.details.discount
       if(checked){
    document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    const uniq = 'uniq'+Math.floor(Date.now()*Math.random()) 
message.loading('Processing')
const dt={
    uniqID:uniq,
    institute_id:instid,
    instituteName:instName,
    courseID:cid,
    course:course,
    address:addr,
    totalPaid:totalPaid,
    gst:gst,
    price:fee,
    subT:advance,
    type:'course',
    state:state,
    city:city,
    userId:localStorage.getItem('_id'),
    startDate:start,
    name:form.name,
    email:form.email,
    phone:form.phone,
    userAddress:form.address,
    lat:lat,
    lng:lng,
    courseDuration:duration,
    discount:discount,
    endpoint:endpoints.iniatedCourseOrder
}

const result = await PostData(dt)
message.destroy()
if(result){
    message.success('You Order was Regisered Successfully Our Team will contact you')
}
}else{
        message.info('Please select the checkbox')
    }  
}catch(err){
    console.log(err)
}finally{
    setClick(false)
    document.getElementById('loader').innerHTML='<span id="loader"></span>'
}
}

    return(
        <>
          <div  className="academybillPage" >
       
       <div  className="billcard">
       {details &&
        <div className="billcard2">
            <h6 className="serheading" style={{color:'orange'}}>Check Out</h6>
            <h6 className="serheading" style={{fontSize:50,color:'orange',fontWeight:500}}>01 <span style={{color:'black',fontSize:35,fontWeight:500}}>Billing Details</span></h6>
            <div className="checkoutcard">
                    <p className="disclamerText"> Fill as mentioned in your Identity proof</p>
                    <div style={{marginTop:20}}>
                        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Name</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} value={form.name} type="text" id="name" required name="name" placeholder="Name" className="form-control profileinput"/>
          <i class="bi bi-person-circle Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Email</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} value={form.email} type="email" id="email" required name="email" placeholder="Email" className="form-control profileinput"/>
          <i class="bi bi-envelope-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Phone Number</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} value={form.phone} type="number" id="phone" required name="phone" placeholder="Phone Number" className="form-control profileinput"/>
          <i class="bi bi-telephone-inbound-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Address</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} value={form.address} type="text" id="address" required name="address" placeholder="Address" className="form-control profileinput"/>
          <i class="bi bi-pin-map-fill Instprofileinputicon"></i>
        </div>
                    </div>
                    <button className="button" onClick={detailClick}>Submit</button>
                </div>
        </div>
}
{bill &&
<div className="billcard2"style={{padding:0,overflow:'hidden'}}>
<i class="bi bi-arrow-left-circle-fill billbackicon" onClick={back2}></i>
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
    <h6 className="serheading" style={{fontSize:16,marginBottom:0,width:150}}> course Date:</h6>
    <p className="sertext" >{location.state.details.startDate}</p>
    </div>
    <div style={{display:'flex',gap:30,alignItems:'center',marginBottom:20}}>
    <h6 className="serheading" style={{fontSize:16,marginBottom:0,width:150}}> Fee:</h6>
    <p className="sertext"style={{fontFamily:'sans-serif',fontSize:16}} >₹{location.state.details.fees}</p>
    </div>
    
    <div class="form-check" style={{marginTop:50}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" htmlFor="flexCheckDefault" id="checklabel">
  I have reviewed and agree to the bill details above. I understand that by proceeding with the payment, I am authorizing to my selected payment method.
  </label>
</div>
   
    </div>
    <div className="col-md-7" style={{background:'orange',padding:'5%'}}>
    <h6 className="serheading" style={{color:'#fff',marginBottom:20}}>Order Details</h6>
    <table class="table acdcheckout " style={{padding:20}}>
                        <tbody>
                            <tr>
                                <th scope="row">Institute:</th>
                                <td> {location.state.details.institute_name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Course:</th>
                                <td> {location.state.details.course}</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row"> Sub Total:</th>
                                <td style={{fontFamily:'sans-serif'}}>₹{subT}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gst: </th>
                                <td style={{fontFamily:'sans-serif'}}>₹{gst}</td>
                            </tr>
                            <tr className="table-active">
                                <th scope="row" style={{fontSize:15,fontWeight:600}}>Total:</th>
                                <td style={{fontSize:18,fontWeight:600,fontFamily:'sans-serif'}}>₹{totalPaid}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="buttonblue" onClick={payClick} style={{borderRadius:'20px',paddingLeft:'20px',paddingRight:'20px',float:'right'}} disabled={click} > <span id="loader" ></span><i class="bi bi-shield-lock-fill" style={{marginRight:5}}></i>Pay</button>
      
   </div>
</div>
</div>
}
</div>
</div>
        </>
    )
}
export default AcdBooking