import React, { useState } from "react";
import ProductName from "./components/productsName";
import { message } from "antd";
import endpoints from "../../config/config";
import { VPostData } from "../../config/vendor/Apiconfig";

const ProductAvailability=()=>{
    const [rentalId,setRentalId]=useState('')
    const [disabled,setDisabled]=useState(false)

    const rentalID=(data)=>{
        setRentalId(data)
     }

     const handleClick=async()=>{
        try{
            const av = document.getElementById('available').value
            if(rentalId!==''){
            if(av){
                document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
            const dt = {
                id:rentalId,
                status:av,
                endpoint:endpoints.Rentalproductstatus
            }

            const data = await VPostData(dt)
            if(data){
                message.success('Successfully Updated')
            }
        }else{
            message.info('Please Select product Status')
        }
    }else{
        message.error('Please select the product ')
    }

        }catch(err){
            // console.log(err)
        }finally{
            document.getElementById('loader').innerHTML='<span id="loader"></span>'
            setDisabled(false)
        }
     }

    return(
        <>
       <div className="homesection">
   <div className="profilecard"> 
<div className="profilecard2" >
<h1  style={{fontSize:30,fontWeight:600,textAlign:"center",marginBottom:40}}>Update Product status</h1>

<ProductName productname={(data)=>rentalID(data)}/>

<div style={{position:'relative',marginTop:40}}>
 <select className="form-select profileinput"  id='available' aria-label="Default select example">
  <option defaultValue value=''>Select the Availability </option>
  <option value="Available">Avaliable</option>
  <option value="Not Available">Not Available</option>
</select>

<i class="bi bi-patch-check-fill Instprofileinputicon"></i>
</div>
<div style={{textAlign:'center',marginTop:30}}>
<button className="bluebutton" onClick={handleClick} disabled={disabled}><span id="loader"></span> Submit</button>
</div>
    </div>
</div>
        </div>
        </>
    )
}
export default ProductAvailability