import React,{useState} from "react";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";
import { VPostData } from "../../config/vendor/Apiconfig";
import { message } from "antd";
import ServiceNames from "./components/serviceName";


const ServiceBanner =()=>{
    const [addBanner,setAddBanner]=useState('')
    const [serviceId,setServiceId]=useState('')
      
  
const BannerClick=async()=>{
    try{
        const data2 = document.getElementById('PhotoS').files[0]
  
    if(serviceId!==''){
        if(data2?.size<2100000){
            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    message.loading('Processing',[20])
            const dt  ={
        fileInput:data2,
        folder:"service",
        endpoint:endpoints.aws
      }
      const result = await PostImage(dt)
      // console.log(result.path)
      const im ={
        endpoint:endpoints.sBanner,
        image:result.path,
        id:serviceId
      }
      const result2= await VPostData(im)
      message.destroy()
      if(result2){
    message.success('Image Successfully Added')
    setAddBanner('Image Successfully Added')
      }
    }else{
        message.error('Image size must be less than 2Mb')
    }
    }else{
        message.error('please select the service person to update dates')
    }
    }catch(err){
        // console.log(err)
    }finally{
     
        document.getElementById('loader').innerHTML='<span id="loader"></span>'
    }
    }
   
const [imgurl2,setImgurl2]=useState('')
const imageAdd=()=>{
  const img = document.getElementById('PhotoS').files[0]
  if(img?.size<2100000){
  const reader = new FileReader();
  reader.onloadend=()=>{
setImgurl2(reader.result)
  }
  if(img){
    document.getElementById('prev').style.display='block'
    reader.readAsDataURL(img)
  }
}else{
  message.error('Image must be less than 2Mb')

}
}
const serviceRender=(data)=>{
    setServiceId(data)
  
    }
    return(
        <>
        
            <div className="homesection" >
            <div className="profilecard">
            <div className="profilecard2">
            <div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Add Service Banner</h1>
        </div>   
<div className="card-body">
<div style={{display:'flex',justifyContent:'center'}}>
<h6 style={{color:'green',}}>{addBanner}</h6>   
</div>
<div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>

<ServiceNames serviceID ={(data)=>serviceRender(data)}/> 

<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20,marginTop:30}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Image</span>
  
  <input type="file" accept=".png, .jpg" id="PhotoS" style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <i class="bi bi-file-earmark-image"></i>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500,color:'grey'}}>Image size must be less than 2Mb</p>
 </label>

<button type="submit" className="button" style={{marginTop:'30px'}} onClick={BannerClick}><span id="loader"></span>Add Banner</button>
</div>
</div>
</div> 
</div>   
</div>        

</>
    )
}

export default ServiceBanner