import React,{useEffect} from "react";
import './setting.css'
import { Link, useNavigate } from "react-router-dom";
const VSetting=()=>{
const history = useNavigate()
useEffect(()=>{
   
const lc = localStorage.getItem('theme')
if(lc === 'dark'){
const tr =document.querySelector('#flexRadioDefault2')
tr.checked = true

}else{
 const tr2 =  document.querySelector('#flexRadioDefault1')
 tr2.checked = true
 
}
},[])

 


    const themeClick=(e)=>{    
    
// if(e.target.childNodes[2]){
//     const tp =  e.target.childNodes[2]
//   tp.classList.toggle('rotate')
//   const th = e.target.nextSibling
//   th.classList.toggle('showcardtheme')
// }
// else if(e.target.childNodes[0]){
//     // console.log(e.target)
//     const tp =  e.target.nextSibling
//     tp.classList.toggle('rotate')
//    const th = e.target.parentElement.nextSibling
//    th.classList.toggle('showcardtheme')
// }else if(e.target.nodeName ==='path'){
// // console.log(e.target.parentElements)
// }
// else{
//     const tp =  e.target.nextSibling.nextSibling
//     tp.classList.toggle('rotate')
//     const th = e.target.parentElement.nextSibling
//     th.classList.toggle('showcardtheme')
// }

document.querySelector('.turnsvg').classList.toggle('rotate')
        document.querySelector('.cardtheme').classList.toggle('showcardtheme')

    }

    const LightTheme=()=>{

document.querySelector('.darkMode').style.display="block"
document.querySelector('.lightMode').style.display="none"
document.querySelectorAll('#root')[0].classList.remove('dark')
document.querySelector('.blacklogo').style.display="block"
document.querySelector('.whitelogo').style.display="none"
localStorage.setItem('theme','light')
    }

    const DarkTheme=()=>{

document.querySelectorAll('#root')[0].classList.add('dark')
document.querySelector('.whitelogo').style.display="block"
document.querySelector('.blacklogo').style.display="none"
document.querySelector('.darkMode').style.display="none"
document.querySelector('.lightMode').style.display="block"
localStorage.setItem('theme','dark')
    }

    const logout=()=>{
      history('/vendors/login')
      localStorage.removeItem('vtoken')
      localStorage.removeItem('vname')
      localStorage.removeItem('vid')
    }


    return(
        <>
        <div className="homesection">
            <div style={{padding:'5%'}}>
                <div className="settingCard">
                    <div style={{marginBottom:'10%',display:'flex',gap:10,alignItems:'center'}}>
                    <h1>Settings</h1>
                    <i class="bi bi-gear-fill settrot"></i>
                    </div>
                    <div>
                    <Link to="/vendor/support" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-life-preserver"></i>
  <p>Support</p>
  <svg xmlns="http://www.w3.org/2000/svg" className="angleright" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
  </li>
  </Link>
  <Link to="/vendor/profile" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-person-fill"></i>
  <p>Profile</p>
  <svg xmlns="http://www.w3.org/2000/svg" className="angleright" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
  </li>
  </Link>
  <Link to="/vendor/orders" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-box-fill"></i>
  <p>Bank Details</p>
  <svg xmlns="http://www.w3.org/2000/svg" className="angleright" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
  </li>
  </Link>
 <div >
  <li style={{cursor:'pointer'}} onClick={themeClick}>
  <i class="bi bi-stars"></i>
  <p>Themes</p>
  <svg xmlns="http://www.w3.org/2000/svg" className="angleright turnsvg"  viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
  </li>
  <div className="cardtheme">
    <div  className="cardthemediv">
        <h6 className="cardthemeh6">Apperance</h6>
        <div style={{display:'flex',gap:30,alignItems:'center',justifyContent:'center'}}>
         
<div style={{padding:10,width:'40%'}}>
<img src="/images/theme1.png" alt="light Theme" style={{width:'100%',borderRadius:10,marginBottom:20}}/>
<div class="form-check">
  <input class="form-check-input" onClick={LightTheme} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" htmlFor="flexRadioDefault1">
    Light Mode
  </label>
</div>
</div>
          
          
            <div style={{padding:10,width:'40%'}}>
            <img src="/images/theme2.png" alt="dark Theme" style={{width:'100%',borderRadius:10,marginBottom:20}}/>
            <div class="form-check">
  <input class="form-check-input" onClick={DarkTheme} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" htmlFor="flexRadioDefault2">
    Dark Mode
  </label>
</div>
            </div>
        </div>
    </div>
  </div>
  </div>
  <li style={{cursor:'pointer'}} onClick={logout}>
  <i class="bi bi-box-arrow-right"></i>
  <p>Log out</p>
  </li>
  </div>
  
                </div>
            </div>
        </div>
        </>
    )
}
export default VSetting