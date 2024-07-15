import React, { useEffect, useState } from "react";
import endpoints from "../../config/config";
import { PostData } from "../../config/vendor/Apiconfig";
import { useQuery } from "@tanstack/react-query";
import { Image } from "antd";
import { Empty } from 'antd';

const Gallery=(props)=>{
    const[photoGallery,setPhotoGallery]=useState('')
    const det={
        id:props.id,
        endpoint:endpoints.getGallery
      }
      const {data}=   useQuery({
        queryKey:['academyDetails',det.id,'gallery'],
        queryFn:()=>PostData(det)
      })
      useEffect(()=>{
if(data){
    const arr2=[]
        const arr3=[]
        const ht = data
 
       for(let i=0;i<ht.length;i++){
        let data5 = Object.values(ht[i])
        data5.splice(0,2)
      arr3.push(data5)
     
       }
       const ass = [].concat(...arr3)
       console.log(ass)
       for(let i=0;i<ass.length; i++){
        let obj2={}
        if(ass[i].length>0){
          obj2['id']=(i+1+'R').toString()
        obj2['image']=ass[i]
      arr2.push(obj2)
        }
       }
       setPhotoGallery(arr2)
}
// eslint-disable-next-line
      },[data])
  
  
     const RenderImage =(data)=>{
if(data.length>0){
    return data.map((item,i)=>{
        console.log(item)
        return (
            <Image className="moveImg" key={i} src={`${endpoints.imageprefix}${item.image}`} alt="service"  />
        )
    })
}else{
return(
  <Empty
  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
  imageStyle={{ height: 100 }}
  description={
    <h6 style={{fontSize:12,fontWeight:700}}> No Data</h6>
  }
  style={{margin:'auto'}}
>
</Empty>
)
}
     }

     const moveleft =()=>{
        if(window.innerWidth>650){
        const ct = document.querySelector('.cgallery')
        ct.style.scrollBehavior ="smooth"
        ct.scrollLeft -= 900
        }
        else{
          const ct = document.querySelector('.cgallery')
        ct.style.scrollBehavior ="smooth"
        ct.scrollLeft -= 300
        }
      }
    
      const moveright =()=>{
        if(window.innerWidth>650){
        const ct = document.querySelector('.cgallery')
        ct.style.scrollBehavior ="smooth"
        ct.scrollLeft+=900
        }
        else{
          const ct = document.querySelector('.cgallery')
        ct.style.scrollBehavior ="smooth"
        ct.scrollLeft+=250
        }
      }
  
    return(
        <>
         <div style={{marginTop:50}}>
                        <h6 className="acdheading">Course Gallery</h6>
                        <div className="cgallerycontainer">
                        <i class="bi bi-chevron-left ariconlef" onClick={moveleft}></i>
                        <i class="bi bi-chevron-right  ariconrig" onClick={moveright}></i>
                        <div className="cgallery">
                          <Image.PreviewGroup preview={{onChange:(current,prev)=>console.log(`current index: ${current}, prev index: ${prev}`)}}>
                            {RenderImage(photoGallery)}
                      
                        </Image.PreviewGroup>
                        </div>
                       </div>
                       </div>
        </>
    )
}
export default Gallery