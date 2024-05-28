import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Header from "./home/header";

const CommonRoutes =()=>{
    return(
        <>
        <Routes>
            <Route element={<Header/>}>
            <Route index path="/" element={<Home/>}/>
            </Route>
        </Routes>
        </>
    )

}
export default CommonRoutes