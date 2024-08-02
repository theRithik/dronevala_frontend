import React,{useEffect,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import jwtDecode from "jwt-decode";
import { Empty, message } from "antd";

const url = "https://vauni363b1.execute-api.ap-south-1.amazonaws.com/prod/rental/getRentalDetails"
const UserRentalDetails=(props)=>{
    const [service,setService]=useState('')
    const [from,setFrom]=useState('')
    const [locDms,setLocDms]=useState('')
    const {id}=useParams()
    const [name,setName]=useState('')
    const [msg,setMsg]=useState('')
const history = useNavigate()
    const {toPDF,targetRef}=usePDF({filename: `${name}_OrderDetails.pdf`});
   
    useEffect(()=>{

        const token = localStorage.getItem('token')
        if(token){
            const nm = localStorage.getItem('name')
            const decode = jwtDecode(token)
            const exp = decode.exp
            if(exp>Math.floor(Date.now() / 1000)){
              if(exp<Math.floor(Date.now()/1000)+(10*60)){  
              setMsg(`Hello ${nm} your Session was about to Experied Please Logout and login Again for a smooth expericence`)
              const toastLiveExample = document.getElementById('liveToast2')
              toastLiveExample.classList.add('show')
              setTimeout(()=>{
                toastLiveExample.classList.remove('show')
              },8000)
              }
            }
            else{
              setMsg(`Hello ${nm} your Session was Experied Please Login Again`)
              const toastLiveExample = document.getElementById('liveToast2')
              toastLiveExample.classList.add('show')
              setTimeout(()=>{
                toastLiveExample.classList.remove('show')
                history('/user/login')
                localStorage.removeItem('name')
                localStorage.removeItem('token')
                localStorage.removeItem('_id')
              },5000)
            }
          }
          else{
            setMsg('Sorry you are not authorised to access this page you need to login first')
            const toastLiveExample = document.getElementById('liveToast2')
            toastLiveExample.classList.add('show')
            setTimeout(()=>{
              toastLiveExample.classList.remove('show')
              history('/user/login')
            },4000)
          }

            fetch(url,{
                method:'POST',
                    headers:{
                        'accept':'application/json',
                    'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        "id":id,
                        "uid":localStorage.getItem('_id'),
                        "token":localStorage.getItem('token')
                    })
                 }).then((res)=>res.json())
                 .then((data)=>{
                    //console.log()(data.data)
                    if(data.auth===false){
setMsg(data.token)
const toastLiveExample = document.getElementById('liveToast2')
toastLiveExample.classList.add('show')
setTimeout(()=>{
  toastLiveExample.classList.remove('show')
},5000)

                    }
                    else{
                    if(data.data.length>0){
                        //console.log()(data.data)
                        setName(data.data[0].userName)
                        setFrom(data.data[0].bookingDates)

                        // function toDMS(deg) {
                        //     var d = Math.floor(deg);
                        //     var min = Math.floor((deg - d) * 60);
                        //     var sec = ((deg - d - min / 60) * 3600).toFixed(2);
                        //     return d + "°" + min + "'" + sec + "\"";
                        // }
                        
                        // function convertLatLngToDMS(lat, lng) {
                        //     var latDMS = lat >= 0 ? "N" : "S";
                        //     var lngDMS = lng >= 0 ? "E" : "W";
                            
                        //     lat = Math.abs(lat);
                        //     lng = Math.abs(lng);
                            
                        //     var latDMSString = toDMS(lat);
                        //     var lngDMSString = toDMS(lng);
                            
                        //     return latDMSString + " " + latDMS + " " + lngDMSString + " " + lngDMS;
                        // }
                        // const lat = Number(data.data[0].Platitude)
                        // const lng = Number(data.data[0].Plongitude)

                        //  const dms = convertLatLngToDMS(lat, lng)
                        //  setLocDms(dms)
                          //console.log()(dms) 
                    }
                    else{
                        message.error('You did not made any order with that id')
                    }
                }
                 })

                  // eslint-disable-next-line
    },[])

    const booking=()=>{
        if(from.length>11){
            const m1 = from.split('~')[0]
            const m2 = from.split('~')[1]
            //console.log()(from)
            return(
                <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Dates Booked : </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>From {m1}  To {m2}</h6>
            </div>
            </div>
            )
        }
        else{
        return(
   <div className="row">
            <div className="col-md-5 col-sm-5" >
        <h6>Booked Dates : </h6>
        </div>
        <div className="col-md-7 col-sm-7"> 
        <h6>{from}</h6>
        </div>
        </div>
        )
        }
    }
   
    const renderDetails=(data)=>{
        if(data){
            if(data.length>0){
            return data.map((item)=>{
             return(
                   <div key={item.id} style={{position:'relative'}}>
                   <span onClick={()=>history(-1)} style={{position:'absolute',left:50,top:10,borderRadius:'50%',background:'#e3e5ee',border:'1px solid #e3e5ee',paddingLeft:7,paddingTop:1,paddingBottom:1,paddingRight:7,cursor:'pointer'}}>
                    <i class="fa-solid fa-angle-left" style={{color:'red'}}></i></span>
                     <button onClick={()=>toPDF()} className="btn btn-primary" style={{position:'absolute',right:'60px',top:'20px',fontSize:'12px',borderRadius:'20px'}}><i className="fa-solid fa-arrow-down" ></i> PDF</button>
                    <div className="section6" ref={targetRef}  >
                        <div className="detailOd" style={{display:'block',position:'relative'}}>
                     <div style={{paddingLeft:'20px',paddingRight:'20px',marginTop:'40px',width:'100%',position:'relative',zIndex:'3'}} id="bilDiv" >
            <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Product Name :</h6>
                </div>
                <div className="col-md-7 col-sm-7">
                <h6>{item.productName}</h6>
                </div>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5">
                <h6>Brand :</h6>
                </div>
                <div className="col-md-7 col-sm-7">              
              <h6>{item.brand}</h6>
              </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Product Category :</h6>
                </div>
                <div className="col-md-7 col-sm-7">
                <h6>{item.productCategory}</h6>
                </div>
                </div>
              <div className="row">
                <div className="col-md-5 col-sm-5">
                <h6>Company Name :</h6>
                </div>
                <div className="col-md-7 col-sm-7">              
              <h6>{item.companyName}</h6>
              </div>
              </div>
              {/* <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Company Location :</h6>
                </div>
                <div className="col-md-7 col-sm-7">  
                <h6> <a href={`https://www.google.com/maps/place/${locDms}/@${item.Platitude},${item.Plongitude},18z/data=!3m1!4b1!4m4!3m3!8m2!3d16.535219!4d80.640256?entry=ttu`} rel="noopener noreferrer" target="_blank" >
                    <button className="btn btn-primary" style={{borderRadius:'20px'}}><i className="fa-solid fa-location-dot" style={{fontSize:'14px'}}></i> Google</button></a>    
           </h6>
                </div>
                </div> */}
              {/* <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Company Phone :</h6>
                </div>
                <div className="col-md-7 col-sm-7">  
                <h6>{item.companyPhone}</h6>
                </div>
                </div> */}
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Name: </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.userName}</h6>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Email: </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.userEmail}</h6>
                </div>
                <div className="row">
                <div className="col-md-5 col-sm-5" >
                <h6>Phone: </h6>
                </div>
                <div className="col-md-7 col-sm-7"> 
                <h6>{item.userPhone}</h6>
                </div>
                {/* <div className="row">
                <div className="col-md-5 col-sm-5" >  
            <h6 >Order Type:</h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 >{item.orderType}</h6>
            </div>
            </div> */}
            
            {booking()}
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Booked on  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6 style={{color:'grey'}}>{item.DateandTime}</h6>
            </div>           
            </div>  
            {item.orderType==='delivery' &&
             <div className="row">
             <div className="col-md-5 col-sm-5" >
         <h6>Delivery Distance </h6>
         </div>
         <div className="col-md-7 col-sm-7"> 
         <h6 style={{color:'grey'}}>{item.distance}KM</h6>
         </div>           
         </div> 
         }  
            {item.orderType==='delivery' &&
             <div className="row">
             <div className="col-md-5 col-sm-5" >
         <h6>Delivery Charges </h6>
         </div>
         <div className="col-md-7 col-sm-7"> 
         <h6 style={{color:'grey'}}>{item.deliveryCharges}</h6>
         </div>           
         </div> 
         }
         
            <div className="row">
                <div className="col-md-5 col-sm-5" >
            <h6>Total Paid :  </h6>
            </div>
            <div className="col-md-7 col-sm-7"> 
            <h6>₹ {item.paid}</h6>
            </div>
            </div>   
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            )
             })
            }else{
              
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
                        <>
                          <div style={{marginTop:'20%',display:'flex',justifyContent:'center'}}>
                           <img src='/images/loading2.gif' style={{width:100}} alt='loader'/>
                    </div>
                    </>
                    )
                }
                
        
    }
    return(
        <>
          <div className="homesection" >
         <div className="profilecard" ref={componentRef2}>
         <div className="profilecard2" style={{padding:0}}>
         
        
        {renderDetails(service)}
        </div>
</div>
</div>

        </>
    )
}
export default UserRentalDetails