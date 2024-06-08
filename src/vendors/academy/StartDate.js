import React,{useEffect,useState} from "react";
// import DatePicker from "react-multi-date-picker"
import { PostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { DatePicker } from "antd";

const rurl = "http://localhost:5000/admin/courseStartDate"
const StartDate=()=>{
    const [courseId,setCourseId]=useState('')
    const [coursedata,setCoursedata]= useState('')
    const [addPhoto,setAddPhoto]=useState('')
    const [value, setValue] = useState('');
    const[msg,setMsg]=useState('')
   
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
        
          const updateDate=async()=>{
            try{
            setAddPhoto('')
            if(!courseId && courseId===''){
            alert('please select a course first')
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

          const result = await PostData(dt)

                setAddPhoto('Successfully Updated')
                alert('Successfully Updated')
        
          }else{
            alert('please select a date')
          }
        }
    }catch(err){
        throw err
     } finally {
         console.log('finished')
         document.getElementById('loader').innerHTML='<span id="loader">Update</span>'
       } 
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
 <select className="form-select profileinput" id='courseId5' onChange={courseIDRender5} aria-label="Default select example">
  <option defaultValue value=''>Select the Course Name </option>
  {renderCourse(coursedata)}
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" style={{top:40}}></i>
</div>

<label style={{fontWeight:'500',padding:'10px',marginTop:30,fontSize:18}}>update Dates</label>
<DatePicker format="DD/MM/YYYY"  value={value}  onChange={setValue} needConfirm id="DtPk" style={{padding:'8px 20px',borderRadius:20,minWidth:300,background:'transparent'}}/>
<p style={{fontSize:10}}>please select date leaving today's date</p>
<div>
</div>
</div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
<button className="bluebutton" onClick={updateDate} ><span id="loader">Update</span></button>
</div>
 
  </div>
  </div>
  </div>  
</div>   
 
        </>
    )
}
export default StartDate