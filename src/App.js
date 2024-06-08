
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './global.css';
import CommonRoutes from './commonRoutes';
import { useEffect, useState } from 'react';

import ErrorPage from './vendors/errorPage';
import AddCourse from './vendors/academy/addCourse';
import Dashheader from './vendors/dashboard/topdash';
import DashContent from './vendors/dashboard/content';
import UpdateCourse from './vendors/academy/updateCourse';
import AddTrainer from './vendors/academy/addTrainer';
import AddSyllabus from './vendors/academy/addSyllabus';
import AddBanner from './vendors/academy/addBanner';
import AddGallery from './vendors/academy/addGallery';
import AddViedo from './vendors/academy/addViedo';
import StartDate from './vendors/academy/StartDate';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<CommonRoutes/>}/>
      <Route path='/vendor/*' element={<DashMenu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  
  );
}


const DashMenu =()=>{
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
    ):(
<Routes>
<Route element={<Navigate to='/institute/login'/>}/>
</Routes>
    )
}
 

export default App;
