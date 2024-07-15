import React,{useEffect, useState} from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import './header.css'
import Footer from "./footer";

const Header =()=>{
  const [note,setNote]=useState(true)
  const [logged,setLogged]=useState(false)
  const history=useNavigate()
  const location =useLocation()
  useEffect(()=>{
checklogin()
  },[logged,note])

  const checklogin=()=>{
    const tk = localStorage.getItem('token')
    if(tk){
     setLogged(true)
     setNote(false)
    }else{
      setLogged(false)
      setNote(true)
    }
  }

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

  const logout =()=>{
    localStorage.clear()
    checklogin()
    history('/login')
  }

    return(
        <>
        <div className="searchoverlay">
<div className="searchoverlaynav">
  <img src="/images/dronevala.webp" alt="logo" />
  <div className="searchInput2">
       <i class="bi bi-search searchicon"></i>
        <input type="text" className="searchinputbox" placeholder="Search" id="search2"/>
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
    <i class="bi bi-list d-lg-none" style={{paddingRight:10,paddingLeft:10,fontSize:25,cursor:'pointer'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"></i>
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
          <Link class="nav-link" to="/rental">Rental</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link" to="/store">Store</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/aboutus">About</Link>
        </li>
        
       
      </ul>
      
       <div className="searchInput" onClick={searchClick}>
       <i class="bi bi-search"></i>
        <input type="text" className="input" placeholder="Search" id="search"/>
       </div>
       <i class="bi bi-heart headIcon" onClick={()=>history('/contactus')} style={{marginLeft:20,cursor:'pointer'}}></i>
       {/* profile menu */}
       <div className="showMenuoptions" style={{position:'relative',padding:'1%,1.5%'}}>
       <i class="bi bi-bag headIcon " style={{marginBottom:2,padding:'70%,90%'}}></i>
       <div className="head-setting">
        <span className="head-triangle">

</span>
    <div className="head-div">
      <h6>My Account</h6>
    </div>
    <hr/>
    <div className="head-menudiv">
<ul style={{padding:0,listStyle:'none',margin:0}}>
 {!logged && 
  <div>

<li onClick={()=>{history('/register',{state:{form:location.pathname}})}}>
<i class="bi bi-at"></i>
<p>Sign up</p>
            </li>
            
           
            <li onClick={()=>{history('/login',{state:{form:location.pathname}})}}>
            <i class="bi bi-box-arrow-in-right"></i>
            <p>Login</p>
            </li>
            
            </div>
            }
            {logged &&  
            <div>
            <Link to="/user/profile" style={{color:'inherit'}}>
            <li>
            <i class="bi bi-person-lines-fill"></i>
            <p>Profile</p>
                        </li>
                        </Link>
                        <Link to="/user/profile" style={{color:'inherit'}}>
            <li>
            <i class="bi bi-bag-fill" style={{color:'#ef9a00'}}></i>
            <p>orders</p>
                        </li>
                        </Link>
                        
                              
                        <li onClick={logout}>
                        <i class="bi bi-box-arrow-left" style={{color:'red'}}></i>
                        <p>Log out</p>
                                    </li>
                                    </div>
            }
          </ul>
          </div>
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
      {!logged && 
      <div className="offcanbutt">
        <span onClick={()=>{history('/register',{state:{form:location.pathname}})}} style={{cursor:'pointer'}}>Join Us</span>
        <span onClick={()=>{history('/login',{state:{form:location.pathname}})}} style={{cursor:'pointer'}}>Sign In</span>
      </div>
}
{logged &&
 <div className="offcanbutt">
 <span onClick={()=>{history('/user/profile')}} style={{cursor:'pointer'}}>Profile</span>
 <span onClick={()=>{history('/user/dashboard')}} style={{cursor:'pointer'}}>Dashboard</span>
</div>

}
    </div>
  </div>
</div>
</nav>
<div className="overlayhome"></div> 
<Outlet context={{note,setNote}}/>
<Footer/>
</>
    )
}

export default Header