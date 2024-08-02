
import React,{useEffect, useState} from "react";
import { FloatButton, message} from "antd";
import './acadDetails.css'
import { useNavigate, useParams } from "react-router-dom";
import endpoints from "../config/config";
import { GetData, PostData } from "../config/vendor/Apiconfig";
import Syllabus from "./components/syllabus";
import Trainer from "./components/trainer";
import Review from "./components/reviews";
import Banner from "./components/banner";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SuspenseLoad from "../suspense/suspence";
import Gallery from "./components/gallery";

const AcadDetails =()=>{
const history = useNavigate()
const {id,course,institute} = useParams()
const [details,setDetails]=useState('')
const [adv,setAdv]=useState('')
const [discountP,setDiscountp]=useState('')
const  [total,setTotal]=useState('')

const det={
  _id:id,
  endpoint:endpoints.academyDetails
}

const {data}=  useQuery({
    queryKey:['academyDetails',det._id],
    queryFn:()=>PostData(det)
  })

  const dt2 ={
    endpoint:endpoints.getAdvance
  }
  const {data:advance}=useQuery({
    queryKey:['advancefee'],
    queryFn:()=>GetData(dt2)
  })

useEffect(()=>{
if(data){
setDetails(data[0])
if(data[0].discount!==''){
  const dis = Number(data[0].discount)
  const pri = Number(data[0].fees)
  const total = pri - dis
  setDiscountp(data[0].fees)
  setTotal(total)
}
else{
setTotal(data[0].fees)
}
}
if(advance){
  setAdv(advance[0].fee)
}

window.scrollTo(0,0)
// eslint-disable-next-line
},[data,advance])

 
  // const bannerFunction=(data)=>{
  //   setBanner(data)
  //   // console.log(data)
  // }

  const handleClick=()=>{
    const loc= localStorage.getItem('token')
    if(loc){
    history('/academy/course/booking',{state:{details:details,total:total,discount:discountP,advance:adv}})
    }else{
      message.info('Please Login First to Proceed')
    }
  }
    return(
        <>
        <div  className="academyDetailPage" >
        <Helmet>
        <title>{`${course} - Dronevala`}</title>
        <link rel="Dronevala" href="https://dronevala.com/academy/"/>
        <meta name="description" content={details.description}/>
        <link rel="canonical" href={`https://dronevala.com/academy/${institute}/${course}/${id}`} />
        <meta name="keywords" content="drone course, Drone training academy,UAV pilot school,Drone certification courses, Learn to fly drones,Best drone academy,Drone flight training,Professional UAV training,Remote pilot license,Drone education programs,Drone school near me"/>
        <meta property="og:title" content="Dronevala -Academy" />
        <meta property="og:url" content={`https://dronevala.com/academy/${institute}/${course}/${id}`} />
        <meta property="og:image" content="https://dronevala.com/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={details.description}/>
    </Helmet>
    {data ?(
    <div>
            <div style={{position:'relative',padding:20,height:600,width:'100%'}}>
           <Banner id={id}  details={details}/>
            </div>

                    <div className="acddiv1" style={{padding:'10%',paddingTop:'5%'}}>
                  <div className="row">
                    <div className="col-md-8">
                       <div>
                        <h6 className="acdheading">About This Course</h6>
                        <p className="acdtext">{details.description}</p>
                       </div>
                       <div style={{marginTop:30}}>
                        <h6 className="acdheading">What You'll Learn</h6>
                        <div className="row">
                          <div className="col-md-6" style={{padding:10}}>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:10,marginBottom:20}}>
                            <i class="bi bi-plus plusicon"></i>
                            <h5 className="acdtext" style={{textAlign:'start'}}>Understand the fundamental principles of drone mechanics, electronics and aerodynamics.</h5>
                            </div>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:10,marginBottom:20}}>
                            <i class="bi bi-plus plusicon"></i>
                            <h5 className="acdtext"style={{textAlign:'start'}}>Learn about the latest safety protocols and requirements to ensure compliant and responsible drone operation</h5>
                            </div>
                          </div>
                          <div className="col-md-6" style={{padding:10}}>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:10,marginBottom:20}}>
                            <i class="bi bi-plus plusicon"></i>
                            <h5 className="acdtext" style={{textAlign:'start'}}>Explore techniques and analyzing data for agriculture monitoring, industrial inspections, and more</h5>
                            </div>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:10,marginBottom:20}}>
                            <i class="bi bi-plus plusicon"></i>
                            <h5 className="acdtext">Gain pratical expericence with real-world flight exercises under the guidance of experienced instructors</h5>
                            </div>
                          </div>
                        </div>
                       </div>
                       <div style={{marginTop:30,marginBottom:20}}>
