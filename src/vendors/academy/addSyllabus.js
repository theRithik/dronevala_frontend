import React,{useState,useEffect}from "react"

import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";



const AddSyllabus=()=>{
    const [courseId,setCourseId]=useState('')
    const [coursedata,setCoursedata]= useState('')
    const [addsyllabus,setAddsyllabus]=useState('')
    const [type,setType]=useState('Days')
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

    

    const syllabusClick=()=>{
        const value = document.getElementById('days').value
        let doc = ''
        if(Number(value)>6){
alert('you can add only upto 6')

        }
        else{
        for(let i = 1; i<=value;i++){
          doc +=`<label >${type} ${i}</label><br/><textarea id=${i} className="profileinput" style=border-radius:20px;padding:20px;width:80%;background:transparent;color:inherit></textarea><br/>`
        }
        document.getElementById('SYLLABUS').innerHTML=doc
      }
    }
    
      
    const SyllabusAdd=async()=>{
      try{
        const no = document.getElementById('days').value
        let obj={}
        if(!courseId&& courseId===''){
            alert('please select a course first')
        }
        else{
            document.getElementById('loader3').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
        for(let i=0;i<no;i++){
        
          obj['syllabus'+(i+1)]=document.getElementById((i+1)).value
        }

         const dt ={
            "id":courseId,
            "type":type,
            "syllabus":obj,
            "token":localStorage.getItem('Adtoken'),
            endpoint:endpoints
          }
          const result = await PostData(dt)
           
    }
  }catch(err){
    throw err
}finally {
    console.log('finished')
    document.getElementById('loader3').innerHTML='<span id="loader2">Submit</span>'
  }
  }
    

   const courseIDRender3=()=>{
    const idCourse= document.getElementById('courseId3').value
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

const duration=(e)=>{
    const data = document.getElementById('durationType').value
    setType(data)
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
<div className="profilecard2">

 <div >
 <div  className="row">
 <h6 id="syllabusColor" style={{textAlign:'center',justifyContent:'center',marginTop:'20px'}}>{addsyllabus}</h6>
 <h1 style={{fontSize:30,fontWeight:600,textAlign:'center'}}>Add Syllabus</h1>
 <div style={{position:'relative',width:'70%'}}>
<label className="profilelabeleff">Course Name</label>
        <select className="form-select profileinput" id='courseId3' onChange={courseIDRender3} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}}></i>
</div>
    <div className='col-md-8 col-sm-8'>
      
    <div style={{position:'relative'}}>
    <label className="profilelabeleff">Course Name</label>
    
      <select className="form-select profileinput" id='durationType' onChange={duration} aria-label="Default select example">
  <option defaultValue='Day'>Day </option> 
  <option value='Month'>Month</option>
  </select>
  <i class="bi bi-caret-down-fill Instprofileinputicon" ></i>
  </div>
  <div style={{position:'relative',marginBottom:20}}>
        <label className="profilelabeleff">Number of {type} </label>
    <input type="number"  onChange={inputchange} name="days" id="days" required  className="form-control profileinput" placeholder="Number of Days" />
    <i class="bi bi-list-ol Instprofileinputicon"></i>
        </div>
   
</div>
<div className="col-md-2 col-sm-2">
  <span style={{marginTop:'25px',position:'relative',top:'77px'}} className="btn btn-warning" id="numbOk" onClick={syllabusClick} >ok</span>
  </div>
</div>
<div style={{marginLeft:'5%'}}>
  
<span id="SYLLABUS"></span></div>
<div className="centerText">
<button type="submit" onClick={SyllabusAdd} className="bluebutton"><span id="loader3">Submit</span></button>
</div>
</div>
</div>
</div>  
</div>    

        </>
    )

}
export default AddSyllabus