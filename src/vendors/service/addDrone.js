import React,{useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import './aservice.css'
import { message } from "antd";
import ServiceMap from "./components/serviceMap";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";
import { VPostData } from "../../config/vendor/Apiconfig";

const AddDrone=()=>{
  const [entered,setEntered]=useState('')
  const history = useNavigate()
  const location = useLocation()
  const [lat,setLat]=useState('')
   const [lng,setLng]=useState('')


      const handleClick=async()=>{
        try{
        const droneName = document.getElementById('Dname').value
        const imgData = document.getElementById('Dimage').files[0]
        const specifications = document.getElementById('techSp').value
        if(droneName!=='' && specifications!=='' && lat!=='' && lng!=='' && imgData!==undefined && imgData.size<1000000){
        document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
     message.loading('Processing',[10])
        const im ={
            endpoint:endpoints.aws,
            fileInput:imgData,
            folder:"service"
        }
        const result= await PostImage(im)
        if(result){
               const dt={
                    "id":location.state.serviceID,
                    "dname":droneName,
                    "techSp":specifications,
                    droneImage:result.path,
                    endpoint:endpoints.addServceDrone
                  }
                  const result2= await VPostData(dt)
                  if(result2){
                  const dt2 ={
                      id:location.state.serviceID,
                      lat :lat,
                      lng:lng,
                      endpoint:endpoints.addServiceLocation
                    }
                    const result3 = await VPostData(dt2)
                    if(result3){
                        message.destroy()
                        setEntered('Service Created Successfully')
                        message.success('Service Created Successfully')
                        setTimeout(()=>{
                          history('/vendor/service/addService')
                        },2000)
                   
                    }
                }    
            }
            } 
      
      else{
       
        message.error('Please fill all the details correctly as mentioned and also select your location on Map')
       
      }
    }catch(err){
        // console.log(err)

    }finally{
        document.getElementById('loader').innerHTML='<span id="loader"></span>'
    }
    }

      const [ showMap,setShowMap] = useState(false)
const handleButtonClick = () => {
  setShowMap(true);
};

const handleMapClose = () => {
  setShowMap(false);
};

const LatAndLng=(data)=>{
  if(data){
    setLat(data.lat)
    setLng(data.lng)
  }
  // console.log(data)
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
          <div className="homesection">
          <div className="profilecard">
          <div className="profilecard2">
<div className="ASdiv">
  <h6 style={{color:'green',alignItems:'center',justifyContent:'center'}}>{entered}</h6>
<div className="row" style={{marginTop:'20px'}}>
<div className="col-md-6">
    <div style={{position:'relative'}}>
<label className="profilelabeleff">Drone Name</label>
    <input type="text"  onChange={inputchange}   className="form-control profileinput" placeholder="Drone Name" name="DName" id="Dname"/>
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
</div>
<div className="col-md-6">
<label style={{fontWeight: 500,display:'block'}}>Drone Image</label>
  <input type="file" className="form-control profileinput" style={{marginTop:0}} accept=".png,.jpg" id="Dimage"/>
</div>
</div>
<div style={{position:'relative'}}>
        <label className="profilelabeleff">Drone Specifications</label>
    <textarea  onChange={inputchange}   id="techSp" className="form-control profileinput" placeholder="Drone Specifications" ></textarea>
    <p style={{fontSize:'10px',color:'grey'}}>Add # to make it as a Separate point in the user view</p>
    <i class="bi bi-layers-fill Instprofileinputicon"></i>
        </div>
 <label style={{fontWeight: 500, padding: 10, fontSize: 18,display:'block',marginTop:20}}>Select your location on Map</label>
<button className="btn btn-primary" onClick={handleButtonClick} style={{fontSize:'12px',marginBottom:'20px'}}>Open Map</button>
        {showMap && (
          <div>
            <ServiceMap mapLocation={(data)=>{LatAndLng(data)}}/>
            <button onClick={handleMapClose} className="btn btn-dark" style={{fontSize:'12px',marginTop:'20px',marginBottom:'20px'}}>Close Map</button>
          </div>   
        )}
        <div style={{display:'flex',justifyContent:'center'}}>
<button className="button" style={{width:'30%'}} onClick={handleClick}><span id="loader"></span>Submit</button>
</div>
</div>
</div>
</div>
</div> 
        </>
    )
}
export default AddDrone