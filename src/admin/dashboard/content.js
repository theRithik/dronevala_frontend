import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React,{useState,useEffect} from "react";
import { AGetData, APostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import './content.css'
import { message } from "antd";

const ACenterDash=()=>{
   

const [detail,setDetail] = useState('')
const [value,setValue]=useState(false)
const [service,setService]=useState(0)
const [course,setCourse]=useState(0)

const dt ={
    endpoint:endpoints.AdTravelCharges
}
const {data:travel} = useQuery({
    queryKey:['tcharges'],
    queryFn:()=> AGetData(dt)
})
const dt2 ={
    endpoint:endpoints.AdgetServiceorder
}
const {data:sorder}=useQuery({
    queryKey:['sorder'],
    queryFn:()=>AGetData(dt2)
})
const dt3 ={
    endpoint:endpoints.AdgetCourseorder
}
const {data:corder}=useQuery({
    queryKey:['corder'],
    queryFn:()=>AGetData(dt3)
})

useEffect(()=>{
 let bp;
 let cp;
 if(sorder){
    cp = sorder.length
    setService(cp)
 }
 if(corder){
    bp = corder.length
    setCourse(bp)
 }
if(travel){  
    setDetail(travel)
}
},[sorder,corder,travel])

const queryclient = useQueryClient()
const mutation2 = useMutation({
  mutationFn:(data)=>APostData(data),
  mutationKey:['chargesUpdate'],
  onSuccess:()=>{ 
    message.destroy()
    message.success('Successfully added')
    queryclient.invalidateQueries('tcharges')
  }
})

      const handleClick=async()=>{
        try{
        const distA= document.getElementById('d1').value
        const distB = document.getElementById('d2').value
        const price  = document.getElementById('p1').value
        if(distA!=='' && distB!=='' && price !==''){
          setValue(true)
          message.loading('Processing')
       const dt ={
            distanceA:distA,
            distanceB:distB,
            price:price,
            endpoint:endpoints.AdAddtravelcharges
          }
       const data = await mutation2.mutate(dt)
       if(data){
        message.destroy()
        message.success('Successfully Added')
       }
      }else{
        message.info('Please Fill the Details')
      }
      }catch(err){
        console.log(err)
      }finally{
        setValue(false)
      }
      }

const trackRender=(data)=>{
  if(data){

    if(data.length>0){
      return data.map((item)=>{
       
        return(
          
        
    <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td >{item.distanceA}</td>
      <td >{item.distanceB}</td>
      <td>{item.price}</td>

    </tr>
   
  
        )
      })
    }
  }
}

const feeClick=async()=>{
  try{
  const prc = document.getElementById('Cuprice').value

  if(prc!==''){
    setValue(true)
  const dt ={
      price:prc,
      endpoint:endpoints.Adupdatecoursefee
    }
    const data =await APostData(dt)
  if(data){
    message.destroy()
      message.success('Successfully Added')
  }
}
else{
    message.info('please enter the Charges')
}
  }catch(err){
    console.log(err)
  }finally{
    setValue(false)
  }
}

const mutation = useMutation({
  mutationFn:(data)=>APostData(data),
  mutationKey:['chargesUpdate'],
  onSuccess:()=>{ 
    message.destroy()
    message.success('Successfully added')
    queryclient.invalidateQueries('tcharges')
  }
})

const updateClick=async()=>{
try{
  const distA= document.getElementById('d1').value
  const distB = document.getElementById('d2').value
  const price  = document.getElementById('p1').value
  if(distA !=='' && distB!=='' && price !==''){
    message.loading('Processing')
 const dt ={
      distanceA:distA,
      distanceB:distB,
      price:price,
      endpoint:endpoints.AdUpdateCharges
    }
const data = await mutation.mutate(dt)
if(data){
  message.destroy()
  message.success('Successfully Added')
}
  }else{
    message.info('Fill all the details')
  }
}catch(err){
  console.log(err)
}finally{
  setValue(false)
}
}


    return(
        <>
         <div className="homesection" >
         <div className="row">
            <div className="col-md-4" style={{padding:20}}>
<div className="d-mainbx">
<div style={{display:'flex',gap:20,alignItems:'center'}}>
    <div className="d-icon-blu">

<i class="bi bi-bank"></i>
</div>
<h6 className="d-bx-h6">Orders</h6>
</div>
<div className="d-mainbx-num">
<i class="bi bi-box odcardicon" style={{color:'grey'}}></i>
<h6 className="d-dx-lph6">{course + service}</h6>

</div>
<span className="spredshadow" style={{ boxShadow: '-18px 20px 50px 6px #006aff'}}></span>
<p style={{fontSize:'13px',marginBottom:0}}>{course + service}% Total Orders</p>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:`${course + service}%`}}></div>
</div>

</div>

          </div>

          <div className="col-md-4" style={{padding:20}}>
<div className="d-mainbx">
<div style={{display:'flex',gap:20,alignItems:'center'}}>
    <div className="d-icon-blu" style={{background:'rgb(246, 255, 237)'}}>
    <i class="bi bi-buildings" style={{color:'rgb(82, 196, 26)'}}></i>
</div>
<h6 className="d-bx-h6">Academy</h6>
</div>
<div className="d-mainbx-num">
<i class="bi bi-buildings odcardicon" style={{color:'grey'}}></i>
<h6 className="d-dx-lph6">{course}</h6>

</div>
<span className="spredshadow"  style={{    boxShadow: '-18px 20px 50px 6px green'}}></span>
<p style={{fontSize:'13px',marginBottom:0}}>{course}% This month</p>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width: `${course}%`}}></div>
</div>
</div>
            </div>
              
            <div className="col-md-4" style={{padding:20}}>
