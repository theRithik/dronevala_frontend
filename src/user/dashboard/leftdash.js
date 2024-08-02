import React,{useEffect} from "react";
import './dash.css'
import { Link,useNavigate} from "react-router-dom";

const UserLeftdash =()=>{
const history = useNavigate()

    useEffect(()=>{

     const wd=   window.innerWidth
     if(wd<550){
        const sh = document.querySelector('.showol')
if(sh){
sh.addEventListener('click',()=>{
    document.querySelector('.leftsideBar').classList.remove('phoneEff')
    document.querySelector('.overlay').classList.remove('showol')
})
}
const lc = localStorage.getItem('theme')
if(lc === 'dark'){
    document.querySelector('.darkModeL').style.display ="none"
    document.querySelector('.lightModeL').style.display ="block"
}else{
    document.querySelector('.lightModeL').style.display="none"
    document.querySelector('.darkModeL').style.display="block"
}
        }
     
    },[])

    const handleclick=()=>{
        document.querySelector('.leftsideBar').classList.toggle('phoneEff')
        document.querySelector('.overlay').classList.toggle('showol')
        document.querySelector('body').classList.toggle('bscrolleff')
    }

    const overlayClick=()=>{
        document.querySelector('.leftsideBar').classList.remove('phoneEff')
        document.querySelector('.overlay').classList.remove('showol')
       const bt =  document.querySelector('.settCadd')
       if(bt){
        document.querySelector('.sett-container').classList.remove('settCadd')
        document.querySelector('.overlay').classList.remove('showol2')
       }

       const tp =  document.querySelector('.showsugg')
       if(tp){
        document.querySelector('.search-container').classList.remove('showsugg')
        document.querySelector('.overlay').classList.remove('showol3')
       }
      }

      const linkclick=(e)=>{
const ac = document.querySelectorAll('.active')
if(ac ){
  ac[0]?.classList.remove('active')
}
       e.target.parentElement.classList.toggle('active')
       const tp = e.target.parentElement.nextSibling
     tp?.classList.toggle('showingmenu')
      }

      const darkClick=()=>{
        document.querySelector('.darkModeL').style.display="none"
        document.querySelector('.lightModeL').style.display="block"
  document.querySelectorAll('#root')[0].classList.add('dark')
  document.querySelector('.whitelogo').style.display="block"
  document.querySelector('.blacklogo').style.display="none"
  localStorage.setItem('theme','dark')
      }

      const lightClick=()=>{
        document.querySelector('.lightModeL').style.display="none"
        document.querySelector('.darkModeL').style.display="block"
        document.querySelectorAll('#root')[0].classList.remove('dark')
        document.querySelector('.blacklogo').style.display="block"
        document.querySelector('.whitelogo').style.display="none"
        localStorage.setItem('theme','light')
      }

      const logout=()=>{
        history('/login')
        localStorage.removeItem('token')
        localStorage.removeItem('uname')
        localStorage.removeItem('_id')
      }
    

 
      
  
      
    
    

    //   if(isLoading){
    //     return <SuspenseLoad/>
    //   }

    return(
        <>
           <div className="overlay" onClick={overlayClick}></div>
        <div className="leftsideBar">
<ul className="leftbar-ul" style={{listStyle:'none'}}>
    <li>
    <Link to="/user/dashboard" >
        <div  className="leftnavmenutab active">
        <p className="menuover" onClick={linkclick}></p>
          
            <span>
            <i class="bi bi-speedometer2 dashicon"></i> 
            <h5>Dashboard</h5>
            </span>
          
        </div>
        </Link>
    </li>
    <li>
    <Link to="/user/calender" >
        <div className="leftnavmenutab">
        <p className="menuover" onClick={linkclick}></p>
            <span >    
            <i class="bi bi-calendar2-check dashicon" ></i>
            <h5>Calender</h5> 
            </span> 
        </div>
        </Link>
    </li>
    <li>
    <Link to="/user/orders" >
        <div className="leftnavmenutab">
        <p className="menuover" onClick={linkclick}></p>
            <span >
            <i class="bi bi-box dashicon" ></i>
            <h5>Orders</h5>
            </span>        
        </div>
        </Link>
    </li>
    <li>
    <Link to="/user/reviews" >
        <div className="leftnavmenutab">
        <p className="menuover" onClick={linkclick}></p>
            <span >
            <i class="bi bi-star-half dashicon" ></i>
            <h5>Reviews</h5>
            </span>        
        </div>
        </Link>
    </li>
    <li className="modesEff">
        <div  className="darkModeL">
            <span onClick={darkClick}>
            <i class="bi bi-moon-stars-fill " ></i>
            <h5>Dark Mode</h5>
            </span>
            </div>
            <div className="lightModeL">
            <span onClick={lightClick}>
            <i class="bi bi-brightness-high-fill" style={{color:'yellow'}}></i>
            <h5>Light Mode</h5>
            </span>
        </div>
    </li>
    <li>
        <div>
            <span onClick={logout}>
            <i class="bi bi-box-arrow-right dashicon" style={{color:'red'}}></i>
            <h6 style={{color:'red'}}>Log out</h6>
            </span>
        </div>
    </li>
    
</ul>
        </div>
        <span className="d-menu-icon" onClick={handleclick}>
  <i class="bi bi-list"  ></i>
  </span>

       
        </>
    )
}
export default UserLeftdash