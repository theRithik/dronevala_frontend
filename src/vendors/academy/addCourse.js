import React from "react";
import { useState } from "react";
// import DatePicker from "react-multi-date-picker";
import { PostImage } from "../../config/vendor/aws/awsapi";
import { PostData } from "../../config/vendor/Apiconfig";
import MyComponent from "../map"
import endpoints from "../../config/config";
import { DatePicker } from "antd";

const AddCourse =()=>{

    const[header,setHeader]=useState('')
    const[option,setOption]=useState('')
   const[courseType,setCourseType]=useState('')
   const[msg,setMsg]=useState('')
   const[showMap,setShowMap]=useState(false)
   const[lat,setLat]=useState('')
   const[lng,setLng]=useState('')

const handleClick= async()=>{
    try{
  const inst = document.getElementById('instName').value
  const course = document.getElementById('course').value
  const fees = document.getElementById('fees').value
  const state = document.getElementById('state').value
  const city = document.getElementById('city').value
  const address = document.getElementById('address').value
  const date = document.getElementById('DtPk').value
  const courseDuration = document.getElementById('courseDuration').value
  const droneType = document.getElementById('droneType').value  
  const droneCategory = option
  const description = document.getElementById('description').value
  const img = document.getElementById('PhotoS').files[0]
if(img && inst!=='' && course!==''&&fees!=='' &&state!==''&&city!==''&&address!=='' &&date!=='' &&courseDuration!=='' &&droneType!=='' && description!=='' &&lat!=='' &&lng!==''){
  document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
 
    
   
    const data2={
        fileInput:img,
        folder:"academy"
    }

     const result = await PostImage(data2)
     const api =result.path
     console.log(result,api)
       
  const data = {
      "Institute_id":localStorage.getItem('id'),
      "institute_name":inst,
      "course":course,
      "fees":fees,
      "state":state,
      "city":city,
      "address":address,
      "date":date,
      "courseDuration":courseDuration,
      "courseType":courseType,
      "droneType":droneType,
      "droneCategory":droneCategory,
      "description":description,
      "token":localStorage.getItem('Adtoken'),
      "display_Image":api,
      "lat":lat,
      "lng":lng,
      endpoints:endpoints.addCourse
    }

    const result2 = await PostData(data)
    if(result2){
      setMsg('Successfully Added')
      const toastLiveExample = document.getElementById('liveToast7')
      toastLiveExample.classList.add('show')
      setTimeout(()=>{
        toastLiveExample.classList.remove('show')
      
      },4000)
    }
}

else{
  setMsg('all the fileds are necessary')
  const toastLiveExample = document.getElementById('liveToast7')
  toastLiveExample.classList.add('show')
  setTimeout(()=>{
    toastLiveExample.classList.remove('show')
  
  },4000)
}
    }
    catch (error) {
        return console.error('Error fetching data:', error);
        } finally {
          console.log('finished')
          document.getElementById('loader').innerHTML='<span id="loader2">Submit</span>'
        }
}

const handleChange2=(e)=>{
setOption(e.target.value) 

}
const handleChange3=(e)=>{
 setCourseType(e.target.value) 
  }

const [imgurl2,setImgurl2]=useState('')
const imageAdd=()=>{
  
  const img = document.getElementById('PhotoS').files[0]
  if(img.size<1100000){
  const reader = new FileReader();
  reader.onloadend=()=>{
setImgurl2(reader.result)
  }
  if(img){
    document.getElementById('prev').style.display='block'
    reader.readAsDataURL(img)
  }
}else{
  setMsg('Image must be less than 1Mb')
  const toastLiveExample = document.getElementById('liveToast7')
  toastLiveExample.classList.add('show')
  setTimeout(()=>{
    toastLiveExample.classList.remove('show')
  },4000)
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

const LatLng =(data)=>{
console.log(data)
setLat(data.lat)
setLng(data.lng)
}

    return(
      <>
     
     <div className="homesection">
        
   <div className="profilecard">
   
  <div className="profilecard2">
  <div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Add Course</h1>
          <span style={{fontSize:'15px'}} id='headerMsg'>{header}</span>
        </div>
      
    <form id="frm">
        <div className="row">
    <div className="col-md-3" style={{position:'relative',marginBottom:'0'}}>
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Image</span>
  
  <input type="file" accept=".png, .jpg" id='PhotoS' style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <i class="bi bi-file-earmark-image"></i>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500,color:'grey'}}>Image size must be less than 1Mb</p>
 </label>
</div>
<div className="col-md-9">
<div style={{position:'relative'}}>
        <label className="profilelabeleff">Institute Name</label>
    <input type="text"  onChange={inputchange} name="institute_name"  className="form-control profileinput" placeholder="Institute Name" id="instName" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>

        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Name</label>
    <input type="text"  onChange={inputchange} id="course" required name="course"  className="form-control profileinput" placeholder="Course Name" />
    <i class="bi bi-mortarboard-fill Instprofileinputicon"></i>
        </div>
 
</div>
</div>
<div className="row" style={{marginBottom:10}}>
  <div className="col-md-4">
  <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Fees</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id='fees' name="fees" className="form-control profileinput" placeholder="Course Fees" required/>
          <i class="bi bi-currency-rupee Instprofileinputicon"></i>
        </div>
  </div>
  <div className="col-md-4">
  <div style={{position:'relative'}}>
        <label className="profilelabeleff">State</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id='state' name="state" placeholder="State" className="form-control profileinput"/>
          <i class="bi bi-map-fill Instprofileinputicon"></i>
        </div>
    </div>
    <div className="col-md-4">
    <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Duration</label>
    
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="courseDuration" placeholder="Course Duration" name="courseDuration" className="form-control profileinput"/>
          <i class="bi bi-hourglass-split Instprofileinputicon"></i>
        </div>
    </div>
</div>

<div className="row" style={{marginBottom:10}}>
  <div className="col-md-6">
  <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Type</label>
          <select className="form-select profileinput" id="courseCategory"  onChange={handleChange3} aria-label="Default select example">
  <option value=''>please select one course type</option>
  <option value="pilot license">pilot license</option>
  <option value="trainer of the trainer">traner of the trainer</option>
  <option value="drone programming">drone programming</option>
  <option value="drone assembly">drone assembly</option>
  <option value="manfacturing">manfacturing</option>
  <option value="repair& maintenance">repair& maintenance</option>
  </select>
  <i class="bi bi-blockquote-right Instprofileinputicon"></i>
        </div>
  </div>
  <div className="col-md-6">
  <div style={{position:'relative'}}>
        <label className="profilelabeleff">City</label>
  
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="city" required name="city" placeholder="City" className="form-control profileinput"/>
          <i class="bi bi-geo-alt-fill Instprofileinputicon"></i>
        </div>
  </div>
</div>
         
        <div className="row" style={{marginBottom:10}}>
          <div className="col-md-6">
          <div style={{position:'relative'}}>
        <label className="profilelabeleff">Address</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="address" required name="address" placeholder="Address" className="form-control profileinput"/>
          <i class="bi bi-geo-fill Instprofileinputicon"></i>
        </div>
          </div>
          <div className="col-md-6">
          <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Name</label>
           <DatePicker
   format="DD/MM/YYYY"
   id="DtPk"
   style={{width:'100%'}}
   className="profileinput"
  placeholder="Course Start Date"
  needConfirm
/>
        </div>
          </div>
        </div>
        
         <div className="row" style={{marginBottom:10}}>
          <div className="col-md-6">
          <div style={{position:'relative'}}>
        <label className="profilelabeleff">Drone Type</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} placeholder="Drone Type" type="text" id="droneType" name="DroneType" className="form-control profileinput"/>         
          <i class="bi bi-controller Instprofileinputicon"></i>
        </div>
          </div>
          <div className="col-md-6">
          <div style={{position:'relative'}}>
        <label className="profilelabeleff">Drone Category</label>
         
          <select className="form-select profileinput" id="dronCategory" style={{width:'100%'}} onChange={handleChange2} aria-label="Default select example">
  <option value=''>please select one drone category</option>
  <option value="Small">Small</option>
  <option value="Medium">Medium</option>
  <option value="Large">Large</option>
</select>
<i class="bi bi-tag-fill Instprofileinputicon"></i>
        </div>
          </div>

         </div>
          </form>
        
        
          <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Description</label>

<textarea className="form-control profileinput"  onChange={inputchange} name="description" placeholder="Course Description" id="description"></textarea>
<i class="bi bi-menu-down Instprofileinputicon"></i>
        </div>
        <h6 className="heading2" style={{fontSize:18,marginTop:20}}>Select your Location on Map</h6>
       <div className="centerText">
        <button className="button" onClick={()=>{setShowMap(true)}}>Open Map</button>
        </div>
        { showMap &&
        <MyComponent mapLocation={(data)=>LatLng(data)}/>
}
<div style={{display:'flex',justifyContent:'center',marginTop:20}}>
        <button type="submit" style={{marginBottom:'20px',marginTop:'10px',}} onClick={handleClick} className="bluebutton"><span id="loader">Submit</span></button>
</div>

</div>
</div>

</div>

<div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast7" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="/background/profile.svg" className="rounded me-2" style={{width:'20px'}} alt="boot"/>
      <strong className="me-auto">Dronevala</strong>
      <small>Personal Assistance</small>
      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body">
    {msg}
    </div>
  </div>
</div>
      </>
    )
   }


export default AddCourse