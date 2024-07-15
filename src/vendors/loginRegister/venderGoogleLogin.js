import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import endpoints from "../../config/config";
import { VPostData } from "../../config/vendor/Apiconfig";
import { useNavigate } from "react-router-dom";
const VendorGooglelogin=()=>{
const history= useNavigate()
  const handleclick=async(data)=>{
    try{
if(data){
  const dt={
    credential:data.credential,
    endpoint:endpoints.vendorGoogleLogin
  }
  const result = await VPostData(dt)
  console.log(result)
  if(result){
    localStorage.setItem('vtoken',result.token)
    localStorage.setItem('vid',result.vid)
    history('/vendor/main')
  }
}
    }catch(err){
      console.log(err)
 
    }finally{
      
    }
  }
    return(
        <>
        <GoogleLogin
  onSuccess={handleclick}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>

        </>
    )
}
export default VendorGooglelogin