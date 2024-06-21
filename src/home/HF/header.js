import React,{useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import './header.css'
import Footer from "./footer";
const Header =()=>{

  const [note,setNote]=useState(true)

  useEffect(()=>{
    console.log('header')
const tk = localStorage.getItem('token')
if(tk){
  setNote(false)
}
else{
  setNote(true)
}
  },[])

  const searchClick=()=>{
    document.querySelector('.overlayhome').classList.add('searchbodyhide')
    document.body.classList.add('overflow')
    document.querySelector('.searchoverlay').classList.add('showSearchtab')
  }

  const cancelsearch=()=>{
    document.querySelector('.overlayhome').classList.remove('searchbodyhide')
    document.body.classList.remove('overflow')
    document.querySelector('.searchoverlay').classList.remove('showSearchtab')
  }

    return(
        <>
        {note &&
        <div className="note"> <p>We provide comprehensive drone solutions to meet all your aerial needs </p>
         <span><Link to="/register" style={{color:'inherit'}}> Join Us </Link>  | <Link to="/login" style={{color:'inherit'}}>Sign In</Link></span>
         </div>
        }
      <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbarhead">
  <div class="container-fluid">
    <Link class="navbar-brand" className="hdlogo" to="/">
      <img src="/images/dronevala.webp" alt="logo"/>
    </Link>
    <i class="bi bi-list d-lg-none" style={{marginRight:10,fontSize:25,cursor:'pointer'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"></i>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/academy">Academy</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Service</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Rental</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link" to="/">Store</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/aboutus">About</Link>
        </li>
        
       
      </ul>
      
       <div className="searchInput" onClick={searchClick}>
       <i class="bi bi-search"></i>
        <input type="text" className="input" placeholder="Search" id="search"/>
       </div>
       <i class="bi bi-heart headIcon" style={{marginLeft:20}}></i>
       <i class="bi bi-bag headIcon" style={{marginBottom:2}}></i>
       <div className="searchoverlay">
<div className="searchoverlaynav">
  <img src="/images/dronevala.webp" alt="logo" />
  <div className="searchInput2">
       <i class="bi bi-search searchicon"></i>
        <input type="text" className="searchinputbox" placeholder="Search" id="search"/>
       </div>
       <span className="cancel" onClick={cancelsearch}>Cancel</span>
</div>

<div className="Ssuggestions">
  <h6>Popular Search Terms</h6>
<span><Link to="/academy">Academy</Link></span>
<span> <Link to="/services">Services</Link></span>
<span><Link to="/rental">Rental</Link></span>
<span><Link to="/store">Store</Link></span>
</div>
       </div>
    </div>
  </div>
  <div class="offcanvas-lg offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
  
    <button type="button" class="btn-close" style={{fontSize:25,marginTop:10,marginRight:10}} data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="offcandiv1">
      <ul>
       <Link to="/academy"><li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Academy</span><i class="bi bi-chevron-right"></i></li></Link>
       <Link to="/services"><li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Services</span><i class="bi bi-chevron-right"></i></li></Link>
       <Link to="/rental"> <li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Rental</span><i class="bi bi-chevron-right"></i></li></Link>
       <Link to="/store"><li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Store</span><i class="bi bi-chevron-right"></i></li></Link>
       <Link to="/aboutus">  <li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>About</span><i class="bi bi-chevron-right"></i></li></Link>
       <Link to="/contact"><li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Contact</span><i class="bi bi-chevron-right"></i></li></Link>
      </ul>
      <h6 className="offcantag">
      Become a Dronevala Member for the best Drone courses, services, rental, and drone store in the world. 
      </h6>
      <div className="offcanbutt">
        <span>Join Us</span>
        <span>Sign In</span>
      </div>
    </div>
  </div>
</div>
</nav>
<div className="overlayhome"></div> 
<Outlet/>
<Footer/>
</>
    )
}

export default Header