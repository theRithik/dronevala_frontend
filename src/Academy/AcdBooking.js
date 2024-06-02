import React, { useEffect } from "react";
import './Acdbooking.css'
const AcdBooking=()=>{
    useEffect(()=>{
        document.querySelector('footer').style.marginTop="0px"
    },[])
    return(
        <>
        <div  className="academyDetailPage" >
            <div style={{position:'relative'}}>
            <img src="/images/back3.webp" alt="academy" className="acdbanner"/>
            <div className="acadmain1">
                <h1 >Checkout</h1>
                <p className="pstyle">Innovative Aerial Solutions for Every Need</p>
            </div>
            </div>
            <div className="row" style={{background:'aliceblue',paddingTop:'3%',paddingBottom:'10%'}}>
                <div className="col-md-6">
                    <div className="checkoutcard">
                        <h2 className="heading2" style={{textAlign:'left'}}>Fill Your details</h2>
                        <div style={{marginTop:20}}>
                            <label>Name</label>
                            <p className="disclamerText">As mentioned in your Identity proof</p>
                            <div className="loginicon">
                    <i class="bi bi-person-circle icc"></i>
                   
                            <input type="text" placeholder="Name" className="inputbox" id="name"/>
                            </div>

                            <label>Email</label>
                            <p className="disclamerText">As mentioned in your Identity proof</p>
                            <div className="loginicon">
                    <i class="bi bi-envelope-fill icc"></i>
                
                            <input type="email" className="inputbox" placeholder="Email" id="email"/>
                            </div>
                            <label>Phone</label>
                            <p className="disclamerText">Our Course Experts will call to this number</p>
                            <div className="loginicon">
                            <i class="bi bi-telephone-fill icc"></i>
                            <input type="number" className="inputbox" placeholder="Phone" id="phone"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{margin:30}}>
                        <h2 className="heading2" style={{textAlign:'left'}}>Course Details</h2>

                        <table class="table acdcheckout " style={{padding:20}}>
                            <tbody>
                                <tr>
                                    <th scope="row">Institute:</th>
                                    <td> SRM college of Drone Training</td>
                                </tr>
                                <tr className="table-active">
                                    <th scope="row"> Course Type:</th>
                                    <td>Drone Cinematography Course</td>
                                </tr>
                                <tr >
                                    <th scope="row"> Course Start Date:</th>
                                    <td>21/06/2024</td>
                                </tr>
                                <tr className="table-active">
                                    <th scope="row"> Sub Total:</th>
                                    <td>₹1</td>
                                </tr>
                                <tr>
                                    <th scope="row">Gst: </th>
                                    <td>₹0.18</td>
                                </tr>
                                <tr className="table-active">
                                    <th scope="row" style={{fontSize:16,fontWeight:600}}>Total:</th>
                                    <td style={{fontSize:15,fontWeight:500}}>₹1.18</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default AcdBooking