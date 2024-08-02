import React,{useState} from "react";
import './aservice.css'

import {useNavigate} from 'react-router-dom'
import { DatePicker, Tooltip, message } from "antd";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";
import { VPostData } from "../../config/vendor/Apiconfig";
const {RangePicker} = DatePicker

let pr=[]
const Aservice=()=>{
  const [Stype,SetStype]=useState('')
  const [pdata,setPdata]=useState('')
  const history = useNavigate()

  const [range,setRange]=useState('')

 
  const renderService=()=>{
    if(Stype===''){
        return
    }
    if(Stype==='Agriculture'){
  return( 
    <div id="AgrType">
    <input type="checkbox" className="name" id='1' name="check" value='Crop Health' defaultChecked />
    <label className="form-label">Crop Health</label>
    <input type="checkbox" className="name" id="2" name="check" value='Yield assessment' defaultChecked />
    <label className="form-label">Yield assessment</label>
    <input type="checkbox" className="name"id="3"  name="check" value='Irrigation Monitoring' defaultChecked />
    <label className="form-label">Irrigation Monitoring</label>
    <input type="checkbox" className="name"id="4"  name="check" value='Scouting' defaultChecked/>
    <label className="form-label">Scouting</label>
    <input type="checkbox" className="name"id="5"  name="check" value='Monitoring Plant Health' defaultChecked/>
    <label className="form-label">Monitoring Plant Health</label>
    <input type="checkbox" className="name"id="6"  name="check" value='Planting & Seeding' defaultChecked/>
    <label className="form-label">Planting & Seeding</label>
    <input type="checkbox" className="name"id="7"  name="check" value='Livestock' defaultChecked/>
    <label className="form-label">Livestock</label>
    <input type="checkbox" className="name"id="8"  name="check" value='Fishing' defaultChecked/>
    <label className="form-label">Fishing</label>
    <input type="checkbox" className="name"id="9"  name="check" value='Spraying' defaultChecked/>
    <label className="form-label">Spraying</label>
    <input type="checkbox" className="name"id="10"  name="check" value='Precision Farming' defaultChecked/>
    <label className="form-label">Precision Farming</label>
    <input type="checkbox" className="name"id="11"  name="check" value='Farm Digitization' defaultChecked/>
    <label className="form-label">Farm Digitization</label>
    <input type="checkbox" className="name"id="12"  name="check" value='Yield Mapping' defaultChecked/>
    <label className="form-label">Yield Mapping</label>
    <input type="checkbox" className="name"id="13"  name="check" value='Marketing' defaultChecked/>
    <label className="form-label">Marketing </label>
    <input type="checkbox" className="name"id="14"  name="check" value='Nutrients Mapping' defaultChecked/>
    <label className="form-label">Nutrients Mapping</label>
</div>

  )
  
    }
    if(Stype==='Cinematography'){
      return(
        <div id="AgrType">
    <input type="checkbox" className="name" id='1' name="check" value='Banners' defaultChecked />
    <label className="form-label">Banners</label>
    <input type="checkbox" className="name" id="2" name="check" value='Flyers' defaultChecked />
    <label className="form-label">Flyers</label>
    <input type="checkbox" className="name"id="3"  name="check" value='Weddings' defaultChecked />
    <label className="form-label">Weddings</label>
    <input type="checkbox" className="name"id="4"  name="check" value='Special Events' defaultChecked/>
    <label className="form-label">Special Events</label>
    <input type="checkbox" className="name"id="5"  name="check" value='Outdoor Shoots' defaultChecked/>
    <label className="form-label">Outdoor Shoots</label>
    <input type="checkbox" className="name"id="6"  name="check" value='Short Movies' defaultChecked/>
    <label className="form-label">Short Movies</label>
    <input type="checkbox" className="name"id="7"  name="check" value='Movies' defaultChecked/>
    <label className="form-label">Movies</label>
    </div>
      )   
    }

    if(Stype==='Survey & Mapping'){
      return(
        <div id="AgrType">
        <input type="checkbox" className="name" id='1' name="check" value='Mapping' defaultChecked />
        <label className="form-label">Mapping</label>
        <input type="checkbox" className="name" id="2" name="check" value='Gas Detection' defaultChecked />
        <label className="form-label">Gas Detection</label>
        <input type="checkbox" className="name"id="3"  name="check" value='Inspection' defaultChecked />
        <label className="form-label">Inspection</label>
        <input type="checkbox" className="name"id="4"  name="check" value='Mine planning' defaultChecked/>
        <label className="form-label">Mine planning</label>
        <input type="checkbox" className="name"id="5"  name="check" value='Site survey' defaultChecked/>
        <label className="form-label">Site survey</label>
        <input type="checkbox" className="name"id="6"  name="check" value='Stockpile volume estimation' defaultChecked/>
        <label className="form-label">Stockpile volume estimation</label>
        <input type="checkbox" className="name"id="7"  name="check" value='Environment Analysis' defaultChecked/>
        <label className="form-label">Environment Analysis</label>
        <input type="checkbox" className="name"id="8"  name="check" value='Blast Planning' defaultChecked/>
        <label className="form-label">Blast Planning</label>
        <input type="checkbox" className="name"id="9"  name="check" value='Water flow planning' defaultChecked/>
        <label className="form-label">Water flow planning</label>
        <input type="checkbox" className="name"id="10"  name="check" value='Asset Tracking' defaultChecked/>
        <label className="form-label">Asset Tracking</label>
        <input type="checkbox" className="name"id="11"  name="check" value='Mineral surveys' defaultChecked/>
        <label className="form-label">Mineral surveys</label>
        <input type="checkbox" className="name"id="12"  name="check" value='Surveillance' defaultChecked/>
        <label className="form-label">Surveillance</label>
        <input type="checkbox" className="name"id="13"  name="check" value='Oil & Gas' defaultChecked/>
        <label className="form-label">Oil & Gas </label>
    </div>
      )
    }
    if(Stype==='Repair & Maintenance'){
return(
  <div id="AgrType">
  <input type="checkbox" className="name" id='1' name="check" value='Repair' defaultChecked />
  <label className="form-label">Repair</label>
  <input type="checkbox" className="name" id="2" name="check" value='Maintenance' defaultChecked />
  <label className="form-label">Maintenance</label>
  <input type="checkbox" className="name"id="3"  name="check" value='Testing' defaultChecked />
  <label className="form-label">Testing</label>
  <input type="checkbox" className="name"id="4"  name="check" value='Products Replacement' defaultChecked/>
  <label className="form-label">Products Replacement</label>
  <input type="checkbox" className="name"id="5"  name="check" value='Software Calibration' defaultChecked/>
  <label className="form-label">Software Calibration</label>
  <input type="checkbox" className="name"id="6"  name="check" value='NPNT' defaultChecked/>
  <label className="form-label">NPNTs</label>
  </div>
)
      
    }
    if(Stype==='Logistics'){
return(
  <div id="AgrType">
  <input type="checkbox" className="name" id='1' name="check" value='Medical' defaultChecked />
  <label className="form-label">Medical</label>
  <input type="checkbox" className="name" id="2" name="check" value='Food' defaultChecked />
  <label className="form-label">Food</label>
  <input type="checkbox" className="name"id="3"  name="check" value='Couriers' defaultChecked />
  <label className="form-label">Couriers</label>
  <input type="checkbox" className="name"id="4"  name="check" value='Parcels' defaultChecked/>
  <label className="form-label">Parcels</label>
  <input type="checkbox" className="name"id="5"  name="check" value='Intralogistics' defaultChecked/>
  <label className="form-label">Intralogistics</label>
  <input type="checkbox" className="name"id="6"  name="check" value='Warehouse' defaultChecked/>
  <label className="form-label">Warehouse</label>
  <input type="checkbox" className="name"id="7"  name="check" value='Marketing' defaultChecked/>
  <label className="form-label">Marketing</label>
  </div>
)
    }
    if(Stype==='Smart Cities'){
      return(
<div id="AgrType">
  <input type="checkbox" className="name" id='1' name="check" value='Digitization' defaultChecked />
  <label className="form-label">Digitization</label>
  <input type="checkbox" className="name" id="2" name="check" value='Lidar Mapping' defaultChecked />
  <label className="form-label">Lidar Mapping</label>
  <input type="checkbox" className="name"id="3"  name="check" value='Aerial Mapping' defaultChecked />
  <label className="form-label">Aerial Mapping</label>
  <input type="checkbox" className="name"id="4"  name="check" value='Geo Mapping' defaultChecked/>
  <label className="form-label">Geo Mapping</label>
  <input type="checkbox" className="name"id="5"  name="check" value='Features Mapping' defaultChecked/>
  <label className="form-label">Features Mapping</label>
  <input type="checkbox" className="name"id="6"  name="check" value='Data Mapping' defaultChecked/>
  <label className="form-label">Data Mapping</label>
  <input type="checkbox" className="name"id="7"  name="check" value='Railways' defaultChecked/>
  <label className="form-label">Railways</label>
  <input type="checkbox" className="name" id='8' name="check" value='Roads' defaultChecked />
  <label className="form-label">Roads</label>
  <input type="checkbox" className="name" id="9" name="check" value='Bridges' defaultChecked />
  <label className="form-label">Bridges</label>
  <input type="checkbox" className="name"id="10"  name="check" value='Tunnels' defaultChecked />
  <label className="form-label">Tunnels</label>
  <input type="checkbox" className="name"id="11"  name="check" value='Rivers' defaultChecked/>
  <label className="form-label">Rivers</label>
  <input type="checkbox" className="name"id="12"  name="check" value='Mountains' defaultChecked/>
  <label className="form-label">Mountains</label>
  </div>
      )
    }

    if(Stype==='Inspection & Cleaning'){
      return(
        <div id="AgrType">
        <input type="checkbox" className="name" id='1' name="check" value='Buildings' defaultChecked />
        <label className="form-label">Buildings</label>
        <input type="checkbox" className="name" id="2" name="check"  value='Rivers' defaultChecked />
        <label className="form-label">Rivers</label>
        <input type="checkbox" className="name"id="3"  name="check" value='Roads' defaultChecked />
        <label className="form-label">Roads</label>
        <input type="checkbox" className="name"id="4"  name="check" value='Railway' defaultChecked/>
        <label className="form-label">Railway</label>
        <input type="checkbox" className="name"id="5"  name="check" value='Industry' defaultChecked/>
        <label className="form-label">Industry</label>
        <input type="checkbox" className="name"id="6"  name="check" value='Pipelines' defaultChecked/>
        <label className="form-label">Pipelines</label>
        <input type="checkbox" className="name"id="7"  name="check" value='Electric Lines' defaultChecked/>
        <label className="form-label">Electric Lines</label>
        <input type="checkbox" className="name"id="8"  name="check" value='Boiler Tanks' defaultChecked/>
        <label className="form-label">Boiler Tanks</label>
        <input type="checkbox" className="name"id="9"  name="check" value='Chimneys' defaultChecked/>
        <label className="form-label">Chimneys</label>
        <input type="checkbox" className="name"id="10"  name="check" value='Telecom lines' defaultChecked/>
        <label className="form-label">Telecom lines</label>
        <input type="checkbox" className="name"id="11"  name="check" value='Solar Panels' defaultChecked/>
        <label className="form-label">Solar Panels</label>
        <input type="checkbox" className="name"id="12"  name="check" value='Grid Repairs' defaultChecked/>
        <label className="form-label">Grid Repairs</label>
        <input type="checkbox" className="name"id="13"  name="check" value='Industrial Buildings' defaultChecked/>
        <label className="form-label">Industrial Buildings </label>
        <input type="checkbox" className="name"id="14"  name="check" value='Wind Turbines' defaultChecked/>
        <label className="form-label">Wind Turbines</label>
        <input type="checkbox" className="name"id="15"  name="check" value='Cleaning' defaultChecked/>
        <label className="form-label">Cleaning</label>
        <input type="checkbox" className="name"id="16"  name="check" value='Marketing' defaultChecked/>
        <label className="form-label">Marketing</label>
    </div>
      )
    }

  }
  const model=()=>{
    const dt = document.querySelectorAll('.name')
    pr =[]
    setPdata('')
    for(let i=0;i<dt.length;i++){
      if(dt[i].checked){
        let objp={}
        objp['id']=i
        objp['type']=dt[i].attributes.value.value
      pr.push(objp)
    }
  }
    setPdata(pr)
    //// console.log()(pr)
}

const priceRender=()=>{
  let i =0
  if(pdata){
      return pdata.map((item)=>{
        i++
       return( 
       <div key={item.id} className="col-md-3" style={{display:'inline-block',width:'fit-content'}}>
        <option>{item.type}</option>
        <input type="text" name="prices" placeholder="₹" id={'prices'+i} className="form-control price"/>
      </div>
       )
      })
  }
}

   
    
    const handleChange=()=>{
    const data = document.getElementById('Soption').value
   
SetStype(data)
    
    //// console.log()(data)

    }

    const addDetails=async()=>{
      try{
      const priceType = document.getElementById('perType').value
      const fname = document.getElementById('Sfname').value
    const mname = document.getElementById('Smname').value
    const lname = document.getElementById('Slname').value
    const Clocation = document.getElementById('Clocation').value
    const slocation = document.getElementById('Slocation').value
    const service = document.getElementById('Soption').value
    const Sdata = document.querySelectorAll('.name').length
    const phone = document.getElementById('phone').value
    const Cname = document.getElementById('Cname').value
   
    //// console.log()(fname,lname,Clocation,slocation,Sdata,phone,Cname,mp1,service)
      const pt = document.querySelectorAll('.price') 
      const add = document.getElementById('address').value
      const imgData = document.getElementById('PhotoS').files[0]
             if(fname!==''&&lname!==''&&Clocation!==''&&slocation!==''&&Sdata>=1 &&phone!==''&&Cname!==''&&selectedDates!=='' &&service!==''&&pt.length>0 && imgData!==undefined && imgData.size<1000000){
      document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
     message.loading('Processing',[20])
      const arr=[]
      for(let i=0; i<Sdata; i++){
          let obj={}
          const valId = document.querySelectorAll('.name')[i].attributes.id.nodeValue
          if(document.getElementById(valId).checked===true){
              obj['id']=valId
              obj['type'] = document.getElementById(valId).value
              arr.push(obj)
          }
        }
const ptype =[]
       const pt = document.querySelectorAll('.price') 
       for(let i=1;i<=pt.length;i++){
        let objpt={}
        objpt['id']=i
        objpt['price']=document.getElementById('prices'+i).value
        ptype.push(objpt)
       }
      
      const im ={
        endpoint:endpoints.aws,
        fileInput:imgData,
        folder:"service"
     }
     
   
     const result = await PostImage(im)
     // console.log(result)
     if(result){
      const img =  result.path
      const dt ={
        "fname":fname,
        "mname":mname,
        "lname":lname,
        "Cname":Cname,
        "clocation":Clocation,
        "address":add,
        "slocation":slocation,
        "phone":phone,
        "service":service,
        "avDate":selectedDates,
        "range":range+'Km',
        serviceImage:img,
        endpoint:endpoints.addService
      }
      const result2= await VPostData(dt)
      if(result2){
const serid= result2.serviceID
sessionStorage.setItem('serviceID',serid)
const dt2={
  "id":serid,
"category":service,
"types":arr,
"ptype":priceType,
"price":ptype,
endpoint:endpoints.addserviceType
}
const result3=await VPostData(dt2)
message.destroy()
if(result3){
  message.success('Successfully Added')
  document.getElementById('loader').innerHTML='<span id="loader"></span>'
   history('/vendor/service/addDrone',{state:{serviceID:serid}})
}
      }

     }
  }
    
else{
  message.error('fill all the details correctly as mentioned')
}
      }catch(err){
        // console.log(err)
      }finally{
          document.getElementById('loader').innerHTML='<span id="loader"></span>'
      }
    }

const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange=(dates,dateStrings)=>{
        // // console.log('From: ', dates[0], ', to: ', dates[1]);
        // // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        let value
        if(dates){
          if(dateStrings[0] === dateStrings[1]){
         value =document.getElementById('calDate').value
          }
          else{
            value = `${dateStrings[0]} ~ ${dateStrings[1]}`
          }
        setSelectedDates(value)
        }
};


const rangeChange=()=>{
 const range =  document.getElementById('customRange3').value
 setRange(range)
}

const [imgurl2,setImgurl2]=useState('')
const imageAdd=()=>{
  const img = document.getElementById('PhotoS').files[0]
  if(img.size<1100000){
  const reader = new FileReader();
  reader.onloadend=()=>{
setImgurl2(reader.result)
  }
  if(img){
    document.getElementById('prev').style.display='block'
    reader.readAsDataURL(img)
  }
}else{
  message.error('Image must be less than 1Mb')
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
         <div className="homesection">
   <div className="profilecard">
<div className="profilecard2">
<div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Add Service</h1>
          <span style={{fontSize:'15px'}} id='headerMsg'>    </span>
        </div>
<div className="ASdiv" style={{paddingBottom:20}}>
<div className="row" style={{marginBottom:'30px'}} >
  <div className="col-md-3" style={{position:'relative',marginBottom:'0'}}>
  <label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add course Image</span>
  
  <input type="file" accept=".png, .jpg" id='PhotoS' style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd}  required/>
  <i class="bi bi-file-earmark-image"></i>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500,color:'grey'}}>Image size must be less than 1Mb</p>
 </label>
