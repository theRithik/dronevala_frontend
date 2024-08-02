
import React,{useState}from "react"

import { PostImage } from "../../config/vendor/aws/awsapi";
import { VPostData } from "../../config/vendor/Apiconfig";
import { message } from "antd";
import endpoints from "../../config/config";
import ProductName from "./components/productsName";

const RentalBanner=()=>{
    const [rentalId,setRentalId]=useState('')
    const [addBanner,setAddBanner]=useState('')
    const [disable,setDisabled]= useState(false)
         
const BannerClick= async()=>{
  try{
    setAddBanner('')
    if(!rentalId&& rentalId===''){
       
        message.error('please select a course first')
    }
    else{
    const data2 = document.getElementById('PhotoS').files[0]
    if(data2){
    if(data2.size<2100000){
        setDisabled(true)
        document.getElementById('loader2').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
      message.loading('Processing')
        const dt  ={
          fileInput:data2,
          folder:"rental",
          endpoint:endpoints.aws
        }
        const result = await PostImage(dt)
    // console.log(result)
    if(result){
      const dt ={
        id:rentalId,
        image:result.path,
        endpoint:endpoints.RentalBanner
      }
      const result2 = await VPostData(dt)
     
      if(result2){
        message.destroy()
        message.success('Successfully Added')
        setAddBanner('Successfully Added')
      }
    }
   
      
    }
    else{
        message.error('size must be less then 2mb')
         }

}else{
  message.error('Please select an Image First')
  
}
    }
  }catch(err){
    // console.log(err)
}finally {
    // console.log('finished')
    setDisabled(false)
    document.getElementById('loader2').innerHTML='<span id="loader2"></span>'
  }
}


const [imgurl2,setImgurl2]=useState('')
const imageAdd=()=>{
  const img = document.getElementById('PhotoS').files[0]
  const reader = new FileReader();
  reader.onloadend=()=>{
setImgurl2(reader.result)
  }
  if(img){
    document.getElementById('prev').style.display='block'
    reader.readAsDataURL(img)
  }
}

const rentalID=(data)=>{
    setRentalId(data)
 }

    return(
        <>
        
            <div className="homesection">
   <div className="profilecard">
   <div className="profilecard2" >
           
<h1 style={{fontSize:30,fontWeight:600,textAlign:"center"}}>Add Banner</h1>

<ProductName productname={(data)=>rentalID(data)}/>
<div style={{display:'flex',justifyContent:'center'}}>
<h6 style={{color:'green',}}>{addBanner}</h6>

</div>

<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
   
<div className="centerText" style={{marginTop:40}}>
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Banner </span>
  <i class="bi bi-file-earmark-image"></i>
  <input type="file" accept=".jpg, .png"  name="foo" id="PhotoS" style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500}}>Image size must be less than 2Mb</p>
 </label>
</div>
<div className="centerText">
<button type="submit" className="bluebutton" disabled={disable} onClick={BannerClick}><span id="loader2"></span>Submit</button>
</div>
</div>
</div>       
</div>                     
</div>
        </>
    )

}
export default RentalBanner