<div className="d-mainbx">
<div style={{display:'flex',gap:20,alignItems:'center'}}>
    <div className="d-icon-blu" style={{background:'rgb(255, 242, 232)'}}>
    <i class="bi bi-bookmark-x" style={{color:'rgb(250, 84, 28)'}}></i>
</div>
<h6 className="d-bx-h6">Services</h6>
</div>
<div className="d-mainbx-num">
<i class="bi bi-activity odcardicon" style={{color:'grey'}}></i>
<h6 className="d-dx-lph6">{service}</h6>

</div>
<span className="spredshadow" style={{    boxShadow: '-18px 20px 50px 6px #ffc800 '}}></span>
<p style={{fontSize:'13px',marginBottom:0}}>{service}% This month</p>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{width: `${service}%`}}></div>
</div>
</div>

            </div>
</div>
<div className="profilecard2">

<div className="orderBody">
                    <h6 style={{fontWeight:600,marginBottom:30}}>Travel Distance & Charges</h6>
                    <table className="table ordersTabel" style={{marginBottom:'40px'}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Distance From</th>
      <th scope="col">Distance To</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody >
{trackRender(detail)}
</tbody>
</table>
<table className="table ordersTabel">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Distance From</th>
      <th scope="col">Distance To</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row">1</th>
      <td ><input type="text" id="d1" style={{width:'50%',display:"inline-block",marginTop:0}} placeholder="0" className="form-control profileinput"/><h6 style={{marginTop:'10px',display:'inline-block'}}>Km</h6></td>
      <td ><input type="text" id="d2" style={{width:'50%',display:"inline-block",marginTop:0}} placeholder="50" className="form-control profileinput"/><h6 style={{marginTop:'10px',display:'inline-block'}}>Km</h6></td>
      <td><h6 style={{marginTop:'10px',display:"inline-block",fontFamily:'sans-serif'}}>₹</h6><input type="number" id="p1" style={{width:'50%',display:"inline-block",marginTop:0}} className="form-control profileinput"/></td>
  <td><button className="bluebutton" style={{width:'fit-content'}} disabled={value} onClick={handleClick}>Add</button>
  <button className="button" onClick={updateClick} disabled={value} style={{marginTop:'20px'}}>update</button></td>
    </tr>
   
  </tbody>
</table>
</div>
<div className="" style={{marginTop:'50px',marginBottom:30}}>
  <div className="orderBody">
<h6 style={{fontWeight:600,marginBottom:30,fontSize:25}}>Course Booking Charges</h6>


   <div style={{display:'flex'}}> 
    <span style={{display:'inline-block',fontFamily:'sans-serif',fontSize:20,color:'grey'}} id="picon">₹</span>
    <input type="number" style={{display:'inline-block',width:'80%',marginTop:0}} className="form-control profileinput" id="Cuprice"/>
</div>
  <button className="button" disabled={value} onClick={feeClick}>Update</button>
  
</div>
</div>
</div>
</div>




        </>
    )
}
export default ACenterDash