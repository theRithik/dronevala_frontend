import React from "react";
import './storecoming.css'
import { useNavigate } from "react-router-dom";


const Storecoming =()=>{
 const history  = useNavigate()
    return(
        <>
       <div className="notdiv1" >
    <i className="bi bi-arrow-left" style={{color:'#fff',fontSize:20,cursor:'pointer'}} onClick={()=>history(-1)}></i>
    <h5 style={{fontWeight:800,color:'#fff',fontSize:20}}>DRONEVALA.COM</h5>
   <div className="stdivsoon" >
<h5 style={{color:'#EDF0F2',fontSize:40,fontWeight:700,marginBottom:20}}>COMING SOON</h5>
<p style={{fontSize:10,color:'grey',fontWeight:600,width:'80%',textAlign:'center',lineHeight:'200%'}}>Our drone store is a vibrant hub of cutting-edge technology, offering a diverse selection of drones and accessories for every need. From sleek, beginner-friendly models to advanced professional drones, the store caters to enthusiasts and experts alike. </p>
   </div>
        <img src="/images/storecoming.png" alt="404" className="stsoonimg" style={{width:'90%',marginLeft:'5%'}}/>
      </div>

        </>
    )
}
export default Storecoming