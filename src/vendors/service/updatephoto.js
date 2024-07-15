import React,{useState} from "react";
import ServiceNames from "./components/serviceName";
import { PostImage } from "../../config/vendor/aws/awsapi";
import { VPutData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";

const Servicephoto =()=>{

    const [serviceId,setServiceId]=useState('')
    const [addBanner,setAddBanner]=useState('')
    
  
const BannerClick=async()=>{
    try{
        const data2 = document.getElementById('PhotoS').files[0]
    setAddBanner('')
    if(serviceId!==''){
        if(data2?.size<1100000){
            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
           
    const dt  ={
        fileInput:data2,
        folder:"service"
      }
      const result = await PostImage(dt)
      console.log(result.path)
      const im ={
        endpoint:endpoints.servicePhoto,
        image:result.path,
        id:serviceId
      }
      const result2= await VPutData(im)
      if(result2){
      setAddBanner('Updated Successfully')
      }
    }else{
        alert('Image size must be less than 1Mb')
    }
    }else{
        alert('please select the service person to update dates')
    }
    }catch(err){
        console.log(err)
    }finally{
        document.getElementById('loader').innerHTML='<span id="loader"></span>'
    }
 
}

const serviceRender=(data)=>{
    setServiceId(data)
  
    }
    
const [imgurl2,setImgurl2]=useState('')
const imageAdd=()=>{
  const img = document.getElementById('PhotoS').files[0]
  if(img?.size<1100000){
  const reader = new FileReader();
  reader.onloadend=()=>{
setImgurl2(reader.result)
  }
  if(img){
    document.getElementById('prev').style.display='block'
    reader.readAsDataURL(img)
  }
}else{
  alert('Image must be less than 1Mb')

}
}
    
    return(
        <>
        
            <div className="homesection">
            <div className="profilecard">
<div className="profilecard2">
<div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Update Service profile</h1>
        </div>     
        <div style={{display:'flex',justifyContent:'center'}} >

<div className="card-body" >
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
<h6 style={{color:'green'}}>{addBanner}</h6>
</div>
<div style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:30,alignItems:'center'}}>
    <ServiceNames serviceID ={(data)=>serviceRender(data)}/>
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Image</span>
  
  <input type="file" accept=".png, .jpg" id="PhotoS" style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <i class="bi bi-file-earmark-image"></i>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500,color:'grey'}}>Image size must be less than 1Mb</p>
 </label>
<button type="submit" className="button" style={{marginTop:'30px'}} onClick={BannerClick}><span id="loader"></span>Update</button>
</div>
</div>
</div>
</div>
</div> 
</div>          
</>
    )
}

export default Servicephoto