import React from "react";
import './home.css'
import HomeServicecard from "./components/homeservice";
import Homeacademy from "./components/homeacademy";
import { Helmet } from "react-helmet-async";

const Home =()=>{


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

  const moveleft2 =()=>{
    if(window.innerWidth>650){
    const ct = document.querySelector('.hmsechid2')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft -= 900
    }else{
      const ct = document.querySelector('.hmsechid2')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft -= 250
    }
  }

  const moveright2 =()=>{
    if(window.innerWidth>650){
    const ct = document.querySelector('.hmsechid2')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft+=900
    }else{
      const ct = document.querySelector('.hmsechid2')
      ct.style.scrollBehavior ="smooth"
      ct.scrollLeft+=250
    }
  }
    return(
        <>
        
          <Helmet>
        <title>Dronevala</title>
        <link rel="Dronevala" href="https://dronevala.com"/>
        <meta name="description" content="Dronevala: Your One-Stop Solution for All Your Drone Needs" />
        <link rel="canonical" href="https://dronevala.com" />
        <meta name="keywords" content="drone,dronevala,drone course,drone service,drone store"/>
        <meta property="og:title" content="Dronevala" />
        <meta property="og:url" content="https://dronevala.com" />
        <meta property="og:image" content="https://dronevala.com/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Dronevala: Your One-Stop Solution for All Your Drone Needs"/>
    </Helmet>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="4" aria-label="Slide 5"></button>
 
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="/images/heading1.webp" class="d-block w-100 homecaro" alt="..."/>
      <img src="/images/heading2.webp" class="d-block w-100 homecaro2" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/slide1.webp" class="d-block w-100" alt="..."/>
      <div>
        <span>Drone Academy</span>
        <h1>Become a</h1>
        <h2>Certified Drone Pilot</h2>
        <h6>Expert Training for Safe and Skilled Flying</h6>

        <p>Gain the skills and certification you need to fly drones professionally with our comprehensive courses.</p>

        <button>DISCOVER MORE</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/slide2.webp" class="d-block w-100" alt="..."/>
      <div>
        <span>Drone Services</span>
        <h1>Become a</h1>
        <h2>Certified Drone Pilot</h2>
        <h6>Expert Training for Safe and Skilled Flying</h6>

        <p>Gain the skills and certification you need to fly drones professionally with our comprehensive courses.</p>

        <button>DISCOVER MORE</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/slide3.webp" class="d-block w-100" alt="..."/>
      <div>
        <span>Drone Rental</span>
        <h1>Become a</h1>
        <h2>Certified Drone Pilot</h2>
        <h6>Expert Training for Safe and Skilled Flying</h6>

        <p>Gain the skills and certification you need to fly drones professionally with our comprehensive courses.</p>

        <button>COMING SOON</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/slide4.webp" class="d-block w-100" alt="..."/>
      <div>
        <span>Drone Store</span>
        <h1>Become a</h1>
        <h2>Certified Drone Pilot</h2>
        <h6>Expert Training for Safe and Skilled Flying</h6>

        <p>Gain the skills and certification you need to fly drones professionally with our comprehensive courses.</p>

        <button>COMING SOON</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
  <i class="bi bi-chevron-left"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
  <i class="bi bi-chevron-right"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="hmsec2">
  <div className="centerText">
    <h4 className="heading1">Discover the Full Potential of Drones</h4>
    <h4 className="heading2">Training, Services, and Rentals Tailored for You</h4>
    <p className="ptext">Master the skies with our expert drone pilot training access a wide range of professional drone services and rent top of the line drones to suit your every need</p>
  </div>
  <div>
<div className="row" style={{padding:'0 5%',marginTop:30}}>
<div className="col-md-6" style={{marginBottom:20}}>
<div className="greycard">
  <span className="colorEffect"></span>
  <div className="row">
    <div className="col-md-8">
<span className="num">
01
</span>
<div className="content">
<h6 className="smallheading">Drone Pilot Training</h6>
<p className="smalltext">Drone pilot training is essential for anyone interested in operating drones, whether for recreational, commercial, or professional purposes. </p>
</div>
</div>
<div className="col-md-4" style={{position:'relative'}}>
  <img src="/images/dronefly.svg" alt="drone"/>
</div>
</div>
</div>
</div>


<div className="col-md-6">
<div className="greycard2">
  <span className="colorEffect2"></span>
  <div className="row">
    <div className="col-md-8">
<span className="num2">
02
</span>
<div className="content">
<h6 className="smallheading">Drone Rental</h6>
<p className="smalltext">Renting a drone can be a practical solution for those who need a drone for a short-term project, an event, or to try out a model before purchasing. </p>
</div>
</div>
<div className="col-md-4" style={{position:'relative'}}>
  <img src="/images/dronerent.svg" alt="drone" />
</div>
</div>
</div>
</div>
</div>

<div className="centerText" style={{marginTop:30}}>
<div className="greycard3">
  <span className="colorEffect3"></span>
  <div className="row">
    <div className="col-md-8">
<span className="num3">
03
</span>
<div className="content">
<h6 className="smallheading">Drone Services</h6>
<p className="smalltext">Drone services leverage advanced UAV technology to offer diverse solutions across various industries. They provide aerial photography and videography for real estate and events, inspection and maintenance for infrastructure and energy sectors, and precision agriculture services such as crop monitoring and spraying. </p>
</div>
</div>
<div className="col-md-4" style={{position:'relative'}}>
  <img src="/images/droneservices.svg" alt="drone" />
</div>
</div>
</div>
</div>

  </div>
</div>
<div className="hmsec2">
<div className="centerText">
    <h4 className="heading1">Comprehensive Drone Service </h4>
    <h4 className="heading2">Innovative Solutions For Every Aerial Need</h4>
   
      <div className="sec3cen">
<div class="card2">
  {/* <span className="crdback"></span> */}
  <i class="bi bi-arrow-up-right-circle-fill arricon"></i> 
<img src="/images/agriicon.webp" alt="agriculture" />
<div className="content">
<h6 className="smallheading">Agriculture</h6>
<p className="smalltext">Drones in agriculture, or Agri-drones, revolutionize farming by offering precision solutions such as crop monitoring, field mapping, and targeted spraying.</p>
</div>
</div>

<div class="card2">
{/* <span className="crdback2"></span> */}
<i class="bi bi-arrow-up-right-circle-fill arricon"></i> 
<i class="bi bi-camera"></i>
<div className="content">
<h6 className="smallheading">Cinematography</h6>
<p className="smalltext">Drone cinematography has transformed the film and video industry by providing stunning aerial perspectives and dynamic shots.</p>
</div>
</div>

<div class="card2">
{/* <span className="crdback3"></span> */}
<i class="bi bi-arrow-up-right-circle-fill arricon"></i> 
<i class="bi bi-globe-central-south-asia"></i>
<div className="content">
<h6 className="smallheading">Survey & Mapping</h6>
<p className="smalltext">Drone survey and mapping have revolutionized the way we gather spatial data, offering rapid and precise topographical surveys and 3D mapping.</p>
</div>
</div>

<div class="card2">
{/* <span className="crdback4"></span> */}
<i class="bi bi-arrow-up-right-circle-fill arricon"></i> 
<i class="bi bi-activity"></i>
<div className="content">
<h6 className="smallheading">Repair & Maintanence</h6>
<p className="smalltext">This services are crucial for ensuring the optimal performance of UAVs. It include routine inspections, software updates, parts replacement.</p>
</div>
</div>

<div class="card2">
{/* <span className="crdback5"></span> */}
<i class="bi bi-arrow-up-right-circle-fill arricon"></i> 
<i class="bi bi-truck"></i>
<div className="content">
<h6 className="smallheading">Logistics</h6>
<p className="smalltext">Drone logistics is revolutionizing the transportation sector by enabling rapid and efficient delivery of goods.</p>
</div>
</div>

<div class="card2">
{/* <span className="crdback6"></span> */}
<i class="bi bi-arrow-up-right-circle-fill arricon"></i> 
<i class="bi bi-house"></i>
<div className="content">
<h6 className="smallheading">Smart Cities</h6>
<p className="smalltext">Drones are integral to the development of smart cities, providing innovative solutions for urban planning, infrastructure monitoring, and public safety.</p>
</div>
</div>

<div class="card2">
{/* <span className="crdback3"></span> */}
<i class="bi bi-arrow-up-right-circle-fill arricon"></i> 
<i class="bi bi-droplet-half"></i>
<div className="content">
<h6 className="smallheading">Inspection & cleaning</h6>
<p className="smalltext">Drone inspection and cleaning services are transforming maintenance tasks in various industries by providing safe, efficient, and cost-effective solutions.</p>
</div>
</div>
      
    </div>
    
      </div>
</div>

<div className="hmsec2" style={{background:'#fffbf6'}}>
<div className="centerText">
    <h4 className="heading1">Find Expert Drone Service Providers in Your City </h4>
    <h4 className="heading2">Connecting You with Local Drone Professionals</h4>
    <p className="ptext">Discover certified Drone Service provider from our area. wheather you need Aerial Photography , Surveying or Specialized services our experts are ready to assists you. Find the right professional in your area today.</p>
  
  </div>
  <div className="hmsec4">
  <i class="bi bi-chevron-left ariconlef" onClick={moveleft}></i>
  <i class="bi bi-chevron-right  ariconrig" onClick={moveright}></i>
  <div className="hmsechid">

<HomeServicecard/>
</div>
  </div>
</div>

<div className="hmsec2">
  <div className="centerText">
    <h4 className="heading1">Drone Courses and Certifications</h4>
    <h4 className="heading2">Master the Skies with Expert Training</h4>
    <p className="ptext">Enroll in our comprehensive drone course to earn your pilot license and enchance your skills with advanced drone programs</p>
  </div>
  <div className="imgscen">
    
    <div className="imgcard">
    <i class="bi bi-arrow-up-right-circle-fill "></i> 
      <img src="/images/dronepilot.webp" alt="drone" />
<div className="imgcontent">
  <h5>Drone Pilot</h5>
</div>
    </div>
    <div className="imgcard">
    <i class="bi bi-arrow-up-right-circle-fill "></i> 
      <img src="/images/traineroftrainer.webp" alt="drone" />
<div className="imgcontent">
  <h5>Trainer of Trainer</h5>
</div>
    </div>
    <div className="imgcard">
    <i class="bi bi-arrow-up-right-circle-fill "></i> 
      <img src="/images/droneassembly.webp" alt="drone" />
<div className="imgcontent">
  <h5>Drone Assembly</h5>
</div>
    </div>
    <div className="imgcard">
    <i class="bi bi-arrow-up-right-circle-fill "></i> 
      <img src="/images/dronerepair.webp" alt="drone" />
<div className="imgcontent">
  <h5>Repair & Maintanence</h5>
</div>
</div>
    <div className="imgcard">
    <i class="bi bi-arrow-up-right-circle-fill "></i> 
      <img src="/images/dronemanufacturing.webp" alt="drone" />
<div className="imgcontent">
  <h5>Drone Manufacturing</h5>
</div>
    </div>
    <div className="imgcard">
    <i class="bi bi-arrow-up-right-circle-fill "></i> 
      <img src="/images/droneprogramming.webp" alt="drone" />
<div className="imgcontent">
  <h5>Drone Programming</h5>
</div>
    </div>
  </div>
  </div>

  <div className="hmsec2" style={{background:'#fffbf6'}}>
  <div className="centerText">
    <h4 className="heading1">Explore Leading Drone Training Institutes</h4>
    <h4 className="heading2">Empowering Tomorrow's Drone Experts</h4>
    <p className="ptext">Discover top-tier drone training institutes proving the way for future aerial innovaters</p>
  </div>
  <div className="hmsec4">
  <i class="bi bi-chevron-left ariconlef" onClick={moveleft2}></i>
  <i class="bi bi-chevron-right  ariconrig" onClick={moveright2}></i>
  <div className="hmsechid2">
<Homeacademy/>
  </div>
    </div>
  </div>
        </>
    )
}
export default Home