import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './detailsform.css'
import endpoints from "../../config/config";
import { VPostData } from "../../config/vendor/Apiconfig";
import { message } from "antd";

const VdetailsForm2=()=>{
    const history = useNavigate()
    const[value1,setValue1]=useState('')
    const[value2,setValue2]=useState('')
    const[value3,setValue3]=useState('')
    const[value4,setValue4]=useState('')
    
const handleChange=()=>{
    
const data= document.getElementById('Serv1').checked
const data2= document.getElementById('Ret1').checked
const data3 = document.getElementById('Acd1').checked
const data4 = document.getElementById('Sto1').checked

setValue1(data)
setValue2(data2)
setValue3(data3)
setValue4(data4)
if(data !==false || data2!==false || data3!==false||data4!==false){
    document.getElementById('RegBtn').style.display='block'
}
else{
    document.getElementById('RegBtn').style.display='none'
}
}

    const renderData=()=>{
        if(value1===true){
return(
    <div>
                    <input type="checkbox" className="name" id='1' name="check" value='Agriculture' defaultChecked />
                    <label className="form-label">Agriculture</label><br/>
                    <input type="checkbox" className="name" id="2" name="check" value='Photography' defaultChecked />
                    <label className="form-label">Photography</label><br/>
                    <input type="checkbox" className="name"id="3"  name="check" value='Survey' defaultChecked />
                    <label className="form-label">Survey</label><br/>
                    <input type="checkbox" className="name"id="4"  name="check" value='Mapping' defaultChecked/>
                    <label className="form-label">Mapping</label><br/>
                    <input type="checkbox" className="name"id="5"  name="check" value='Repair & Maintenance' defaultChecked/>
                    <label className="form-label">Repair & Maintenance</label><br/>
                    <input type="checkbox" className="name"id="6"  name="check" value='Logistics' defaultChecked/>
                    <label className="form-label">Logistics</label><br/>
                    <input type="checkbox" className="name"id="7"  name="check" value='Smart Cities' defaultChecked/>
                    <label className="form-label">Smart Cities</label><br/>
                    <input type="checkbox" className="name"id="8"  name="check" value='Inspection & Cleaning' defaultChecked/>
                    <label className="form-label">Inspection & Cleaning</label><br/>
                </div>
)
        }
    }
    const renderData2=()=>{

        if(value2===true){
            return(
                <div>
                    <input type="checkbox" className="name" id='9' name="check" value='Drone' defaultChecked />
                    <label className="form-label">Drone</label><br/>
                    <input type="checkbox" className="name" id="10" name="check" value='Survey Equipment' defaultChecked />
                    <label className="form-label">Survey Equipment</label><br/>
                    <input type="checkbox" className="name"id="11"  name="check" value='Agri Equipment' defaultChecked />
                    <label className="form-label">Agri Equipment</label><br/>
                    <input type="checkbox" className="name"id="12"  name="check" value='Photography Equipment' defaultChecked/>
                    <label className="form-label">Photography Equipment</label><br/>
                </div>
            )
        } 
    }
    const renderData3=()=>{

        if(value3===true){
            return(
                <div>
                <input type="checkbox" className="name" id='13' name="check" value='Drone Piot License' defaultChecked />
                <label className="form-label">Drone Piot License</label><br/>
                <input type="checkbox" className="name" id="14" name="check" value='Drone Instructor Pilot Liense' defaultChecked />
                <label className="form-label">Drone Instructor Pilot Liense</label><br/>
                <input type="checkbox" className="name"id="15"  name="check" value='Maintenance & Repair' defaultChecked />
                <label className="form-label">Maintenance & Repair</label><br/>
                <input type="checkbox" className="name"id="16"  name="check" value='Manufacturing' defaultChecked/>
                <label className="form-label">Manufacturing</label><br/>
                <input type="checkbox" className="name" id='17' name="check" value='Software' defaultChecked />
                <label className="form-label">Software</label><br/>
            </div>
            )

        }
    }
    const renderData4=()=>{

        if(value4===true){
            return(
                <div>
                     <input type="checkbox" className="name" id='18' name="check" value='Drones' defaultChecked />
                <label className="form-label">Drone</label><br/>
                <input type="checkbox" className="name" id='19' name="check" value='Accessories' defaultChecked />
                <label className="form-label">Accessories</label><br/>
                </div>
            )
        }
    }

   const render2= async()=>{
    try{
    const arrCt=[]
    if(value1===true){
        const cat= document.getElementById('Serv1').value
        arrCt.push(cat)
    }
    if(value2===true){
        const cat2= document.getElementById('Ret1').value
        arrCt.push(cat2)
    }
    if(value3===true){
        const cat3= document.getElementById('Acd1').value
        arrCt.push(cat3)
    }
    if(value4===true){
        const cat4= document.getElementById('Sto1').value
        arrCt.push(cat4)
    }
    document.getElementById('RegBtn').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
 
    const data = document.querySelectorAll('.name').length
    const arr=[]
for(let i=0; i<data; i++){
    let obj={}
    const valId = document.querySelectorAll('.name')[i].attributes.id.nodeValue
    if(document.getElementById(valId).checked===true){
        obj['id']=valId
        obj['type'] = document.getElementById(valId).value
        arr.push(obj)
    }
    else{
    }  
}
if(arr.length>0){
const ft ={
"_id":localStorage.getItem('vid'),
        "category":arrCt,
        "category_types":arr,
        endpoint:endpoints.addbasicDetails2
}

const data = await VPostData(ft)
if(data){
history('/vendor/main',{state:{data:'new'}})
}
}else{
    message.error('please select the services types your are offering')
}
    }catch(err){
        // console.log(err)
    }finally{
         document.getElementById('RegBtn').innerHTML='<span id="RegBtn">Submit</span>'
    }
   }
    return(
        <>
         <div className="billcard">
        <div className="billcard2">
            <h6 className="serheading" style={{color:'orange'}}>Register</h6>
            <h6 className="serheading" style={{fontSize:50,color:'orange',fontWeight:500}}>02 <span style={{color:'black',fontSize:35,fontWeight:500}}>Service Details</span></h6>
            <div className="checkoutcard">
    <div className="disclamerText">Just one Last Step..</div>
    <div style={{marginTop:20}}>
        <h6>Select the Type of Services you are offering</h6>
    <div className="row" style={{marginTop:20}}>
    <div className="col-md-3">
    <div className="cost-filter">
                         <input className="form-check-input" type="checkbox" name="check1" value='service' id="Serv1" onClick={handleChange}   />
                         <label  className="form-check-label"> Service </label>
                         <div style={{marginLeft:'10%',marginTop:'10px',color:'#fff'}}>
{renderData()}
</div>
                       </div>
                       </div>
                       <div className="col-md-3">
    <div className="cost-filter">
    <input className="form-check-input" type="checkbox" name="check1" value='rental' id="Ret1" onClick={handleChange}   />
                         <label  className="form-check-label"> Rental</label>
                         <div style={{marginLeft:'10%',marginTop:'10px',color:'#fff'}}>
{renderData2()}
</div>
   </div>
   </div>
   <div className="col-md-3">
    <div className="cost-filter">
    <input className="form-check-input" type="checkbox" name="check1" value='academy' id="Acd1" onClick={handleChange}   />
                         <label  className="form-check-label">Academy</label>
                         <div style={{marginLeft:'10%',marginTop:'10px',color:'#fff'}}>
{renderData3()}
</div>
   </div></div>

   <div className="col-md-3">
    <div className="cost-filter">
    <input className="form-check-input" type="checkbox" name="check1" value='store' id="Sto1" onClick={handleChange}/>
                         <label  className="form-check-label"> Store</label>
                         <div style={{marginLeft:'10%',marginTop:'10px',color:'#fff'}}>
{renderData4()}
</div>
   </div>
   </div>
   </div>
   <div style={{display:'flex',justifyContent:'center'}}>
   <button className="button" onClick={render2} id="RegBtn" style={{width:'50%',display:'none'}}>Submit</button>
   </div>
   </div>
    </div>
</div>
</div>
    
        </>
    )
}
export default VdetailsForm2