import React,{useState} from "react";

import { VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";
import '../dashboard/content.css'
import CourseNames from "./component.js/coursenames";
import { message } from "antd";



const UpdateCourse=()=>{
const [wrong,setWrong] = useState('')
const [courseId,setCourseId]=useState('')



    const handleClick=async()=>{
        //console.log()(courseId)
        try{
        const CourseName = document.getElementById('CourseName').value
        const fees = document.getElementById('fees').value
        const discount = document.getElementById('discount').value
        const courseDuration = document.getElementById('courseDuration').value
        if(!courseId&& courseId===''){
            message.error('please add a course first')
        }
        else{
          message.loading('Processing',[5])
     document.getElementById('loader5').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'   
          const dt = {
                    "_id":courseId,
                    "CourseName":CourseName,
                    "fees":fees,
                    "discount":discount,
                    "courseDuration":courseDuration,
                    endpoint:endpoints.updateCourse
                }

                const result = await VPostData(dt)
                message.destroy()
                if(result){
                console.log(result.data)
                    setWrong('Successfully Updated')
                    document.getElementById('wrong').style.color='green'
                    message.success('Successfully Updated')
    }    
        }
    }
    catch(err){
        console.log(err)
        message.destroy()
    }
    finally {
        console.log('finished')
        document.getElementById('loader5').innerHTML='<span id="loader5">Submit</span>'
      }
    }


const renderImage=async()=>{
    try{
    if(!courseId && courseId===''){
      message.error('please select the course first')
        
    }
    else{
      const img = document.getElementById('PhotoS').files[0]
if(img){
  document.getElementById('loader6').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'   

    if(img.size<1100000){
       message.loading('Processing',[10])
            const data2={
                fileInput:img,
                folder:"academy",
            }
        
           const dt= await PostImage(data2)
const path  = dt.path
      const upd = {
        courseID:courseId,
        image:path,
        endpoint:endpoints.updateImage
      }
      const result = await VPostData(upd)
      if(result){
    //   Api call to update Image url in database
    message.destroy()
      message.success('Successfully Updated')
      }
    }
    else{
        message.error('size must be less then 1MB')
        document.getElementById('PhotoS').files=''
        }

    }
    else{
      message.error('Please select an Image')
    }
  }
}catch(err){
    console.log(err)
    message.destroy()
}finally {
    console.log('finished')
    document.getElementById('loader6').innerHTML='<span id="loader2"></span>'
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
const inputchange=(e)=>{
    const vl = e.target.value
    if(vl.length>0){
        e.target.previousSibling.style.display="block"
    }
    else{
        e.target.previousSibling.style.display="none"
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
 
  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <h1 style={{fontSize:30,fontWeight:600}}>update course Details</h1>
      <h6 id='wrong' style={{textAlign:'center',justifyContent:'center'}}>{wrong}</h6>
</div>
<div style={{display:'flex',justifyContent:'center'}}>
<div style={{position:'relative',width:'70%'}}>
<label className="profilelabeleff">Course Type</label>
<CourseNames courseID ={(data)=>courseRender(data)}/>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}}></i>
        </div>
</div>
       <div className="row">
        
        <div className="col-md-7" style={{padding:20}}>


        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Name</label>
    <input type="text"  onChange={inputchange} id='CourseName'  name="CourseName" required  className="form-control profileinput" placeholder="Course Name" />
    <i class="bi bi-mortarboard-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Fees</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text"   id='fees' name="Fees"  className="form-control profileinput" placeholder="Course Fees" required/>
          <i class="bi bi-currency-rupee Instprofileinputicon"></i>
        </div>

        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Discount</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text"   id='discount' name="Discount" className="form-control profileinput" placeholder="Discount Ex:500" required/>
          <i class="bi bi-cash Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Duration</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text"    id='courseDuration' name="courseDuration" className="form-control profileinput" placeholder="Course Duration Ex 1 Week" required/>
          <i class="bi bi-calendar-week-fill Instprofileinputicon"></i>
        </div>
           
            <button type="submit" onClick={handleClick} style={{marginTop:'20px',marginLeft:'20%',width:'50%'}} className="bluebutton"><span id="loader5">Update</span></button>
        </div>

        <div className="col-md-1">

        </div>
        <div className="col-md-4" style={{paddingTop:20,display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Update course Image </span>
  <i class="bi bi-file-earmark-image"></i>
  <input type="file" accept=".jpg, .png" id='PhotoS' style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500}}>Image size must be less than 1Mb</p>
 </label>
        
<button className="button" onClick={renderImage}><span id="loader6"></span>Submit</button>
        </div>
          
                  </div>
          
        </div>
    </div>

</div>



    </>
)
}
export default UpdateCourse