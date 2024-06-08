import React,{useState,useEffect} from "react";

import { PostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";
// import DashboardUser from "../Dashboard/dashboard";
// import Front from "../Dashboard/front";





const UpdateCourse=()=>{
const [wrong,setWrong] = useState('')
const [coursedata,setCoursedata]= useState('')
const [courseId,setCourseId]=useState('')
const [msg,setMsg]=useState('')



    const handleClick=async()=>{
        //console.log()(courseId)
        try{
        const CourseName = document.getElementById('CourseName').value
        const fees = document.getElementById('fees').value
        const discount = document.getElementById('discount').value
        const courseDuration = document.getElementById('courseDuration').value
        if(!courseId&& courseId===''){
            const toastLiveExample = document.getElementById('liveToast2')
            toastLiveExample.classList.add('show')
            setTimeout(()=>{
              toastLiveExample.classList.remove('show')
            },4000)
            setMsg('please add a course first')
        }
        else{
     document.getElementById('loader5').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'   
          const dt = {
                    "_id":courseId,
                    "CourseName":CourseName,
                    "fees":fees,
                    "discount":discount,
                    "courseDuration":courseDuration,
                    "token":localStorage.getItem('Adtoken'),
                    endpoints:endpoints.updateCourse
                }

                const result = await PostData(dt)
                if(result){
                console.log(result.data)
                    setWrong('Successfully Updated')
                    document.getElementById('wrong').style.color='green'
                    setMsg('Successfully Updated')
      const toastLiveExample = document.getElementById('liveToast9')
        toastLiveExample.classList.add('show')
        setTimeout(()=>{
          toastLiveExample.classList.remove('show')
        },5000)
    }    
        }
    }
    catch(err){
        throw err
    }
    finally {
        console.log('finished')
        document.getElementById('loader5').innerHTML='<span id="loader5">Submit</span>'
      }
    }


useEffect(()=>{
    const data2={
        endpoint:endpoints.findCourses,
        id:"1693767581921",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUml0aGlrIiwicm9sZSI6IkFkbWluIiwiaWQiOiIxNjkzNzY3NTgxOTIxIiwiZXhwIjoxNzE4MTgwMzE1LCJpYXQiOjE3MTc1NzU1MTV9.A9K0LAwSje71PrJMGrj1I4iN1P7_48aPWWMGsvOON_o"
    }
const data =async()=>{ 
    try{
    const data = await PostData(data2)
    console.log(data)
setCoursedata(data.data)
}
catch (error) {
    return console.error('Error fetching data:', error);
    } finally {
      console.log('finished')
    }
}
   
data()

// eslint-disable-next-line
},[]) 


const renderCourse=(data)=>{
    if(data){
        return data.map((item)=>{
            return(
                 <option key={item.id} value={item.courseID}>{item.course}</option>
            
            )
        })
    }
    
   

}
const renderImage=async()=>{
    try{
    if(!courseId && courseId===''){
      alert('please select the course first')
        
    }
    else{
      const img = document.getElementById('PhotoS').files[0]
if(img){
  document.getElementById('loader6').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'   

    if(img.size<1100000){
       
            const data2={
                fileInput:img,
                folder:"academy",
            }
        
           const dt= await PostImage(data2)
const path  = dt.data.path
      setMsg('Image add successfully',path)

      const upd = {
        courseID:courseId,
        display_Image:path,
        token:localStorage.getItem('venderToken'),
        endpoints:endpoints.updateImage
      }
      const result = await PostData(upd)
      if(result){
    //   Api call to update Image url in database
      alert('Successfully Updated')
      }
    }
    else{
        alert('size must be less then 1MB')
        document.getElementById('PhotoS').files=''
        }

    }
    else{
      alert('Please select an Image')
    }
  }
}catch(err){
    throw err
}finally {
    console.log('finished')
    document.getElementById('loader6').innerHTML='<span id="loader2">Submit</span>'
  }
}

const courseIDRender=()=>{
   const idCourse= document.getElementById('courseId').value
   setCourseId(idCourse)
   
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
<select className="form-select profileinput" id='courseId' style={{marginBottom:10}} onChange={courseIDRender} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
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

  <p style={{margin:0,fontSize:10,fontWeight:500}}>Image size must be less than 2Mb</p>
 </label>
        
<button className="button" onClick={renderImage}><span id="loader6">Submit</span></button>
        </div>
          
                  </div>
          
        </div>
    </div>

</div>



    </>
)
}
export default UpdateCourse