import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SuspenseLoad from '../suspense/suspence';

const ErrorPage=lazy(()=>import( '../vendors/errorPage'))
const AddCourse=lazy(()=>import('../vendors/academy/addCourse'))
const Dashheader=lazy(()=>import('../vendors/dashboard/topdash'))
const DashContent=lazy(()=>import('../vendors/dashboard/content'))
const UpdateCourse=lazy(()=>import('../vendors/academy/updateCourse'))
const AddTrainer=lazy(()=> import('../vendors/academy/addTrainer'))
const AddSyllabus=lazy(()=> import('../vendors/academy/addSyllabus'))
const AddBanner=lazy(()=>import('../vendors/academy/addBanner'))
const AddGallery=lazy(()=>import('../vendors/academy/addGallery'))
const AddViedo=lazy(()=>import('../vendors/academy/addViedo'))
const StartDate = lazy(()=>import('../vendors/academy/StartDate'))

const VendorRoutes =()=>{
    const [Authenticated,setAuthenticated]=useState(false)
   const history = useNavigate()
   const location = useLocation()
        useEffect(()=>{
    const value =localStorage.getItem('Vendortoken')
    if(!value){
      setAuthenticated(true)
    }else{
      history('/institute/login',{state:{form:location.pathname}})
      setAuthenticated(false)
    }
    // eslint-disable-next-line
        },[])
       
      return  Authenticated ?(
        <Suspense fallback={<SuspenseLoad/>}>
        <Routes>
    <Route element={<Dashheader/>}>
                    <Route path="/main" element={<DashContent/>}/>
                    <Route path='/academy/addcourse' element={<AddCourse/>}/>
                    <Route path='/academy/updateCourse' element={<UpdateCourse/>}/>
                     <Route path='/academy/addTrainer' element={<AddTrainer/>}/>
                     <Route path='/academy/addSyllabus' element={<AddSyllabus/>}/>
                     <Route path='/academy/addBanner' element={<AddBanner/>}/> 
                     <Route path='/academy/addGallery' element={<AddGallery/>}/>
                     <Route path='/academy/addViedo' element={<AddViedo/>}/>
                     <Route path='/academy/updateCourseStartDate' element={<StartDate/>}/>
    </Route>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Suspense>
      ):(
  <Routes>
  <Route element={<Navigate to='/institute/login'/>}/>
  </Routes>
      )
  }

  export default VendorRoutes