</div>
<div className="col-md-9" style={{marginBottom:'15px'}}>
  <div className="row">
        <div className="col-md-6">
        <div style={{position:'relative'}}>
        <label className="profilelabeleff">First Name</label>
    <input type="text"  onChange={inputchange}   className="form-control profileinput" placeholder="First Name" name="fName" id="Sfname" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
     </div>
    <div className="col-md-6">
    <div style={{position:'relative'}}>
        <label className="profilelabeleff">Middle Name</label>
    <input type="text"  onChange={inputchange} name="mName"  id="Smname" className="form-control profileinput" placeholder="Middle Name" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
    <div style={{position:'relative'}}>
        <label className="profilelabeleff">Last Name</label>
    <input type="text"  onChange={inputchange} name="lName" id="Slname" className="form-control profileinput" placeholder="Last Name" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
     </div>
    <div className="col-md-6">
    <div style={{position:'relative'}}>
        <label className="profilelabeleff">Phone Number</label>
    <input type="number"  onChange={inputchange}   id="phone" className="form-control profileinput" placeholder="Phone Number" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
    </div>
    </div>
    </div>
</div>
<div >
<div style={{position:'relative'}}>
        <label className="profilelabeleff">Address</label>
    <textarea  onChange={inputchange}   id="address" className="form-control profileinput" placeholder="Address" ></textarea>
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>

