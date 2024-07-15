import React from "react";
import './coming.css'
import { useNavigate } from "react-router-dom";


const Rentalcoming =()=>{
 const history  = useNavigate()
    return(
        <>
       <div className="notdiv1" >
<div className="row">
    <div className="col-md-6">
<div>
    <i className="bi bi-arrow-left" style={{color:'#fff',fontSize:20,cursor:'pointer'}} onClick={()=>history(-1)}></i>
    <h5 style={{fontWeight:800,color:'#fff'}}>DRONEVALA.COM</h5>
    <div className="notcontentdiv">
        <h1 className="notFoundhead">Affordable & Flexible</h1>
        <p style={{fontSize:10,color:'grey',fontWeight:600,width:'80%',lineHeight:'200%'}}>Unlock the skies with our hassle-free drone rental service, perfect for both professionals and enthusiasts alike. We are Coming Soon</p>
        <h5 style={{color:'#EDF0F2',marginTop:40,fontWeight:500,padding:'15px 20px',border:'.5px solid #fff',width:'fit-content',borderRadius:5,fontSize:13}}>Drone Rental Services  <i className="bi bi-arrow-right" style={{marginLeft:20,}}></i>  </h5>
       
    </div>
</div>
    </div>
    <div className="col-md-6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <img src="/images/coming1.webp" alt="404" style={{width:'70%'}}/>
      </div>
</div>
       </div>
        </>
    )
}
export default Rentalcoming