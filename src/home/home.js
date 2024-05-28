import React from "react";
import './home.css'
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
    const ct = document.querySelector('.hmsechid2')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft -= 900
  }

  const moveright2 =()=>{
    const ct = document.querySelector('.hmsechid2')
    ct.style.scrollBehavior ="smooth"
    ct.scrollLeft+=900
  }
    return(
        <>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/h1.jpg" class="d-block w-100" alt="..."/>
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
      <img src="/images/h2.jpg" class="d-block w-100" alt="..."/>
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
      <img src="/images/back4.webp" class="d-block w-100" alt="..."/>
      <div>
        <span>Drone Rental</span>
        <h1>Become a</h1>
        <h2>Certified Drone Pilot</h2>
        <h6>Expert Training for Safe and Skilled Flying</h6>

        <p>Gain the skills and certification you need to fly drones professionally with our comprehensive courses.</p>

        <button>DISCOVER MORE</button>
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
    <div className="row" style={{marginTop:'5%'}}>
      <div className="col-md-4 centerText">
<div className="card">
  <img src="/images/r2.jpg"alt="academy"/>
  <div className="card-body">
<h6>Drone pilot training</h6>
<button className="button">Know More</button>
  </div>
</div>
      </div>
      <div className="col-md-4 centerText">
      <div className="card">
  <img src="/images/r1.jpg"alt="rental"/>
  <div className="card-body">
<h6>Rent a Drone</h6>
<button className="button">Know More</button>
  </div>
</div>

      </div>
      <div className="col-md-4 centerText">
      <div className="card">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Drone Service</h6>
<button className="button">Know More</button>
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
    <div>
      <div className="sec3cen">
    <div className="card2">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Agriculture</h6>

  </div>
</div>
<div className="card2">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Cinematography</h6>

  </div>
</div>
<div className="card2">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Survey & Mapping</h6>

  </div>
</div>
<div className="card2">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Repair & Maintanence</h6>

  </div>
</div>
<div className="card2">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Logistics</h6>

  </div>
</div>
<div className="card2">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Smart Cities</h6>

  </div>
</div>
<div className="card2">
  <img src="/images/s1.webp"alt="academy"/>
  <div className="card-body">
<h6>Inspection & Cleaning</h6>

  </div>
</div>

      
    </div>
      </div>
      </div>
</div>

<div className="hmsec2" style={{background:'#eafeff'}}>
<div className="centerText">
    <h4 className="heading1">Find Expert Drone Service Providers in Your City </h4>
    <h4 className="heading2">Connecting You with Local Drone Professionals</h4>
    <p className="ptext">Discover certified Drone Service provider from our area. wheather you need Aerial Photography , Surveying or Specialized services our experts are ready to assists you. Find the right professional in your area today.</p>
  
  </div>
  <div className="hmsec4">
  <i class="bi bi-chevron-left ariconlef" onClick={moveleft}></i>
  <i class="bi bi-chevron-right  ariconrig" onClick={moveright}></i>
  <div className="hmsechid">
<div className="card3">
  <img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <span>Vijayawada</span>
  <p>Agmay Education Drone trainig in vijayawada</p>
</div>
</div>
<div className="card3">
  <img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <span>Vijayawada</span>
  <p>Agmay Education Drone trainig in vijayawada</p>
</div>
</div>
<div className="card3">
  <img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <span>Vijayawada</span>
  <p>Agmay Education Drone trainig in vijayawada</p>
</div>
</div>
<div className="card3">
  <img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <span>Vijayawada</span>
  <p>Agmay Education Drone trainig in vijayawada</p>
</div>
</div>
<div className="card3">
  <img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <span>Vijayawada</span>
  <p>Agmay Education Drone trainig in vijayawada</p>
</div>
</div>
<div className="card3">
  <img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <span>Vijayawada</span>
  <p>Agmay Education Drone trainig in vijayawada</p>
</div>
</div>
<div className="card3">
  <img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <span>Vijayawada</span>
  <p>Agmay Education Drone trainig in vijayawada</p>
</div>
</div>
</div>
  </div>
</div>

<div className="hmsec2">
  <div className="centerText">
    <h4 className="heading1">Drone Courses and Certifications</h4>
    <h4 className="heading2">Master the Skies with Expert Training</h4>
    <p className="ptext">Enroll in our comprehensive drone course to earn your pilot license and enchance your skills with advanced drone programs</p>
  </div>
  <div className="coutab">
   
      <div className="courseC">
        <span>
        <i class="bi bi-star-fill"></i>
        </span>
        <h6>
Pilot License
        </h6>
      

    </div>
    
      <div className="courseC">
        <span>
        <i class="bi bi-star-fill"></i>
        </span>
        <h6>
Trainer of Trainer
        </h6>
  
      
    </div>
   
      <div className="courseC">
        <span>
        <i class="bi bi-star-fill"></i>
        </span>
        <h6>
Drone Programming
        </h6>
      
      
    </div>
   
      <div className="courseC">
        <span>
        <i class="bi bi-star-fill"></i>
        </span>
        <h6>
Drone Assembly
        </h6>
      </div>
      
  
    
      <div className="courseC">
        <span>
        <i class="bi bi-star-fill"></i>
        </span>
        <h6>
Manufacturing
        </h6>
      
      
    </div>
  
      <div className="courseC">
        <span>
        <i class="bi bi-star-fill"></i>
        </span>
        <h6>
Repair and Maintanence
        </h6>
    
      
    </div>
  </div>
  </div>

  <div className="hmsec2">
  <div className="centerText">
    <h4 className="heading1">Explore Leading Drone Training Institutes</h4>
    <h4 className="heading2">Empowering Tomorrow's Drone Experts</h4>
    <p className="ptext">Discover top-tier drone training institutes proving the way for future aerial innovaters</p>
  </div>
  <div className="hmsec4">
  <i class="bi bi-chevron-left ariconlef" onClick={moveleft2}></i>
  <i class="bi bi-chevron-right  ariconrig" onClick={moveright2}></i>
  <div className="hmsechid2">
<div className="card4">
<img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <p>Agmay Education Drone trainig in vijayawada</p>
  </div>
  </div>
  <div className="card4">
<img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <p>Agmay Education Drone trainig in vijayawada</p>
  </div>
  </div>
  <div className="card4">
<img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <p>Agmay Education Drone trainig in vijayawada</p>
  </div>
  </div>
  <div className="card4">
<img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <p>Agmay Education Drone trainig in vijayawada</p>
  </div>
  </div>
  <div className="card4">
<img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <p>Agmay Education Drone trainig in vijayawada</p>
  </div>
  </div>
  <div className="card4">
<img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <p>Agmay Education Drone trainig in vijayawada</p>
  </div>
  </div>
  <div className="card4">
<img src="/images/r1.jpg" alt="service"/>
  <div>
  <h6>Agmay technologies company limites</h6>
  <p>Agmay Education Drone trainig in vijayawada</p>
  </div>
  </div>
  </div>
    </div>
  </div>
        </>
    )
}
export default Home