</div>
<div className="row" style={{marginTop:'25px'}}>
    <div className="col-md-5">
    <div style={{position:'relative'}}>
        <label className="profilelabeleff">Current City</label>
    <input type="text"  onChange={inputchange} name="Clocation" id="Clocation" className="form-control profileinput" placeholder="Current City" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
        </div>
<div className="col-md-7">
<div style={{position:'relative'}}>
        <label className="profilelabeleff">Service Locations</label>
    <input type="text"  onChange={inputchange}name="Slocation" id="Slocation" className="form-control profileinput" placeholder="Service Locations Ex: Vijayawada, Hyderabad" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>

</div>
</div>
<div className="row" style={{marginTop:'20px'}}>
  <div className="col-md-5">
  <div style={{position:'relative'}}>
        <label className="profilelabeleff">Company Name</label>
    <input type="text"  onChange={inputchange} id="Cname" className="form-control profileinput" placeholder="Company Name" />
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
  </div>

  <div className="col-md-7">
  <div style={{position:'relative'}}>
<select className="form-select profileinput" aria-label="Default select example" id="Soption" onChange={handleChange}>
  <option defaultValue value=''>Select the service type</option>
  <option value="Agriculture">Agriculture</option>
  <option value="Cinematography">Cinematography</option>
  <option value="Survey & Mapping">Survey & Mapping</option>
  <option value="Repair & Maintenance">Repair & Maintenance</option>
  <option value="Logistics">Logistics</option>
  <option value="Smart Cities">Smart Cities</option>
  <option value="Inspection & Cleaning">Inspection & Cleaning</option>
