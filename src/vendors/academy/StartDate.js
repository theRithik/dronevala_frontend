import React,{useState} from "react";
// import DatePicker from "react-multi-date-picker"
import { VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { DatePicker, message } from "antd";

import '../dashboard/content.css'
import CourseNames from "./component.js/coursenames";

const StartDate=()=>{
    const [courseId,setCourseId]=useState('')
    const [addPhoto,setAddPhoto]=useState('')
    const [value, setValue] = useState('');
   


          const updateDate=async()=>{
            try{
            setAddPhoto('')
            if(!courseId && courseId===''){
            message.error('please select a course first')
            }
            else{
             const d1 = document.getElementById('DtPk').value
            
            if(d1){
              document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'

          const dt = {
                id:courseId,
                date:d1,
                token:localStorage.getItem('Adtoken'),
                endpoint:endpoints.updateCourseDate
          }

          const result = await VPostData(dt)
          if(result){
                setAddPhoto('Successfully Updated')
                message.success('Successfully Updated')
          }
        
          }else{
            message.error('please select a date')
          }
        }
    }catch(err){
        // console.log(err)
        message.destroy()
     } finally {
         // console.log('finished')
         document.getElementById('loader').innerHTML='<span id="loader"></span>'
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
    <div >
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
    <h1 style={{textAlign:'center',fontSize:30,fontWeight:600}} >Update Course Start Date</h1>
    <h6 style={{color:'green'}}>{addPhoto}</h6>
    <div style={{position:'relative'}}>
    <label className="profilelabeleff">Course Name</label>
    <CourseNames courseID ={(data)=>courseRender(data)}/>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}}></i>
</div>

<label style={{fontWeight:'500',padding:'10px',marginTop:30,fontSize:18}}>update Dates</label>
<DatePicker format="DD/MM/YYYY"  value={value}  onChange={setValue} needConfirm id="DtPk" style={{padding:'8px 20px',borderRadius:20,minWidth:300,background:'transparent'}}/>
<p style={{fontSize:10}}>please select date leaving today's date</p>
<div>
</div>
</div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
<button className="bluebutton" onClick={updateDate} ><span id="loader"></span>Update</button>
</div>
 
  </div>
  </div>
  </div>  
</div>   
 
        </>
    )
}
export default StartDate