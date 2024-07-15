import React from "react";
import './404.css'
import { useNavigate } from "react-router-dom";
const NotFound =()=>{
    const history = useNavigate()
    return(
        <>
       <div className="notdiv1" >
<div className="row">
    <div className="col-md-6">
<div>
    <h5 style={{fontWeight:800,color:'#fff'}}>DRONEVALA.COM</h5>
    <div className="notcontentdiv">
        <h1 className="notFoundhead">Hide & Seek Time!</h1>
        <h5 style={{color:'#EDF0F2',marginTop:30,fontWeight:400}}>And you're it!</h5>
        <h5 style={{color:'#EDF0F2',fontWeight:400}}>(Sorry, we can't find the page, too.)</h5>
    </div>
</div>
    </div>
    <div className="col-md-6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <img src="/images/404.webp" alt="404" style={{width:'80%',marginTop:'15%'}}/>
        <button className="btn btn-outline-light" onClick={()=>history('/')} style={{width:'fit-content',padding:'10px 20px',marginTop:20,borderRadius:30}}>Go Back Home</button>
    </div>
</div>
       </div>
        </>
    )
}
export default NotFound