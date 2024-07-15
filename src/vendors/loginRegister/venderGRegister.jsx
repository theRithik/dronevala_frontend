import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Modal, message } from "antd";
import { VPostData } from "../../config/vendor/Apiconfig";
import { useNavigate } from "react-router-dom";
import endpoints from "../../config/config";
const VenderGoogleRegister=()=>{
  const [open,setOpen]=useState('')
  const [loading,setLoading]=useState('')
  const [detail,setDetail]=useState('')
  const history = useNavigate()
const success=(data)=>{
console.log(data)
setDetail(data)
setOpen(true)

}
const handleOK=async()=>{
  try{
  const name = document.getElementById('company')?.value
  if(detail){
  if(name!==''){
    const dt ={
      data:detail,
      instname:name,
      endpoint:endpoints.vendorGoggleReg
    }
    setLoading(true)
    message.loading('Processing',[1])
    const value = await VPostData(dt)
    if(value){
    setLoading(false)
setOpen(false)
localStorage.setItem('vtoken',value.token)
localStorage.setItem('vid',value.id)
localStorage.setItem('vemail',value.email)
  history('/vendors/detailsform',{state:{data:value.email,instName:value.Instname,name:value.name}})    
  
    message.success('Successfully Registered',[4])
    }
  }else{
message.error('Please Enter your company Name')
  }
  }else{
    message.error('An Error Occured please try again')
  }
}catch(err){
  console.log(err)
}finally{
  setLoading(false)
  setOpen(false)
}
}
    return(
        <>
        <Modal title="Add Your Company Name" open={open} onOk={handleOK} confirmLoading={loading}>
          <div style={{paddingTop:'5%',paddingBottom:'5%'}}>
            <label className="form-label">Company Name</label>
          <input className="form-control profileinput" type="text" name="company" id="company"/>
       </div>
        </Modal>
        <GoogleLogin
  onSuccess={success}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>

        </>
    )
}
export default VenderGoogleRegister