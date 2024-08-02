import React, { useEffect, useState } from "react";
import { VGetData, VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { useQuery } from "@tanstack/react-query";
import { message } from "antd";

const JobStatus=()=>{
const [postname,setPostname]=useState('')
const [disable,setDisable]=useState(false)
    const dp={
        endpoint:endpoints.jonnames,
      }
    const {data}=useQuery({
        queryKey:['jobtitles'],
        queryFn:()=>VGetData(dp)
    })
    useEffect(()=>{
if(data){
setPostname(data)
}
    },[data])

    const renderCourse=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                     <option key={item.id} value={item.id}>{item.jobtitle}</option>
                )
            })
        }
     }

     const handleClick=async()=>{
        try{

            const id = document.getElementById('title').value
            const status = document.getElementById('status').value
            if(id!==''&&status!==''){
                document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
                setDisable(true)
const dt={
    endpoint:endpoints.jobpoststatus,
    id:id,
    status:status
}
                const result = await VPostData(dt)
                if(result){
                    message.destroy()
                    message.success('Successfully Updated')
                }
            }else{
                message.error('Please select the option to update')
            }
        }catch(err){
        console.log(err)
    }finally{
        setDisable(false)
        document.getElementById('loader').innerHTML='<span id="loader"></span>'
    }
     }
    return(
        <>
         <div className="homesection">
   <div className="profilecard">
<div className="profilecard2">
<div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Update Job Status</h1>
          <span style={{fontSize:'15px'}} id='headerMsg'> </span>         
        </div>
         <div style={{position:'relative',width:'100%',marginTop:40}}>
         <select className="form-select profileinput" id='title' aria-label="Default select example">
  <option defaultValue value=''>Select Job title </option>
  {renderCourse(postname)}
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" ></i>
</div>
<div style={{marginTop:80}}>
<select className="form-select profileinput" id='status' aria-label="Default select example">
  <option defaultValue value=''>Select the status </option>
  <option value="Active">Active</option>
  <option value="Deactive">Deactive</option>
</select>
</div>
<div style={{textAlign:'center',marginTop:30}}>
<button className="bluebutton" disabled={disable} onClick={handleClick}><span id="loader"></span>Submit</button>
</div>
</div>
</div>
</div>
        </>
    )
}
export default JobStatus