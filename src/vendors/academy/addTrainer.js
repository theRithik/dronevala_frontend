import React,{useState}from "react"
import endpoints from "../../config/config";
import { VPostData } from "../../config/vendor/Apiconfig";
import '../dashboard/content.css'
import CourseNames from "./component.js/coursenames";
import { message } from "antd";

const AddTrainer=()=>{
    const [trainerUpdate,setTrainerUpdate]=useState('')
    const [courseId,setCourseId]=useState('')

    var count =0
    const trainerClick=async()=>{
        try{
       count++;
       //// console.log()(count)
       if(!courseId&& courseId===''){
        message.error('please select a course first') 
       }
       else{
       document.getElementById('loader2').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
       const tname= document.getElementById('tname').value
       const tExp = document.getElementById('tExp').value
       const topt = document.getElementById('toption').value
       const desc = document.getElementById('desc').value
       //// console.log()(tname,tExp,topt)
       if(tname !=='' && tExp !=='' && topt !=='' && desc !==''){
      message.loading('Processing',[10])
         const train = {
               id:courseId,
               tid:count,
               tname:tname,
               tExp:tExp,
               topt:topt,
               desc:desc,
               endpoint:endpoints.addTrainer
           }
       const result = await VPostData(train)
       if(result){
       // console.log(result)
       message.destroy()
  document.getElementById("trainerColor").style.color='green'
   setTrainerUpdate('Trainer Added Successfully')

   message.success('Trainer Added Successfully')
   }
  }
   else{
    message.error('please fill all the fields')
   }
  }
}
catch(err){
   // console.log(err)
   message.destroy()
} finally {
    // console.log('finished')
    document.getElementById('loader2').innerHTML='<span id="loader2"></span>'
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
<div className="" id="courseUpdate13">
    <div className="">
        <h1 style={{textAlign:'center',fontSize:30,fontWeight:600}} >Add Trainer</h1>
        <h6 id="trainerColor">{trainerUpdate}</h6>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Course Name</label>
        <CourseNames courseID ={(data)=>courseRender(data)}/>
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
<button type="submit" className="bluebutton" onClick={trainerClick}><span id="loader2"></span>Submit</button>
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