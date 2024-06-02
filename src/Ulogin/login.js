import { GoogleOAuthProvider } from "@react-oauth/google";
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Googlelogin from "./googleLogin";

const UserLogin=()=>{
    useEffect(()=>{
        document.querySelector('footer').style.marginTop="0px"
    },[])

    const showPassword=()=>{
        const x = document.getElementById('password')
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
                <h1 >Login</h1>
                <p className="pstyle">Innovative Aerial Solutions for Every Need</p>
            </div>
            </div>
            <div style={{padding:'10%',background:'aliceblue'}}>
            <div className=" row loginCard" >
                <div className="col-md-6" style={{padding:'30px',marginBottom:30}}>
                    <h2 className="heading2" style={{textAlign:'inherit'}}>Login</h2>
                    <p className="normalText">Access Your Account and Soar Higher</p>
                    <div style={{marginTop:30}}>

                    <div className="loginicon">
                    <i class="bi bi-envelope-fill icc"></i>
                 <input type="email" className="inputbox" placeholder="Email" id="email"/>
                   </div>
                   <div className="loginicon">
                   <i class="bi bi-file-lock2-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Password" id="password"/>
                    <i class="bi bi-eye-fill eyeicon" onClick={showPassword}></i>
    <i class="bi bi-eye-slash-fill eyeicon" onClick={showPassword} style={{display:'none'}}></i>
                    </div>
                    </div>
                    <button className="button" style={{width:'90%'}}>LOGIN</button>
                   
                    <div style={{marginTop:30,width:'90%',display:'flex',justifyContent:'center'}}>
                    <GoogleOAuthProvider  clientId="113050404249-g4hdd8sj43e2tb8efhnn9u2p6h8hijvt.apps.googleusercontent.com"><Googlelogin/></GoogleOAuthProvider>
                </div>
                </div>
                <div className="col-md-6 centerText">
                    <h2 className="heading2">New user?</h2>
                    <h6 className="heading2" style={{fontSize:16,fontWeight:500}}>Sign Up and Start Your Drone Journey</h6>
                <p className="normalText" style={{textAlign:'center'}}>Create an account to access our comprehensive drone services,enroll in training programs, rent equipment, and shop for high-quality drones and accessories</p>
               <Link to="/register" style={{fontSize:14,color:'rgb(34, 153, 151)',fontWeight:600,marginBottom:30}}>Click here to Signup</Link>
               <Link to="/admin/login" style={{position:'absolute',right:20,bottom:20,fontWeight:500,fontSize:13,color:'rgb(34, 153, 151)'}}> Vender Login here </Link>
                </div>
</div>
            </div>
            </div>
        </>
    )
}
export default UserLogin