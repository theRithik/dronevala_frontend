import axios from "axios";
import React, { useEffect, useState } from "react";
import './careers.css'
import { message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { PostData } from "../config/vendor/Apiconfig";
import endpoints from "../config/config";
import { useParams } from "react-router-dom";
import SuspenseLoad from "../suspense/suspence";


const url = "https://vauni363b1.execute-api.ap-south-1.amazonaws.com/prod/user/applyJob"
const JobDetails =()=>{
    const [disable,setDisable]=useState(false)
    const {id}=useParams()
    const [job,setJob]=useState('')
    const [rqualify,setRqualify]=useState('')
    const [pqualify,setPqualify]=useState('')
    const [keyR,setKeyR]=useState('')
    const [benefit,setBenefit] = useState('')
    const dt ={
        endpoint:endpoints.jobdetails,
        id:id
    }
    const {data,isLoading}=useQuery({
        queryKey:['jobdetails',id],
        queryFn:()=> PostData(dt)
    })
    useEffect(()=>{
        window.scrollTo(0,0)
        if(data){
            console.log(data)
            setJob(data)

           const df = data[0]?.RequiredQualifications
           const fd = df.split('#')
           setRqualify(fd)

           const pf = data[0]?.preferredQualifications
           const fp = pf.split('#')
           setPqualify(fp)

           const kr = data[0]?.keyResponsibilities
           const kr2 = kr.split('#')
           setKeyR(kr2)

           const ben = data[0]?.benefits
           const ben2 = ben.split('#')
           setBenefit(ben2)
        }
            },[data])


            
    const inputchange=(e)=>{
        const vl = e.target.value
        if(vl.length>0){
            e.target.previousSibling.style.display="block"
            e.target.style.borderColor=""
            e.target.nextSibling.style.display="none"
        }
        else{
            e.target.previousSibling.style.display="none"
            e.target.style.borderColor="red"
            e.target.nextSibling.style.display="block"
        }
    }
    const handleSubmit=()=>{
const name = document.getElementById('name').value
const email = document.getElementById('email').value
const number = document.getElementById('number').value
const position = document.getElementById('position').value
const file = document.getElementById('file').files[0]

document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
setDisable(true)
const form = new FormData()
form.append('name',name)
form.append('email',email)
form.append('number',number)
form.append('position',position)
form.append('vemail',job[0]?.email)
form.append('companyname',job[0]?.companyname)
form.append('file',file)

axios.post(url,form)
.then((response)=>{
    setDisable(false)
    document.getElementById('loader').innerHTML='<span id="loader"></span>'
    message.success('You have successfully applied for the position')
}).catch((err)=>{
    setDisable(false)
    document.getElementById('loader').innerHTML='<span id="loader"></span>'
     if (err.response) {
        // The request was made, but the server responded with a status code
        message.error(err.response.data)
      } else if (err.request) {
        // The request was made but no response was received
        message.error(err.message)
      } else {
        // Something else happened while setting up the request
        message.error(err.message)
      }
})
    }

    const resumeupload=()=>{
        document.querySelector('.fle2').style.display="block"
        document.querySelector('.fle1').style.display="none"
        document.querySelector('.fileupdesign').classList.add('fileadd')
    }

    const req=(data)=>{
if(data.length>0){
   return data.map((item,i)=>{
        return (
            <li key={i}>{item}</li>
        )
    })
}
    }

    const preq=(data)=>{
        if(data.length>0){
           return data.map((item,i)=>{
                return (
                    <li key={i}>{item}</li>
                )
            })
        }
            }

            
    const key=(data)=>{
        if(data.length>0){
           return data.map((item,i)=>{
                return (
                    <li key={i}>{item}</li>
                )
            })
        }
            }

            const benf=(data)=>{
                if(data.length>0){
                   return data.map((item,i)=>{
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
                    }

                    if(isLoading){
                        return <SuspenseLoad/>
                    }

    return(
        <>
        
        <div>
            <div style={{padding:'6.7%'}}>
            <h3 className="headingtag">{job[0]?.jobtitle}</h3>
            <h6 style={{marginTop:20}}>{job[0]?.companyname}</h6>
            <a href="#ApplyToJob">
                <button className="btn btn-primary" style={{background:'rgb(13 42 218)',borderRadius:20,width:100,marginTop:30}}>Apply</button>
            </a>
            <div style={{marginTop:'5%'}}>
                <h6 className="headingtag2">About {job[0]?.companyname}</h6>
                <p className="stylep">{job[0]?.companyDescription}</p>
          {job[0]?.jobdescription &&
            <div style={{marginTop:'5%'}}>
                <h6 className="headingtag2">
                  Job Overview
                </h6>
                <p className="stylep">{job[0]?.jobdescription}</p>
            </div>
}
{rqualify.length>0 &&
            <div style={{marginTop:'5%'}} >
                <h6 className="headingtag2">Required Qualifications:</h6>
                <ul className="centerlist2">
        {req(rqualify)}
                </ul>
            </div>
}

{pqualify.length>0 &&
            <div style={{marginTop:'5%'}}>
<h6 className="headingtag2">
Preferred Qualifications:
</h6>
<ul className="centerlist2">
{preq(pqualify)}
</ul>
            </div>
}

{keyR.length>0 &&
            <div style={{marginTop:'5%'}}>
<h6 className="headingtag2">
Key Responsibilities:
</h6>
<ul className="centerlist2">
{key(keyR)}
</ul>
            </div>
}

{benefit.length>0 &&
            <div style={{marginTop:'5%'}}>
<h6 className="headingtag2">
Benefits:
</h6>
<ul className="centerlist2">
{benf(benefit)}
</ul>
            </div>
}

<div style={{marginTop:'5%'}}>
<h6 className="headingtag2">Job Overview</h6>
<ul className="centerlist2" style={{fontWeight:500,fontSize:16}}>
<li>Location : {job[0]?.location}</li>
<li>Job Type : {job[0]?.jobtype}</li>
<li> salary : {job[0]?.salaryrange}</li>
<li>Last Date: {job[0]?.lastdate}</li>
</ul>
</div>

            </div>
            <div style={{marginTop:'5%',marginBottom:'5%'}} id="ApplyToJob">
                <h6 className="headingtag2">To Apply please fill the form below</h6>
            </div>
            {/* <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=wnOGOcW1QkqDYJPy4s_3Z0GfRzieZAVAq1PsM_GZya5UMUVRR1ZBQU4zT0lZVUdCV1BHVThQSzlUQi4u&embed=true" style={{border: 'none', maxWidth:'100%', maxHeight:'100vh',width:'100%',height:700,borderRadius:30}} title="Submit Form" > </iframe>
            */}

            <div style={{maxWidth:500}}>
                
                <div className="inputdiv" style={{position:'relative',width:'100%'}}>
<i class="bi bi-person-fill lgicon" style={{left:'4%'}}></i>
    <label className="reglabeleff2">Name</label>

    <input type="text" onChange={inputchange} id="name" name="name" placeholder="Name" className="form-control reginput"/>
    <p className="regreq2">Required Filed</p>
    </div>
    <div className="inputdiv" style={{position:'relative',width:'100%'}}>
<i class="bi bi-envelope-at-fill lgicon" style={{left:'4%'}}></i>
    <label className="reglabeleff2">Email</label>

    <input type="email" onChange={inputchange} id="email" name="email" placeholder="Email" className="form-control reginput"/>
    <p className="regreq2">Required Filed</p>
    </div>
    <div className="inputdiv" style={{position:'relative',width:'100%'}}>
<i class="bi bi-telephone-fill lgicon" style={{left:'4%'}}></i>
    <label className="reglabeleff2"> Phone Number</label>

    <input type="number" onChange={inputchange} id="number" name="number" placeholder="Phone Number" className="form-control reginput"/>
    <p className="regreq2">Required Filed</p>
    </div>
<input type="hidden" id="position" name="position" value={job[0]?.jobtitle} />
                
                <div className="" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
                    <div className="fileupdesign">
                <i class="bi bi-file-earmark-arrow-up-fill fle1"></i>
                <i class="bi bi-file-earmark-pdf-fill fle2"></i>
                    <input type="file" onChange={resumeupload} accept="application/pdf" id="file" name="file" className="form-control resumeupload"/>
                </div>
                </div>
                <div style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button className="button" disabled={disable} onClick={handleSubmit}><span id="loader"></span>Submit</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default JobDetails