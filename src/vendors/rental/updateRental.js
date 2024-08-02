import React,{useState} from "react";
import MyComponent from "../map";
import { message } from "antd";
import ProductName from "./components/productsName";
import { VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";


const UpdateRental=()=>{
    const [rentalId,setRentalId]=useState('')
    const [addPhoto,setAddPhoto]=useState('')
    const [lat,setLat]=useState('')
  const [lng,setLng]=useState('')
    const [ showMap,setShowMap] = useState(false)
const handleButtonClick = () => {
  setShowMap(true);
};

const handleMapClose = () => {
  setShowMap(false);
};

        const rentalID=(data)=>{
            setRentalId(data)
         }
      
  const LatAndLng=(data)=>{
            // console.log(data)
            if(data){
              setLat(data.lat)
              setLng(data.lng)
            }
            //// console.log()(data)
          }
  const renderImage=async()=>{
    try{
            if(!rentalId&& rentalId===''){
                message.error('please add a course first')
            }
            else{
             const id =rentalId
            const data2 = document.getElementById('image').files[0]
            if(data2.size<1000000){
                message.loading('Processing')
                const upload ={
                    fileInput:data2,
                    folder:"rental",
                    endpoint:endpoints.aws
                  }
                  const result = await PostImage(upload)
                  const path = result.path
                  const dt ={
                    endpoint:endpoints.updateRentalImage,
                id:id,
                image:path
                  }

                  const result2 = await VPostData(dt)
                  if(result2){
                    document.getElementById('imagecheck').style.visibility='visible'
                    message.success('Successfully updated the Image')
                  }
                //// console.log()(data)
            }
            else{
                message.error('size must be less then 1MB')
                document.getElementById('image').files=''
                }
            }
        }catch(err){
            // console.log(err)
        }
        }

      const updateDetail=async()=>{
            try{
            const tagline = document.getElementById('companyName').value
            const state = document.getElementById('state').value
            const city = document.getElementById('city').value
            const address = document.getElementById('address').value
            const desc = document.getElementById('description').value
            const features = document.getElementById('features').value
            const price = document.getElementById('priceDay').value
            const deliveryChrages = document.getElementById('deliveryCharges').value
            const distance = document.getElementById('distance').value

            if(rentalId!==''){
            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
   
          const dt ={
                    rentalID:rentalId,
                    company:tagline,
                    state:state,
                    city:city,
                    address:address,
                    desc:desc,
                    features:features,
                    price:price,
                    delivery:deliveryChrages,
                    distance:distance,
                    lat:lat,
                    lng:lng,
                    endpoint:endpoints.updateRentalProduct
                }
                const result = await VPostData(dt)
                if(result){ 
                    setAddPhoto('Successfully Updated')
                    message.success('Successfully Updated')
                }
                      }
          else{
            message.info('please select the product to update')
          }
        }catch(err){
            // console.log(err)
        }finally{
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
<div className="profilecard2" style={{position:'relative'}}>
<h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Update Product Details </h1>
    <p style={{color:'grey',fontSize:10,justifyContent:'center',display:'flex'}}>Fill only the details which you want to update and leave the other details as blank</p>
    <h6 style={{color:'green'}}>{addPhoto}</h6>

<ProductName productname={(data)=>rentalID(data)}/>
 <div style={{position:'relative'}}>
<label className="profilelabeleff">Company Name</label>
    <input type="text" onChange={inputchange} className="form-control profileinput" name="cName" placeholder="Company Name"  id="companyName"/>
    <i class="bi bi-line Instprofileinputicon"></i>
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

<div className="col-md-6">
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
<span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add Product photo</span>
 
  <input type="file"  id="image"  accept=".png, .jpg"  style={{paddingLeft:'5px',borderRadius:'5px'}} onChange={renderImage} required/>
  <i class="bi bi-file-earmark-image"></i>
  <p style={{margin:0,fontSize:10,fontWeight:500,color:'grey'}}>Image size must be less than 1Mb</p>
</label>
</div>
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
      <div style={{marginTop:20}}>
      <h6 className="heading2" style={{display:'flex',justifyContent:'center',fontSize:18}}>Select your location on map</h6> 
  <span style={{display:'flex',justifyContent:'center'}}>
<button className="button" onClick={handleButtonClick} style={{fontSize:'12px',marginBottom:'10px'}}>Open Map</button>
</span>
</div>

        {showMap && (
          <div style={{position:'relative'}}>
<MyComponent  mapLocation={(data)=>LatAndLng(data)}/>
            <button onClick={handleMapClose} className="btn btn-dark" style={{fontSize:'12px',marginTop:'20px',marginBottom:'20px'}}>Close Map</button>
          </div>   
        )}

    </div>

<div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'30px',marginBottom:20}}>
<button className="bluebutton" onClick={updateDetail} ><span id="loader"></span> Update </button>
</div>
 </div>
</div>   
</div>   
        </>
    )
}
export default UpdateRental