import React,{useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import './header.css'
import Footer from "./footer";
const Header =()=>{

  const [note,setNote]=useState(true)

  useEffect(()=>{
const tk = localStorage.getItem('token')
if(tk){
  setNote(false)
}
else{
  setNote(true)
}
  },[])

    return(
        <>
        {note &&
        <div className="note"> We provide comprehensive drone solutions to meet all your aerial needs  <span><Link to="/login" style={{color:'inherit'}}> LOGIN </Link>| <Link to="/register" style={{color:'inherit'}}>SIGNUP</Link></span></div>
        }
      <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbarhead">
  <div class="container-fluid">
    <Link class="navbar-brand" className="hdlogo" to="/">
      <img src="/images/dronevala.png" alt="logo"/>
    </Link>
    <button class="navbar-toggler" type="button" style={{background:'#f0f8ffa6'}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/academy">Academy</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Service</Link>
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
      <form class="d-flex" role="search">
       <img src="/images/whatsapp.webp" alt="whatsapp" style={{width:25}}/>
       <span>|</span>
       <i class="bi bi-telephone"></i>
       <div>
        <h6>Need help? Call us:</h6>
        <h5>+91 2345678</h5>
       </div>
        </form>
    </div>
  </div>
</nav>
<Outlet/>
<Footer/>
</>
    )
}

export default Header