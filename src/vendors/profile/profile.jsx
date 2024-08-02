import React,{useEffect, useState} from "react";
import './profile.css'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { VGetData, VPostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { PostImage } from "../../config/vendor/aws/awsapi";
import { message } from "antd";
import { useOutletContext } from "react-router-dom";


const VProfile=()=>{
const [details,setDetails]=useState({
    name:'',
    email:'',
    phone:'',
    alterEmail:'',
    instName:'',
    state:'',
    address:''
})
const [diable,setDisable]=useState(false)
const [loading,setLoading]=useState(false)
const[photo,setPhoto]=useState('')
const context = useOutletContext()
   const ht={
    token:localStorage.getItem('vtoken'),
    endpoint:endpoints.vendorFullDetails
   }
const {data}=useQuery({
    queryKey:['vprofile'],
    queryFn:()=>VGetData(ht)
})

useEffect(()=>{
if(data){
    setDetails({
        name:data[0].Name,
        email:data[0].Institute_Email,
        phone:data[0].phone_Number,
        alterEmail:data[0].alternative_Email,
        instName:data[0].Institute_Name,
        address:data[0].Address
    })
    setPhoto(data[0].Profile_photo)
}
},[data])

    const inputchange=(e)=>{
        const vl = e.target.value
        if(vl.length>0){
            e.target.previousSibling.style.display="block"
        }
        else{
            e.target.previousSibling.style.display="none"
        }
        setDetails({
            ...details,
            [e.target.name]:e.target.value
        })
        // console.log(e.target.value)

    }
  
    const queryClient = useQueryClient()
const mutation = useMutation({
    mutationFn:(data)=>VPostData(data),
    mutationKey:['profileedit'],
    onSuccess:()=> queryClient.invalidateQueries('vprofile')
})
    const updateDetails=async()=>{
        try{
            if(details.name!=='' && details.email!=='' && details.phone!=='' && details.alterEmail!=='' && details.instName!=='' && details.address !==''){
                document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'    
                setDisable(true)
                message.loading('Processing')
                    const newData ={
                        name:details.name,
                        email:details.email,
                        phone:details.phone,
                        alterEmail:details.alterEmail,
                        instName:details.instName,
                        address:details.address,
                        endpoint:endpoints.vendorUpdate,
                    }     
                const result = await mutation.mutate(newData)
                // console.log(result)
                message.destroy()
                return result
            }else{
                alert('Please fill all the details')
            }
        }
        catch(err){
        // console.log(err)
        }finally{
            message.destroy()
            document.getElementById('loader').innerHTML='<span id="loader"></span>'
            setDisable(false)    
        }
    }

const imagAdd=async(event)=>{
    try{
    const img = event.target.files[0]
    if(img?.size<1100000){
        setLoading(true)
        message.loading('Processing')
        const dt={
            endpoint:endpoints.aws,
             fileInput:img,
             folder:"vendors"
        }
        const result = await PostImage(dt)
        // console.log(result.path)
        if(result){
        const mt ={
            endpoint:endpoints.vendorImage,
            image:result.path
        }
        const result2 = await VPostData(mt)
        if(result2){
        message.destroy()
        message.success('Updated Successfully')
        setPhoto(result.path)
        context.setImage(result.path)
        }
    }
    }else{
        message.info('image must be less than 1Mb')
        event.target.value =""
    }
    }catch(err){
         event.target.value =""
        // console.log(err)
    }finally{
        setLoading(false)
    }
}

    return(
        <>
          <div className="homesection">
            <div className="profilecard">
                <div style={{padding:'5%'}} className="profilecard2">
                    <div>
<h1>Hello {details.name} 👋</h1>

</div>
<div style={{marginTop:'10%'}}>
    <div className="row">
        <div className="col-md-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{position:'relative'}}>
                {loading ? <img src="/images/loading2.gif" style={{width:30,position:'relative',bottom:80,right:15}} alt="loading"/>
                : photo ? <img src={`${endpoints.imageprefix}${photo}`} alt="profile" style={{width:'80%',borderRadius:'50%'}}/>
                :<img src="/images/addimg.svg" alt="add" style={{width:'80%',borderRadius:'50%'}}/>
            
    }
            <input type="file" accept=".png,.jpg" id="image" onChange={imagAdd} className="ProfileiMg"/>
            <i class="bi bi-patch-plus-fill imgAddBTN"></i>
            </div>

        </div>
        <div className="col-md-6">
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Company Name</label>
    <input type="text"  onChange={inputchange} name="instName" className="form-control profileinput" value={details.instName} placeholder="Company Name" id="name"/>
    <i class="bi bi-buildings Instprofileinputicon"></i>
        </div>
            <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Email</label>
    <input type="email"  onChange={inputchange} name="email" className="form-control profileinput" value={details.email} placeholder="Email" id="email"/>
    <i class="bi bi-envelope-at Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Phone</label>
    <input type="number"  onChange={inputchange} name="phone" className="form-control profileinput" value={details.phone} placeholder="Phone" id="phone"/>
    <i class="bi bi-phone Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Alternative Email</label>
    <input type="text"  onChange={inputchange} name="alterEmail" className="form-control profileinput" value={details.alterEmail} placeholder="Alternative Email" id="code"/>
    <i class="bi bi-envelope-arrow-down Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Name</label>
    <input type="text"  onChange={inputchange} name="name"  className="form-control profileinput" value={details.name} placeholder="Name" id="state"/>
    <i class="bi bi-person Instprofileinputicon"></i>
        </div>
        <div style={{position:'relative'}}>
        <label className="profilelabeleff2">Address</label>
    <textarea type="text"  onChange={inputchange} name="address"  className="form-control profileinput" value={details.address} placeholder="Address" id="address"></textarea>
    <i class="bi bi-map Instprofileinputicon"></i>
        </div>
        <div style={{marginTop:'10%'}}>
            <button className="button profilebutton" disabled={diable} onClick={updateDetails}><span id="loader"></span>Update</button>
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
export default VProfile