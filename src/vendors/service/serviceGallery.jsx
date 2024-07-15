import React,{useState} from "react";
import ServiceNames from "./components/serviceName";
import { message } from "antd";
import { PostImage } from "../../config/vendor/aws/awsapi";
import endpoints from "../../config/config";
import { VPostData } from "../../config/vendor/Apiconfig";


const ServiceGallery=()=>{
    const [serviceId,setServiceId]=useState('')
    const [addPhoto,setAddPhoto]=useState('')
    
 

    const photoGallery=async()=>{
        try{
            const upload = document.getElementById('PhotoS').files
      
        if(serviceId!==''){
            if(upload.length<6 && upload[0]!==undefined){
         document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
        message.loading('Processing',[20])
        let arr=[]
        for(let i =0;i<upload.length;i++){
            let obj={}
            const dt  ={
                fileInput:upload[i],
                folder:"service",
                endpoint:endpoints.aws
              }
              const result = await PostImage(dt)
              obj['image'+i] = result.path
              arr.push( obj['image'+i])
        }
         console.log(arr)  
          const im ={
            endpoint:endpoints.sGallery,
            image:arr,
            id:serviceId
          }
          const result2= await VPostData(im)
          message.destroy()
          if(result2){
        message.success('Images Successfully Added')
        setAddPhoto('Image Successfully Added')
          }

        }else{
            alert('you can add only 5 images in a single time')
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
  message.error('Image must be less than 1Mb')

}
}
    return(
        <>
                <div className="homesection">
   <div className="profilecard">
            <div className="profilecard2">
            <div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}> Service Photo Gallery</h1>
        </div>  
   <div className="card-body">
      <h6 style={{color:'green'}}>{addPhoto}</h6>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>

<ServiceNames serviceID ={(data)=>serviceRender(data)}/> 

<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20,marginTop:30}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Image</span>
  
  <input type="file" accept=".png, .jpg" multiple id="PhotoS" style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <i class="bi bi-file-earmark-image"></i>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500,color:'grey'}}>Images size must be less than 1Mb</p>
 </label>
</div>
<div>
  </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="button" onClick={photoGallery} ><span id="loader"></span>Upload</button>
</div>
  </div>
  </div>
  </div>
  </div>        
     
        </>
    )
}
export default ServiceGallery