</select>
<i class="bi bi-caret-down-fill Instprofileinputicon" ></i>
</div>
</div>

</div>
{renderService()}
<div style={{display:'flex',justifyContent:'center', marginTop:20}}>
    <Tooltip title="After selecting the service types then click this button for the further process " color="blue" style={{fontSize:12}}>
<button className="button" onClick={model} style={{marginTop:'20px'}}>Ok</button>
</Tooltip>
</div>
<div style={{marginTop:'20px'}} id="pren">
  <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
    <div className="row">
    <div className="col-md-6" style={{paddingRight:'0'}}>
    <h6 style={{marginTop:'10px',fontSize:18,fontWeight:600}} className="heading2" id="hour">Price type per/</h6>
    </div>
    <div className="col-md-6" style={{paddingLeft:'0'}}>
    <div style={{position:'relative'}}>
    <i class="bi bi-caret-down-fill Instprofileinputicon"></i>
    <select className="form-select profileinput" style={{marginTop:0}} id="perType" aria-label="Default select example">
  <option defaultValue=''>select type</option>
  <option value="Arc">Arc</option>
  <option value="KM">Hector</option>
  <option value='Km'>Km</option>
  <option value="SqKm">SqKm</option>
  <option value="Hour">Hour</option>
  <option value="Day">Day</option>
  <option value="Task">Task</option>

