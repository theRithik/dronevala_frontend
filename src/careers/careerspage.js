import React,{useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Empty } from "antd";
import './careers.css'
import { Link } from "react-router-dom";
import endpoints from "../config/config";
import { useQuery } from "@tanstack/react-query";
import { GetData } from "../config/vendor/Apiconfig";

const CareersPage=()=>{
    const[rd,setRd]=useState('')
    const [finance,setFinance]=useState('')
    const [mark,setMark]=useState('')
    const [cus,setCus]=useState('')
    const [eng,setEng]=useState('')
    const [oper,setOper]=useState('')
    const [hr,setHr]=useState('')
    const [it,setIt]=useState('')
    const [sp,setSp]=useState('')
    const [bp,setBp]=useState('')
    const [ad,setAd]=useState('')
    const [td,setTd]=useState('')
    const [noData,setNoData]=useState(false)
    const [sales,setSales]=useState('')

    const dt = {
        endpoint:endpoints.getjobs
    }
    const {data} = useQuery({
        queryKey:['alljobs'],
        queryFn:()=>GetData(dt)
    })
    useEffect(()=>{
window.scrollTo(0,0)
if(data){
    if(data.length>0){
    const hr = data.filter((item)=>{
        return item.department === 'Research and Development'
    })
    setRd(hr)

    const acc = data.filter((item)=>{
        return item.department === 'Finance'
    })
    setFinance(acc)
    const ma = data.filter((item)=>{
        return item.department === 'Marketing'
    })
    setMark(ma)

    const cs = data.filter((item)=>{
        return item.department === 'Customer Service'
    })
    setCus(cs)

    const ee = data.filter((item)=>{
        return item.department === 'Engineering'
    })
    setEng(ee)
    const op = data.filter((item)=>{
        return item.department === 'Operations'
    })
    setOper(op)

    const hrr = data.filter((item)=>{
        return item.department === 'Human Resources'
    })
    setHr(hrr)

    const it2 = data.filter((item)=>{
        return item.department === 'Information Technology'
    })
    setIt(it2)

    const sp2 = data.filter((item)=>{
        return item.department === 'Supply Chain/Logistics'
    })
    setSp(sp2)

    const bp2 = data.filter((item)=>{
        return item.department === 'Business Development'
    })
    setBp(bp2)

    
    const ad2 = data.filter((item)=>{
        return item.department === 'Administration'
    })
    setAd(ad2)

    const td2 = data.filter((item)=>{
        return item.department === 'Training and Development'
    })
    setTd(td2)

    const sl = data.filter((item)=>{
        return item.department === 'Sales'
    })
    setSales(sl)
}else{
    setNoData(true)
}
}
    },[data])

    const marketing=(data)=>{
if(data){
    return  data.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    }) 
}
    }
    return(
        <>
         <Helmet>
        <title>Careers - Dronevala</title>
        <link rel="Agmay" href="https://dronevala.com/careers"/>
        <meta name="description" content="Discover your career from us." />
        <link rel="canonical" href="https://dronevala.com/careers" />
        <meta name="keywords" content="drone,careers,drone jobs,jobs"/>
    </Helmet>
       
        <div style={{overflowX:'hidden'}}>
            <div className="row">
                <div className="col-md-6 colcenter" style={{padding:40}}>
                    <h1 className="mnhomeh11" style={{color:'#0c1765',marginTop:'10%'}}>Take flight with Dronevala today!</h1>
                    <p className="stylep" style={{color:'grey',marginTop:'5%',width:'80%',fontSize:12}}>We are looking for talent who can think out of box and bring life to the work</p>
                    <a href="#jobopenings">  <button className="button" style={{padding:'20px 30px'}}>Search jobs</button></a>
                </div>
                <div className="col-md-6 colcenter">
                    <img src="/images/career1.png" style={{width:'90%'}} alt="drone"/>
                </div>
            </div>
           <div style={{padding:'6.7%'}}>
            <h3 style={{fontSize:'2.25rem',fontWeight:800,color:'#0c1765'}}>Why join Dronevala ?</h3>
            <p style={{color:'grey',fontSize:13,marginTop:20}}>Learn, earn and create impact as part of our growing team</p>
            <div className="row">
                <div className="col-md-4">
<div className="teamcard">
<img src="/images/team1.svg" alt="team" style={{width:'70%',marginBottom:30}}/>
<h6 style={{color:'orange'}}>Great Team</h6>
<p className="stylep" style={{fontSize:11,lineHeight:'1.3rem'}}>Work with people who have great vision and are super motivated individuals.</p>
</div>
                </div>
                <div className="col-md-4">
                <div className="teamcard">
<img src="/images/team2.svg" alt="team" style={{width:'50%',marginBottom:30}}/>
<h6 style={{color:'orange'}}> Transformative Impact</h6>
<p className="stylep" style={{fontSize:11,lineHeight:'1.3rem'}}>Be a part of  transformative movement in urban mobility</p>
</div>
                </div>
                <div className="col-md-4">
                <div className="teamcard">
<img src="/images/team3.svg" alt="team" style={{width:'45%',marginBottom:30}}/>
<h6 style={{color:'orange'}}>Cutting-Edge Technology</h6>
<p className="stylep" style={{fontSize:11,lineHeight:'1.3rem'}}>We're committed to pushing the boundaries of innovation</p>
</div>
                </div>

            </div>
</div>
<div style={{margin:'6.7%'}} id="jobopenings">
<h3 style={{fontSize:'2.25rem',fontWeight:800,color:'#0c1765'}}>Job openings</h3>

{oper.length>0 &&
<div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{oper[0]?.department}</h5>
<div className="jobcontainer">
{
    oper.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}

{hr.length>0 &&
<div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{hr[0]?.department}</h5>
<div className="jobcontainer">
{
    hr.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}


{mark.length>0 &&
<div style={{marginTop:'5%'}} >
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{mark[0]?.department}</h5>
<div  className="jobcarddiv">
{marketing(mark)}
</div>
</div>
}

{finance.length>0 &&
<div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{finance[0]?.department}</h5>
<div className="jobcontainer">
{
    finance.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>

}

{sales.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{sales[0]?.department}</h5>
<div className="jobcontainer">
{
    sales.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}

{cus.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{cus[0]?.department}</h5>
<div className="jobcontainer">
{
    cus.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}

{rd.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{rd[0]?.department}</h5>
<div className="jobcontainer">
{
    rd.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}


{eng.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{eng[0]?.department}</h5>
<div className="jobcontainer">
{
    eng.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}

{it.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{it[0]?.department}</h5>
<div className="jobcontainer">
{
    it.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}


{sp.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{sp[0]?.department}</h5>
<div className="jobcontainer">
{
    sp.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}

{bp.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{bp[0]?.department}</h5>
<div className="jobcontainer">
{
    bp.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}

{ad.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{ad[0]?.department}</h5>
<div className="jobcontainer">
{
    ad.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}

{td.length>0 && 
    <div style={{marginTop:'5%'}}>
<h5 style={{fontSize:'1.5rem',fontWeight:600,color:'#0c1765',marginBottom:30}}>{td[0]?.department}</h5>
<div className="jobcontainer">
{
    td.map((item)=>{
        return(
            <div className="jobcard" key={item.id}>
            <Link to={`/careers/job/${item.id}`}>
            <i class="bi bi-box-arrow-in-up-right joblkic"></i>
            <h6 style={{fontSize:'1.25rem',fontWeight:800,color:'orange'}}>{item.jobtitle}</h6>
            <p className="stylep" style={{marginTop:'30px',color:'grey',marginBottom:0}}>{item.jobtype} - {item.location}</p>
            </Link>
            </div>
        )
    })
}
</div>
</div>
}
{noData &&
<Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 120 }}
            description={
              <h6 style={{fontSize:12,fontWeight:700}}>There are no openings right now</h6>
            }
            style={{margin:'auto',marginTop:'15%'}}
          >
          </Empty>
}

</div>

            
        </div>
        </>
    )
}
export default CareersPage