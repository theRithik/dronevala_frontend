import React,{useState,useEffect}from "react"
import endpoints from "../../config/config"
import { PostData } from "../../config/vendor/Apiconfig"

// import DashboardUser from "../Dashboard/dashboard";
// import Front from "../Dashboard/front";

const pimg ='http://localhost:5000/admin/photoGallery'
const AddGallery=()=>{
    const [courseId,setCourseId]=useState('')
  
    const [coursedata,setCoursedata]= useState('')
    const [addPhoto,setAddPhoto]=useState('')
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
    
      
      const photoGallery=()=>{
        try{
        setAddPhoto('')
        if(!courseId && courseId===''){
          alert('please add a course first')
        }
        else{
        document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
        const id=courseId
      const upload=  document.getElementById('uploads').files
      if(upload.length<6){
     const formData = new FormData()
     for(let i=0; i<upload.length; i++){
        let obj={}
       obj[i] = document.getElementById('uploads').files[i]
       formData.append('image',obj[i])
       formData.set('name',upload[0],id)
     }
// api calllllllllllllllllllllllllllllllllllllll
   
        alert('Successfully Added')     
        
          setAddPhoto('Successfully Added')
        }
    else{
      alert('you can add only 5 images in a single time')
    }
  }
}catch(err){
    throw err
}finally {
    console.log('finished')
     document.getElementById('loader').innerHTML='<span id="loader">Submit</span>'
  }
    }
    

    const courseIDRender5=()=>{
        const idCourse= document.getElementById('courseId5').value
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
<div className="profilecard2" >
<div style={{display:'flex',justifyContent:'center'}}>
<div >
    <h1  style={{fontSize:30,fontWeight:600,textAlign:"center"}}>Upload photo gallery</h1>
    <p style={{color:'grey',fontSize:10,display:'flex',justifyContent:'center'}}>Upload images less than 1mb for faster load, You can only upload upto 5 images in a single time</p>
   <div style={{display:'flex',justifyContent:'center'}}>
   <h6 style={{color:'green'}}>{addPhoto}</h6>
   </div>

<div style={{position:'relative',margin:"auto"}}>
<label className="profilelabeleff">Course Name</label>
 <select className="form-select profileinput" id='courseId5' onChange={courseIDRender5} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon"></i>
</div>


<div className="centerText" style={{marginTop:40}}>
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Iamges </span>
  <i class="bi bi-file-earmark-image"></i>
  <input type="file" style={{paddingLeft:'5px',borderRadius:'5px'}} id="uploads" name="foo" accept=".jpg,.png" multiple/>
  <p style={{margin:0,fontSize:10,fontWeight:500}}>Each image must be less than 1 Mb</p>
</label>
</div>

    <div style={{display:'flex',justifyContent:'center'}}>
<button className="bluebutton" onClick={photoGallery} ><span id="loader">Submit</span></button>

  </div>
  </div>
  </div>
</div>      
</div>  
</div>
      
        </>
    )

}
export default AddGallery