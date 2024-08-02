import React from "react";
import { GoogleLogin } from "@react-oauth/google";

import { PostData } from "../../config/vendor/Apiconfig";
import { message } from "antd";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import endpoints from "../../config/config";
const Googlelogin=()=>{
const history = useNavigate()
const location = useLocation()
const context = useOutletContext()
  const handleClick=async(data)=>{
    try{
      message.loading('Processing')
      const dt ={
        data:data,
        endpoint:endpoints.usergoogleLogin
      }
      const result = await PostData(dt)
    
      if(result){
        message.destroy()
        context.setNote(false)
        localStorage.setItem('token',result.token)
        localStorage.setItem('_id',result.uniq)
        localStorage.setItem('name',result.name)
        if(location.state!==null){
            history(location.state.form)
          }
          else{
            history('/')
          }
      }

    }catch(err){
      // console.log(err)
    }
  }
    return(
        <>
        <GoogleLogin
  onSuccess={handleClick}
  onError={() => {
    // console.log('Login Failed');
  }}
  useOneTap
/>

        </>
    )
}
export default Googlelogin