import { GoogleOAuthProvider } from "@react-oauth/google";
import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './vendor.css'
import VendorGoogleRegister from "./venderGRegister";
import { VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";

const VendorRegister=()=>{
    const [matchPass, setmatchPass]=useState('')
    useEffect(()=>{
        document.querySelector('footer').style.marginTop="0px"
    },[])

    const showPassword=()=>{
        const x = document.getElementById('confirm')
        if(x.type ==='password'){
            x.type='text'
            document.querySelector('.bi-eye-fill').style.display="none"
            document.querySelector('.bi-eye-slash-fill').style.display="block"
        }
        else{
            x.type='password'
            document.querySelector('.bi-eye-fill').style.display="block"
            document.querySelector('.bi-eye-slash-fill').style.display="none"
        }
    }

    const handleClick=async()=>{
        try{
		const name = document.getElementById('userName').value
		const InstName=document.getElementById('instName').value
		const email=document.getElementById('instEmail').value
		const password=document.getElementById('Password').value
		const confirm = document.getElementById('confirm').value
		if(password!==confirm){
			setmatchPass("Password doesn't match")
			document.getElementById('nameVaild').style.color='red'
		}
		else{
		if(password.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/) && name!=='' && InstName!=='' && email!==''){
			document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
 
            const dt ={
                "name":name,
					"InstName":InstName,
					"Email":email,
					"Password":password,
                    endpoint:endpoints.vendorRegister
            }
					const result = await VPostData(dt)
                    if(result){
                        alert('An Email was sent to you for the verification')
                    }	
		}
		else{
	       alert('password should containe special character, number, uppercase and lowercase letters and all the filed are necessary')
		}
	}
}catch(err){
    alert(err)
   	
}finally{
    document.getElementById('loader').innerHTML='<span id="loader"></span>'
	
}
			}
    return(
        <>
        <div  className="userLoginPage" >
            <div style={{position:'relative'}}>
            <img src="/images/heading1.webp" alt="academy" className="venbannerlogin"/>
            <div className="venmain1">
                <h1 > Vendor Register</h1>
                <p className="pstyle">Innovative Aerial Solutions for Every Need</p>
            </div>
            </div>
            <div style={{padding:'10%',background:'aliceblue'}}>
            <div className=" row loginCard" >
                <div className="col-md-6" style={{padding:'30px',marginBottom:30}}>
                    <h2 className="heading2" style={{textAlign:'inherit'}}>New Vendor Sign Up</h2>
                    <p className="normalText">Join the Dronevala Community</p>
                    <div style={{marginTop:30}}>
                    <p style={{color:'red',fontSize:'10px'}} id='nameVaild' >{matchPass}</p>
                        <div className="serloginicon">
                    <i class="bi bi-person-circle icc"></i>
                    <input type="text" className="inputbox" id='userName' placeholder="Name"/>
                    </div>
                    <div className="serloginicon">
                    <i class="bi bi-envelope-fill icc"></i>
                 <input type="text" className="inputbox" placeholder="Company Name" id='instName'/>
                   </div>
                    <div className="serloginicon">
                    <i class="bi bi-envelope-fill icc"></i>
                 <input type="email" className="inputbox" placeholder="Email"  id='instEmail' />
                   </div>
                   <div className="serloginicon">
                   <i class="bi bi-file-lock2-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Password" id='Password' />
                    </div>
                    <div className="serloginicon">
                    <i class="bi bi-shield-lock-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Confirm Password" id='confirm' />
                    <i class="bi bi-eye-fill eyeicon" onClick={showPassword}></i>
    <i class="bi bi-eye-slash-fill eyeicon" onClick={showPassword} style={{display:'none'}}></i>
</div>
                    </div>
                    <button className="button3" style={{width:'90%'}} onClick={handleClick}><span id="loader"></span>SIGNUP</button>
                   
                    <div style={{marginTop:30,width:'90%',display:'flex',justifyContent:'center'}}>
                    <GoogleOAuthProvider  clientId="113050404249-g4hdd8sj43e2tb8efhnn9u2p6h8hijvt.apps.googleusercontent.com">
                        <VendorGoogleRegister />
                        </GoogleOAuthProvider>
                </div>
                </div>
                <div className="col-md-6 centerText">
                    <h2 className="heading2">Already have account?</h2>
                    <h6 className="heading2" style={{fontSize:16,fontWeight:500}}>Access Your Account and Soar Higher</h6>
                <p className="normalText" style={{textAlign:'center'}}>Login to manage your bookings, track your progress, and explore exclusive member benefits.</p>
               <Link to="/vendors/login" style={{fontSize:14,color:'#ffa500',fontWeight:600,marginBottom:30}}>Click here to Login</Link>
               <Link to="/login" style={{position:'absolute',right:20,bottom:20,fontWeight:500,fontSize:13,color:'#ffa500'}}> User Register here </Link>
                </div>
</div>
            </div>
            </div>
        </>
    )
}
export default VendorRegister