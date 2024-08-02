
import React,{useState}from "react"

import { PostImage } from "../../config/vendor/aws/awsapi";
import CourseNames from "./component.js/coursenames";
import '../dashboard/content.css'
import { VPostData } from "../../config/vendor/Apiconfig";
import { message } from "antd";
import endpoints from "../../config/config";
const AddBanner=()=>{
    const [courseId,setCourseId]=useState('')
    const [addBanner,setAddBanner]=useState('')
         
const BannerClick= async()=>{
  try{
    setAddBanner('')
    if(!courseId&& courseId===''){
       
        message.error('please select a course first')
    }
    else{
    const data2 = document.getElementById('PhotoS').files[0]
    if(data2){
    document.getElementById('loader2').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    
    
    if(data2.size<2100000){
      message.loading('Processing')
        const dt  ={
          fileInput:data2,
          folder:"academy",
          endpoint:endpoints.aws
        }
        const result = await PostImage(dt)
    // console.log(result)
    if(result){
      const dt ={
        id:courseId,
        image:result.path,
        endpoint:endpoints.addBanner
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
const courseRender=(data)=>{
setCourseId(data)
}

    return(
        <>
        
            <div className="homesection">
   <div className="profilecard">
   <div className="profilecard2" >
  
<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
           
<h1 style={{fontSize:30,fontWeight:600,textAlign:"center"}}>Add Banner</h1>

<div style={{display:'flex',justifyContent:'center'}}>
<h6 style={{color:'green',}}>{addBanner}</h6>

</div>

<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
     <div style={{position:'relative',width:'70%',margin:"auto"}}>
    <label className="profilelabeleff">Course Name</label>
<CourseNames courseID ={(data)=>courseRender(data)}/>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}}></i>
</div>
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
<button type="submit" className="bluebutton" onClick={BannerClick}><span id="loader2"></span>Submit</button>
</div>
</div>
</div>
</div>               
</div>                     
</div>
        </>
    )

}
export default AddBanner