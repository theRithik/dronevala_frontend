import React, { useState } from "react";
import './addjob.css'
import { VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { message } from "antd";
const AddJob=()=>{

const [disable,setDisable]=useState(false)
    const inputchange=(e)=>{
        const vl = e.target.value
        if(vl.length>0){
            e.target.previousSibling.style.display="block"
        }
        else{
            e.target.previousSibling.style.display="none"
        }
    }

    const handleclick=async()=>{
        try{
        const title =document.getElementById('title').value
        const cname =document.getElementById('cname').value
        const location =document.getElementById('location').value
        const jtype =document.getElementById('jtype').value
        const salary =document.getElementById('salary').value
        const description =document.getElementById('description').value
        const rqualification =document.getElementById('rqualification').value
        const pqualification =document.getElementById('pqualification').value
        const responsibilities =document.getElementById('responsibilities').value
        const benefits =document.getElementById('benefits').value
        const ldate =document.getElementById('ldate').value
        const cdescription =document.getElementById('cdescription').value
        const email =document.getElementById('email').value
        const phone = document.getElementById('phone').value

        if(title!==''&&cname !==''&&location!==''&&jtype!==''&&description!==''&&rqualification!==''&&pqualification!==''&&responsibilities!==''&&benefits!==''&&ldate!==''&& cdescription!==''&&email!==''&&phone!==''){
            message.loading('Processing')
            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
           setDisable(true)
            const dt={
                title:title,
                cname:cname,
                location:location,
                jtype:jtype,
                salary:salary,
                description:description,
                pqualification:pqualification,
                rqualification:rqualification,
                responsibilities:responsibilities,
                benefits:benefits,
                ldate:ldate,
                cdescription:cdescription,
                email:email,
                phone:phone,
                endpoint:endpoints.jobpost
            }

            const data = await VPostData(dt)
            if(data){
                message.destroy()
                message.success('Job posted Successfully',[5])
            }
        }else{
            message.warning('Please fill all the details')
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
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Add Job</h1>
          <span style={{fontSize:'15px'}} id='headerMsg'> </span>         
        </div>
        <div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Job Title</label>
    <input type="text"  onChange={inputchange}   className="form-control profileinput" placeholder="Job Title" name="jobtitle" id="title" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>

        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Company Name</label>
    <input type="text"  onChange={inputchange}   className="form-control profileinput" placeholder="Company Name" name="cname" id="cname" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Email</label>
    <input type="email"  onChange={inputchange} className="form-control profileinput" placeholder="Email" name="salary" id="email" />
    <i class="bi bi-envelope-at Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Phone Number</label>
    <input type="number"  onChange={inputchange} className="form-control profileinput" placeholder="Phone Number" name="phone" id="phone" />
    <i class="bi bi-telephone Instprofileinputicon"></i>
        </div>

        <div style={{position:'relative'}}>
<select className="form-select profileinput" aria-label="Default select example" id="jtype">
  <option defaultValue value=''>Select the Job type</option>
  <option value="Full Time">Full-time</option>
  <option value="Part-time">Part-time</option>
  <option value="Contract">Contract</option>
  <option value="Internship">Internship</option>
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" ></i>
</div>

<div style={{position:'relative'}}>
        <label className="profilelabeleff">Location</label>
    <input type="text"  onChange={inputchange}   className="form-control profileinput" placeholder="Location" name="location" id="location" />
    <i class="bi bi-geo-alt-fill Instprofileinputicon"></i>
        </div>
        {/* <div style={{position:'relative'}}>
<select className="form-select profileinput" aria-label="Default select example" id="dtype">
  <option defaultValue value=''>Select the Job Department</option>
  <option value="Human Resources">Human Resources </option>
  <option value="Marketing">Marketing</option>
  <option value="Sales">Sales</option>
  <option value="Engineering">Operations</option>
  <option value="Engineering">Engineering</option>
  <option value="Finance">Finance</option>
  <option value="Customer Service">Customer Service</option>
  <option value="Information Technology">Information Technology</option>

  <option value="Research and Development">Research and Development</option>
  <option value="Supply Chain/Logistics">Supply Chain/Logistics</option>
  <option value="Business Development">Business Development</option>
  <option value="Administration">Administration</option>
  <option value="Training and Development">Training and Development</option>
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" ></i>
</div> */}

<div style={{position:'relative'}}>
        <label className="profilelabeleff">Salary Range</label>
    <input type="text"  onChange={inputchange} className="form-control profileinput" placeholder="Salary Range" name="salary" id="salary" />
    <i class="bi bi-currency-rupee Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Job Description</label>
    <textarea  onChange={inputchange}   id="description" className="form-control profileinput" placeholder="Job Description" ></textarea>
   
    <i class="bi bi-card-text Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Required Qualification</label>
    <textarea  onChange={inputchange}   id="rqualification" className="form-control profileinput" placeholder="Required Qualification" ></textarea>
    <p style={{fontSize:'10px',color:'grey'}}>Add # to make it as a Separate point in the user view</p>
   
    <i class="bi bi-card-list Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Preferred Qualifications</label>
    <textarea  onChange={inputchange}   id="pqualification" className="form-control profileinput" placeholder="Preferred Qualification" ></textarea>
    <p style={{fontSize:'10px',color:'grey'}}>Add # to make it as a Separate point in the user view</p>
   
    <i class="bi bi-card-checklist Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Key Responsibilities</label>
    <textarea  onChange={inputchange}   id="responsibilities" className="form-control profileinput" placeholder="Key Responsibilities" ></textarea>
    <p style={{fontSize:'10px',color:'grey'}}>Add # to make it as a Separate point in the user view</p>
   
    <i class="bi bi-card-heading Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Benefits</label>
    <textarea  onChange={inputchange}   id="benefits" className="form-control profileinput" placeholder="Benefits" ></textarea>
    <p style={{fontSize:'10px',color:'grey'}}>Add #  to make it as a Separate point in the user view</p>
   
    <i class="bi bi-patch-check Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Last Date</label>
    <input type="text"  onChange={inputchange} className="form-control profileinput" placeholder="Last date" name="salary" id="ldate" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>

        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Company Description</label>
    <textarea  onChange={inputchange}   id="cdescription" className="form-control profileinput" placeholder="Company Description" ></textarea>
    <i class="bi bi-journal-text Instprofileinputicon"></i>
        </div>

      
        
        </div>
        <div style={{textAlign:'center'}}>
            <button className="bluebutton" onClick={handleclick} disabled={disable}><span id="loader"></span>Submit</button>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default AddJob