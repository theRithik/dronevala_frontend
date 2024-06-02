import { GoogleOAuthProvider } from "@react-oauth/google";
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Googlelogin from "./googleLogin";
import './register.css'

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
    return(
        <>
        <div  className="userLoginPage" >
            <div style={{position:'relative'}}>
            <img src="/images/back3.webp" alt="academy" className="acdbanner"/>
            <div className="acadmain1">
                <h1 >Register</h1>
                <p className="pstyle">Innovative Aerial Solutions for Every Need</p>
            </div>
            </div>
            <div style={{padding:'10%',background:'aliceblue'}}>
            <div className=" row loginCard" >
                <div className="col-md-6" style={{padding:'30px',marginBottom:30}}>
                    <h2 className="heading2" style={{textAlign:'inherit'}}>New User Sign Up</h2>
                    <p className="normalText">Join the Dronevala Community</p>
                    <div style={{marginTop:30}}>
                        <div className="loginicon">
                    <i class="bi bi-person-circle icc"></i>
                    <input type="text" className="inputbox" placeholder="Name" id="name"/>
                    </div>
                    <div className="loginicon">
                    <i class="bi bi-envelope-fill icc"></i>
                 <input type="email" className="inputbox" placeholder="Email" id="email"/>
                   </div>
                   <div className="loginicon">
                   <i class="bi bi-file-lock2-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Password" id="password"/>
                    </div>
                    <div className="loginicon">
                    <i class="bi bi-shield-lock-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Confirm Password" id="confirm"/>
                    <i class="bi bi-eye-fill eyeicon" onClick={showPassword}></i>
    <i class="bi bi-eye-slash-fill eyeicon" onClick={showPassword} style={{display:'none'}}></i>
</div>
                    </div>
                    <button className="button3" style={{width:'90%'}}>SIGNUP</button>
                   
                    <div style={{marginTop:30,width:'90%',display:'flex',justifyContent:'center'}}>
                    <GoogleOAuthProvider  clientId="113050404249-g4hdd8sj43e2tb8efhnn9u2p6h8hijvt.apps.googleusercontent.com"><Googlelogin/></GoogleOAuthProvider>
                </div>
                </div>
                <div className="col-md-6 centerText">
                    <h2 className="heading2">Already have account?</h2>
                    <h6 className="heading2" style={{fontSize:16,fontWeight:500}}>Access Your Account and Soar Higher</h6>
                <p className="normalText" style={{textAlign:'center'}}>Login to manage your bookings, track your progress, and explore exclusive member benefits.</p>
               <Link to="/login" style={{fontSize:14,color:'rgb(34, 153, 151)',fontWeight:600,marginBottom:30}}>Click here to Login</Link>
               <Link to="/admin/login" style={{position:'absolute',right:20,bottom:20,fontWeight:500,fontSize:13,color:'rgb(34, 153, 151)'}}> Vender Register here </Link>
                </div>
</div>
            </div>
            </div>
        </>
    )
}
export default UserRegister