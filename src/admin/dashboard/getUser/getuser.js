import { useQuery } from "@tanstack/react-query";
import React,{useEffect,useState} from "react";
import { AGetData } from "../../../config/vendor/Apiconfig";
import endpoints from "../../../config/config";


const GetUser=()=>{

    const [user,setUser]=useState('')
  const dt ={
    endpoint:endpoints.AdgetUsers
  }
    const {data} = useQuery({
    queryKey:['allusers'],
    queryFn:()=>AGetData(dt)
   })
    useEffect(()=>{
       if(data){
            setUser(data)
       }
    },[data])
  

      const userRender=(data)=>{
        if(data){
            let i=0
            if(data.length>0){
                return data.map((item)=>{
                    i++
                    return (
                        
                        <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{item.uniqID}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><button className="btn btn-primary" style={{fontSize:'12px',padding:'5px',marginTop:'7px'}}>Deactive</button>
                     </td>
                      </tr>
                        
                    )
                })
            }
        }else{
          return(
            <img src="/images/loading2.gif" alt="loading" style={{width:50}}/>
          )
        }
      }

     
    return(
        <>
          <div className="homesection">
            <div className="profilecard">
                <div className="profilecard2">

   <div className="orderBody">
   <h4 style={{fontWeight:600,marginBottom:30}}>Users</h4>
<table className="table ordersTabel" style={{marginTop:'50px'}}>
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">uniqID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
    
  </thead>
  <tbody>
{userRender(user)}
</tbody>
    </table>
</div>
</div>
</div>
</div>

        </>
    )
}
export default GetUser