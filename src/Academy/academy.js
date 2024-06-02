import React,{useEffect,useState} from "react";
import './academy.css'
import axios from "axios";
import { Link } from "react-router-dom";

const url ="https://lqeiv6e0eh.execute-api.ap-south-1.amazonaws.com/prod/user/user"
const Academy =()=>{
const[acad,setAcad]=useState('')
const[acad2,setAcad2]=useState('')
const [vari,setVari]=useState(4)
const[disable,setDisable]=useState(false)
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setAcad(response.data)
            setAcad2(response.data)
            if(response.data.length<5){
                setDisable(true)
            }
            console.log(response.data)
        })
    },[])

    const loadClick=()=>{

        setVari((prev)=> {
            if(prev<acad.length){
           return prev + 4
    }else{
        setDisable(true)
 return prev = acad.length

    }
})
    }

const renderCourses =(data)=>{
    if(data){
        if(data.length>0){
            return data.slice(0,vari).map((item)=>{
                let nm = item.institute_name
             nm=   nm.replace(/\s+/g, '-')
                let cu = item.course
              cu=  cu.replace(/\s+/g, '-')
                return(
                    <Link to={`/academy/${nm}/${cu}/${item.id}`} key={item.id} >
                    <div className="card5">
    <img src="/images/r1.jpg" className="card5img" alt="academy"/>
    <div className="card-body">
<h3>{item.institute_name}</h3>
<div>
    <h6> <span><img src="/images/drone.png" alt="drone" style={{width:30}}/></span>{item.course}</h6>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> {item.city}</h5>
    <p>Course Fee <span>₹ {item.fees} /-</span></p>

    <button className="button beff">View Details <i class="bi bi-arrow-right"></i></button>
</div>
    </div>
</div>
</Link>
                )
            })
        }else{
            return(
                <>
                <img src="/images/no-results.png" alt="No Result" style={{width:'50%'}}/>
                </>
            )
        }
    }else{
        const ld=[{id:1},{id:2},{id:3},{id:4}]
            return ld.map((item)=>{
                return(
                    
                    <div className="card5" key={item.id} aria-hidden="true" id="cardPlaceholder">
                  <p className="placeholder-wave" style={{marginBottom:0}}>
                  <span className="placeholder col-12" style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}></span>
                  </p>
                  
                  <div className="card-body" style={{padding:10}}>
                   
                  <h5 className="card-title placeholder-wave" style={{marginBottom:5}}>
                  <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-wave">
                  <i className="placeholder col-10"></i>
                  <i className="placeholder col-6"></i>
                  <i className="placeholder col-8"></i>
                  </p>
                  <span className="button disabled placeholder col-6" style={{height:40,borderRadius:20}} aria-disabled="true"></span>
                  </div>
                  </div>
                
                )
            })
    }
}

const courseType=(e)=>{
    const dt = e.target.value
    const val = acad2
    
    if(dt === 'All'){
        setAcad(val)
        setDisable(false)
    }else{
   const res= val.filter((item)=>{
        return item.courseType.toLowerCase().indexOf(dt.toLowerCase())>-1
    })
    setAcad(res)
    if(res.length>4){
       setDisable(false)
    }
    else{
        setDisable(true)
    }
}

}