</select>
</div>
  </div>
  </div>
  </div>
{priceRender()}
</div>

{/* <div className="row" style={{marginTop:'30px'}}>
<label style={{marginBottom:'10px',textAlign:'center'}}>Quantity type & price</label>
  <div className="col-md-4" style={{display:'flex'}}>
    <input type="text" className="form-control" style={{width:'70%'}} id="qArc" placeholder="ex: 2000"/>
    <label style={{marginTop:'9px'}}>Per Acre </label>
  </div>
  <div className="col-md-4" style={{display:'flex'}}>
    <input type="text" className="form-control" style={{width:'70%'}} id="qKm" placeholder="ex: 1000"/>
    <label style={{marginTop:'9px'}}>Per KM </label>
  </div>
  <div className="col-md-4" style={{display:'flex'}}>
    <input type="text" className="form-control" style={{width:'70%'}} id="qSqkm" placeholder="ex: 500"/>
    <label style={{marginTop:'9px'}}>Per SqKM </label>
  </div>
</div> */}


<label htmlFor="customRange3" className="form-label" style={{marginBottom:'0',fontWeight:600}}>Service Radius</label>
<p style={{fontSize:'11px',color:'grey',fontWeight:'500'}}>How far you can travel to give the service </p>
<input type="range" className="form-range" min="0" max="1000" step="1" onChange={rangeChange} id="customRange3"/>
<div style={{display:'flex',justifyContent:'center'}}>
<span id="serviceRadius">{range}KM</span>
</div>

<div  style={{marginTop:'30px',marginBottom:30}}>
<label style={{fontWeight:600}}>Select avaliable dates</label>
<p style={{color:'grey',fontSize:10,marginBottom:0}}>Please leave today's date and pick</p>
<RangePicker 
onChange={handleDateChange}
   highlightToday={false}
   format="DD/MM/YYYY"
   id="DtPk"
   style={{padding:'10px 20px',borderRadius:20,background:'transparent',color:'grey'}}
   />

</div>
<button className="button" onClick={addDetails}><span id="loader"></span>Next</button>
</div>
</div>
</div>
</div>


        </>
    )
}
export default Aservice
