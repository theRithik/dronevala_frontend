import React,{useState,useEffect}from "react"
import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";


const AddTrainer=()=>{
    const [trainerUpdate,setTrainerUpdate]=useState('')
    const [courseId,setCourseId]=useState('')
    const [coursedata,setCoursedata]= useState('')
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


    var count =0
    const trainerClick=async()=>{
        try{
       count++;
       //console.log()(count)
       if(!courseId&& courseId===''){
        setMsg('please select a course first')
        const toastLiveExample = document.getElementById('liveToast5')
        toastLiveExample.classList.add('show')
        setTimeout(()=>{
          toastLiveExample.classList.remove('show')
        },5000)
          
       }
       else{
       document.getElementById('loader4').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
       const tname= document.getElementById('tname').value
       const tExp = document.getElementById('tExp').value
       const topt = document.getElementById('toption').value
       const desc = document.getElementById('desc').value
       //console.log()(tname,tExp,topt)
       if(tname !=='' && tExp !=='' && topt !=='' && desc !==''){
      
         const train = {
               id:courseId,
               tid:count,
               tname:tname,
               tExp:tExp,
               topt:topt,
               desc:desc,
               token:localStorage.getItem('Adtoken'),
               endpoint:endpoints.addTrainer
           }
       const result = await PostData(train)
       console.log(result)

  document.getElementById("trainerColor").style.color='green'
   setTrainerUpdate('Trainer Added Successfully')

   setMsg('Trainer Added Successfully')
   const toastLiveExample = document.getElementById('liveToast5')
   toastLiveExample.classList.add('show')
   setTimeout(()=>{
     toastLiveExample.classList.remove('show')
   },4000)
   }
   else{
    setMsg('please fill all the fields')
    const toastLiveExample = document.getElementById('liveToast5')
    toastLiveExample.classList.add('show')
    setTimeout(()=>{
      toastLiveExample.classList.remove('show')
    },4000)
   }
  }
}
catch(err){
   throw err
} finally {
    console.log('finished')
    document.getElementById('loader').innerHTML='<span id="loader2">Submit</span>'
  }
   }

   const courseIDRender2=()=>{
    const idCourse= document.getElementById('courseId2').value
    setCourseId(idCourse)
 }

 
const renderCourse=(data)=>{
    if(data){
      if(data.length>0){
        return data.map((item)=>{
            return(
                 <option key={item.id} value={item.courseID}>{item.course}</option>
            
            )
        })
    }
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
<div className="" id="courseUpdate13">
    <div className="">
        <h1 style={{textAlign:'center',fontSize:30,fontWeight:600}} >Add Trainer</h1>
        <h6 id="trainerColor">{trainerUpdate}</h6>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Name</label>
        <select className="form-select profileinput" id='courseId2' onChange={courseIDRender2} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon"></i>
</div>

<div style={{position:'relative'}}>
        <label className="profilelabeleff">Trainer Name</label>
    <input type="text"  onChange={inputchange} name='tname' id='tname' required  className="form-control profileinput" placeholder="Trainer Name" />
    <i class="bi bi-people-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Trainer experience</label>
    <input type="text"  onChange={inputchange} name="texperience" id='tExp' required  className="form-control profileinput" placeholder="Trainer experience" />
    <i class="bi bi-person-workspace Instprofileinputicon"></i>
        </div>

        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Trainer Category</label>
        <select className="form-select profileinput"  id ='toption'aria-label="Default select example">
  <option defaultValue>Trainer Category</option>
  <option value="Senior Trainer">Senior Trainer</option>
  <option value="Junior Trainer">Junior Trainer</option>
  <option value="New Trainer">New Trainer</option>
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon"></i>
</div>

<div style={{position:'relative'}}>
        <label className="profilelabeleff">Trainer description</label>

<textarea className="form-control profileinput"  onChange={inputchange} name="texperience" id='desc' placeholder="Trainer description"></textarea>
<i class="bi bi-menu-down Instprofileinputicon"></i>
        </div>
<div style={{display:'flex',justifyContent:'center'}}>
<button type="submit" className="bluebutton" onClick={trainerClick}><span id="loader4">Submit</span></button>
    </div>
    </div>
</div>                                           
 </div>
 </div>
      </div> 
     
        </>
    )

}
export default AddTrainer