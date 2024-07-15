import React from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import { APostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";


const Adminlogin =()=>{
const history=useNavigate()


    const handleClick=async()=>{
        try{
            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
          
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

       const dt ={
                email:email,
                password:password,
                endpoint:endpoints.AdLogin
            }
            const data = await APostData(dt)
            if(data){
        console.log(data)
                history('/admin/main')
                localStorage.setItem('AdminT',data.token)
            }
        }catch(err){
            console.log(err)
        }finally{
            document.getElementById('loader').innerHTML='<span id="loader"></span>'  
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
            <div  className="billcard">
            <div className="billcard2">
            <h6 className="serheading" style={{color:'orange'}}>Login</h6>
            <h6 className="serheading" style={{fontSize:50,color:'#e2e2e2',fontWeight:500}}><i class="bi bi-door-open-fill"></i> <span style={{color:'black',fontSize:35,fontWeight:500}}>Admin Login</span></h6>
            <div className="checkoutcard" style={{marginTop:30}}>
            <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Email</label>
    <input type="email"  onChange={inputchange} name="email" className="form-control profileinput" placeholder="Email" id="email"/>
    <i class="bi bi-envelope-at Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Password</label>
    <input type="password"  onChange={inputchange} name="password" className="form-control profileinput" placeholder="Password" id="password"/>
    <i class="bi bi-shield-lock Instprofileinputicon"></i>
        </div>
        
         <button className="button" onClick={handleClick}><span id="loader"></span> Login</button>
              
                 
                 </div>
                 </div>
            </div>
        
               
    


        </>
    )
}
export default Adminlogin