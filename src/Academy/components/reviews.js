import React from "react";
import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";
import { Rate } from "antd";
import { useQuery } from "@tanstack/react-query";

const Review =({id})=>{
 
    const det={
      id:id,
      endpoint:endpoints.getReviews
    }
 const {data}= useQuery({
    queryFn:()=>PostData(det),
    queryKey:['academyDetails',det.id,'reviews']
  })

      const ReviewRender=(data)=>{
        if(data){
            if(data.length>0){
                return data.map((item,i)=>{
                    return <div className="reviewcard" key={i}>
                      <p className="acdtext" style={{fontSize:11}}>{item.message}</p>
                    <div style={{display:'flex',alignItems:'center',gap:10,marginTop:20}}>
                    <img src="/images/trainer.webp" alt="review" style={{width:50}}/>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <h6 className="acdheading" style={{fontSize:15,marginBottom:5}}>{item.name}</h6>
                    <Rate allowHalf defaultValue={item.rating} disabled style={{fontSize:15}}/>
                    </div>
                    </div>
                    </div>
                  
                })
            }
        }
      }
    return(
        <>
         <div className="reviewDiv">
         <img src="/images/reviews.svg" alt="reviews" className="reviewImg"/>
        {ReviewRender(data)}
        </div>
        </>
    )
}
export default Review