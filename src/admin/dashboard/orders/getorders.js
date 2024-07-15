import { useQuery } from "@tanstack/react-query";
import React,{useEffect,useState} from "react";
import { AGetData } from "../../../config/vendor/Apiconfig";
import endpoints from "../../../config/config";
import '../content.css'
const TotalOrders=()=>{
    const [detail,setDetail] = useState('')
    const[tPrice,setTprice]=useState(0)
    const[detail2,setDetails2]=useState('')
    const [length,setLength]=useState(0)
    
    const dt ={
    endpoint:endpoints.AdgetAllOrders
    }

  const {data} = useQuery({
    queryKey:['totalorders'],
    queryFn:()=>AGetData(dt)
  })

    useEffect(()=>{
        let tp=0
       if(data){
              const d1 = data.data
              const d2=data.data2
              const d3=data.data3
              const d4 = data.data4
            const tData= [...d1,...d2,...d3,...d4]
             
               setDetail(tData)
               setDetails2(tData)
               setLength(tData.length)

                for(let i=0;i<tData.length;i++){
                    //console.log()(cota[i])
                   if(tData[i].paid>0){
                     tp += Number(tData[i].paid)
                   }
                }
                const tot = tp
                setTprice(tot)
            }
               // eslint-disable-next-line
    },[data])
     
   
      
const ordersDetails=(data)=>{
  
    if(data){
        if(data.length>0){
            
            return data.map((item,i)=>{
               
                return(
            
                  
                   <tr  key={i}>

                        <td>{i+1}</td>
                        <td>{item.paymentID}</td>
                        {item.institute_Id &&
                        <td>{item.institute_Id}</td>
            }
              {(item.AdminID) &&
                <td>{item.AdminID}</td>
            }
 {(item.adminId) &&
  <td>{item.adminId}</td>
            }
 {(item.productID) &&  
  <td>{item.adminID}</td>
 }

            {item.institute_Id &&
                        <td>{item.instituteName}</td>
            }
            {(item.AdminID) &&
             <td>{item.companyName}</td>
            }
             {(item.adminId) &&  
             <td>{item.companyName}</td>
             }
{(item.productID) && 
<td>{item.seller}</td>
            }
           
                        <td>₹{item.paid}</td>
            
            

                        <td>{item.DateandTime}</td>
                        </tr>
                  
                )
            })
        }
        else{
          return(
            <div>
              <h6>No orders to Show</h6>
            </div>
          )
        }
    }
    else{
      return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<img src="/images/loading2.gif" alt="loading" style={{width:50}}/>
        </div>
      )
    }
}
const searchChange=(e)=>{
    const data = e.target.value
if(data.length>3){
    // eslint-disable-next-line
    const dtfit= detail2.filter((item)=>{
        
        if(item.instituteName){
            return item.instituteName.toLowerCase().indexOf(data.toLowerCase())>-1  
        }
        if(item.companyName){
            return item.companyName.toLowerCase().indexOf(data.toLowerCase())>-1
        }   
         
    })
    setDetail(dtfit)
}
else{
setDetail(detail2)
}
}

const searchChange2=(e)=>{
    const data = e.target.value
if(data.length>3){
    // eslint-disable-next-line
    const dtfit= detail2.filter((item)=>{
        return item.paymentID.toLowerCase().indexOf(data.toLowerCase())>-1
         
    })
    setDetail(dtfit)
}
else{
setDetail(detail2)
}
}
    return(
        <>
         <div className="homesection">
         <div className="profilecard">
                <div className="profilecard2">

   <div className="orderBody">

<h4 style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>Orders Details</h4>
<div style={{display:'flex',marginTop:'30px',justifyContent:'space-around'}}>
<h6 style={{color:'grey'}}>Total Orders : <span style={{color:'orange',fontSize:'20px'}}>{length}</span></h6>
<h6 style={{color:'grey',alignItems:'center'}}>Total Amount Recieved : <span style={{fontSize:'20px',color:'black',fontFamily:'sans-serif',fontWeight:600}}>₹{tPrice.toLocaleString()}</span></h6>
</div>
<div className="row">
    <div className="col-md-6" style={{padding:'30px 50px'}}>
        <input type="text" className="form-control" onChange={searchChange} placeholder="Organization Name" />
    </div>
    <div className="col-md-6" style={{padding:'30px 50px'}}>
    <input type="text" className="form-control" onChange={searchChange2} placeholder="Payment ID" />
    </div>
</div>

<table className="table ordersTabel" style={{marginBottom:'40px'}}>
  <thead>

    <tr>
      <th scope="col">#</th>
      <th scope="col">paymentID</th>
      <th scope="col">Organization ID</th>
      <th scope="col">Organization Name</th>
      <th scope="col">Price</th>
      <th scope="col">Date and Time</th>
    </tr>
  </thead>
  <tbody>

{ordersDetails(detail)}

</tbody>
</table>
</div>
</div>
</div>
</div>
        </>
    )
}
export default TotalOrders