import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home";

import Academy from "./Academy/academy";
import AcadDetails from "./Academy/acadDetails";
import UserLogin from "./Ulogin/login";
import UserRegister from "./Ulogin/register";
import AcdBooking from "./Academy/AcdBooking";
import Header from "./home/HF/header";
import About from "./home/about/aboutus";

const CommonRoutes =()=>{
    return(
        <>
        <Routes>
            <Route element={<Header/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/login" element={<UserLogin/>}/>
            <Route path="/register" element={<UserRegister/>}/>
            <Route path="/academy" element={<Academy/>}/>
            <Route path="/academy/:institute/:course/:id" element={<AcadDetails/>}/>
            <Route path="/academy/course/booking" element={<AcdBooking/>}/>
            <Route path="/aboutus" element={<About/>}/>
            </Route>
        </Routes>
        </>
    )

}
export default CommonRoutes