import './detailsform.css'
import React,{useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { Tooltip, message } from "antd";

const VdetailsForm =()=>{

  const history = useNavigate()
  const [name,setName]=useState('')
  const[instname,setInstname]=useState('')
  const [value,setValue]=useState(false)
  const location =useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
    setInstname(location.state.instName)
    setName(location.state.name)
    // eslint-disable-next-line
  },[])
  
  const brancheClick=()=>{
    const value = document.getElementById('branch').value
    if(value<=5){
    let doc = ''
    for(let i = 1; i<=value;i++){
      doc +='<label >Address'+i+'</label><br/><input type="text" id='+i+' style="padding: 10px 20px;border: 1px solid #bfbfbf;border-radius: 20px;width: 100%;" className="inputAdd"/><br/>'
    }
    document.getElementById('inputs').innerHTML=doc
  }
  else{
    alert('you can add only upto 5 branches')
  
  }
  }
  
  const handleClick=async(e)=>{
    try{
    e.preventDefault()
    const fullname = document.getElementById('first').value
  const email = document.getElementById('email').value
  const altEmail = document.getElementById('altEmail').value
  const number = document.getElementById('number').value
  const address = document.getElementById('address').value
  const no = document.getElementById('branch').value
    if(fullname!=='' && email!=='' && altEmail!=='' && number!=='' && address!=='' && no!=='' ){
    document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
  setValue(true)
  message.loading('Processing',[20])
  const arr =[]
  for(let i=1;i<=no;i++){
    let obj={}
    obj['address']=document.getElementById(i).value
    arr.push(obj)
  }
const dt ={
    "_id":localStorage.getItem('vid'),
    "fulllname":fullname,
    "Institute_Name":instname,
    "Name":name,
    "Institute_Email":email,
    "alternative_Email":altEmail,
    "Phone_number":number,
    "Address":address,
    endpoint:endpoints.addbasicDetails
}

const result  = await VPostData(dt)
if(result){
// console.log(result)
if(arr.length>0 && result){
    const tg ={
        "id":localStorage.getItem('vid'),
        "branch_address":arr,
        endpoint:endpoints.addBranch
    }
    const result2 = await VPostData(tg)
    message.destroy()
    message.success('Successfull Added')
        document.getElementById('loader').innerHTML='<span id="loader"></span>'
        history('/vendors/servicedetailsform')
       
        setValue(false)
}else{
  message.destroy()
  history('/vendors/servicedetailsform')
  setValue(false)
}
}
    }
    else{
      alert('Please Fill all the details then click on Ok')
    
    }
  }catch(err){
    document.getElementById('loader').innerHTML='<span id="loader"></span>'
    message.error(err,[3])
  }finally{
    document.getElementById('loader').innerHTML='<span id="loader"></span>'
    setValue(false)

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
        <div className="billcard">
        <div className="billcard2">
            <h6 className="serheading" style={{color:'orange'}}>Register</h6>
            <h6 className="serheading" style={{fontSize:50,color:'orange',fontWeight:500}}>01 <span style={{color:'black',fontSize:35,fontWeight:500}}>Basic Details</span></h6>
            <div className="checkoutcard">
    <div className="disclamerText">Say some more about you</div>
    <div style={{marginTop:20}}>
      <form  id="form">
      <div style={{position:'relative'}}>
        <label className="profilelabeleff"> Full Name</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" id="first" required defaultValue={name} name="Name" placeholder="Name" className="form-control profileinput"/>
          <i class="bi bi-person-circle Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Email</label>
         
          <input  style={{marginBottom:'10px'}}  onChange={inputchange}  defaultValue={localStorage.getItem('vemail')}  type="email" id="email" required name="Institute_Email" placeholder="Email" className="form-control profileinput"/>
          <i class="bi bi-envelope-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Alternative Email</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange}  type="email" name="Alternative_email" id="altEmail" required placeholder="Alternative Email" className="form-control profileinput"/>
          <i class="bi bi-envelope-at-fill Instprofileinputicon"></i>
        </div>

        <div style={{position:'relative',paddingBottom:10}}>
        <label className="profilelabeleff">Contact number</label>
          <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="number" required  name="contact" id="number" placeholder="Contact number" className="form-control profileinput"/>
          <i class="bi bi-telephone-inbound-fill Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">Address</label>
    <textarea type="text"  onChange={inputchange} name="address" id="address"  className="form-control profileinput" placeholder="Address"></textarea>
    <i class="bi bi-map Instprofileinputicon"></i>
        </div>
     <div  className="row" style={{marginTop:20}}>
      <div className='col-md-9'>
      <div style={{position:'relative'}}>
        <label className="profilelabeleff">Number of Institute Branches</label>
        <input  style={{marginBottom:'10px'}}  onChange={inputchange} type="text" required  name="branch" id="branch" placeholder="Number of Institute Branches" className="form-control profileinput"/>
        <i class="bi bi-5-circle-fill Instprofileinputicon"></i>
        </div>
  </div>

  <div className="col-md-3">
    <Tooltip title="if you had only one address then add 0 and click ok and then submit" style={{fontSize:12}}>
    <span style={{marginTop:20,padding:'7px 20px',borderRadius:20}} className="btn btn-warning" onClick={brancheClick} >ok</span>
    </Tooltip>
    </div>
    
  </div>
  <div >
  <span id="inputs"></span></div>
  
  <button type="submit" onClick={handleClick} disabled={value===true} style={{cursor:'pointer'}} className="button3"><span id="loader"></span>Submit</button>
  </form>
    </div>
  </div>
  </div>
  
  </div>
        </>
    )

}
export default VdetailsForm