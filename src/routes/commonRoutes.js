import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import SuspenseLoad from "../suspense/suspence";
import PrivcyandPolicy from "../home/policy/privacyPolicy";
import Refund from "../home/policy/refund";
import ShipppingPolicy from "../home/policy/shipping";
import Terms from "../home/policy/terms&cond";

const Home=lazy(()=>import("../home/home"))
const Academy =lazy(()=>import("../Academy/academy"))
const AcadDetails = lazy(()=>import("../Academy/acadDetails"))
const UserLogin=lazy(()=>import("../Ulogin/login"))
const UserRegister=lazy(()=>import("../Ulogin/register"))
const AcdBooking=lazy(()=>import("../Academy/AcdBooking"))
const Header = lazy(()=>import("../home/HF/header"))
const About =lazy(()=>import("../home/about/aboutus"))
const Service=lazy(()=>import("../services/services"))

const CommonRoutes =()=>{
    return(
        <>
        <ErrorBoundary>
        <Suspense fallback={<SuspenseLoad/>}>
        <Routes>
            <Route element={<Header/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/login" element={<UserLogin/>}/>
            <Route path="/register" element={<UserRegister/>}/>
            <Route path="/academy" element={<Academy/>}/>
            <Route path="/academy/:institute/:course/:id" element={<AcadDetails/>}/>
            <Route path="/academy/course/booking" element={<AcdBooking/>}/>
            <Route path="/services" element={<Service/>}/>
            <Route path="/aboutus" element={<About/>}/>
            <Route path="/termsandconditions" element={<Terms/>}/>
<Route path="/privacyandpolicy" element={<PrivcyandPolicy/>}/>
{/* <Route path="/disclaimer" element={<Disclaimer/>}/> */}
<Route path="/shippingpolicy" element={<ShipppingPolicy/>}/>
<Route path="/refund" element={<Refund/>}/>
            </Route>
        </Routes>
        </Suspense>
        </ErrorBoundary>
        </>
    )
}

export default CommonRoutes