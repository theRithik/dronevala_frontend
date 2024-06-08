
import React,{useState,useEffect}from "react"
import {Link} from "react-router-dom"
import { PostImage } from "../../config/vendor/aws/awsapi"
import endpoints from "../../config/config"
import { PostData } from "../../config/vendor/Apiconfig"

const bImg = 'http://localhost:5000/admin/addInstituteViedo'

const AddViedo=()=>{
    const [courseId,setCourseId]=useState('')
    const [coursedata,setCoursedata]= useState('')
    const [addBanner,setAddBanner]=useState('')
    const [msg,setMsg]=useState('')
  
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
    const id =courseId
    console.log(data2.size)
  if(data2.size<5000000){
    
    const result = PostImage(data2)
        document.getElementById('loader2').innerHTML='<span id="loader2">Submit</span>'
        setAddBanner('Successfully Added')
        setMsg('Successfully Added')
   
    
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
 <select className="form-select profileinput" id='courseId4' onChange={courseIDRender4} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
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