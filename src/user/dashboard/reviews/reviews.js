import React,{useState,useEffect} from "react";

import { Empty, message, Rate } from "antd";
import { GetData, PostData } from "../../../config/vendor/Apiconfig";
import endpoints from "../../../config/config";
import { useQuery } from "@tanstack/react-query";
import './reviews.css'

const UserReviews=()=>{
    const [order,setOrder] = useState('')
    const [star,setStar]=useState('')
    const [name,setname]=useState('')

  const dt ={
    endpoint:endpoints.userReviews
  }

  const {data} = useQuery({
    queryKey:['getreviews'],
    queryFn:()=>GetData(dt)
  })
  const dt2 ={
    endpoint:endpoints.userName
  }

  const {data:user} = useQuery({
    queryKey:['userName'],
    queryFn:()=>GetData(dt2)
  })
    useEffect(()=>{
        if(data){
   
                    const dt1 = data.data1
                    const dt2 = data.data2
                    const mt1 =data.data3
                    const mt2 = data.data4
                    const dt3 = [...dt1,...dt2,...mt1,...mt2]
        

                    const filt = dt3.sort(function(a,b){
                      const st=a.DateandTime
                      const dt = b.DateandTime
                      const st1=st.split(',')[0].split('/').reverse().join('/')
                      const dt1 =dt.split(',')[0].split('/').reverse().join('/')
                      const new1 =new Date(st1)
                      const new2 = new Date(dt1)
                     
                      return new2-new1
                    })
                    setOrder(filt)
                }
if(user){
                    const n1 = user.result[0].firstName
                    const n2  = user.result[0].middleName
                    const n3 = user.result[0].lastName
                    setname(n1+' '+n2+' '+ n3)
}          
// eslint-disable-next-line
    },[data,user])


    const renderService=(data)=>{
        if(data){
       
            if(data.length>=1){
                return data.map((item,i)=>{
                    const rating = Number(item.rating)
                    console.log(item.type)
                    return(
                      <div key={i} style={{marginTop:'40px'}}>
                          {(item.courseName) &&
                    <div className=""  id="reviewcard" style={{padding:'5%'}}>     
                  
                          <div className="" style={{marginTop:'20px',display:'inline-block',width:'70%'}}>
                         <i className="fa-solid fa-circle-check" style={{fontSize:'18px',color:'#159727'}}></i>
                         <h6 style={{display:'inline-block',marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.courseName}</h6>
                          </div>
                
                          
                          <div style={{display:'inline-block',float:'right',marginTop:'20px',height:'20px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                       <p style={{color:'grey',fontSize:'9.5px',marginLeft:2,display:'inline-block'}}>{item.DateandTime}</p>
                          </div>
                        
                          <div style={{display:'flex',width:'100%',marginTop:'10px'}} className="servi">
                           
                             <span style={{fontSize:'12px',color:'grey'}}> Institute : </span>
                              <h6 style={{fontSize:'12px',marginLeft:2,marginTop:'2px'}}> {item.instituteName}</h6>
                            
                              </div>
               
                <div style={{marginTop:'30px',position:'relative'}}>
                    <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:20}}>
                  <h6 style={{paddingLeft:'20px',marginBottom:'0'}}>Rating</h6>
                  <Rate allowHalf defaultValue={rating}  onChange={ratingChanged} style={{fontSize:15}}/>
                  </div>
          <textarea className="form-control reviewbox" id={item.type+item.id.toString()} style={{width:'90%',marginBottom:'50px',fontSize:'14px',fontWeight:'500',height:'100px'}} placeholder="Write your review here" defaultValue={item.message}></textarea>
               <button className="btn btn-primary" data-arg1={item.id} data-arg2={item.institute_Id} data-arg3={item.courseID} data-arg4={item.type} onClick={postReview} style={{position:'absolute',right:'7%',bottom:'-62px',marginBottom:'20px',borderRadius:'20px',fontSize:'12px'}}>Post</button>
                </div> 
                </div>
                    }
                {(item.servicePerson) &&
                    <div className=""  id="reviewcard" style={{padding:'5%'}}>   
                          <div className="" style={{marginTop:'20px',display:'inline-block',width:'70%'}}>
                          <i className="fa-solid fa-circle-check" style={{fontSize:'18px',color:'#159727'}}></i>
                          <h6 style={{display:'inline-block',marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.servicePerson}</h6>
                          </div>
                          <div style={{display:'inline-block',float:'right',marginTop:'20px',height:'20px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                       <p style={{color:'grey',fontSize:'9.5px',marginLeft:2,display:'inline-block'}}>{item.DateandTime}</p>
                          </div>
                          <div style={{display:'flex',width:'100%',marginTop:'10px'}} className="servi">
                           
                           <span style={{fontSize:'12px',color:'grey'}}> Service : </span>
                            <h6 style={{fontSize:'12px',marginTop:'2px'}}> {item.subCategory}</h6>
                          
                            </div>
                            <div style={{marginTop:'30px',position:'relative'}}>
                            <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:20}}>
                  <h6 style={{paddingLeft:'20px',marginBottom:'0'}}>Rating</h6>
               <Rate allowHalf defaultValue={rating}  onChange={ratingChanged} style={{fontSize:15}}/>
               </div>
          <textarea className="form-control reviewbox" id={item.type+item.id.toString()} style={{width:'90%',marginBottom:'50px',fontSize:'14px',fontWeight:'500',height:'100px'}} placeholder="Write your review here" defaultValue={item.message}></textarea>
 <button className="btn btn-primary" data-arg1={item.id} data-arg2={item.AdminID} data-arg3={item.serviceID} data-arg4={item.type} onClick={postReview} style={{position:'absolute',right:'7%',bottom:'-62px',marginBottom:'20px',borderRadius:'20px',fontSize:'12px'}}>Post</button>
                </div> 
                          </div>
                }


                {(item.rentalID) &&
                 <div className=""  id="reviewcard" style={{padding:'5%'}}>     
                  
                 <div className="" style={{marginTop:'20px',display:'inline-block',width:'70%'}}>
                <i className="fa-solid fa-circle-check" style={{fontSize:'18px',color:'#159727'}}></i>
                <h6 style={{display:'inline-block',marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.productName}</h6>
                 </div>
       
                 
                 <div style={{display:'inline-block',float:'right',marginTop:'20px',height:'20px'}}>
                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              <p style={{color:'grey',fontSize:'9.5px',display:'inline-block',marginLeft:'5px'}}>{item.DateandTime}</p>
                 </div>
               
                 <div style={{display:'flex',width:'100%',marginTop:'10px'}} className="servi">
                  
                    <span style={{fontSize:'12px',color:'grey'}}> company : </span>
                     <h6 style={{fontSize:'12px',marginLeft:'2px',marginTop:'2px'}}> {item.companyName}</h6>
                     </div>
       <div style={{marginTop:'30px',position:'relative'}}>
       <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:20}}>
         <h6 style={{paddingLeft:'20px',marginBottom:'0'}}>Rating</h6>
         <Rate allowHalf defaultValue={rating}  onChange={ratingChanged}  style={{fontSize:15}}/>
         </div>

 <textarea className="form-control reviewbox" id={item.type+item.id.toString()} style={{width:'90%',marginBottom:'50px',fontSize:'14px',fontWeight:'500',height:'100px'}} placeholder="Write your review here" defaultValue={item.message}></textarea>
      <button className="btn btn-primary" data-arg1={item.id.toString()} data-arg2={item.adminId} data-arg3={item.rentalID} data-arg4={item.type} onClick={postReview} style={{position:'absolute',right:'7%',bottom:'-62px',marginBottom:'20px',borderRadius:'20px',fontSize:'12px'}}>Post</button>
       </div> 
       </div>
                }

{(item.productID) &&
                 <div className="" id="reviewcard" style={{padding:'5%'}}>     
                  
                 <div className="" style={{marginTop:'20px',display:'inline-block',width:'70%'}}>
                <i className="fa-solid fa-circle-check" style={{fontSize:'18px',color:'#159727'}}></i>
                <h6 style={{display:'inline-block',marginBottom:'0',width:'90%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace: 'nowrap'}}>{item.productName}</h6>
                 </div>
       
                 
                 <div style={{display:'inline-block',float:'right',marginTop:'20px',height:'20px'}}>
                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'grey'}} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              <p style={{color:'grey',fontSize:'9.5px',display:'inline-block',marginLeft:'5px'}}>{item.DateandTime}</p>
                 </div>
               
                 <div style={{display:'flex',width:'100%',marginTop:'10px'}} className="servi">
                  
                    <span style={{fontSize:'12px',color:'grey'}}> Brand : </span>
                     <h6 style={{fontSize:'12px',marginLeft:'2px',marginTop:'2px'}}> {item.brand}</h6>
                     </div>
       <div style={{marginTop:'30px',position:'relative'}}>
       <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:20}}>
         <h6 style={{paddingLeft:'20px',marginBottom:'0'}}>Rating</h6>
         <Rate allowHalf defaultValue={rating}  onChange={ratingChanged} style={{fontSize:15}}/>
         </div>

 <textarea className="form-control reviewbox" id={item.type+item.id.toString()} style={{width:'90%',marginBottom:'50px',marginLeft:'20px',fontSize:'14px',fontWeight:'500',height:'100px'}} placeholder="Write your review here" defaultValue={item.message}></textarea>
      <button className="btn btn-primary" data-arg1={item.id.toString()} data-arg2={item.adminID} data-arg3={item.productID} data-arg4={item.type} onClick={postReview} style={{position:'absolute',right:'7%',bottom:'-62px',marginBottom:'20px',borderRadius:'20px',fontSize:'12px'}}>Post</button>
       </div> 
       </div>
                }
                    
                    
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
                  <h6 style={{fontSize:12,fontWeight:700}}> No Data</h6>
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
                       <img src='/images/loading2.gif' style={{width:25}} alt='loader'/>
                </div>
            )
        }
        
    }


    const ratingChanged = (newRating) => {
        setStar(newRating)
      };


      const postReview=async(event)=>{
        try{
      const ad = event.target.getAttribute('data-arg2')
      const cs = event.target.getAttribute('data-arg3')
      const rid = event.target.getAttribute('data-arg1')
      const type = event.target.getAttribute('data-arg4')
      const opt = document.getElementById(type+rid).value
     
       if(opt!=='' && star !=='' ){
     message.loading('Processing')
           const dt = {
                userID:localStorage.getItem('_id'),
                message:opt,
                rating:star,
                adminID:ad,
                rowID:rid,
                id:cs,
                name:name,
                type:type,
                endpoint:endpoints.postReview
            }
        const result = await PostData(dt)
        if(result){
            message.destroy()
            message.success('Review Added Successfully')
        }
    }
    else{
        message.info('please give rating and review')
    }
}catch(err){
    console.log(err)
}

      }
     

    return(
        <>
         <div className="homesection" >
         <div className="profilecard">
         <div className="profilecard2">
         <h5 style={{fontWeight:600}}>Write Your Reviews</h5>
       <div style={{background:'transparent'}}>
        {renderService(order)}
       
    
            {/* {/* <button className="btn btn-primary"  style={{float:'right',borderRadius:'30px',fontSize:'12px'}}> <i className="fa-solid fa-plus"></i> Add </button> */}
            

</div>
</div>
   </div>
   </div>

        </>
    )
}
export default UserReviews