import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import SuspenseLoad from "../suspense/suspence";

import Header from "../home/HF/header";
import NotFound from "../errors/404";
import Adminlogin from "../admin/login/login";
import Rentalcoming from "../rental/coming";
import Storecoming from "../store/storecoming";
import Contactus from "../home/contactus/contactus";
const VerifyUserEmail = lazy(()=>import ("../user/Ulogin/verifyEmail"))

const VEmailVerify =lazy(()=> import ("../vendors/loginRegister/emailVerify"))


const VendorRegister=lazy(()=>import("../vendors/loginRegister/vendorRegister"))
const VdetailsForm=lazy(()=>import("../vendors/loginRegister/vDetailsForm"))
const VdetailsForm2 =lazy(()=>import("../vendors/loginRegister/detailform2"))
const PrivcyandPolicy =lazy(()=>import("../home/policy/privacyPolicy"))
const Refund = lazy(()=>import("../home/policy/refund"))
const ShipppingPolicy=lazy(()=>import("../home/policy/shipping"))
const Terms =lazy(()=> import("../home/policy/terms&cond"))
const ServiceDetails =lazy(()=>import("../services/serviceDetails"))
const ServiceBooking= lazy(()=>import("../services/serviceBooking"))
const VendorLogin=lazy(()=>import("../vendors/loginRegister/vendorlogin"))

const Home=lazy(()=>import("../home/home"))
const Academy =lazy(()=>import("../Academy/academy"))
const AcadDetails = lazy(()=>import("../Academy/acadDetails"))
const UserLogin=lazy(()=>import("../user/Ulogin/login"))
const UserRegister=lazy(()=>import("../user/Ulogin/register"))
const AcdBooking=lazy(()=>import("../Academy/AcdBooking"))

const About =lazy(()=>import("../home/about/aboutus"))
const Service=lazy(()=>import("../services/services"))

const CommonRoutes =()=>{
    console.log('comm')
    return(
        <>
        <ErrorBoundary>
        <Suspense fallback={<SuspenseLoad/>}>
        <Routes>
            <Route element={<Header/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/login" element={<UserLogin/>}/>
            <Route path="/user/verify/:token" element={<VerifyUserEmail/>}/>
            <Route path="/register" element={<UserRegister/>}/>
            <Route path="/academy" element={<Academy/>}/>
            <Route path="/academy/:institute/:course/:id" element={<AcadDetails/>}/>
            <Route path="/academy/course/booking" element={<AcdBooking/>}/>
            <Route path="/services" element={<Service/>}/>
            <Route path="/services/:serivcestype/:company/:person/:id" element={<ServiceDetails/>}/>
            <Route path="/services/booking/:servicetype/:mainservice/:company" element={<ServiceBooking/>}/>
            <Route path="/aboutus" element={<About/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
            <Route path="/termsandconditions" element={<Terms/>}/>
<Route path="/privacyandpolicy" element={<PrivcyandPolicy/>}/>
{/* <Route path="/disclaimer" element={<Disclaimer/>}/> */}
<Route path="/shippingpolicy" element={<ShipppingPolicy/>}/>
<Route path="/refund" element={<Refund/>}/>

<Route path="/vendors/login" element={<VendorLogin/>}/>
<Route path="/vendors/register" element={<VendorRegister/>}/>
<Route path="/vendors/verify/:token" element={<VEmailVerify/>}/>
<Route path="/vendors/detailsform" element={<VdetailsForm/>}/>
<Route path="/vendors/servicedetailsform" element={<VdetailsForm2/>}/>
<Route path="/dronevala/admin/login" element={<Adminlogin/>}/>
            </Route>
            <Route path="/rental" element={<Rentalcoming/>}/>
            <Route path="/store" element={<Storecoming/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
        </ErrorBoundary>
        </>
    )
}

export default CommonRoutes