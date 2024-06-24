import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { PostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";

const SerGallery=({id})=>{
    const [galler,setGaller]=useState('')
const dt={
    id:id,
    endpoint:endpoints.serviceGallery
}
 const {data}=  useQuery({
        queryKey:['ServiceDetails',id,'gallery'],
        queryFn:()=>PostData(dt)
    })

    useEffect(()=>{
        if(data){
            const arr2=[]
            const arr3=[]
           
           for(let i=0;i<data.length;i++){
            let data5 = Object.values(data[i])
            data5.splice(0,2)
          arr3.push(data5)
           }
           const ass = [].concat(...arr3)
           console.log(ass)
           for(let i=0;i<ass.length; i++){
            let obj2={}
            if(ass[i]!==''){
            if(ass[i].data.length>0){
              obj2['id']=(i+1+'R').toString()
            obj2['image']=ass[i].data
          arr2.push(obj2)
            }
        }
           }
           setGaller(arr2)
        
        }
    },[data])

    const imageGallery=(data)=>{
        if(data){  
            if(data.length>0){
          return data.map((item)=>{
            
            return(
              <span key={item.id}><img  src={item.image} id="photoG" alt={item.id}/></span>
            )
          })
        }else{
            return(
                <>
                <div style={{display:'flow',marginLeft:'10%'}}>
               <img src="/background/noImage.svg" style={{width:'150px'}} alt="No Photos"/>
              <h6 style={{color:'gray'}}>No photo Provided</h6>
              </div>
             </>
            )
          }
        }else{
          return(
            <img src='/background/loading.gif' style={{width:30,height:30,marginLeft:30}} alt="loading"/>
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
        <div className="serDiv">
                    <div style={{marginTop:50}}>
                        <h6 className="serheading">Service Gallery</h6>
                        <div className="cgallerycontainer">
                        <i class="bi bi-chevron-left ariconlef2" onClick={moveleft}></i>
                        <i class="bi bi-chevron-right  ariconrig2" onClick={moveright}></i>
                        <div className="cgallery">
                        <img src="/images/r1.jpg" alt="service"  />
                        <img src="/images/r1.jpg" alt="service" />
                        <img src="/images/r1.jpg" alt="service" />
                        <img src="/images/r1.jpg" alt="service"/>
                        <img src="/images/r1.jpg" alt="service"/>
                        <img src="/images/r1.jpg" alt="service"/>
                        </div>
                       </div>
                       </div>
                    </div>
        </>
    )
}
export default SerGallery