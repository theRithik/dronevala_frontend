import React,{useEffect,useState} from "react";
import './academy.css'
import { Link } from "react-router-dom";
import { GetData } from "../config/vendor/Apiconfig";
import endpoints from "../config/config";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Empty } from "antd";


const Academy =()=>{
const[acad,setAcad]=useState('')
const[acad2,setAcad2]=useState('')
const [location,setLocation]=useState('')
const [coursetype,setCoursetype]=useState('')
// const [vari,setVari]=useState(4)
// const[disable,setDisable]=useState(false)
const data2  ={
    endpoint:endpoints.AllCourses
}

   const {data} =  useQuery({
        queryKey:['homeAcademy'],
        queryFn:()=>GetData(data2)
     })
    useEffect(()=>{
        if(data){
        setAcad(data)
        setAcad2(data)
        const Ct = data.map((item,i)=>{
            return item.courseType
        })
        const Fc = Ct.filter((item,i)=>{
            return Ct.indexOf(item)===i
        })
        setCoursetype(Fc)
        // console.log(Fc)
        const dt = data.map((item,i)=>{
            return item.city 
        })
        const ft = dt.filter((item,i)=>{
            return dt.indexOf(item)===i
        })
        setLocation(ft)
    }
 // eslint-disable-next-line
    },[data])
    
   

const renderCourses =(data)=>{
    // console.log("2")
    if(data){
        if(data.length>0){
            return data.map((item)=>{
                let nm = item.institute_name.replace(/\s+/g, '-');
                let cu = item.course.replace(/\s+/g, '-');
                return(
                    <Link to={`/academy/${nm}/${cu}/${item.courseID}`} key={item.id} >
                    <div className="acdcard">
                        {item.display_image ?(
    <img src={`${endpoints.imageprefix}${item.display_image}`} className="card5img" alt="academy"/>
                        ):(
                            <div style={{position:'relative'}}>
                            <img src="/images/wallpaper2.webp" className="card5img" alt="academy"/>
                        <p style={{position:'absolute',top:15,right:15,color:'orange',fontSize:10,fontWeight:700}}>No Image Provided</p>
                        </div>
                             )
                        }
    <div className="cardbody">
<h3>{item.institute_name}</h3>
<div>
    <h6>{item.course}</h6>
    <p>₹ {item.fees} </p>
    <div style={{display:'flex'}}>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> {item.city}</h5>
    <i class="bi bi-suit-heart likeicon"></i>
    </div>
</div>
    </div>
</div>
</Link>
                )
            })
        }else{
            return(
                <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 120 }}
            description={
              <h6 style={{fontSize:12,fontWeight:700}}> No Course Found</h6>
            }
            style={{margin:'auto',marginTop:'15%'}}
          >
          </Empty>
            )
        }
    }else{
        const ld=[1,2,3,4]
            return ld.map((item)=>{
                return(
                    
                    <div className="acdcard" key={item} aria-hidden="true" id="cardPlaceholder">
                  <p className="placeholder-wave" style={{marginBottom:0}}>
                  <span className="placeholder col-12" style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}></span>
                  </p>
                  
                  <div className="cardbody" style={{padding:10}}>
                  <p className="card-text placeholder-wave" style={{padding:10}}>
                  <i className="placeholder col-10"></i>
                  <i className="placeholder col-6"></i>
                  <i className="placeholder col-8"></i>
                  </p>
                  <span className="button disabled placeholder col-6" style={{height:40,borderRadius:20,marginTop:0}} aria-disabled="true"></span>
                  </div>
                  </div>
                
                )
            })
    }
}

const courseType=(e)=>{
    const num = document.querySelectorAll('.menuclickcou')
    // console.log(num)
    if(num.length>0){
     num[0].classList.remove('menuclickcou')
    }
     e.target.classList.add('menuclickcou')
     const dt  = e.target.innerText
const val = acad2
    
    if(dt === 'All'){
        setAcad(val)
        // setDisable(false)
    }else{
   const res= val.filter((item)=>{
        return item.courseType.toLowerCase().indexOf(dt.toLowerCase())>-1
    })
    setAcad(res)
    // if(res.length>4){
    // //    setDisable(false)
    // }
    // else{
    //     setDisable(true)
    // }
}

}

const droneType=(e)=>{
    if(acad){
    // console.log(e)
   const num = document.querySelectorAll('.menuclick')
   // console.log(num)
   if(num.length>0){
    num[0].classList.remove('menuclick')
   }
    e.target.classList.add('menuclick')
const dt  = e.target.innerText
const val = acad2
if(dt==='All'){
    setAcad(val)
    // setDisable(false)
}else{
    const res= val.filter((item)=>{
        return item.droneCategory.toLowerCase().indexOf(dt.toLowerCase())>-1
    })
    setAcad(res)
    // if(res.length>4){
    //    setDisable(false)
    // }
    // else{
    //     setDisable(true)
    // }
}
    }
}

const coursetypeRender=(data)=>{
if(data){
    if(data.length>0){
        return data.map((item,i)=>{
            return  <span className="menubutton" onClick={courseType} key={i}>{item}</span>
        })
    }
}
}

const locationRender=(data)=>{
if(data){
    if(data.length>0){
        return data.map((item,i)=>{
            return  <span className="menubutton" onClick={locationFilter} key={i}>{item}</span>
        })
    }
}
}

