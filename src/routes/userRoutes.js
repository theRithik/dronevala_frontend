import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import UserDashheader from "../user/dashboard/topdash";
import UserDashContent from "../user/dashboard/content";
import SuspenseLoad from "../suspense/suspence";
import ErrorPage from "../vendors/errorPage";
import UserCalender from "../user/dashboard/calender/calender";
import UserSetting from "../user/dashboard/settings/setting";
import Userorders from "../user/dashboard/orders.js/orders";
import UserCourseorderdetails from "../user/dashboard/orders.js/courseorder";
import UserServiceorderdetails from "../user/dashboard/orders.js/serviceorder";
import UserReviews from "../user/dashboard/reviews/reviews";
import UserSupport from "../user/dashboard/support/support";
import UserProfile from "../user/dashboard/profile/profile";


const UserRoutes =()=>{
    const [Authenticated,setAuthenticated]=useState(true)
    const history = useNavigate()
    const location = useLocation()
         useEffect(()=>{
            console.log('user')
     const value =localStorage.getItem('token')
     if(value){
       setAuthenticated(true)
     }else{
       history('/login',{state:{form:location.pathname}})
       setAuthenticated(false)
     }
     // eslint-disable-next-line
         },[])
    return Authenticated ?(
        <Suspense fallback={<SuspenseLoad/>}>
       <Routes>
        <Route element={<UserDashheader/>}>
        <Route path="/dashboard" element={<UserDashContent/>}/>
        <Route path="/calender" element={<UserCalender/>}/>
        <Route path="/settings" element={<UserSetting/>}/>
        <Route path="/orders" element={<Userorders/>}/>
        <Route path="/courseorder/:id" element={<UserCourseorderdetails/>}/>
        <Route path="/serviceorder/:id" element={<UserServiceorderdetails/>}/>
        <Route path="/reviews" element={<UserReviews/>}/>
        <Route path="/support" element={<UserSupport/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
        </Route>

        <Route path="*" element={<ErrorPage/>}/>
       </Routes>

       </Suspense>
    ):(
      <Routes>
        <Route element={<Navigate to='/login'/>}/>
        </Routes>
    )
}
export default UserRoutes