import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
const Footer =()=>{
    return(
        <>
          <footer style={{position:'relative',bottom:'0',backgroundColor:'#0b1a46',paddingTop:'50px',paddingBottom:'74px',overflowX:'hidden'}} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20}}>
                            <img src="/images/logo.png" width="100px" alt="dronevala"/>
                        <h4 style={{paddingLeft:'10px',color:'rgb(226, 228, 228)'}}>Dronevala</h4>
                        </div>
                        </div>
                        <p style={{fontSize:'13px',paddingLeft:15,paddingRight:15,textAlign:'justify',lineHeight:1.8,color:'rgb(226, 228, 228)'}}>Dronevala is an excellent platform for anyone seeking drone-related service or products with its vast range of services and products, compettive pricing and user-friendly interface,
                            it has become a go-to platform for business and individuals who want to leverage drone technology
                        </p>
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-7" style={{marginTop:'20px'}}>
                        <div className="row" id="fotsty">
                    <div className="col-md-4">
                        <h6 style={{fontSize:'15px',fontWeight:'600'}}>Get to know us</h6>
                        <span></span>
                        <ul>
                            <li><Link to ='/aboutus' style={{color:'black'}}>About us</Link></li>
                            <li> <Link to ='/careers' style={{color:'black'}}>Career</Link></li>
                            {/* <li>Blogs</li>
                            <li>Press Release</li> */}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6 style={{fontSize:'15px',fontWeight:'600'}}>Make money with us</h6>
                        <span></span>
                   <ul>
                    {/* <li>Sell on Dronevala</li> */}
                    <li  style={{cursor:'pointer'}}><Link to="/vendors/register">Service with Dronevala </Link></li>
                    {/* <li>Protect and build your Brand</li> */}
                    <li> <Link to="/contactus">Advertise your products</Link></li>
                    {/* <li>Fulfillment by Dronevala</li> */}
                   </ul>
                    </div>
                   
                    {/* <div className="col-md-2">
                        <h6 style={{fontSize:'13px',fontWeight:'600'}}>Let us help you</h6>
                        <p style={{fontSize:'12px'}}>Your account
                        Returns Center
                        100% Purchase Protection
                        Dronevala Download
                        Help
                        Our locations</p>
                    </div> */}
                    <div className="col-md-4">
                        <h6 style={{fontSize:'15px',fontWeight:'600'}}>Policies</h6>
                        <span></span>
                        <ul>
                            <li><a href="https://dronevala.com/termsandconditions" target="_blank" rel='noopener noreferrer'style={{color:'black'}} >Terms & Conditions</a></li>
                             <li><a href="https://dronevala.com/privacyandpolicy" target="_blank" rel='noopener noreferrer'style={{color:'black'}} >Privacy Policy</a></li>
                            {/* <li>Shipping Policy</li>  */}
                            <li><a href="https://dronevala.com/shippingpolicy" target="_blank" rel='noopener noreferrer' style={{color:'black'}} >Shipping Policy</a></li>
                          
                            <li><a href="https://dronevala.com/refund" target="_blank" rel='noopener noreferrer' style={{color:'black'}} >Refund Policy</a></li>
                           
                            {/* <li>Cyber Security Policy</li>
                            <li>Data Policy</li>
                            <li>Data Policy</li>
                            <li>Brand Protection Policy</li> */}
                        </ul>
                    </div>
                    </div>
                    </div>
                   
                </div>
                <hr style={{marginRight:'5%',marginLeft:'5%',color:'rgb(226, 228, 228)'}}/>
                {/* <div className="row" style={{marginTop:'20px'}}>
                    <div className="col-md-4" style={{display:'flex',justifyContent:'center'}}>
                        <h6 style={{fontSize:'13px',marginTop:'10px'}}>&copy; Dronevala,{new Date().getFullYear()}. </h6>
                    </div>
                    <div  className="col-md-4" style={{display:'flex',justifyContent:'center'}}>
                        <h6 style={{fontSize:'13px',marginTop:'10px'}}>&copy; Powered by AGMAY TECHNOLOGIES PVT LTD</h6>
                    </div>
                    <div className="col-md-4" style={{display:'flex',justifyContent:'center'}}>
                        <div style={{display:'flex'}}>
                        <h6 style={{fontSize:'13px',marginBottom:'0',marginTop:'10px'}}>Follow us : </h6>
                       <a href="https://www.youtube.com/channel/UCKxthi7thtX7xZ9vC0WmOBQ" target="_blank" rel="noopener noreferrer"><img  src="/background/youtube.png"   style={{width:'33px',marginLeft:'10px',marginRight:'15px'}} alt="facebook"/></a>
                        <a href="https://www.linkedin.com/company/dronesapp/" target="_blank" rel='noopener noreferrer'><img  src='/background/linked.png'   style={{width:'25px',marginRight:'15px',marginTop:'5px'}} alt="linkedin"/></a>
                       <a href="https://instagram.com/drones_app?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel='noopener noreferrer'><img  src="./background/Instagram.png"   style={{width:'26px',marginRight:'15px',marginTop:'5px'}} alt="instagram"/></a>
                       <a href="https://twitter.com/DRONESAPP110313" target="_blank" rel='noopener noreferrer'><img  src="/background/twitter.png"   style={{width:'21px',marginRight:'15px',marginTop:'6px'}} alt="twitter"/></a>
                        </div>
                    </div>
                </div> */}

                   <div className="footercollist">
                    {/* <a href="https://dronevala.com/disclaimer" target="_blank" rel='noopener noreferrer' >Disclaimer</a> */}
                    <a href="https://www.dgca.gov.in/digigov-portal/jsp/dgca/homePage/viewPDF.jsp?page=InventoryList/headerblock/drones/Drone%20Rules%202021.pdf" rel="noopener noreferrer" target="_blank">Drone Rules Book</a>
                    <a href="https://digitalsky.dgca.gov.in/airspace-map/#/app"  rel="noopener noreferrer" target="_blank">Drones Map</a>
                    <a href="/careers">Jobs</a>
                    <a href="https://gem.gov.in/cppp" target="_blank" rel="noopener noreferrer" >Tenders</a>
                    <a href="https://gem.gov.in/cppp" target="_blank" rel="noopener noreferrer" >GOVT Benefits</a>
                    {/* <a href="/">Latest News</a> */}
                    {/* <li>Forum & FAQs</li>
                    <li>Pilot Directory</li>
                    <li>Industry Directory</li>
                    <li>Drone Compliances</li> */}
                    {/* <a href="/">Frequently Asked Questions</a> */}
                   
                    </div>

                    <div className="centerText" style={{flexDirection:'row',gap:20,marginTop:20}}>
                    <a href="https://www.youtube.com/channel/UCKxthi7thtX7xZ9vC0WmOBQ" target="_blank" rel="noopener noreferrer"> 
                    <i class="bi bi-youtube"style={{color:'rgb(34, 153, 151)',fontSize:22}}></i>
                    </a>
                        <a href="https://www.linkedin.com/company/dronesapp/" target="_blank" rel='noopener noreferrer'>
                        <i class="bi bi-linkedin" style={{color:'rgb(34, 153, 151)'}}></i>
                      </a>
                       <a href="https://instagram.com/drones_app?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel='noopener noreferrer'>
                       <i class="bi bi-instagram" style={{color:'rgb(34, 153, 151)'}}></i>
                        </a>
                       <a href="https://twitter.com/DRONESAPP110313" target="_blank" rel='noopener noreferrer'>
                       <i class="bi bi-twitter-x" style={{color:'rgb(34, 153, 151)'}}></i>
                        </a>
                       
                    </div>

                    <div className="centerText">
                       <h6 style={{color:'#92A9B9', fontSize:11,marginTop:20}}> &copy;Dronevala {new Date().getFullYear()} We Love Our Users</h6>
                        </div>

        </div>
       
        </footer>
        </>
    )
}
export default Footer