import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import endpoints from "../../config/config";
import { VPostData } from "../../config/vendor/Apiconfig";

const VEmailVerify=React.memo(()=>{
  const {token} = useParams()
  const history=useNavigate()

  useEffect(()=>{
    // console.log('12')
   const fun =async()=>{
    try{
    if(token!==''){
        const dt ={
            endpoint:endpoints.vendorEmailVerify,
            token:token
        }
        const value = await VPostData(dt)
        // console.log(value)
        if(value){
             document.getElementById('loder').style.display='none'
              document.getElementById('tokenexper').style.display='none'
            document.getElementById('succ').style.display='block'
            localStorage.setItem('vtoken',value.token)
            localStorage.setItem('vid',value.id)
            localStorage.setItem('vemail',value.email)
              history('/vendors/detailsform',{state:{data:value.email,instName:value.Instname,name:value.name}})    
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
})
export default VEmailVerify