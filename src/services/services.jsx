import React,{useEffect,useState} from "react";
import './services.css'
import { Link } from "react-router-dom";
import { GetData } from "../config/vendor/Apiconfig";
import endpoints from "../config/config";
import { DatePicker, Empty } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const Service =()=>{
const[acad,setAcad]=useState('')
const[acad2,setAcad2]=useState('')
const [location,setLocation]=useState('')
const [servicetype,setServicetype]=useState('')
// const [vari,setVari]=useState(4)
// const[disable,setDisable]=useState(false)
const data2  ={
    endpoint:endpoints.AllServices
}
const {data}= useQuery({
    queryFn:()=>GetData(data2),
    queryKey:['allServices']
  })
  useEffect(()=>{
    if(data){
        // console.log('service page')
        setAcad(data)
        setAcad2(data)
        const Ct = data.map((item,i)=>{
            return item.service
        })
        const Fc = Ct.filter((item,i)=>{
            return Ct.indexOf(item)===i
        })
        setServicetype(Fc)
        // console.log(Fc)
        const dt = data.map((item,i)=>{
            return item.currentLocation 
        })
        const ft = dt.filter((item,i)=>{
            return dt.indexOf(item)===i
        })
        setLocation(ft)
    }
  },[data])
       
      
       
const renderCourses =(data)=>{
    // console.log("2")
    if(data){
        if(data.length>0){
            return data.map((item)=>{
                 let nm= item.firstName+item.middleName+item.lastName.replace(/\s+/g, '-')
                  let cu = item.companyName.replace(/\s+/g, '-')

                return(
                    <Link to={`/services/${item.service}/${cu}/${nm}/${item.serviceID}`} key={item.id} >
                    <div className="acdcard">
                        {item.serviceImage ?(
 <img src={`${endpoints.imageprefix}${item.serviceImage}`} className="card5img" alt="academy"/>
                        ):(
                            <div style={{position:'relative'}}>
                            <img src="/images/wallpaper2.webp" className="card5img" alt="academy"/>
                        <p style={{position:'absolute',top:15,right:15,color:'orange',fontSize:10,fontWeight:700}}>No Image Provided</p>
                        </div>
                        )}
   
    <div className="cardbody">
<h3>{item.companyName}</h3>
<div>
    <h6>{item.firstName} {item.middleName} {item.lastName}</h6>
    <p style={{fontSize:18}}>{item.service} </p>
    <div style={{display:'flex'}}>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span>{item.currentLocation}</h5>
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
              <h6 style={{fontSize:12,fontWeight:700}}> No Service Found</h6>
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

const serviceType=(e)=>{
    const num = document.querySelectorAll('.menuclick')
    // console.log(num)
    if(num.length>0){
     num[0].classList.remove('menuclick')
    }
     e.target.classList.add('menuclick')
     const dt  = e.target.innerText
const val = acad2
    
    if(dt === 'All'){
        setAcad(val)
        // setDisable(false)
    }else{
   const res= val.filter((item)=>{
        return item.service.toLowerCase().indexOf(dt.toLowerCase())>-1
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


const servicetypeRender=(data)=>{
if(data){
    if(data.length>0){
        return data.map((item,i)=>{
            return  <span className="menubutton" onClick={serviceType} key={i}>{item}</span>
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
        return item.currentLocation.toLowerCase().indexOf(dt.toLowerCase())>-1
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
  const loca = document.querySelectorAll('.menuclickloc')
  if(loca.length>0){
    loca[0].classList.remove('menuclickloc')
}
e.target.classList.add('menuclick')
}

const hidemenu=(e)=>{
    const mn =  e.target.nextSibling
    mn.nextSibling.classList.toggle('hide')
    mn.nextSibling.nextSibling.classList.toggle('show')
    // console.log(mn)
    const nm = e.target.parentElement.nextSibling
    nm.classList.toggle('close')
    e.target.parentElement.classList.toggle('closeEff')
}

const handleRender=()=>{
    let value5
    const date = document.getElementById('DtPk').value
    // console.log(date)
    if(date.length>10){
       value5 = date.split('~')
       const start = value5[0].split('/').reverse().join('/')
       const end = value5[1].split('/').reverse().join('/')
       const cardData =acad

let data5 = cardData.filter((item)=>{ 
const aval = item.availableDates.split('~')
const aval1 =aval[0].split('/').reverse().join('/')
const d1 = new Date(aval1)
const aval2 = aval[1].split('/').reverse().join('/')
const d2 = new Date(aval2) 
const s1 = new Date(start)
const s2 = new Date(end)
return d1 <= s2 && d2 >= s1 
     })
         setAcad(data5)       
    }
     else{
value5 = date
const cardData =acad
if(date){
let data5 = cardData.filter((item)=>{
const aval = item.availableDates.split('~')
const aval1 =aval[0].split('/').reverse().join('/')
const d1 = new Date(value5.split('/').reverse().join('/'))
const aval2 = aval[1].split('/').reverse().join('/')
 return new Date(aval1)<=d1 && new Date(aval2) >=d1
})
setAcad(data5)

}
else{
 setAcad(acad2.reverse())
 alert('Please Select Date')
}

    }

  }

    return(
        <>
          <div className="overlay" onClick={overlayClick}></div>   
        <div className="servicePage">
        <Helmet>
        <title>Services - Dronevala</title>
        <link rel="Dronevala" href="https://dronevala.com/services"/>
        <meta name="description" content="Discover Dronevala's comprehensive drone services tailored for professionals and enthusiasts alike. From expert pilot training to cutting-edge drone rentals and specialized aerial solutions, explore our innovative offerings today" />
        <link rel="canonical" href="https://dronevala.com/services" />
        <meta name="keywords" content="Drone services,UAV services (Unmanned Aerial Vehicle),Aerial services,Drone solutions,Drone operations"/>
        <meta property="og:title" content="Dronevala - Services" />
        <meta property="og:url" content="https://dronevala.com/services" />
        <meta property="og:image" content="https://dronevala.com/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Discover Dronevala's comprehensive drone services tailored for professionals and enthusiasts alike. From expert pilot training to cutting-edge drone rentals and specialized aerial solutions, explore our innovative offerings today"/>
    </Helmet>
<div className="rightsection">
<div>
   
    <h3>Drone Services</h3>
    <p>Discover expert Drone service provider</p>
    </div>
    <hr style={{color:'#b1adad'}}/>
    <div style={{display:'flex',marginTop:20}}>
        {acad.length>0 &&
<h6 className="Pcount">{acad.length} Services</h6>
}{ acad.length<1 &&
<h6 className="Pcount">Services</h6>
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
    <h4>category</h4>
    <i class="bi bi-chevron-up arrowup"></i>
    <i class="bi bi-chevron-down arrowdown"></i>
    </div>
    <div className="submenuElements" style={{display:'grid'}}>
    <span className="menubutton menuclick" onClick={showAll}>All</span>
{servicetypeRender(servicetype)}
    </div>
</div>
<hr style={{color:'#9b9797',marginTop:30}}/>
{/* <div style={{marginTop:20}}>
<div className="menuElement2">
    <h4>Course Type</h4>
    <i class="bi bi-chevron-up"></i>
    </div>
    <div className="submenuElements">
        {coursetypeRender(coursetype)}
        </div>
    </div> */}
    <div style={{marginTop:30}}>
    <div className="menuElement2" style={{marginBottom:20}} onClick={hidemenu}>
        <span className="menuover"></span>
    <h4>Date</h4>
    <i class="bi bi-chevron-up arrowup"></i>
    <i class="bi bi-chevron-down arrowdown"></i>
    </div>
    <div className="submenuElements">
    <DatePicker
   format="DD/MM/YYYY"
   style={{width:'100%'}}
  placeholder="Service Avaliable Date"
  needConfirm
  id="DtPk"
  onChange={handleRender}
/>
</div>
</div>
    <hr style={{color:'#9b9797',marginTop:30}}/>
    <div style={{marginTop:20}}>
<div className="menuElement2" onClick={hidemenu} >
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

export default Service