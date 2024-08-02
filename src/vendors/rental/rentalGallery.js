import React,{useState}from "react"
import { message } from "antd"
import { PostImage } from "../../config/vendor/aws/awsapi"
import endpoints from "../../config/config"
import { VPostData } from "../../config/vendor/Apiconfig"
import ProductName from "./components/productsName"

const RentalGallery=()=>{
    const [disable,setDisabled]= useState(false)
    const [rentalId,setRentalId]=useState('')
    const [addPhoto,setAddPhoto]=useState('')


    const photoGallery=async()=>{
      try{
          const upload = document.getElementById('PhotoS').files
    
      if(rentalId!==''){
          if(upload.length<6 && upload[0]!==undefined){
            setDisabled(true)
       document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
      message.loading('Processing')
      let arr=[]
      for(let i =0;i<upload.length;i++){
          let obj={}
          const dt  ={
              fileInput:upload[i],
              folder:"rental",
              endpoint:endpoints.aws
            }
            const result = await PostImage(dt)
            obj['image'+i] = result.path
            arr.push( obj['image'+i])
      }
       // console.log(arr)       
        const im ={
          endpoint:endpoints.addRentalGallery,
          image:arr,
          id:rentalId
        }
        const result2= await VPostData(im)
        if(result2){
      message.success('Images Successfully Added')
      setAddPhoto('Image Successfully Added')
        }
      }else{
          message.error('you can add only 5 images in a single time')
      }
      }else{
          message.error('please select the service person to update dates')
      }
      }catch(err){
          // console.log(err)
      }finally{
        setDisabled(false)
          document.getElementById('loader').innerHTML='<span id="loader"></span>'
      }
      }
    
      const rentalID=(data)=>{
        setRentalId(data)
     }
  

               
const [imgurl2,setImgurl2]=useState('')

const imageAdd=()=>{
  const img = document.getElementById('PhotoS').files[0]
  if(img?.size<1100000){
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
    
    return(
        <>
       
            <div className="homesection">
   <div className="profilecard"> 
<div className="profilecard2" >
<div style={{display:'flex',justifyContent:'center'}}>
<div >
    <h1  style={{fontSize:30,fontWeight:600,textAlign:"center"}}>Upload Rental Product photo gallery</h1>
    <p style={{color:'grey',fontSize:10,display:'flex',justifyContent:'center'}}>Upload images less than 1mb for faster load, You can only upload upto 5 images in a single time</p>
   <div style={{display:'flex',justifyContent:'center'}}>
   <h6 style={{color:'green'}}>{addPhoto}</h6>
   </div>

<ProductName productname={(data)=>rentalID(data)}/>


<div className="centerText" style={{marginTop:40}}>
<label  className="drop-container2 col-md-6" id="dropcontainer2" style={{marginBottom:20}}>
  <span className="drop-title2" id="PPhoto" style={{position:'absolute',zIndex:'1',top:'5px'}}>Add product Iamges </span>
  <i class="bi bi-file-earmark-image"></i>
  <input type="file" style={{paddingLeft:'5px',borderRadius:'5px'}} id="PhotoS" name="foo" accept=".jpg,.png" onChange={imageAdd}   multiple/>
  <img src={imgurl2} id="prev" style={{position:'absolute',display:'none',zIndex:'2',width:'102%',height:'103%',borderRadius:'10px'}} alt="preview"/>
  <p style={{margin:0,fontSize:10,fontWeight:500}}>Each image must be less than 1 Mb</p>
</label>
</div>

    <div style={{display:'flex',justifyContent:'center'}}>
<button className="bluebutton" onClick={photoGallery} disabled={disable} ><span id="loader"></span>Submit</button>

  </div>
  </div>
  </div>
</div>      
</div>  
</div>
</>
    )

}
export default RentalGallery