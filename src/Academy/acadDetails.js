
import { FloatButton } from "antd";
import React from "react";
import ReactStar from "react-rating-stars-component"
import { useNavigate } from "react-router-dom";



const AcadDetails =()=>{
const history = useNavigate()
  const moveleft =()=>{
    if(window.innerWidth>650){
    const ct = document.querySelector('.hmsechid')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft -= 900
    }
    else{
      const ct = document.querySelector('.hmsechid')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft -= 300
    }
  }

  const moveright =()=>{
    if(window.innerWidth>650){
    const ct = document.querySelector('.hmsechid')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft+=900
    }
    else{
      const ct = document.querySelector('.hmsechid')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft+=250
    }
  }
    return(
        <>
        <div  className="academyDetailPage" >
            <div style={{position:'relative'}}>
            <img src="/images/back3.webp" alt="academy" className="acdbanner"/>
            <div className="acadmain1">
                <h1 >Academy</h1>
                <p className="pstyle">Discover expert-led drone trining programs</p>
            </div>
            </div>
            <div className="row" style={{position:'relative'}}>
                <div className="col-md-4" style={{position:'relative',bottom:60}}>
                <div className="card5 detailCd">
                <img src="/images/r1.jpg" className="card5img" alt="academy"/>
                <div className="card-body">
                <h3 style={{fontWeight:600}}>Srm College of Drone Training</h3>
                <div>

<h6 style={{fontSize:16}}> <span><img src="/images/drone.png" alt="drone" style={{width:30}}/></span>drone course</h6>
    <h5 style={{fontSize:17}}><span><i class="bi bi-geo-alt-fill"></i></span> Andhra </h5>
    <div style={{paddingLeft:14}}>
    <h4>Course Duration : <span>9 hours</span></h4>
    <h4>Drone Category : <span>Medium</span></h4>
    <h4>Course Type : <span>Beginners</span> </h4>
    <h4>Course Start Date : <span>21/05/2024</span></h4>
    <h4>Drone Type : <span>All type of Drones</span> </h4>
</div>
    </div>
    </div>
                </div>
                </div>
                <div className="col-md-8">
                    <div className="acddiv1">
                        <h1 className="color2text">Srm College of Drone Training</h1>
                        <h3 className="color1text">Best course to start your drone pilot career</h3>
                     <div className="acdetail1div">
                        <p>Course Fee : <span>₹ 40000 /-</span></p>

                        <h5>Book this course for just ₹ 1 Advance Payment</h5>
                        <h6>Remaining amount will be paid by the student to the training institute before the course starts</h6>
                        <button className="button2 mve" onClick={()=>{history('/academy/course/booking')}}> BOOK NOW <i class="bi bi-arrow-right"></i></button>
                    </div>
                    <hr />
                    <div className="sectiondiv">
                    <h3 className="color1text">Course Overview:</h3>
                    <p className="normalText">At SRM college of drone training. we offer comprehensive course designed to equip you with the skills and knowledge required to excel in the field of drone technology. Our curriculum is tailored to meet industry standards and covers a wide range of topics</p>
                  </div>
                  <div className="sectiondiv">
                   <h3 className="color1text" style={{paddingBottom:20}}>Course Eligibility/Requirements</h3>
                   <h6 className="checktext"> <i class="bi bi-check-lg"></i><span>Age - 18 to 65 years</span></h6>
                   <h6 className="checktext"> <i class="bi bi-check-lg"></i><span>10th Pass Certificate</span></h6>
                   <h6 className="checktext"> <i class="bi bi-check-lg"></i><span>Valid India Passport</span></h6>
                   <h6 className="checktext"> <i class="bi bi-check-lg"></i><span>Medical Fitness Certificate</span></h6>
                   <h6 className="checktext"> <i class="bi bi-check-lg"></i><span>Aadhar card linked with mobile number</span></h6>
                  </div>
                  <div className="sectiondiv">
                   <h3 className="color1text">Who should get this course</h3>
                   <h1 className="coursefor"> Beginners Pilot | Experienced Pilot | Students | Content Creators | Technicians | Hobbyist</h1>
                    </div>
                    <FloatButton.BackTop tooltip={<div>Move Top</div>}/>
                    <div className="sectiondiv">
                        <h3 className="color1text">Course Highlights:</h3>
                        <h6 className="highlightCol">Foundation of Drone Technology: </h6>
                        <p className="normalText" style={{marginBottom:'10px'}}>Understand the fundamental principles of drone mechanics, electronics and aerodynamics.</p>
                        <h6 className="highlightCol"> Hands-On Flight Training:</h6>
                        <p className="normalText" style={{marginBottom:'10px'}}>Gain pratical expericence with real-world flight exercises under the guidance of experienced instructors</p>
                        <h6 className="highlightCol"> Safety and Requlations:</h6>
                        <p className="normalText" style={{marginBottom:'10px'}}>Learn about the latest safety protocols and requirements to ensure compliant and responsible drone operation</p>
                        <h6 className="highlightCol"> Aerial Photography and Viedography:</h6>
                        <p className="normalText" style={{marginBottom:'10px'}}>Master the art of capturing stunning aerial footage for various applications, including media, real estate, and surveying</p>
                        <h6 className="highlightCol">Data Collection and Analysis</h6>
                        <p className="normalText" style={{marginBottom:'10px'}}>Explore techniques and analyzing data for agriculture monitoring, industrial inspections, and more</p>
                       
                        </div>
                        <div className="sectiondiv">
                   <h3 className="color1text">Certification</h3>
                   <p className="normalText">Upon successfuly completion of the course. You will receive a recognized drone pilot license, certifying your ability to operate drones professionally and safely.</p>
                   </div>
                   <div className="sectiondiv">
                   <h3 className="color1text">Why Choose us:</h3>
                   <h6 className="highlightCol">Expert instructors:</h6>
                        <p className="normalText">Learn from industry professionals with extensive experience in drone technology and applications. </p>
                        <h6 className="highlightCol">State-of-the-Art Facilities:</h6>
                        <p className="normalText">Train with the latest drones and equipment in our cutting-edge training facilities </p>
                        <h6 className="highlightCol">Career Support:</h6>
                        <p className="normalText">Benefit from our career services, including job placement assistance and networking opportunities with industry leaders.</p>
                        <p className="normalText">Join us and take the first step towards a rewarding career in the rapidly growing field of drone technology. Whether you are a beginner or looking to enhance your existing skills. our courses are designed to help you achieve your goals and soar to new heights.</p>
                   <div className="row" style={{padding:10,background:'rgb(234 248 217)',borderRadius:10}}>
                    <div className="col-md-3">
                    <i class="bi bi-person trainericon"></i>
                    </div>
                    <div className="col-md-9">
                        <h1 className="heading2" style={{textAlign:'justify',marginTop:10,fontSize:18}}>Course Trainers</h1>
                        <h2 className="heading1" style={{textAlign:'justify',fontSize:16}}>Mr. Varun, <span style={{fontSize:12,color:'grey',fontWeight:500}}>Senior Trainer</span></h2>
                    <p className="normalText">Join us and take the first step towards a rewarding career in the rapidly growing field of drone technology. Whether you are a beginner or looking to enhance your existing skills. our courses are designed to help you achieve your goals and soar to new heights.</p>
                    </div>
                   </div>
                   
                    </div>
                    <div className="sectiondiv">
                    <h3 className="color1text">Photo Gallery</h3>
                    <div className="hmsec4" style={{marginTop:'0'}}>
  <i class="bi bi-chevron-left ariconlef" onClick={moveleft}></i>
  <i class="bi bi-chevron-right  ariconrig" onClick={moveright}></i>
  <div className="hmsechid">
<div className="card4" style={{width:'13rem',height:'210px'}}>
  <img src="/images/r1.jpg" alt="service" style={{width:'13rem'}}/>
</div>
<div className="card4" style={{width:'13rem',height:'210px'}}>
  <img src="/images/r1.jpg" alt="service"  style={{width:'13rem'}}/>
 
</div>
<div className="card4" style={{width:'13rem',height:'210px'}}>
  <img src="/images/r1.jpg" alt="service"  style={{width:'13rem'}}/>
</div>
<div className="card4" style={{width:'13rem',height:'210px'}}>
  <img src="/images/r1.jpg" alt="service"  style={{width:'13rem'}}/>
</div>
<div className="card4" style={{width:'13rem',height:'210px'}}>
  <img src="/images/r1.jpg" alt="service"  style={{width:'13rem'}}/>
</div>
<div className="card4" style={{width:'13rem',height:'210px'}}>
  <img src="/images/r1.jpg" alt="service"  style={{width:'13rem'}}/>
</div>
<div className="card4" style={{width:'13rem',height:'210px'}}>
  <img src="/images/r1.jpg" alt="service"  style={{width:'13rem'}}/>
</div>
</div>
  </div>
  </div>
  <div className="sectiondiv" style={{paddingTop:30}}>
                    <h3 className="color1text">Reviews & Rating</h3>
                    <div style={{marginTop:60}}>
                        <div className="reviewCard">
                        <div className="reviewCard2">
                            <h1>R</h1>
                            <div className="revdiv2">
                                <h6>Jordan Foaster</h6>
                                <p>Hyperbad, 30 december, 2024</p>
                            </div>
                            <span className="revrating">
                                <h2 className="heading2" style={{marginBottom:0,fontSize:15}}>Rating</h2>
                                <ReactStar
                    count={5}
                   edit={false}
                    size={22}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={4}
                    
                  />
                            </span>
                          
                        </div>
                        <div style={{padding:20}}>
                            <p className="normalText">"Easy to fly, looks great coming out of the box, packaged wonderfully, Completely makes this a no-brainer if you are looking for a qualified drone!</p>
                        </div>
                    </div>
                    <hr style={{color:'rgb(134 224 222)',borderWidth:2,opacity:1}}/>

                    <div className="reviewCard">
                        <div className="reviewCard2">
                            <h1>R</h1>
                            <div className="revdiv2">
                                <h6>Jordan Foaster</h6>
                                <p>Hyperbad, 30 december, 2024</p>
                            </div>
                            <span className="revrating">
                                <h2 className="heading2" style={{marginBottom:0,fontSize:15}}>Rating</h2>
                                <ReactStar
                    count={5}
                   edit={false}
                    size={22}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={4}
                    
                  />
                            </span>
                          
                        </div>
                        <div style={{padding:20}}>
                            <p className="normalText">"Easy to fly, looks great coming out of the box, packaged wonderfully, Completely makes this a no-brainer if you are looking for a qualified drone!</p>
                        </div>
                    </div>
                    </div>
                    </div>
                   
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default AcadDetails