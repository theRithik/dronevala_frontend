
import React,{useEffect, useState} from "react";
import './dash.css'
import { Link, Outlet } from "react-router-dom";


import Leftdash from "./leftdash";

const Dashheader=()=>{
  const [search,setSearch]=useState('')
  const [image,setImage]=useState('')
useEffect(()=>{
 
const theme = localStorage.getItem('theme')
console.log('running')
if(theme){
  if(theme === 'dark'){
    document.querySelector('#root').classList.add('dark')
    document.querySelector('.whitelogo').style.display="block"
    document.querySelector('.blacklogo').style.display="none"
    document.querySelector('.darkMode').style.display="none"
    document.querySelector('.lightMode').style.display="block"
  }else{
    document.querySelector('#root').classList.remove('dark')
    document.querySelector('.blacklogo').style.display="block"
  document.querySelector('.whitelogo').style.display="none"
  document.querySelector('.lightMode').style.display="none"
  document.querySelector('.darkMode').style.display="block"
  }
}

// imgRender()

},[])



const menu =[
  {
    id:1,
    link:'main',
    name:'dashboard',
    icon:'speedometer2'
  },
  {
    id:2,
    link:'calender',
    name:'calender',
    icon:'calendar2-check'
  },
  {
    id:3,
    link:'bill',
    name:'bill',
    icon:'wallet'
  },
  {
    id:4,
    link:'bill',
    name:'bank deatils',
    icon:'bank'
  },
  {
    id:5,
    link:'setting',
    name:'themes',
    icon:'stars'
  }
]

const modesChange=(e)=>{
if(e.target.classList[2] ==='darkMode'){
  e.target.style.display="none"
  e.target.nextSibling.style.display="block"
  document.querySelectorAll('#root')[0].classList.add('dark')
  document.querySelector('.whitelogo').style.display="block"
  document.querySelector('.blacklogo').style.display="none"
  localStorage.setItem('theme','dark')
  const tr =document.querySelector('#flexRadioDefault2')
  if(tr){
tr.checked = true
  }
}
else{
  e.target.style.display="none"
  e.target.previousSibling.style.display="block"
  document.querySelectorAll('#root')[0].classList.remove('dark')
  document.querySelector('.blacklogo').style.display="block"
  document.querySelector('.whitelogo').style.display="none"
  localStorage.setItem('theme','light')
  const tr =document.querySelector('#flexRadioDefault1')
  if(tr){
tr.checked = true
  }
}

}

const imgClick=()=>{
document.querySelector('.sett-container').classList.toggle('settCadd')
document.querySelector('.overlay').classList.toggle('showol2')
}

const inputChange=(e)=>{
  console.log(e.target.value)
  const vl = e.target.value
  if(vl.length>1){
const result = menu.filter((item)=>{
  return item.name.toLowerCase().indexOf(vl.toLowerCase())>-1
})
setSearch(result)
  }else{
    setSearch('')
  }
}

const handclick=()=>{
  document.querySelector('.search-container').classList.remove('showsugg')
  document.querySelector('.overlay').classList.remove('showol3')
  document.querySelector('.dashsearch').value =""
}

const menurender=(data)=>{
  if(data){
    if(data.length>0){
    return data.map((item)=>{
      return(
      
      <Link key={item.id} style={{color:'inherit'}} onClick={handclick} to={`/vendor/${item.link}`}>
      <li>
  <i class={`bi bi-${item.icon}`}>
  </i>
    <p>{item.name}</p>
  </li>
  </Link>
      
    )
  })
  }else{
    return(
      <>
      <div style={{display:'flex',justifyContent:'center',marginTop:'10%',marginBottom:'10%'}}>
        <h6 style={{fontSize:13}}>No Result Found</h6>
      </div>
      <hr/>
      <Link to="/vendor/support" style={{color:'inherit'}}>
      <li>
  <i class="bi bi-life-preserver"></i>
  <p>Support</p>
  </li>
  </Link>
      </>
    )
  }
}else{
    return(
      <>
      <Link to="/vendor/profile" style={{color:'inherit'}}>
  <li >
  <i class="bi bi-person"></i>
    <p>Profile</p>
  </li>
  </Link>
  <Link to="/vendor/bill" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-wallet"></i>
  <p>Bill</p>
  </li>
  </Link>
  <Link to="/vendor/setting" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-gear"></i>
  <p>Setting</p>
  </li>
  </Link>
  <Link to="/vendor/support" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-life-preserver"></i>
  <p>Support</p>
  </li>
  </Link>
  </>
    )
  }

}


const dashshow=()=>{
  document.querySelector('.overlay').classList.add('showol3')
  document.querySelector('.search-container').classList.add('showsugg')
}
    return(
        <>
        <nav class="navbar navbar-expand-lg dashhead" >
  <div class="container-fluid" >
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',paddingLeft:40}}>
    <Link class="navbar-brand" to="/">
    <img src="/images/logo.png" className="blacklogo" style={{width:50}} alt="agmay"/>
    <img src="/images/logo.png" className="whitelogo" style={{width:50,display:'none'}} alt="agmay"/>
    </Link>
   
    </div>
    <div style={{display:'contents'}}>
   <div style={{position:'relative'}} className="d-search-div">
    <div className="d-searcheff">
    <svg xmlns="http://www.w3.org/2000/svg" style={{width:12,fill:'#949a9a'}} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
    <input className="form-control dashsearch" onClick={dashshow} onChange={inputChange} autoComplete="off" placeholder="Search" type="text" id="search"/>
   <div className="d-splashic">
   <svg xmlns="http://www.w3.org/2000/svg" style={{width:12,fill:'#949a9a'}} viewBox="0 0 640 512"><path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z"/></svg>
   </div>
   <div className="search-container">
   <div className="sugg-setting">
    <div className="sett-div">
      <h6>Suggestions</h6>
    </div>
    <div className="sett-menudiv">
    <ul style={{padding:0,listStyle:'none',margin:0}}>
{menurender(search)}


</ul>
    </div>

   </div>
   </div>
   </div>
   <div style={{display:'flex',gap:40,marginRight:20}}>
   <i class="bi bi-moon-stars-fill darkMode" onClick={modesChange}></i>
   <i class="bi bi-brightness-high-fill lightMode" onClick={modesChange}></i>
    <div className="d-bell">
    <i class="bi bi-bell-fill" style={{color:'rgb(97 101 101)'}}></i> 
   </div>
   <div style={{position:'relative'}}>
    {
    image ? 
   <img src={`data:image/png;base64,${image}`} onClick={imgClick} style={{width:35,cursor:'pointer',borderRadius:'50%'}} alt="person"/>
   :
   <img src="/images/addimg.svg" onClick={imgClick} style={{width:35,cursor:'pointer'}} alt="person"/>
   }
   <div className="sett-container">
   <span className="sett-triangle">

   </span>
   <div className="img-setting">
    <div className="sett-div">
      <h6>My Account</h6>
    </div>
    <hr/>
    <div className="sett-menudiv">
<ul style={{padding:0,listStyle:'none',margin:0}}>
  <Link to="/vendor/profile" style={{color:'inherit'}}>
  <li >
  <i class="bi bi-person"></i>
    <p>Profile</p>
  </li>
  </Link>
  <Link to="/vendor/bill" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-wallet"></i>
  <p>Bill</p>
  </li>
  </Link>
  <Link to="/vendor/setting" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-gear"></i>
  <p>Settings</p>
  </li>
  </Link>
  <Link to="/vendor/support" style={{color:'inherit'}}>
  <li>
  <i class="bi bi-life-preserver"></i>
  <p>Support</p>
  </li>
  </Link>
</ul>
    </div>

   </div>
   </div>
   </div>
   </div>
   </div>
       
  </div>
</nav>
<Leftdash/>
<Outlet/>

        </>
    )

}
export default Dashheader