const droneType=(e)=>{
const dt  = e.target.value
const val = acad2
if(dt==='All'){
    setAcad(val)
    setDisable(false)
}else{
    const res= val.filter((item)=>{
        return item.droneCategory.toLowerCase().indexOf(dt.toLowerCase())>-1
    })
    setAcad(res)
    if(res.length>4){
       setDisable(false)
    }
    else{
        setDisable(true)
    }
}
}

    return(
        <>
        <div  className="academyPage">
            <div style={{position:'relative'}}>
            <img src="/images/back3.webp" alt="academy" className="acdbanner"/>
            <div className="acadmain1">
                <h1 >Academy</h1>
                <p className="pstyle">Discover expert-led drone trining programs</p>
            </div>
            </div>
            <div className="centerText" style={{padding:20}}>
                <h1 style={{textAlign:'center'}}><span className="heading1">Explore Dronevala Academy </span><span className="heading2">Elevate Your Skills, Master the Skies</span></h1>
            <p className="littletext" >Discover expert-led drone training designed to empower you with the knowledge and skills needed to soar to new heights in the drone industry</p>
            </div>
<div className="filtertab">
<select className="form-select inputStyle" id="formFilter " onChange={courseType} aria-label="Default select example">
  <option value='All'>Course Type</option>
  <option value="pilot license">pilot license</option>
  <option value="trainer of the trainer">trainer of the trainer</option>
  <option value="drone programming">drone programming</option>
  <option value="drone assembly">drone assembly</option>
  <option value="manfacturing">manfacturing</option>
  <option value="repair& maintenance">repair& maintenance</option>
  </select>

  <select className="form-select inputStyle" onChange={droneType} id="formFilter2 " aria-label="Default select example">
  <option value='All'>Drone Category</option>
  <option value="Small">Small</option>
  <option value="Medium">Medium</option>
  <option value="Large">Large</option>
</select>


    <input type="text" id="keyword" className="form-control inputStyle" placeholder="Enter Keywoard"/>
    <input type="text" id="location" className="form-control inputStyle" placeholder="Enter Location"/>

    <button className="btn btn-primary buttonstyle">
    <i class="bi bi-search"></i>
    </button>
</div>

{/* <h6>Showing Results {vari}/{acad.length}</h6> */}
<div className="acddiv">
{/* <div className="card5">
    <img src="/images/r1.jpg" className="card5img" alt="academy"/>
    <div className="card-body">
<h3>SRM College of Drone Training</h3>
<div>
    <h6> <span><img src="/images/drone.png" alt="drone" style={{width:30}}/></span>Drone cinematography Courses</h6>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> Andhra Pradesh</h5>
    <p>Course Fee <span>₹ 40000 /-</span></p>

    <button className="button beff">View Details <i class="bi bi-arrow-right"></i></button>
</div>
    </div>
</div>
<div className="card5">
    <img src="/images/r1.jpg" className="card5img" alt="academy"/>
    <div className="card-body">
<h3>SRM College of Drone Training</h3>
<div>
    <h6> <span><img src="/images/drone.png" alt="drone" style={{width:30}}/></span>Drone cinematography Courses</h6>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> Andhra Pradesh</h5>
    <p>Course Fee <span>₹ 40000 /-</span></p>

    <button className="button beff">View Details <i class="bi bi-arrow-right"></i></button>
</div>
    </div>
</div>
<div className="card5">
    <img src="/images/r1.jpg" className="card5img" alt="academy"/>
    <div className="card-body">
<h3>SRM College of Drone Training</h3>
<div>
    <h6> <span><img src="/images/drone.png" alt="drone" style={{width:30}}/></span>Drone cinematography Courses</h6>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> Andhra Pradesh</h5>
    <p>Course Fee <span>₹ 40000 /-</span></p>

    <button className="button beff">View Details <i class="bi bi-arrow-right"></i></button>
</div>
    </div>
</div>
<div className="card5">
    <img src="/images/r1.jpg" className="card5img" alt="academy"/>
    <div className="card-body">
<h3>SRM College of Drone Training</h3>
<div>
    <h6> <span><img src="/images/drone.png" alt="drone" style={{width:30}}/></span>Drone cinematography Courses</h6>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> Andhra Pradesh</h5>
    <p>Course Fee <span>₹ 40000 /-</span></p>

    <button className="button beff">View Details <i class="bi bi-arrow-right"></i></button>
</div>
    </div>
</div>
<div className="card5">
    <img src="/images/r1.jpg" className="card5img" alt="academy"/>
    <div className="card-body">
<h3>SRM College of Drone Training</h3>
<div>
    <h6> <span><img src="/images/drone.png" alt="drone" style={{width:30}}/></span>Drone cinematography Courses</h6>
    <h5><span><i class="bi bi-geo-alt-fill"></i></span> Andhra Pradesh</h5>
    <p>Course Fee <span>₹ 40000 /-</span></p>

    <button className="button beff">View Details <i class="bi bi-arrow-right"></i></button>
</div>
    </div>
</div> */}

{renderCourses(acad)}
</div>
{acad  &&
<div className="centerText" style={{marginTop:30}}>
<button className="button" disabled={disable} onClick={loadClick}>Load More....</button>
</div>
}

        </div>
        </>
    )
}

export default Academy