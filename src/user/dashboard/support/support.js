import React from "react";
import './support.css'


const UserSupport =()=>{

    return(
        <>
        <div className="homesection">
            <div style={{padding:'5%'}}>
                <div className="supportCard">
<div className="row">
    <div className="col-md-7">
        <img src="/images/support.png" style={{width:'90%',marginLeft:'5%'}} alt="support"/>
    </div>
    <div className="col-md-5">
<div style={{marginTop:'45%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h1 >Support</h1>
    <div style={{display:'flex',gap:20,alignItems:'center',marginTop:'5%'}}>
    <i class="bi bi-envelope-fill"></i>
    <h6 style={{margin:0}}>info@dronevala.com</h6>
    </div>
    <div style={{display:'flex',gap:20,justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
    <i class="bi bi-telephone-fill"></i>
    <h6 style={{margin:0}}> +91 7989549956</h6>
    </div>
    <div style={{display:'flex',gap:20,justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
    <i class="bi bi-telephone-fill"></i>
    <h6 style={{margin:0}}> +91 9966552332</h6>
    </div>
</div>
    </div>
</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserSupport