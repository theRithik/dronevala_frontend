import React,{useEffect, useState} from "react";
import './dash.css'
import { Link,useNavigate} from "react-router-dom";

import { PostData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";


const Leftdash =()=>{
const history = useNavigate()
// const [data,setData]=useState('')
const [value1,setValue1]=useState(false)
const [value2,setValue2]=useState(false)
const [value3,setValue3]=useState(false)
const [value4,setValue4]=useState(false)
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

        const data={
            endpoint:endpoints.venderDetails,
            id:"1693767581921",
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUml0aGlrIiwicm9sZSI6IkFkbWluIiwiaWQiOiIxNjkzNzY3NTgxOTIxIiwiZXhwIjoxNzE4MTgwMzE1LCJpYXQiOjE3MTc1NzU1MTV9.A9K0LAwSje71PrJMGrj1I4iN1P7_48aPWWMGsvOON_o"
        }

        const fetchData = async () => {
            try {
              const result = await PostData(data);
              const catD = Object.values(result[0])
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
      
              
            } catch (error) {
            return console.error('Error fetching data:', error);
            } finally {
              console.log('finished')
            }
          };

          fetchData()
       
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
        const mt = document.querySelectorAll('.leftnavmenutab')
       
            for(let i=0;i<mt.length;i++){
                document.querySelectorAll('.leftnavmenutab')[i].classList.remove('active')
            }
        const tp = e.target.parentElement.parentElement.parentElement
        const tp2 = e.target.parentElement.parentElement
        if(tp.classList.contains('leftnavmenutab')){
            tp.classList.add('active')
        }else if(tp2.classList.contains){
            tp2.classList.add('active')
        }
        if(window.innerWidth<550){
overlayClick()
        }
      const lst=  document.querySelector('.showingmenu')
      if(lst){
        document.querySelector('.sub-menu').classList.remove('showingmenu')
      }
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
        // axios.get('https://lqeiv6e0eh.execute-api.ap-south-1.amazonaws.com/prod/AgmayInstitute/logout',{withCredentials:true})
        // .then((response)=>{
        //     console.log(response)
        //     history('/institute/login')
        // }).catch((err)=>{
        //     console.log(err)
        // })
        localStorage.clear()
        history('/institute/login')
      }

const leftClick=(e)=>{
console.log(e.target.childNode.childNode)
}
      const menu1=()=>{
        if(value1===true){
          return(
          <li onClick={leftClick}> 
          <div className="leftnavmenutab">
       
            <span onClick={linkclick}>
               
            <i class="bi bi-clipboard2-pulse-fill dashicon"></i>
            <h6>Service</h6>
            
            </span>
            
        </div>
          <ul className="sub-menu">
          <li><Link to="" className="link_name">Service</Link></li>
              <li><Link to='/vendor/addservice'><i class="bi bi-file-earmark-plus-fill"></i>Add Service</Link></li>
              <li><Link to='/vendor/updatephoto'><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Update Photo</Link></li>
             
              <li><Link to="/vendor/addservicebanner"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Add Service Banner</Link></li>
              <li><Link to="/vendor/addservicegallery"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Add Service Gallery</Link></li>
              <li><Link to="/vendor/addseviceviedo"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Add Service Viedo</Link></li>
              <li><Link to="/vendor/updateservicedates"><span className="material-symbols-outlined" id="arrowMenu">arrow_forward</span>Update Avaliable Dates</Link></li>
             </ul>
      </li>
          )
        }
      }
      
      const menu2=()=>{
        if(value2===true){
          return(
          <li onClick={leftClick}> 
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
          <li onClick={submenu}> 
         <div className="leftnavmenutab">
       
            <span onClick={linkclick}>
               
            <i class="bi bi-buildings dashicon"></i>
            <h6>Academy</h6>
            
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
           <li>
            <div>
            <Link to="/vendor/academy/addViedo">
                <span>
                <i class="bi bi-film dashicon"></i>
                <h6>Add Viedo </h6>
                </span>
                </Link></div></li>
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
          <li onClick={leftClick}> 
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
      
      const submenu=()=>{
        document.querySelector('.sub-menu').classList.toggle('showingmenu')
      }

    return(
        <>
           <div className="overlay" onClick={overlayClick}></div>
        <div className="leftsideBar">
<ul className="leftbar-ul" style={{listStyle:'none'}}>
    <li>
        <div  className="leftnavmenutab active">
            <Link to="/vendor/main" >
            <span onClick={linkclick}>
            <i class="bi bi-speedometer2 dashicon"></i> 
            <h6>Dashboard</h6>
            </span>
            </Link>
        </div>
    </li>
{/* {menu1()}
{menu2()} */}
{menu3()}
{/* {menu4()} */}
    <li>
        <div className="leftnavmenutab">
        <Link to="/vendor/main" >
            <span onClick={linkclick}>
               
            <i class="bi bi-calendar2-check dashicon" ></i>
            <h6>Calender</h6>
            
            </span>
            </Link>
        </div>
    </li>
    <li>
        <div className="leftnavmenutab">
        <Link to="/vendor/main" >
            <span onClick={linkclick}>
            <i class="bi bi-wallet dashicon" ></i>
            <h6>Bill</h6>
            </span>
            </Link>
        </div>
    </li>
    <li className="modesEff">
        <div  className="darkModeL">
            <span onClick={darkClick}>
            <i class="bi bi-moon-stars-fill " ></i>
            <h6>Dark Mode</h6>
            </span>
            </div>
            <div className="lightModeL">
            <span onClick={lightClick}>
            <i class="bi bi-brightness-high-fill" style={{color:'yellow'}}></i>
            <h6>Light Mode</h6>
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