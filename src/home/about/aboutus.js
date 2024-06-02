import React from "react";
import './about.css'
const About =()=>{
    return(
        <>

          <div  className="academyDetailPage" >
            <div style={{position:'relative'}}>
            <img src="/images/h5.jpg" alt="academy" className="acdbanner"/>
            <div className="acadmain1" style={{left:'5%'}}>
                <h1 className="abouth1" >About Dronevala</h1>
                <p className="pstyle">Innovative Aerial Solutions for Every Need</p>
            </div>
            </div>

            <div style={{padding:40}}>
                <div className="row">
                    <div className="col-md-7" style={{padding:20}}>
                        <h2 className="heading1" style={{textAlign:'left',fontWeight:700,fontSize:30}}>About Dronevala</h2>
                        <h3 className="heading2" style={{textAlign:'left',lineHeight:'200%'}}>Pioneering the futureof Aerial Technology</h3>
                        <p className="normalText" style={{marginTop:30}}>At Dronevala, we are passionate about harnessing the power of drones to revolutionize var ous industries. Founded on the principles of innovation, quality, and customer satisfaction Dronevala has quickly become a trusted name in the world of drone technology. Our mission is to provide cutting-edge drane services, training, rentals and products that cater to a wide ronge of applications and nonds.</p>
                        <p className="normalText">Our comprehensive drone services are designed to meet the diverse needs of our clients. From aerial photography and surveying to agricultural monitoring and industrial inspections we offer tailored solutions that deliver precise and efficient results. Our team of experienced professionals is dedicated to ensuring that each project is executed with the highest level of expertise and safety</p>
                        <p className="normalText">In addition to our services, Dronevala is committed to education and empowerment through our Drone Academy. We offer top-notch training programs that equip aspiring drone parts with the skills and knowledge they need to excel. Our courses cover everything from basic flight operations to advanced aerial techniques, and successful graduates earn a recognized drone pilot license.</p>
                        <p className="normalText">At Dronevala we also understand the importance of flexibility and accessibility. Our drone rental service provides high-quality drones and accessories at budget friendly rates, ensur ing that you have the right equipment for any project. Meanwhile, our Drone Store offers a carefully curated selection of the latest drones and accessories, all quality-assured and sourced from trusted sellers.</p>
                    </div>
                    <div className="col-md-5" style={{padding:30}}>

<div style={{marginTop:50}}>
<h3 className="heading1" style={{textAlign:'left'}}>Our Mission</h3>
<h6 className="italicFont">Innovating for a Better Tomorrow</h6>
<span className="botborder"></span>
<p className="normalText" style={{fontWeight:400}}>At Dronevala we strive to revolutionize Industries through cutting-edge drone technology delivering high-quality services and solutions that meet the evolving needs of our clients</p>
</div>
<div style={{marginTop:30}}>
<h3 className="heading1" style={{textAlign:'left'}}>Our Services</h3>
<h6 className="italicFont">Comprehensive Aerial Solutions</h6>
<span className="botborder"></span>
<p className="normalText" style={{fontWeight:400}}>From aerial photography to industry inspections, our wide range of drone services is designed to provide precise and efficient results tailored to your soecific requirements.</p>
</div>
<div style={{marginTop:30}}>
<h3 className="heading1" style={{textAlign:'left'}}>Our Commitment</h3>
<h6 className="italicFont">Quality,Safety, and Customer Satisfaction</h6>
<span className="botborder"></span>
<p className="normalText" style={{fontWeight:400}}>We are dedicated to provide top-notch products and services, ensuring the highest standards of quality, safety, and customer satisfaction in everything we do</p>
</div>
                    </div>
                </div>
                <div className="row" style={{marginTop:30}} >
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/images/r2.jpg" alt="drone pilot"/>
                            <div className="card-body">
                                <h6>Drone pilot training</h6>
                                <button className="button"> Discover More</button>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card">
                            <img src="/images/r1.jpg" alt="drone pilot"/>
                            <div className="card-body">
                                <h6>Rent a drone</h6>
                                <button className="button"> Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/images/s1.webp" alt="drone pilot"/>
                            <div className="card-body">
                                <h6>Rent a drone</h6>
                                <button className="button"> Discover More</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </>
    )
}
export default About