import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SuspenseLoad from "../suspense/suspence";
import AtopDashheader from "../admin/dashboard/Atopdash";
import ACenterDash from "../admin/dashboard/content";
import AdminCalender from "../admin/dashboard/Acalender/Acalender";
import GetAdmin from "../admin/dashboard/getadmin/getadmin";
import GetUser from "../admin/dashboard/getUser/getuser";
import TotalOrders from "../admin/dashboard/orders/getorders";
import AdminSetting from "../admin/dashboard/setting/setting";
import NotFound from "../errors/404";

const AdminRoutes =()=>{
    const [Authenticated,setAuthenticated]=useState(true)
    const history = useNavigate()
    const location = useLocation()
         useEffect(()=>{
     const value =localStorage.getItem('AdminT')
     if(value){
       setAuthenticated(true)
     }else{
       history('/dronevala/admin/login',{state:{form:location.pathname}})
       setAuthenticated(false)
     }
     // eslint-disable-next-line
         },[])
    return Authenticated ?(
        <Suspense fallback={<SuspenseLoad/>}>
       <Routes>
        <Route element={<AtopDashheader/>}>
        <Route path="/main" element={<ACenterDash/>}/>
        <Route path="/calender" element={<AdminCalender/>}/>
        <Route path="/allvendors" element={<GetAdmin/>}/>
        <Route path="/allusers" element={<GetUser/>}/>
        <Route path="/orders" element={<TotalOrders/>}/>
        <Route path="/settings" element={<AdminSetting/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
    ):(
      <Routes>
      <Route element={<Navigate to='/dronevala/admin/login'/>}/>
      </Routes>
    )
}
export default AdminRoutes