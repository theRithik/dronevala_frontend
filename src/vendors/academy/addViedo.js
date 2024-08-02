
import React,{useState}from "react"

import { PostImage } from "../../config/vendor/aws/awsapi"

import '../dashboard/content.css'
import CourseNames from "./component.js/coursenames"

const AddViedo=()=>{
    const [courseId,setCourseId]=useState('')
    const [addBanner,setAddBanner]=useState('')
      
  
const viedoClick=()=>{
  try{
    setAddBanner('')
    if(!courseId&& courseId===''){
        alert('please select the course first')
    }
    else{
      const data2 = document.getElementById('uploads').files[0]
      if(data2){
        document.getElementById('loader2').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    // console.log(data2.size)
  if(data2.size<5000000){
    
    const result = PostImage(data2)
        document.getElementById('loader2').innerHTML='<span id="loader2">Submit</span>'
        setAddBanner('Successfully Added')
   
    
    }else{
      document.getElementById('loader2').innerHTML='<span id="loader2">Submit</span>'
       
      alert('viedo size must be less then 5Mb')
     
    }
  }else{
    alert('please add a viedo')
  }
}
  }
  catch(err){
    throw err
 } finally {
     // console.log('finished')
     document.getElementById('loader2').innerHTML='<span id="loader2">Submit</span>'
   }
}
    
const courseRender=(data)=>{
  setCourseId(data)
  }
    return(
        <>
        
            <div className="homesection">
   <div className="profilecard">
<div className="profilecard2">
<div style={{display:'flex',justifyContent:'center'}}>

<div>
    
      
<h1 style={{fontSize:30,fontWeight:600,textAlign:"center"}}>Add Viedo</h1>
<div style={{display:'flex',justifyContent:'center'}}>
<h6 style={{color:'green',}}>{addBanner}</h6>
</div>
<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
<div style={{position:'relative',margin:"auto"}}>
<label className="profilelabeleff">Course Name</label>
<CourseNames courseID ={(data)=>courseRender(data)}/>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}}></i>
</div>
<div className="centerText" style={{marginTop:30}}>
<label  className="drop-container2 col-md-6" style={{width:'400px'}} id="dropcontainer">
  <span className="drop-title2">Add your video here</span>
  <i class="bi bi-file-earmark-image"></i>
  <input type="file" style={{width:'80%'}} id="uploads"  name="foo" accept="video/mp4,video/x-m4v,video/*"/>
  <p style={{margin:0,fontSize:10,fontWeight:500}}>Viedo size must be less than 5 Mb</p>
</label>
</div>

<div>
    <div style={{display:'flex',justifyContent:'center'}}>
<button className="bluebutton" onClick={viedoClick} ><span id="loader2">Submit</span></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>                 
</div>                     

        </>
    )

}
export default AddViedo