<h6 className="acdheading">Course Curriculum</h6>
<Syllabus id={id} />
                       </div>

                       <div style={{marginTop:50}}>
                       <h6 className="acdheading">Course Eligibility</h6>
                       <div style={{display:'flex',gap:10,alignItems:'center'}}>
                       <i class="bi bi-plus plusicon"></i>
                        <p className="acdtext">Age - 18 to 65 years  </p>
                       </div>
                       <div style={{display:'flex',gap:10,alignItems:'center'}}>
                       <i class="bi bi-plus plusicon"></i>
                        <p className="acdtext">10th Pass Certificate </p>
                       </div>
                       <div style={{display:'flex',gap:10,alignItems:'center'}}>
                       <i class="bi bi-plus plusicon"></i>
                        <p className="acdtext">Valid India Passport </p>
                       </div>
                       <div style={{display:'flex',gap:10,alignItems:'center'}}>
                       <i class="bi bi-plus plusicon"></i>
                        <p className="acdtext">Medical Fitness Certificate  </p>
                       </div>
                       <div style={{display:'flex',gap:10,alignItems:'center'}}>
                       <i class="bi bi-plus plusicon"></i>
                        <p className="acdtext">Aadhar card linked with mobile number </p>
                       </div>
                       </div>
                       <FloatButton.BackTop tooltip={<div>Move Top</div>}/>
                       <div style={{marginTop:30}}>
                        <h6 className="acdheading">Who should get this course</h6>
                        <div style={{display:'flex',flexWrap:'wrap',gap:20,paddingTop:10,paddingBottom:20}}>
                        <div className="cgetcard">
                          <p>Beginners Pilot</p>
                        </div>
                        
                        <div className="cgetcard">
                          <p>Experienced Pilot</p>
                        </div>
                        <div className="cgetcard">
                          <p>Students</p>
                        </div>
                        <div className="cgetcard">
                          <p>Content Creators</p>
                        </div>
                        <div className="cgetcard">
                          <p>Technicians</p>
                        </div>
                        <div className="cgetcard">
                          <p>Hobbyist</p>
                        </div>
                        </div>
                        <p className="acdtext">A drone course is ideal for hobbyists, photographers, real estate agents, and professionals in agriculture, construction, and public safety. It provides essential skills for safe operation, legal compliance, and specialized applications like aerial photography, mapping, and inspections. This training is valuable for enhancing career opportunities and improving operational efficiency across various industries.</p>
                       </div>

                       <div style={{marginTop:30}}>
                        <h6 className="acdheading">Certification</h6>
                        <p className="acdtext">Upon successfuly completion of the course. You will receive a recognized drone pilot license, certifying your ability to operate drones professionally and safely.</p>
                       </div>
                       <div style={{marginTop:30}}>
                       <h6 className="acdheading">Why Choose Us</h6>
                       <div className="acddiv3">
                       <div className="choosecard">
                       <i class="bi bi-arrow-up-right-circle-fill"></i>
                       <span className="acdspan">Expert instructors</span>
                       <p className="acdtext">Learn from industry professionals with extensive experience in drone technology and applications.</p>
                       </div>
                       <div className="choosecard">
                       <i class="bi bi-arrow-up-right-circle-fill"></i>
                       <span className="acdspan">Career Support:</span>
                       <p className="acdtext">Benefit from our career services, including job placement assistance and networking opportunities with industry leaders.</p>
                      </div>
                       <div className="choosecard">
                       <i class="bi bi-arrow-up-right-circle-fill"></i>
                       <span className="acdspan">State-of-the-Art Facilities:
                      </span>
                       <p className="acdtext"> Train with the latest drones and equipment in our cutting-edge training facilities.</p>
                      </div>
                     
                      </div>
                      <p className="acdtext">Join us and take the first step towards a rewarding career in the rapidly growing field of drone technology. Whether you are a beginner or looking to enhance your existing skills. our courses are designed to help you achieve your goals and soar to new heights.</p>
                       </div>

                       <div style={{marginTop:30}}>
                        <h6 className="acdheading">Course Trainers</h6>

                        <Trainer id={id}/>
                       </div>

                     <Gallery id ={id}/>

                       </div>


                       <div className="col-md-4">

                       <div className="acdetailcard">
                       <i class="bi bi-arrow-up-right-circle-fill arrup"></i> 
                        <h6 className="acdheading" style={{fontSize:18,marginBottom:10}}>Course Fee</h6>
                        <span className="acdpricetext">₹ <span>{details.fees}</span> /-</span>

                        <p className="acdpricetext1">Book this course with an Advance Payment</p>
                        <span className="price">₹<span>{adv} </span>/-</span>
                        <h6 className="acdpricenote">Remaining amount will be paid by the student to the training institute before the course starts</h6>
                        <button className="pricebutton" onClick={handleClick}> BOOK NOW </button>
                    </div>
                       </div>
                       </div>
                       <div style={{marginTop:'10%'}}>
                        <h6 className="acdheading">Reviews</h6>
                       <Review id={id}/>
                       </div>
                    </div>
                    </div>
    ):(
      <SuspenseLoad/>
    )
}
                </div>
        </>
    )
}
export default AcadDetails