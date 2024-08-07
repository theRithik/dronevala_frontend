import React,{useEffect, useState} from "react";
import './profile.css'
import endpoints from "../../../config/config";
import { PostImage } from "../../../config/vendor/aws/awsapi";
import { GetData, PostData } from "../../../config/vendor/Apiconfig";
import { message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";

const UserProfile =()=>{
    const [details,setDetails]=useState({
        fname:'',
        mname:'',
        lname:'',
        email:'',
        phone:'',
        aadhaar:'',
        dob:'',
        altph:'',
        passport:'',
        presentAddress:'',
        city:'',
        state:'',
        permanentAddress:'',
    })
    const [diable,setDisable]=useState(false)
    const [loading,setLoading]=useState(false)
    const[photo,setPhoto]=useState('')
    const context = useOutletContext()
const dt={
    endpoint:endpoints.userDetails
}
    const {data}= useQuery({
        queryKey:['userprofileDetails',localStorage.getItem('_id')],
        queryFn:()=>GetData(dt)
    })
useEffect(()=>{
if(data){
    // console.log(data)
    if(data.data.length>0){
    const dt = data.data[0]
    setDetails({
        fname:dt.firstName,
        mname:dt.middleName,
        lname:dt.lastName,
        phone:dt.phone,
        email:dt.email,
        aadhaar:dt.aadhaar,
        dob:dt.DOB,
        altphone:dt.alternativePhone,
        passport:dt.passport,
        permanentAddress:dt.permanentAddress,
        presentAddress:dt.presentAddress,
        state:dt.state,
        city:dt.city
    })
    if(dt?.profilePhoto){
    setPhoto(dt.profilePhoto)
    }else{
        setPhoto(null)
    }
}
}
},[data])

    const inputchange=(e)=>{
        const vl = e.target.value
        if(vl.length>0){
            e.target.previousSibling.style.display="block"
        }
        else{
            e.target.previousSibling.style.display="none"
        }
        setDetails({
            ...details,
            [e.target.name]:e.target.value
        })
      
    }
  

    
const imagAdd=async(event)=>{
    try{
    const img = event.target.files[0]
    if(img?.size<1100000){
        setLoading(true)
        message.loading('Processing')
        const dt={
            endpoint:endpoints.aws,
             fileInput:img,
             folder:"user"
        }
        const result = await PostImage(dt)
        // console.log(result.path)
        if(result){
        const mt ={
            endpoint:endpoints.adduserPhoto,
            image:result.path
        }
        const result2 = await PostData(mt)
        if(result2){
        message.destroy()
        message.success('Updated Successfully')
        setPhoto(result.path)
        context.setImage(result.path)
        }
    }
    }else{
        message.info('image must be less than 1Mb')
        event.target.value=""
    }
    }catch(err){
        // console.log(err)
       event.target.value=""
    }finally{
        setLoading(false)
    }
}

const updateDetails =async()=>{
    try{
        // console.log(details.altphone)
        if(details.fname!=='' & details.lname!=='' && details.phone!=='' && details.dob!=='' && details.aadhaar!=='' && details.permanentAddress!=='' && details.presentAddress!==''){
message.loading('Processing')
setDisable(true)
            const dt ={
    "fstName":details.fname,
    "Mname":details.mname,
    "lstName":details.lname,
    "email":details.email,
    "phone":details.phone,
    "alternate":details.altphone,
    "DOB":details.dob,
    "passport":details.passport,
    "aadhaar":details.aadhaar,
    "permanentaddress":details.permanentAddress,
    "presentAddress":details.presentAddress,
    city:details.city,
    state:details.state,
    endpoint:endpoints.updateuserDetals
}

const result = await PostData(dt)
if(result){
    message.destroy()
    message.success('Successfully Updated')
}
        }else{
            message.error('Please Fill all the details')
        }
    }catch(err){
        // console.log(err)
    }finally{
        setDisable(false)
    }

}

    return(
        <>
         <div className="homesection">
            <div className="profilecard">
                <div style={{padding:'5%'}} className="profilecard2">
                    <div>
<h1>Hello {details.fname} 👋</h1>

</div>
<div style={{marginTop:'10%'}}>
    <div className="row" style={{marginBottom:20}}>
        <div className="col-md-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{position:'relative'}}>
                {loading ? <img src="/images/loading2.gif" style={{width:30,position:'relative',bottom:80,right:15}} alt="loading"/>
                : photo ? <img src={`${endpoints.imageprefix}${photo}`} alt="profile" style={{width:'80%',borderRadius:'50%'}}/>
                :<img src="/images/addimg.svg" alt="add" style={{width:'80%',borderRadius:'50%'}}/>
            
    }
            <input type="file" accept=".png,.jpg" id="image" onChange={imagAdd} className="ProfileiMg"/>
            <i class="bi bi-patch-plus-fill imgAddBTN"></i>
            </div>

        </div>
        <div className="col-md-6">
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">First Name</label>
    <input type="text"  onChange={inputchange} name="fname" className="form-control profileinput" value={details.fname ||''} placeholder="First Name" id="fname"/>
    <i class="bi bi-person Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Middle Name</label>
    <input type="text"  onChange={inputchange} name="mname" className="form-control profileinput" value={details.mname ||''} placeholder="Middle Name" id="mname"/>
    <i class="bi bi-person Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Last Name</label>
    <input type="text"  onChange={inputchange} name="lname" className="form-control profileinput" value={details.lname ||''} placeholder="Last Name" id="lname"/>
    <i class="bi bi-person Instprofileinputicon"></i>
        </div>
        </div>
        </div>
            <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Email</label>
    <input type="email"  onChange={inputchange} name="email" className="form-control profileinput" value={details.email ||''} readOnly placeholder="Email" id="email"/>
    <i class="bi bi-envelope-at Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Phone</label>
    <input type="number"  onChange={inputchange} name="phone" className="form-control profileinput" value={details.phone ||''} placeholder="Phone" id="phone"/>
    <i class="bi bi-phone Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Alternative Phone</label>
    <input type="number"  onChange={inputchange} name="altphone" className="form-control profileinput" value={details.altphone ||''} placeholder="Alternative phone" id="altph"/>
    <i class="bi bi-telephone Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">City</label>
    <input type="text"  onChange={inputchange} name="city"  className="form-control profileinput" value={details.city ||''} placeholder="City" id="city"/>
    <i class="bi bi-pin-map Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">State</label>
    <input type="text"  onChange={inputchange} name="state"  className="form-control profileinput" value={details.state||''} placeholder="State" id="state"/>
    <i class="bi bi-crosshair Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Date Of Birth</label>
    <input type="text"  onChange={inputchange} name="dob"  className="form-control profileinput" value={details.dob||''} placeholder="Date Of Birth" id="dob"/>
    <i class="bi bi-calendar-date Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Passport</label>
    <input type="text"  onChange={inputchange} name="passport"  className="form-control profileinput" value={details.passport ||''} placeholder="Passport" id="passport"/>
    <i class="bi bi-passport Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Aadhaar</label>
    <input type="number"  onChange={inputchange} name="aadhaar" className="form-control profileinput" value={details.aadhaar ||''} placeholder="Aadhaar" id="aadhaar"/>
    <i class="bi bi-code Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Permanent Address</label>
    <textarea type="text"  onChange={inputchange} name="permanentAddress"  className="form-control profileinput" value={details.permanentAddress ||''} placeholder="Permanent Address" id="permanentAddress"></textarea>
    <i class="bi bi-geo-alt Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Present Address</label>
    <textarea type="text"  onChange={inputchange} name="presentAddress"  className="form-control profileinput" value={details.presentAddress ||''} placeholder="Present Address" id="presentAddress"></textarea>
    <i class="bi bi-map Instprofileinputicon"></i>
        </div>
        <div style={{marginTop:'10%'}}>
            <button className="button profilebutton" disabled={diable} onClick={updateDetails}><span id="loader"></span>Update</button>
        </div>
        </div>
    </div>

</div>

                
          </div>
        </>
    )
}
export default UserProfile