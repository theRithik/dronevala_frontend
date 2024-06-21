import React, { useEffect, useState } from "react";
import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";
import { Collapse } from "antd";
import { useQuery } from "@tanstack/react-query";
const Syllabus =({id})=>{

    const [syllabus,setSyllabus]=useState('')
    const det={
      id:id,
      endpoint:endpoints.getCourseSyllabus
    }

 const {data}=  useQuery({
    queryKey:['academyDetails',det.id,'syllabus'],
    queryFn:()=>PostData(det)
   })

    useEffect(()=>{
if(data){
  if(data.length>0){
    let arr=[]
    const data3= Object.values(data[0])
   
      data3.splice(0,3)
data3.map((item,i)=>{
  let obj ={}
  obj['key']=(i+1)
    obj['label']=data[0].type+(i+1)
    obj['children']=<p className="acdtext" style={{fontSize:12}}>{item}</p>
return  arr.push(obj)
})
setSyllabus(arr)
}
}else{
  setSyllabus('')
       }
 // eslint-disable-next-line
    },[data])
    return(
        <>
        <Collapse accordion items={syllabus} defaultActiveKey={['1']} style={{marginTop:30,background:'#ece8e52e',borderRadius:20}} />
        </>
    )
}

export default Syllabus