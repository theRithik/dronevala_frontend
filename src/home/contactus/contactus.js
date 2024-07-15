import React from "react";
import './contactus.css'
import { message } from "antd";
import { PostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
const Contactus=()=>{

    const inputchange=(e)=>{
        const vl = e.target.value
        if(vl.length>0){
            e.target.previousSibling.style.display="block"
        }
        else{
            e.target.previousSibling.style.display="none"
        }
   
}

const handleClick=async()=>{
try{
const nm = document.getElementById('name').value
const em = document.getElementById('email').value
const ph = document.getElementById('phone').value
const ms = document.getElementById('message').value
if(nm!=='' && em !=='' && ph !=='' && ms !==''){
    message.loading('Processing',[8])
    const dt ={
        name:nm,
        email:em,
        phone:ph,
        message:ms,
        endpoint:endpoints.contactus
    }
const result = await PostData(dt)
if(result){
    message.destroy()
    message.success('Successfully Sent')
}
}else{
    message.info('Please fill all the details')
}
}catch(err){
    console.log(err)
}
}
    return(
        <>
        <div className="">
            <div className="row">
                <div className="col-md-6" style={{padding:'10%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
               
<div className="" style={{textAlign:'center'}}>

<h3 style={{fontSize:50,fontWeight:600,marginBottom:20}}>Contact Us</h3>
<h6 style={{fontSize:12,color:'grey',textAlign:'center',lineHeight:'200%'}}>For any query suggestions you can write us to our email, for promotions and business related you can use our contact us form</h6>
<h6 style={{marginTop:20,fontWeight:600,fontSize:15,opacity:.8,}}>info@dronevala.com</h6>
<h6 style={{marginTop:10,fontWeight:600,fontSize:15,opacity:.8,}}>+91 7989549956</h6>
</div>
<img src="/images/contact.svg" style={{width:'40%',float:'right'}} alt="drone"/>
                </div>
                <div className="col-md-6"style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'5%'}}>
<div style={{padding:'10%',borderRadius:30,width:'100%',background:'#ffa900',backgroundImage:'url(/images/contact.svg)',backgroundRepeat:'no-repeat'}}>
<div style={{position:'relative'}}>
        <label className="profilelabeleff" style={{background:'#ffa900'}}>Name</label>
         
          <input  style={{marginBottom:'10px',borderColor:'#ffffff4a',fontWeight:600,backdropFilter:'blur(1px)'}} onChange={inputchange} type="text" id="name" required name="name" placeholder="Name" className="form-control profileinput"/>
          <i class="bi bi-person-circle Instprofileinputicon"style={{color:'#fffffff5'}} ></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff" style={{background:'#ffa900'}}>Email</label>
         
          <input  style={{marginBottom:'10px',borderColor:'#ffffff4a',fontWeight:600,backdropFilter:'blur(1px)'}}  onChange={inputchange}  type="email" id="email" required name="email" placeholder="Email" className="form-control profileinput"/>
          <i class="bi bi-envelope-fill Instprofileinputicon"style={{color:'#fffffff5'}} ></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff" style={{background:'#ffa900'}}>Phone Number</label>
          <input  style={{marginBottom:'10px',borderColor:'#ffffff4a',fontWeight:600,backdropFilter:'blur(1px)'}}  onChange={inputchange} type="number" id="phone" required name="phone" placeholder="Phone Number" className="form-control profileinput"/>
          <i class="bi bi-telephone-inbound-fill Instprofileinputicon" style={{color:'#fffffff5'}}></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff" style={{background:'#ffa900'}}>Message</label>
          <textarea  style={{marginBottom:'10px',borderColor:'#ffffff4a',fontWeight:600,backdropFilter:'blur(1px)'}}  onChange={inputchange} type="text" id="message" required name="message" placeholder="Message" className="form-control profileinput"></textarea>
          <i class="bi bi-chat-left-text-fill Instprofileinputicon" style={{color:'#fffffff5'}}></i>
        </div>
        <button className="bluebutton" onClick={handleClick}>Submit <i className="bi bi-arrow-right"></i></button>
</div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Contactus