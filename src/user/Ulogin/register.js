import { GoogleOAuthProvider } from "@react-oauth/google";
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import './register.css'
import { message } from "antd";
import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";
import GoogleRegister from "./googleRegister";

const UserRegister=()=>{
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
            const name=document.getElementById('Name').value
            const password=document.getElementById('Password').value
            const confirm = document.getElementById('confirm').value
        const email = document.getElementById('Email').value
        if(password!==confirm){	
			message.info("Password doesn't match")
		}
		else{
            if(password.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/) ){
                if(name!=='' && email!==''){
                            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
                            const dt={
                                "Name":name,
                                "Email":email,
                                "Password":password,
                                endpoint:endpoints.userRegister1
                            }
                            const result = await PostData(dt)
                            if(result){
                                message.destroy()
                            message.success('Email was sent Successfully Please click on verify to complete your registration process',[5])

                            }

                    }else{
                        message.error('please fill the details and accept the terms')
                    }
                        }else{
                        message.error('password should containe special character, number, uppercase and lowercase letters and must be 8 characters length')
        
                        }             
        }
        }catch(err){
            // console.log(err)
        }
        finally{
            document.getElementById('loader').innerHTML='<span id="loader"></span>'
        }
    }
    return(
        <>
        <div  className="userLoginPage" >
            {/* <div style={{position:'relative'}}>
            <img src="/images/heading1.webp" alt="academy" className="acdbannerlogin"/>
            <div className="acadmain1">
                <h1 >Register</h1>
                <p className="pstyle">Innovative Aerial Solutions for Every Need</p>
            </div>
            </div> */}
            <div style={{padding:'7% 10%',background:'#fffdf0'}}>
            <div className=" row loginCard" >
                <div className="col-md-6" style={{padding:'30px',marginBottom:30}}>
                    <h2 className="heading2" style={{textAlign:'inherit'}}>New User Sign Up</h2>
                    <p className="lgnormalText" style={{fontSize:12}}>Join the Dronevala Community</p>
                    <div style={{marginTop:30}}>
                        <div className="loginicon">
                    <i class="bi bi-person-circle icc"></i>
                    <input type="text" className="inputbox" placeholder="Name" id="Name"/>
                    </div>
                    <div className="loginicon">
                    <i class="bi bi-envelope-fill icc"></i>
                 <input type="email" className="inputbox" placeholder="Email" id="Email"/>
                   </div>
                   <div className="loginicon">
                   <i class="bi bi-file-lock2-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Password" id="Password"/>
                    </div>
                    <div className="loginicon">
                    <i class="bi bi-shield-lock-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Confirm Password" id="confirm"/>
                    <i class="bi bi-eye-fill eyeicon" onClick={showPassword}></i>
    <i class="bi bi-eye-slash-fill eyeicon" onClick={showPassword} style={{display:'none'}}></i>
</div>
                    </div>
                    <button className="button3" style={{width:'90%'}} onClick={handleClick}><span id="loader"></span>SIGNUP</button>
                   
                    <div style={{marginTop:30,width:'90%',display:'flex',justifyContent:'center'}}>
                    <GoogleOAuthProvider  clientId="113050404249-g4hdd8sj43e2tb8efhnn9u2p6h8hijvt.apps.googleusercontent.com"><GoogleRegister/></GoogleOAuthProvider>
                </div>
                </div>
                <div className="col-md-6 centerText">
                    <h2 className="heading2">Already have account?</h2>
                    <h6 className="heading2" style={{fontSize:16,fontWeight:500}}>Access Your Account and Soar Higher</h6>
                <p className="lgnormalText" style={{textAlign:'center'}}>Login to manage your bookings, track your progress, and explore exclusive member benefits.</p>
               <Link to="/login" style={{fontSize:14,color:'#ffa500',fontWeight:600,marginBottom:30}}>Click here to Login</Link>
               <Link to="/vendors/register" style={{position:'absolute',right:20,bottom:20,fontWeight:500,fontSize:13,color:'#ffa500'}}> Vendor Register here </Link>
                </div>
</div>
            </div>
            </div>
        </>
    )
}
export default UserRegister