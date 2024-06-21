import React from "react";
import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";
import { useQuery } from "@tanstack/react-query";

const Trainer =({id})=>{
    
    const det={
      cid:id,
      endpoint:endpoints.getTrainer
    }
const {data}=  useQuery({
    queryKey:['academyDetails',det.cid,'trainer'],
    queryFn:()=>PostData(det)
  })

    const handleRender=(data)=>{
if(data){
    if(data.length>0){
        return data.map((item,i)=>{
   return <div className="row trainerCard" key={i}>
     <i class="bi bi-arrow-down-left-circle-fill trainericon"></i>
                <div className="col-md-3">
                  <img src='/images/trainer.webp' className="trainerImg" alt="trainer" />
                </div>
                <div className="col-md-9" style={{display:'flex',flexDirection:'column',justifyContent:'center',position:'relative'}}>
               
              <h6 className="acdheading">{item.trainer_Name} <span style={{fontSize:12,fontWeight:700,color:'#ffa500'}}>{item.trainer_category}</span></h6>
          <p className="acdtext" style={{fontSize:12}}>{item.trainer_Description}</p>
         
                </div>
              </div>
        })
    }else{

    }
}else{

}
    }
    return(
        <>
        {handleRender(data)}
        </>
    )
}
export default Trainer