const locationFilter=(e)=>{
    const num = document.querySelectorAll('.menuclickloc')
    // console.log(num)
    if(num.length>0){
     num[0].classList.remove('menuclickloc')
    }
     e.target.classList.add('menuclickloc')
     const dt  = e.target.innerText
const val = acad2
if(dt==='All'){
    setAcad(val)
    // setDisable(false)
}else{
    const res= val.filter((item)=>{
        return item.city.toLowerCase().indexOf(dt.toLowerCase())>-1
    })
    setAcad(res)
}
}

const filterclick=(e)=>{
    document.querySelector('.leftsection').classList.toggle('showFilter')
    e.target.classList.toggle('filteroff')
    document.querySelector('.rightsection').classList.toggle('fullcotent')
    document.querySelector('.overlay').classList.toggle('showover')
    document.body.classList.toggle('overflow')
}
const overlayClick=()=>{
    document.querySelector('.overlay').classList.remove('showover')
    document.querySelector('.leftsection').classList.remove('showFilter')
   document.querySelector('.filtericon').classList.remove('filteroff')
    document.querySelector('.rightsection').classList.remove('fullcotent')
    document.body.classList.remove('overflow')
}

const showAll=(e)=>{
    setAcad(acad2)
  const dt=  document.querySelectorAll('.menuclick')
  if(dt.length>0){
    dt[0].classList.remove('menuclick')
  }
  const ctype = document.querySelectorAll('.menuclickcou')
  if(ctype.length>0){
    ctype[0].classList.remove('menuclickcou')
  }
  const loca = document.querySelectorAll('.menuclickloc')
  if(loca.length>0){
    loca[0].classList.remove('menuclickloc')
}
e.target.classList.add('menuclick')
}
const hidemenu=(e)=>{
    // console.log(e.target)
    const mn =  e.target.nextSibling
    mn.nextSibling.classList.toggle('hide')
    mn.nextSibling.nextSibling.classList.toggle('show')
    // console.log(mn)
    const nm = e.target.parentElement.nextSibling
    nm.classList.toggle('close')
    e.target.parentElement.classList.toggle('closeEff')
}

    return(
        <>
          <div className="overlay" onClick={overlayClick}></div>   
        <div className="academyPage">
        <Helmet>
        <title>Academy - Dronevala</title>
        <link rel="Dronevala" href="https://dronevala.com/academy"/>
        <meta name="description" content="Discover Dronevala Academy, your premier destination for UAV training and certification. Learn drone piloting skills with expert instructors. Join us to explore drone technology and its applications today!" />
        <link rel="canonical" href="https://dronevala.com/academy" />
        <meta name="keywords" content="drone course, Drone training academy,UAV pilot school,Drone certification courses, Learn to fly drones,Best drone academy,Drone flight training,Professional UAV training,Remote pilot license,Drone education programs,Drone school near me"/>
        <meta property="og:title" content="Dronevala - Academy" />
        <meta property="og:url" content="https://dronevala.com/academy" />
        <meta property="og:image" content="https://dronevala.com/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Discover Dronevala Academy, your premier destination for UAV training and certification. Learn drone piloting skills with expert instructors. Join us to explore drone technology and its applications today!"/>
    </Helmet>
     
<div className="rightsection">
<div >
   
    <h3>Drone Academy</h3>
    <p>Discover expert-led drone training programs</p>
    </div>
    <hr style={{color:'#b1adad'}}/>
    <div style={{display:'flex',marginTop:20}}>
        {acad.length>0 &&
<h6 className="Pcount">{acad.length} Courses</h6>
}{ acad.length<1 &&
<h6 className="Pcount">Courses</h6>
}
<div style={{marginLeft:'auto'}}>
<i class="bi bi-funnel filtericon" onClick={filterclick}></i>
</div>
    </div>
    <div className="acddiv">
        {renderCourses(acad)}
    </div>
</div>
<div className="leftsection">
<div className="menuElement">
    <h3>Filters Courses</h3>
    <i class="bi bi-filter" style={{fontSize:20}}></i>
</div>
<div style={{marginTop:30}}>
    <div className="menuElement2" onClick={hidemenu}>
    <span className="menuover"></span>
    <h4>Cateogry</h4>
    <i class="bi bi-chevron-up arrowup"></i>
    <i class="bi bi-chevron-down arrowdown"></i>
    </div>
    <div className="submenuElements">
    <span className="menubutton menuclick" onClick={showAll}>All</span>
<span className="menubutton " onClick={droneType}>Small</span>
<span className="menubutton" onClick={droneType}>Medium</span>
<span className="menubutton" onClick={droneType}>large</span>
    </div>
</div>
<hr style={{color:'#9b9797',marginTop:30}}/>
<div style={{marginTop:20}}>
<div className="menuElement2" onClick={hidemenu}>
<span className="menuover"></span>
    <h4>Course Type</h4>
    <i class="bi bi-chevron-up arrowup"></i>
    <i class="bi bi-chevron-down arrowdown"></i>
    </div>
    <div className="submenuElements">
        {coursetypeRender(coursetype)}
        </div>
    </div>
    <hr style={{color:'#9b9797',marginTop:30}}/>
    <div style={{marginTop:20}}>
<div className="menuElement2" onClick={hidemenu}>
<span className="menuover"></span>
    <h4>Location</h4>
    <i class="bi bi-chevron-up arrowup"></i>
    <i class="bi bi-chevron-down arrowdown"></i>
    </div>
    <div className="submenuElements">
    {/* <span className="menubutton menuclickloc" onClick={locationFilter}>All</span> */}
    {locationRender(location)}
    </div>
   
    </div>
</div>
        </div>
        </>
    )
}

export default Academy