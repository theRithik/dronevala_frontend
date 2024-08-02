import React, { useEffect } from "react";
import endpoints from "../../config/config";
import { useLocation, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { PostData } from "../../config/vendor/Apiconfig";
const VerifyUserEmail=()=>{
    const {token} = useParams()
    const history=useNavigate()
    const location = useLocation()
    const context = useOutletContext()
    useEffect(()=>{
        // console.log('12')
       const fun =async()=>{

        try{
        if(token!==''){
            const dt ={
                endpoint:endpoints.userVerfiyEmail,
                token:token
            }
            const value = await PostData(dt)
            // console.log(value)
            if(value){
                 document.getElementById('loder').style.display='none'
                  document.getElementById('tokenexper').style.display='none'
                document.getElementById('succ').style.display='block'
                context.setNote(false)
                localStorage.setItem('token',value.token)
                localStorage.setItem('_id',value.id)
                localStorage.setItem('name',value.name)
                if(location.state!==null){
                    history(location.state.form)
                  }
                  else{
                    history('/')
                  }         
            }else{
                // console.log('err')
                    document.getElementById('loder').style.display='none'
          document.getElementById('tokenexper').style.display='block'
                document.getElementById('succ').style.display='false'
            }
        }
    }catch(err){
        // console.log(err)
         document.getElementById('loder').style.display='none'
          document.getElementById('tokenexper').style.display='block'
                document.getElementById('succ').style.display='none'
    }
    }
    fun()
    
               // eslint-disable-next-line
      },[])
    return(
        <>
         <div style={{height:'100vh',padding:'10%'}}>
        <div style={{display:'flex',justifyContent:'center'}} id="loder">
        <img src='/images/loading.gif' style={{width:'20%'}}  alt='loader'/>
        </div>
        <div id="succ" style={{display:'none'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
        <i class="bi bi-emoji-smile" style={{fontSize:200,color:'#0d6efd'}}></i>
<h2 style={{display:'flex',justifyContent:'center',fontSize:20}}> Great, Successfully Registered</h2>
</div>
</div>
<div id="tokenexper" style={{display:'none'}}>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
<i class="bi bi-exclamation-circle-fill" style={{fontSize:200,color:'#ffc107'}}></i>
</div>
</div>
</div>
        </>
    )
}
export default VerifyUserEmail