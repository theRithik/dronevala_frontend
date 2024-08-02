import React,{useEffect,useState} from "react";
import "./order.css"
import {Link} from "react-router-dom"
import { Empty } from "antd";
import { useQuery } from "@tanstack/react-query";
import { GetData } from "../../../config/vendor/Apiconfig";
import endpoints from "../../../config/config";


const Userorders=()=>{
    const [course,setCourse]=useState('')
    const [service,setService]=useState('')
    // const [value,setValue]=useState('')
    // const [ sercount,setSercount]=useState('')
    const [v1,setV1]=useState(true)
    const [v2,setV2]=useState(false)
    const [v3,setV3]=useState(false)
    // const [v4,setV4]=useState(false)
 
    const [rental,setRental]=useState('')
    // const [reCount,setReCount]=useState('')
    // const [store,setStore]=useState('')
    // const [stCount,SetStCount]=useState('')
    // const [msg,setMsg]=useState('')
    // const history=useNavigate()
 
//   let count = 0;
//   let count2 = 0;
//   let count3 =0
const dt ={
    endpoint:endpoints.usercourseorder
}
const {data} = useQuery({
    queryKey:['usercourseorder'],
    queryFn:()=> GetData(dt)
})
const dt2={
    endpoint:endpoints.userserviceorder
}
const {data:serv}=useQuery({
    queryKey:['userserviceorder'],
    queryFn:()=> GetData(dt2)
})
const dt3={
    endpoint:endpoints.getRentalOrder
}
const {data:ren}=useQuery({
    queryKey:['userrentalorder'],
    queryFn:()=> GetData(dt3)
})
// const dt4={
//     endpoint:endpoints.userstoreorder
// }
// const {data:stor}=useQuery({
//     queryKey:['userstoreorder'],
//     queryFn:()=> GetData(dt4)
// })
    useEffect(()=>{
       if(data){
        setCourse(data.data.reverse())
       }
       if(serv){
        setService(serv.data.reverse())
       }
       if(ren){
        console.log(ren)
        setRental(ren.data.reverse())
       }
    //    if(stor){
    //  setStore(stor.data.reverse())
    //    }
        // eslint-disable-next-line
    },[data,serv])

  


    const renderOrder=(data)=>{
if(data){  
    if(data.length>=1){  
        return data.map((item)=>{
            return(
            
             <div key={item.id} style={{marginTop:'30px'}}>
                <Link to={`/user/courseorder/${item.id}`} style={{color:'black'}}>
                <div className=""  id="Aodisplay">
               
                     <div className="" style={{marginTop:'10px',marginLeft:'20px',display:'flex',width:'50%',overflow:'hidden',textOverflow:'ellipsis'}}> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                   <h5 style={{display:'inline-block',marginLeft:'15px',fontSize:17,marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.instituteName}</h5>
                    </div>
                    <div style={{display:'inline-block',position:'absolute',top:'8px',right:'5px',marginTop:'9px',height:'20px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                 <p style={{color:'grey',fontSize:'9.5px',display:'inline-block',marginLeft:'5px'}}>{item.DateandTime}</p>
                    </div>
                    <div style={{display:'flex',width:'100%'}} className="servi">
                       <span style={{fontSize:'12px',marginLeft:'43px'}}>Course </span> <h6 style={{fontSize:'12px',marginLeft:'2px',marginTop:'3px',color:'grey',fontWeight:700}}> : {item.courseName}</h6>
                    </div>
                </div>
</Link>
             </div>
        )
            })
    }
    else{
        return(
            <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 100 }}
            description={
              <h6 style={{fontSize:12,fontWeight:700}}> No Order Placed</h6>
            }
            style={{margin:'auto'}}
          >
          </Empty>
        )
    }
   
} 
else{
    return(
        <div style={{marginTop:'10%',display:'flex',justifyContent:'center'}}>
        <img src="/images/loading2.gif" alt="empty" style={{width:30}}/>
    </div>
    )
}
    }
    const renderService=(data)=>{
        if(data){
            if(data.length>=1){
            return data.map((item)=>{
                return(
                 <div key={item.id} style={{marginTop:'30px'}}>
                 <Link to={`/user/serviceorder/${item.id}`} style={{color:'black'}}>
                    <div className=""  id="Aodisplay">
                       
                          <div className="" style={{marginTop:'10px',marginLeft:'20px',display:'flex',width:'50%',overflow:'hidden',textOverflow:'ellipsis'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                       <h5 style={{display:'inline-block',marginLeft:'15px',fontSize:17,marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.servicePerson}</h5>
                        </div>
                        <div style={{display:'inline-block',position:'absolute',top:'8px',right:'5px',marginTop:'9px',height:'20px'}}>
                                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                     <p style={{color:'grey',fontSize:'9.5px',display:'inline-block',marginLeft:'5px'}}>{item.DateandTime}</p>
                        </div>
                        <div style={{display:'flex',width:'100%'}} className="servi" >
                        <span style={{fontSize:'12px',marginLeft:'43px'}}>Service </span> 
                        <h6 style={{fontSize:'12px',marginLeft:'2px',marginTop:'3px',color:'grey',fontWeight:700}}> : {item.subCategory}</h6>
                        </div>
                    </div>
</Link>
                 </div>
        
            )
                })
        }
    
        else{
            return(
                <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 100 }}
            description={
              <h6 style={{fontSize:12,fontWeight:700}}> No Order Placed</h6>
            }
            style={{margin:'auto'}}
          >
          </Empty>
            )
        }
    
    }
    else{
        return(
            <div style={{marginTop:'10%',display:'flex',justifyContent:'center'}}>
            <img src="/images/loading2.gif" alt="empty" style={{width:30}}/>
        </div>
        )
    }
}

const renderRental=(data)=>{
    if(data){
        if(data.length>=1){
        return data.map((item)=>{
            return(
             <div key={item.id} style={{marginTop:'30px'}}>
             <Link to={`/user/rentlorder/${item.id}`} style={{color:'black'}}>
                <div className=""  id="Aodisplay">
                   
                      <div className="" style={{marginTop:'10px',marginLeft:'20px',display:'flex',width:'50%',overflow:'hidden',textOverflow:'ellipsis'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                   <h5 style={{display:'inline-block',marginLeft:'15px',fontSize:17,marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.productName}</h5>
                    </div>
                    <div style={{display:'inline-block',position:'absolute',top:'8px',right:'5px',marginTop:'9px',height:'20px'}}>
                             <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                 <p style={{color:'grey',fontSize:'9.5px',display:'inline-block',marginLeft:'5px'}}>{item.date}</p>
                    </div>
                    <div style={{display:'flex',width:'100%'}} className="servi" >
                    <span style={{fontSize:'12px',marginLeft:'43px'}}>Company </span> 
                    <h6 style={{fontSize:'12px',marginLeft:'2px',marginTop:'3px',color:'grey',fontWeight:700}}> : {item.companyName}</h6>
                    </div>
                </div>
</Link>
             </div>
    
        )
            })
    }

    else{
        return(
            <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 100 }}
        description={
          <h6 style={{fontSize:12,fontWeight:700}}> No Order Placed</h6>
        }
        style={{margin:'auto'}}
      >
      </Empty>
        )
    }

}
else{
    return(
        <div style={{marginTop:'10%',display:'flex',justifyContent:'center'}}>
        <img src="/images/loading2.gif" alt="empty" style={{width:30}}/>
    </div>
    )
}
}

// const renderRental=(data)=>{
//     if(data){
//         if(data.length>=1){
//         return data.map((item)=>{
//             return(
//              <div key={item.id} style={{marginTop:'30px'}}>
//              <Link to={`/vendor/serviceorder/${item.id}`} style={{color:'black'}}>
//                 <div className=""  id="Aodisplay">
                   
//                       <div className="" style={{marginTop:'10px',marginLeft:'20px',display:'flex',width:'50%',overflow:'hidden',textOverflow:'ellipsis'}}>
//                           <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
//                    <h5 style={{display:'inline-block',marginLeft:'15px',fontSize:18,marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.productName}</h5>
//                     </div>
//                     <div style={{display:'inline-block',position:'absolute',top:'8px',right:'5px',marginTop:'9px',height:'20px'}}>
//                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
//                  <p style={{color:'grey',fontSize:'9.5px',display:'inline-block',marginLeft:'5px'}}>{item.DateandTime}</p>
//                     </div>
//                     <div style={{display:'flex',width:'100%'}} className="servi" >
//                     <span style={{fontSize:'12px',marginLeft:'43px'}}>Company </span> 
//                     <h6 style={{fontSize:'12px',marginLeft:'2px',marginTop:'3px',color:'grey',fontWeight:700}}> : {item.companyName}</h6>
//                     </div>
//                 </div>
// </Link>
//              </div>
    
//         )
//             })
//     }

//     else{
//         return(
//             <Empty
//             image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
//             imageStyle={{ height: 100 }}
//             description={
//               <h6 style={{fontSize:12,fontWeight:700}}> No Order Placed</h6>
//             }
//             style={{margin:'auto'}}
//           >
//           </Empty>
//         )
//     }

// }
// else{
//     return(
//         <div style={{marginTop:'10%',display:'flex',justifyContent:'center'}}>
//         <img src="/images/loading2.gif" alt="empty" style={{width:30}}/>
//     </div>
//     )
// }
// }

// const renderStore=(data)=>{
//     if(data){
//         if(data.length>=1){
//         return data.map((item)=>{
//             return(
//              <div key={item.id} style={{marginTop:'30px'}}>
//              <Link to={`/vendor/serviceorder/${item.id}`} style={{color:'black'}}>
//                 <div className=""  id="Aodisplay">
                    
//                       <div className="" style={{marginTop:'10px',marginLeft:'20px',display:'flex',width:'50%',overflow:'hidden',textOverflow:'ellipsis'}}>
//                           <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="1em"  className="dotes" style={{marginBottom:'12px',fill:'gray'}} viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
//                    <h5 style={{display:'inline-block',marginLeft:'15px',fontSize:18,marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.productName}</h5>
//                     </div>
//                     <div style={{display:'inline-block',position:'absolute',top:'8px',right:'5px',marginTop:'9px',height:'20px'}}>
//                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
//                  <p style={{color:'grey',fontSize:'9.5px',display:'inline-block',marginLeft:'5px'}}>{item.DateandTime}</p>
//                     </div>
//                     <div style={{display:'flex',width:'100%'}} className="servi" >
//                     <span style={{fontSize:'12px',marginLeft:'43px'}}>Brand </span> 
//                     <h6 style={{fontSize:'12px',marginLeft:'2px',marginTop:'3px',color:'grey',fontWeight:700}}> : {item.brand}</h6>
//                     </div>
//                 </div>
// </Link>
//              </div>
    
//         )
//             })
//     }

//     else{
//         return(
//             <Empty
//             image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
//             imageStyle={{ height: 100 }}
//             description={
//               <h6 style={{fontSize:12,fontWeight:700}}> No Order Placed</h6>
//             }
//             style={{margin:'auto'}}
//           >
//           </Empty>
//           )
//     }

// }
// else{
//     return(
//         <div style={{marginTop:'10%',display:'flex',justifyContent:'center'}}>
//         <img src="/images/loading2.gif" alt="empty" style={{width:30}}/>
//     </div>
//     )
// }
// }



const handle1=()=>{
const qr = document.querySelectorAll('.btn-primary')
if(qr.length>0){   
    qr[0].classList.remove('btn-primary')
    document.getElementById('btn4').classList.add('btn-primary')
    document.getElementById('btn5').classList.remove('btn-dark')
    document.getElementById('btn6').classList.remove('btn-dark')
    // document.getElementById('btn7').classList.remove('btn-dark')
    setV1(true)
    setV2(false)
    setV3(false)
    // setV4(false)
}
else{
    document.getElementById('btn4').classList.add('btn-primary')
    setV1(true)
    setV2(false)
    setV3(false)
    // setV4(false)
}
}

const handle2=()=>{
    const qr = document.querySelectorAll('.btn-primary')
if(qr.length>0){   
    qr[0].classList.remove('btn-primary')
    document.getElementById('btn5').classList.add('btn-primary')
    document.getElementById('btn4').classList.remove('btn-dark')
    document.getElementById('btn6').classList.remove('btn-dark')
    // document.getElementById('btn7').classList.remove('btn-dark')
    setV1(false)
    setV2(true)
    setV3(false)
    // setV4(false)
}
else{
    document.getElementById('btn5').classList.add('btn-primary')
    setV1(false)
    setV2(true)
    setV3(false)
    // setV4(false)
}
}
const handle3=()=>{
    const qr = document.querySelectorAll('.btn-primary')
    if(qr.length>0){   
        qr[0].classList.remove('btn-primary')
    document.getElementById('btn5').classList.remove('btn-dark')
    document.getElementById('btn4').classList.remove('btn-dark')
    document.getElementById('btn6').classList.add('btn-primary')
    // document.getElementById('btn7').classList.remove('btn-dark')
    setV1(false)
    setV2(false)
    setV3(true)
    // setV4(false)
}
else{
    document.getElementById('btn6').classList.add('btn-primary')
    setV1(false)
    setV2(false)
    setV3(true)
    // setV4(false)
}
}
// const handle4=()=>{
//     const qr = document.querySelectorAll('.btn-primary')
//     if(qr.length>0){   
//         qr[0].classList.remove('btn-primary')

//     document.getElementById('btn5').classList.remove('btn-dark')
//     document.getElementById('btn4').classList.remove('btn-dark')
//     document.getElementById('btn6').classList.remove('btn-dark')
//     document.getElementById('btn7').classList.add('btn-primary')
//     setV1(false)
//     setV2(false)
//     setV3(false)
//     setV4(true)
// }else{
//     document.getElementById('btn7').classList.add('btn-primary')
//     setV1(false)
//     setV2(false)
//     setV3(false)
//     setV4(true)
// }
// }
    return(
        <>
         <div className="homesection" >
         <div className="profilecard">
         <div className="profilecard2" >
        <div className="row">
            <div  id="ordersTab2">
            <div style={{justifyContent:'center',display:'flex',}}>
        <div id='buttonsEffect' >
            
             <button className="btn btn-primary" id='btn4' style={{borderRadius:'15px',minWidth:100}} onClick={handle1} >Academy</button>
            
           
           <button className="btn" id="btn5" style={{borderRadius:'15px',minWidth:100}} onClick={handle2}>Service</button> 
            
          <button className="btn" id="btn6" style={{borderRadius:'15px',minWidth:100}} onClick={handle3}>Rental</button> 
            
           
             {/* <button className="btn" id="btn7" style={{borderRadius:'15px',minWidth:100}} onClick={handle4}>Store</button>  */}
            
            </div>
        </div>
{v1 &&
     <div className="section5" >
     <div className="">
     <i class="fa-solid fa-screwdriver-wrench"  style={{marginTop:'5px',fontSize:'1.3em',color:'rgb(139 165 207)',display:'inline-block'}} ></i>
                 <h5 style={{marginLeft:'15px',paddingRight:'25%',display:'inline-block',marginBottom:'0'}}>Academy Orders</h5>
                   <i class="bi bi-filter filtericon2" ></i>

                {/* <p  id="orderMsg">{value?value:'Orders'}</p> */}
                 </div>
{renderOrder(course)}
</div>
}
{v2 &&
<div className="section5" >
<div className="">
<i class="fa-solid fa-screwdriver-wrench"  style={{marginTop:'5px',fontSize:'1.3em',color:'rgb(139 165 207)',display:'inline-block'}} ></i>
            <h5 style={{marginLeft:'15px',paddingRight:'25%',display:'inline-block',marginBottom:'0'}}>Service Orders</h5>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{display:'inline-block',float:'right',marginTop:'11px',marginRight:'20px'}} viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                {/* <p  id="orderMsg">{sercount?sercount:'Orders'}</p> */}
                 </div>
{renderService(service)}
</div>
}

{v3 &&
<div className="section5" >
<div className="">
<i class="fa-solid fa-screwdriver-wrench"  style={{marginTop:'5px',fontSize:'1.3em',color:'rgb(139 165 207)',display:'inline-block'}} ></i>
            <h5 style={{marginLeft:'15px',paddingRight:'25%',display:'inline-block',marginBottom:'0'}}>Rental Orders</h5>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{display:'inline-block',float:'right',marginTop:'11px',marginRight:'20px'}} viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                {/* <p  id="orderMsg">{reCount?reCount:'Orders'}</p> */}
                 </div>
{renderRental(rental)}
</div>
}

{/* {v4 &&
<div className="section5" >
<div className="">
    
<i class="fa-solid fa-bag-shopping" style={{marginTop:'5px',fontSize:'1.3em',color:'rgb(161 198 216)',display:'inline-block'}} ></i>
             <h5 style={{marginLeft:'15px',paddingRight:'25%',display:'inline-block',marginBottom:'0'}}>Store Orders</h5>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{display:'inline-block',float:'right',marginTop:'11px',marginRight:'20px'}} viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                <p  id="orderMsg">{stCount?stCount:'Orders'}</p>
                 </div>
{renderStore(store)}
</div>
} */} 
</div>
</div>
</div>
</div>
</div>  
        </>
    )
}
export default Userorders