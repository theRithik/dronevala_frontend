import React,{useState} from "react";
// import RentalMap from "./rentalMap";
import { message } from "antd";
import MyComponent from "../map";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";
import { VPostData } from "../../config/vendor/Apiconfig";



const AddRental=()=>{
  const [lat,setLat]=useState('')
  const [lng,setLng]=useState('')
  const [ drone,setDrone]=useState('')
  const[droneShow,setDroneShow]=useState(false)
  const [disabled,setDisabled]=useState(false)

  const [imgurl,setImgurl]=useState('')
const imageAdd=()=>{
  const img = document.getElementById('PhotoS').files[0]
  if(img.size<1100000){
    const reader = new FileReader();
    reader.onloadend=()=>{
  setImgurl(reader.result)
    }
    if(img){
      document.getElementById('prev').style.display='block'
      reader.readAsDataURL(img)
    }
  }
  else{
    message.error('Image size must be less than 1mb')
  }
 
}

const handleChange=(e)=>{
const data = document.getElementById('droneCat').value
setDrone(data)

}
const ptypeChange=()=>{
  const dat = document.getElementById('ptype').value
  if(dat==='Drone'){
    setDroneShow(true)
  }
  else{
    setDroneShow(false)
  }
}

const [ showMap,setShowMap] = useState(false)
const handleButtonClick = () => {
  setShowMap(true);
};

const handleMapClose = () => {
  setShowMap(false);
};

const latlng=(data)=>{
  
  if(data){
    setLat(data.lat)
    setLng(data.lng)
  }
  //// console.log()(data)
}

const addProduct=async()=>{
  try{
  const name = document.getElementById('name').value
  const brand = document.getElementById('brand').value
  const tag = document.getElementById('companyName').value
  const state = document.getElementById('state').value
  const city = document.getElementById('city').value
  const address= document.getElementById('address').value
  const productType =document.getElementById('ptype').value
  const desc = document.getElementById('description').value
  const features = document.getElementById('features').value
  const deliveryCharges = document.getElementById('deliveryCharges').value
  const distance = document.getElementById('distance').value
  const price = document.getElementById('priceDay').value
  const img = document.getElementById('PhotoS').files[0]
  if(name!==''&& brand!=='' && state!=='' &&city!==''&&address!==''&&productType!==''&&desc!==''&&features!==''&&lat!==''&&lng!==''){
    document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
     setDisabled(true)
     message.loading('Processing')
    if(drone!=='' && droneShow===true){
      const upload ={
        fileInput:img,
        folder:"rental",
        endpoint:endpoints.aws
      }
      const result = await PostImage(upload)
      const path = result.path

  const dt ={
name:name,
brand:brand,
company:tag,
state:state,
city:city,
address:address,
productType:productType,
desc:desc,
features:features,
lat:lat,
lng:lng,
droneCategory:drone,
delivery:deliveryCharges,
distance:distance,
price:price,
image:path,
endpoint:endpoints.addRental

    }
    const data = await VPostData(dt)
    if(data){
    sessionStorage.setItem('rentalID',data.data) 
    document.getElementById('loader').innerHTML='<span id="loader"></span>'
    message.success('Added successfully')
  }
}

 else{

  const upload ={
    fileInput:img,
    folder:"rental",
    endpoint:endpoints.aws
  }
  const result = await PostImage(upload)
  const path = result.path

  
   const dt ={
name:name,
brand:brand,
company:tag,
state:state,
city:city,
address:address,
productType:productType,
desc:desc,
features:features,
lat:lat,
lng:lng,
delivery:deliveryCharges,
distance:distance,
price:price,
image:path,
endpoint:endpoints.addrentalProduct
    }
const data = await VPostData(dt)
if(data){
    sessionStorage.setItem('rentalID',data.data) 
document.getElementById('loader').innerHTML='<span id="loader"></span>'
message.success('Added successfully')
  }
 }
}
else{
  message.info('please fill all the details first ')
}
  }catch(err){
    // console.log(err)
  }finally{
    setDisabled(false)
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
               <div className="homesection">
   <div className="profilecard">
  
<div className="profilecard2">
<div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Add Rental Product</h1>
        </div>
<div className="row" >
  <div className="col-md-3" style={{position:'relative',marginBottom:'0'}}>
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
<span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add Product photo</span>
 
  <input type="file"  id="PhotoS"  accept=".png, .jpg"  style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={imageAdd} required/>
  <i class="bi bi-file-earmark-image"></i>
  <img src={imgurl} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>

  <p style={{margin:0,fontSize:10,fontWeight:500,color:'grey'}}>Image size must be less than 1Mb</p>
</label>
</div>
<div className="col-md-9">
<div style={{position:'relative'}}>
<label className="profilelabeleff">Product Name</label>
    <input type="text" onChange={inputchange} className="form-control profileinput" style={{marginBottom:'20px'}} placeholder="Product Name" name="Name" id="name"/>
    <i class="bi bi-airplane-engines-fill Instprofileinputicon"></i>
    </div>
    <div className="row">
      <div className="col-md-6">
      <div style={{position:'relative'}}>
<label className="profilelabeleff">Brand Name</label>
    <input type="text" onChange={inputchange} className="form-control profileinput" name="mName" placeholder="Brand Name" style={{marginBottom:'20px'}} id="brand"/>
    <i class="bi bi-badge-tm Instprofileinputicon"></i>
      </div>
      </div>
      <div className="col-md-6">
      <div style={{position:'relative'}}>
<label className="profilelabeleff">Company Name</label>
    <input type="text" onChange={inputchange} className="form-control profileinput" name="cName" placeholder="Company Name"  id="companyName"/>
    <i class="bi bi-line Instprofileinputicon"></i>
    </div>
      </div>
    </div>
   </div> 
    </div>
    <div className="row">
      <div className="col-md-6">
      <div style={{position:'relative'}}>
      <label className="profilelabeleff">State</label>
    <input type="text " onChange={inputchange}   className="form-control profileinput" placeholder="State"  id="state"/>
    <i class="bi bi-geo-fill Instprofileinputicon"></i>
    </div>
      </div>
      <div className="col-md-6">
      <div style={{position:'relative'}}>
      <label className="profilelabeleff">City</label>
<input type="text" onChange={inputchange} className="form-control profileinput" placeholder="City" id="city"/>
<i class="bi bi-geo-alt-fill Instprofileinputicon"></i>
</div>
      </div>
    </div>
    <div style={{position:'relative'}}>
    <label className="profilelabeleff">Address</label>
    <textarea type="text" onChange={inputchange} className="form-control profileinput" placeholder="Address" id="address"></textarea>
    <i class="bi bi-map-fill Instprofileinputicon"></i>
</div>
      <div className="row"  style={{marginTop:10}}>
<div className="col-md-6">
<div style={{position:'relative'}}>
<label className="profilelabeleff">Product Type</label>
    <select class="form-select profileinput" aria-label="Default select example" id="ptype" onChange={ptypeChange} >
<option defaultValue=''>select product type</option>
  <option value="Drone">Drone</option>
  <option value="Battery">Battery</option>
  <option value="Camery">Camery</option>
  <option value="Sensor">Sensor</option>
  <option value="Other Equipment">Other Equipment</option>
</select>
<i class="bi bi-arrow-down-circle-fill Instprofileinputicon"></i>
</div>
</div>
{droneShow &&
<div className="col-md-6">
<div style={{position:'relative'}}>
<label className="profilelabeleff">Select the Drone type</label>
<select className="form-select profileinput" aria-label="Default select example" id='droneCat' onChange={handleChange}>
  <option disabled>Open this select menu</option>
  <option value="Agriculture">Agriculture</option>
  <option value="Cinematography">Cinematography</option>
  <option value="Survey & Mapping">Survey & Mapping</option>
  <option value="Repair & Maintenance">Repair & Maintenance</option>
  <option value="Logistics">Logistics</option>
  <option value="Smart Cities">Smart Cities</option>
  <option value="Inspection & Cleaning">Inspection & Cleaning</option>
</select>
<i class="bi bi-arrow-down-circle-fill Instprofileinputicon"></i>
</div>
</div>
}
      </div>
      <div style={{position:'relative'}}>
      <label className="profilelabeleff">Description</label>
    <textarea className="form-control profileinput" onChange={inputchange} placeholder="Description" id="description"></textarea>
    <i class="bi bi-blockquote-right Instprofileinputicon"></i>
    <p style={{fontSize:10,color:'grey',marginBottom:0}}>use #  to make it as a separate paragraph in the user view</p>
   
    </div>
    <div style={{position:'relative'}}>
    <label className="profilelabeleff">Features</label>
    <textarea className="form-control profileinput" onChange={inputchange} placeholder="Features" id="features"></textarea>
    <i class="bi bi-sliders2-vertical Instprofileinputicon"></i>
    <p style={{marginBottom:0,fontSize:10,color:'grey'}}>use #  to make it as a separate point in the user view</p>
    </div>
<div className="row" style={{marginTop:10}}>
  <div className="col-md-6">
  <div style={{position:'relative'}}>
  <label className="profilelabeleff">Price per Day/24hours</label>
  <input type="number" placeholder='Price per Day/24hours' onChange={inputchange} id='priceDay' className="form-control  profileinput" />
  <i class="bi bi-currency-rupee Instprofileinputicon"></i>
   
  </div>
  </div>
  {/* <div className="col-md-6">
  <label>Select avaliable dates</label><br/>
  <p style={{color:'grey',fontSize:10,marginBottom:0}}>In Date range picking you can not pick the current date</p>
<DatePicker 
   value={selectedDates}
   onChange={handleDateChange}
   minDate={Date.now()}
   highlightToday={false}
   format="DD/MM/YYYY"
   range
   rangeHover
   style={{width:'100%'}}
   id="Dkp"
/>
    </div>  */}
</div>
<div className="row" style={{marginTop:5}}>
<div className="col-md-6">
<div style={{position:'relative'}}>
<label className="profilelabeleff">Delivery Charges per KM</label>
<input type="number" placeholder="Delivery Charges per KM" className="form-control profileinput" id="deliveryCharges"/>
<i class="bi bi-currency-rupee Instprofileinputicon"></i>
</div>
</div>
<div className="col-md-6">
<div style={{position:'relative'}}>
<label className="profilelabeleff">Delivery Distance </label>
<input type="number" placeholder="Delivery Distance Ex: 50Km" className="form-control profileinput" id="distance"/>
<i class="bi bi-fast-forward-fill Instprofileinputicon"></i>
<p style={{marginBottom:0,color:'grey',fontSize:10}}>How Far you can give Delivery in Km</p>
</div>
</div>
</div>
<div style={{marginTop:30}}>
  <h6 className="heading2" style={{display:'flex',justifyContent:'center',fontSize:18}}>Select your location on map</h6>
  <span style={{display:'flex',justifyContent:'center'}}>
<button className="button" onClick={handleButtonClick} style={{fontSize:'12px',marginBottom:'10px'}}>Open Map</button>
</span>
</div>

        {showMap && (
          <div style={{position:'relative'}}>
<MyComponent mapLocation={(data)=>latlng(data)}/>
            <button onClick={handleMapClose} className="btn btn-dark" style={{fontSize:'12px',marginTop:'20px',marginBottom:'20px'}}>Close Map</button>
          </div>   
        )}

        <div style={{display:'flex',justifyContent:'center',marginTop:30}}>
          <button className="bluebutton" onClick={addProduct} disabled={disabled} ><span style={{marginLeft:0}} id="loader"></span> Submit</button>
        </div>

</div>
</div>
</div>

        </>
    )
}
export default AddRental