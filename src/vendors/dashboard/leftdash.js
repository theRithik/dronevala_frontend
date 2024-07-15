import React,{useEffect, useState} from "react";
import './dash.css'
import { Link,useNavigate} from "react-router-dom";

import { VGetData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";
import { useQuery } from "@tanstack/react-query";
import SuspenseLoad from "../../suspense/suspence";


const Leftdash =()=>{
const history = useNavigate()
const [value1,setValue1]=useState(false)
const [value2,setValue2]=useState(false)
const [value3,setValue3]=useState(false)
const [value4,setValue4]=useState(false)

const dp={
  endpoint:endpoints.vendorDetails,
}

const {data:basic,isLoading}= useQuery({
  queryKey:['vbasicDetails'],
  queryFn:()=>VGetData(dp)
})

    useEffect(()=>{
      if(basic){
        console.log(basic,'details')
              const catD = Object.values(basic[0])
      catD.splice(0,2)
        for(let i =0;i<catD.length;i++){
         
          if(catD[i]==='service'){
            setValue1(true)
          }
          if(catD[i]==='rental'){
            setValue2(true)
          }
          if(catD[i]==='academy'){
            setValue3(true)
          }
          if(catD[i]==='store'){
            setValue4(true)
          }
        }
      }



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

     
    },[basic])

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
        history('/vendors/login')
        localStorage.removeItem('vtoken')
        localStorage.removeItem('vname')
        localStorage.removeItem('vid')
      }
    

      const menu1=()=>{
        if(value1===true){
          return(
          <li> 
          <div className="leftnavmenutab">
          <p className="menuover" onClick={linkclick}></p>
            <span >
               
            <i class="bi bi-clipboard-pulse dashicon"></i>
            <h5>Service</h5>
            
            </span>
            
        </div>
          <ul className="sub-menu">
          <li>
                <div>
                <Link to='/vendor/service/addService'>
                    <span>
                    <i class="bi bi-database-fill-add dashicon"></i>
                    <h6>Add Service</h6>
                    </span>
                    </Link>
                    </div>
                    </li>
                    <li>
                <div>
                <Link to='/vendor/service/updateAvaliableDates'>
                    <span>
                    <i class="bi bi-calendar-day-fill dashicon"></i>
                    <h6>Update Avaliable Dates</h6>
                    </span>
                    </Link>
                    </div>
                    </li>
                    <li>
                <div>
                <Link to='/vendor/service/updateservice'>
                    <span>
                    <i class="bi bi-file-image-fill dashicon"></i>
                    <h6>Update Photo</h6>
                    </span>
                    </Link>
                    </div>
                    </li>
                    <li>
                <div>
                <Link to='/vendor/service/addBanner'>
                    <span>
                    <i class="bi bi-image-fill dashicon"></i>
                    <h6>Add Service Banner</h6>
                    </span>
                    </Link>
                    </div>
                    </li> 
                    <li>
                <div>
                <Link to='/vendor/service/addGallery'>
                    <span>
                    <i class="bi bi-images dashicon"></i>
                    <h6>Add Service Gallery</h6>
                    </span>
                    </Link>
                    </div>
                    </li>
                    {/* <li>
                <div>
                <Link to='/vendor/service/addViedo'>
                    <span>
                    <i class="bi bi-film dashicon"></i>
                    <h6>Add Service Viedo</h6>
                    </span>
                    </Link>
                    </div>
                    </li> */}
                  
              </ul>
      </li>
          )
        }
      }
      
      const menu2=()=>{
        if(value2===true){
          return(
          <li > 
          <div className="icon_link" >
              <i>
              <i class="fa-solid fa-registered rotet"></i> 
              <span className="link_name">Rental</span>
              <span className="material-symbols-outlined arrow">chevron_right</span>
              </i>
      
      </div>
          <ul className="sub-menu">
          <li><Link to="" className="link_name">Rental</Link></li>
              <li><Link to='/vendor/rentalDrone'><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Add Rental Product</Link></li>
              <li><Link to="/vendor/updateRental"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Update Product</Link></li>
              <li><Link to="/vendor/UpdateRentalDates"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Avaliable Dates</Link></li>
              <li><Link to="/vendor/rentalGallery"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Rental Gallery</Link></li>
             </ul>
      </li>
          )
        }
      }
      
      
      const menu3=()=>{
       
        if(value3===true){
          return(
          <li> 
         <div className="leftnavmenutab">
       <p className="menuover" onClick={linkclick}></p>
            <span >
               
            <i class="bi bi-buildings dashicon"></i>
            <h5>Academy</h5>
            
            </span>
            
        </div>
          <ul className="sub-menu">
              <li>
                <div>
                <Link to='/vendor/academy/addCourse'>
                    <span>
                   <i class="bi bi-file-earmark-plus-fill dashicon"></i>
                    <h6>Add Course</h6>
                    </span>
                    </Link>
                    </div>
                    </li>
              <li>
                <div>
                <Link to="/vendor/academy/updatecourse"><span>
                <i class="bi bi-arrow-up-right-circle-fill dashicon"></i>
                    <h6>Update Course</h6>
                    </span>
                    </Link>
                    </div>
                    </li>
              <li>
                <div>
                    <Link to="/vendor/academy/addTrainer"><span >
                    <i class="bi bi-person-lines-fill dashicon"></i>
                        <h6>Add Trainer</h6></span>
                        </Link></div></li>
           <li>
            <div><Link to="/vendor/academy/addsyllabus"><span >
            <i class="bi bi-clipboard-data-fill dashicon"></i>
                <h6>Add Syllabus</h6></span>
            </Link></div></li>
           <li>
            <div><Link to="/vendor/academy/addbanner">
                <span>
                <i class="bi bi-card-image dashicon"></i>
                    <h6>Add Banner</h6>
                    </span>
                    </Link></div></li>
           <li>
            <div>
                <Link to="/vendor/academy/addGallery">
                    <span>
                    <i class="bi bi-images dashicon"></i>
                        <h6>Add Gallery</h6>
                        </span></Link>
                        </div></li>
           {/* <li>
            <div>
            <Link to="/vendor/academy/addViedo">
                <span>
                <i class="bi bi-film dashicon"></i>
                <h6>Add Viedo </h6>
                </span>
                </Link></div></li> */}
      <li>
        <div>
      <Link to="/vendor/academy/updateCourseStartDate">
        <span>
        <i class="bi bi-calendar-date-fill dashicon"></i>
      <h6>
      Course Start Date
      </h6>
      </span>
      </Link>
      </div>
      </li>
             </ul>
      </li>
          )
        }
      }
      
      
      const menu4=()=>{
      
        if(value4===true){
          return(
          <li > 
          <div className="icon_link" >
              <i>
              <i class="fa-solid fa-store rotet"></i>
              <span className="link_name">Store</span>
              <span className="material-symbols-outlined arrow">chevron_right</span>
              </i>
      
      </div>
          <ul className="sub-menu">
          <li><Link to="" className="link_name">Store</Link></li>
              <li><Link to='/vendor/store/addproduct'><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Add Product</Link></li>
              <li><Link to="/vendor/store/updateproduct"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Update Product</Link></li>
             </ul>
      </li>
          )
        }
      }
      
    

      if(isLoading){
        return <SuspenseLoad/>
      }

    return(
        <>
           <div className="overlay" onClick={overlayClick}></div>
        <div className="leftsideBar">
<ul className="leftbar-ul" style={{listStyle:'none'}}>
    <li>
    <Link to="/vendor/main" >
        <div  className="leftnavmenutab active">
        <p className="menuover" onClick={linkclick}></p>
          
            <span>
            <i class="bi bi-speedometer2 dashicon"></i> 
            <h5>Dashboard</h5>
            </span>
          
        </div>
        </Link>
    </li>
    {menu1()}
{/* {menu2()}  */}
{menu3()}
{/* {menu4()} */}
    <li>
    <Link to="/vendor/calender" >
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
    <Link to="/vendor/orders" >
        <div className="leftnavmenutab">
        <p className="menuover" onClick={linkclick}></p>
            <span >
            <i class="bi bi-box dashicon" ></i>
            <h5>Orders</h5>
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
export default Leftdash