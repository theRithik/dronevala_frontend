
import React,{useState,useEffect}from "react"

import { PostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";

const AddBanner=()=>{
    const [courseId,setCourseId]=useState('')
    const [coursedata,setCoursedata]= useState('')
    const [addBanner,setAddBanner]=useState('')
    const [msg,setMsg] = useState('')
    
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
    
      
  
const BannerClick= async()=>{
  try{
    setAddBanner('')
    if(!courseId&& courseId===''){
       
        alert('please select a course first')
    }
    else{
       const id =courseId
    const data2 = document.getElementById('banner').files[0]
    if(data2){
    document.getElementById('loader2').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    
    
    if(data2.size<2100000){
      
        const dt  ={
          fileInput:data2,
          folder:"academy"
        }
        const result = await PostImage(dt)
    console.log(result)
    setAddBanner('Successfully Added')
      
    }
    else{
        alert('size must be less then 2mb')
         }

}else{
  alert('Please select an Image First')
  
}
    }
  }catch(err){
    throw err
}finally {
    console.log('finished')
    document.getElementById('loader2').innerHTML='<span id="loader2">Submit</span>'
  }
}

    

   const courseIDRender4=()=>{
    const idCourse= document.getElementById('courseId4').value
    setCourseId(idCourse)
 }

 
const renderCourse=(data)=>{
    if(data){
        return data.map((item)=>{
            return(
                 <option key={item.id} value={item.courseID}>{item.course}</option>
            
            )
        })
    }
}

const [imgurl2,setImgurl2]=useState('')
const imageAdd=()=>{
  const img = document.getElementById('banner').files[0]
  const reader = new FileReader();
  reader.onloadend=()=>{
setImgurl2(reader.result)
  }
  if(img){
    document.getElementById('prev').style.display='block'
    reader.readAsDataURL(img)
  }
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
 <select className="form-select profileinput" id='courseId4' onChange={courseIDRender4} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}}></i>
</div>
<div className="centerText" style={{marginTop:40}}>
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Banner </span>
  <i class="bi bi-file-earmark-image"></i>
  <input type="file" accept=".jpg, .png"  name="foo" id="banner" style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500}}>Image size must be less than 2Mb</p>
 </label>
</div>
<div className="centerText">
<button type="submit" className="bluebutton" onClick={BannerClick}><span id="loader2">Submit</span></button>
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