import React,{useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import endpoints from '../../config/config';

import { VPostData } from '../../config/vendor/Apiconfig';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './vendor.css'
import VendorGooglelogin from './venderGoogleLogin';
import { message } from 'antd';


// const check = "http://localhost:5000/admin/checktoken"
const VendorLogin =()=>{
  const history = useNavigate()

    useEffect(()=>{
      window.scrollTo(0,0)
        // eslint-disable-next-line
    },[])
   


    const HandleClick2=async()=>{
        try{
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      if(email!=='' && password!==''){
        document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
 message.loading('Processing',[1])
        const dt ={
            endpoint:endpoints.vendorLogin,
            Email:email,
            password:password
        }
        const data = await VPostData(dt)
        console.log(data)
        if(data){
          message.destroy()
        localStorage.setItem('vtoken',data.data)
        localStorage.setItem('vid',data.id)
        localStorage.setItem('vname',data.name)
        history('/vendor/main')
        document.getElementById('loader').innerHTML='<span id="loader"></span>'
        }
      }
      else{
       message.error('please fill all the fields')
      }
    }catch(err){
       document.getElementById('loader').innerHTML='<span id="loader"></span>'
       message.destroy()
        alert(err)
    }finally{
      document.getElementById('loader').innerHTML='<span id="loader"></span>' 
    }
    }
			const showPassword=()=>{
				const x = document.getElementById('password')
				if(x.type ==='password'){
					x.type='text'
					
				}
				else{
					x.type='password'
					
				}
			}

        //     const forgot=()=>{
        //       const em = document.getElementById('email').value
        //       if(em !==''){
        //       document.getElementById('loaderReg').style.display='block'
        //       fetch(email,{
        //         method:'POST',
        //         headers:{
        //           "accept":"application/json",
        //           "Content-Type":"application/json"
        //          },
        //          body:JSON.stringify({
        //           email:em
        //          })
        //       }).then((res)=>res.json())
        //       .then((data)=>{
        //         if(data.auth===true){
        //           history('/admin/forgotPassword',{state:{email:em}})
        //           document.getElementById('loaderReg').style.display='block'
        //         }
        //         else{
        //           const toastLiveExample = document.getElementById('liveToast2')
        //           toastLiveExample.classList.add('show')
        //       setTimeout(()=>{
        //         toastLiveExample.classList.remove('show')
        //       },4000)
        //         setMsg(data.token)
        //         document.getElementById('loaderReg').style.display='none'
        //         }
                
        //       })
        //     }
        //     else{
        //       const toastLiveExample = document.getElementById('liveToast2')
        //       toastLiveExample.classList.add('show')
        //       setTimeout(()=>{
        //         toastLiveExample.classList.remove('show')
        //       },4000)
             
        //         setMsg('Please enter your Email first and then click on forgot password ')
        //     }
        //   }

        

        //   const imageRender=(data)=>{
        //     if(data){
        //       const buffer = Buffer.from(data.data);
        //     return(
        //       <div className='col-md-6'>
        //       <img src={`data:image/png;base64,${buffer}`} style={{width:'100%',borderRadius:30}} alt='ad'/>
        //              </div>
        //     )
        //     }
        //     else{
        //       return(
        //         <div className='col-md-6'>
        //         <div id="loadingEffect">
        //             <img src="/background/login.gif" style={{width:'100px',marginLeft:'30%',marginTop:'30%'}} alt="loader"/>
        //            </div>
        //            </div>
        //       )
        //     }
        //   }
        
    return(
        <>
 <div  className="userLoginPage" >
            <div style={{position:'relative'}}>
            <img src="/images/heading1.webp" alt="academy" className="venbannerlogin"/>
            <div className="venmain1">
                <h1 > Vendor Login</h1>
                <p className="pstyle">Innovative Aerial Solutions for Every Need</p>
            </div>
            </div>
            <div style={{padding:'10%',background:'aliceblue'}}>
            <div className=" row loginCard" >
                <div className="col-md-6 stcol">
                    <h2 className="heading2" style={{textAlign:'inherit'}}>Login</h2>
                    <p className="lgnormalText" style={{fontSize:12}}>Access Your Account and Soar Higher</p>
                    <div style={{marginTop:30}}>
                    <div className="serloginicon">
                    <i class="bi bi-envelope-fill icc"></i>
                 <input type="email" className="inputbox" placeholder="Email" id="email"/>
                   </div>
                   <div className="serloginicon">
                   <i class="bi bi-file-lock2-fill icc"></i>
                    <input type="Password" className="inputbox" placeholder="Password" id="password"/>
                    <i class="bi bi-eye-fill eyeicon" onClick={showPassword}></i>
    <i class="bi bi-eye-slash-fill eyeicon" onClick={showPassword} style={{display:'none'}}></i>
                    </div>
                    </div>
                    <button className="button" style={{width:'90%'}} onClick={HandleClick2}><span id='loader'></span>LOGIN</button>
                   
                    <div style={{marginTop:30,width:'90%',display:'flex',justifyContent:'center'}}>
                    <GoogleOAuthProvider  clientId="113050404249-g4hdd8sj43e2tb8efhnn9u2p6h8hijvt.apps.googleusercontent.com"><VendorGooglelogin/></GoogleOAuthProvider>
                </div>
                </div>
                <div className="col-md-6 centerText">
                    <h2 className="heading2">New Vendors?</h2>
                    <h6 className="heading2" style={{fontSize:16,fontWeight:500}}>Sign Up and Start Your Drone sales stories</h6>
                <p className="lgnormalText" style={{textAlign:'center'}}>Create an account to provide your comprehensive drone services, training programs, rent equipment, to show your high-quality drones and accessories</p>
               <Link to="/vendors/register" style={{fontSize:14,color:'orange',fontWeight:600,marginBottom:30}}>Click here to Vendor Signup</Link>
               <Link to="/login" style={{position:'absolute',right:20,bottom:20,fontWeight:500,fontSize:13,color:'orange'}}>User Login here </Link>
                </div>
</div>
            </div>
            </div>
        </>
    )
}
export default VendorLogin