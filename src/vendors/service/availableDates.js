import React,{useState} from "react";
import ServiceNames from "./components/serviceName";
import { DatePicker, message } from "antd";
import { VPutData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
const {RangePicker} = DatePicker

const ServiceDates=()=>{
const [messageApi,contextHolder]=message.useMessage()
    const [addPhoto,setAddPhoto]=useState('')
    const [serviceId,setServiceId]=useState('')

          const updateDate=async()=>{
            try{
                if(serviceId!==''){
            const dt  ={
                id:serviceId,
                dates:selectedDates,
                endpoint:endpoints.serviceDates
            }
            messageApi.open({
                type:'loading',
                content:'Processing',
            })
            
            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
            const data = await VPutData(dt)
            if(data){
            setAddPhoto('Successfully Updated')
            messageApi.destroy()
            message.success('Updated successfully')
            }
        }else{
            message.error('please select the service person to update dates')
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

    const serviceRender=(data)=>{
        setServiceId(data)
        // console.log(data)
        }
        
    
    return(
        <>
        {contextHolder}
         <div className="homesection">
         <div className="profilecard">
<div className="profilecard2">
<div id="cardDiv" style={{marginBottom:20}}>
          <h1 style={{textAlign:'center',fontWeight:600,fontSize:30}}>Update Avaliable Dates</h1>
          <span style={{fontSize:'15px'}} id='headerMsg'>    </span>
        </div>

<div style={{display:'flex',justifyContent:'center'}} >
  <div className="card-body" >
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h6 style={{color:'green'}}>{addPhoto}</h6>
<ServiceNames serviceID ={(data)=>serviceRender(data)}/>
<label style={{fontWeight:'500',padding:'10px',marginTop:30,fontSize:18}}>Dates</label>
<RangePicker
onChange={handleDateChange}
   highlightToday={false}
   format="DD/MM/YYYY"
   id="DtPk"
   style={{padding:'10px 20px',borderRadius:20,background:'transparent',color:'grey'}}
   />

<p style={{color:'grey',fontSize:10,marginBottom:0}}>please select date leaving today's date</p>
<div>
  </div>
  </div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
<button className="button" onClick={updateDate} style={{width:'50%',marginBottom:'30px'}}><span id="loader"></span>Update</button>
 </div>
  </div>
  </div>
</div> 
</div>   
</div>   
        </>
    )
}
export default ServiceDates