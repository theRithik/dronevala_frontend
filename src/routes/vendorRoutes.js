import { Suspense, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SuspenseLoad from '../suspense/suspence';
import AddCourse from '../vendors/academy/addCourse'
import Dashheader from '../vendors/dashboard/topdash'
import DashContent from '../vendors/dashboard/content'
import UpdateCourse from '../vendors/academy/updateCourse'
import AddTrainer from '../vendors/academy/addTrainer'
import AddSyllabus from '../vendors/academy/addSyllabus'
import AddBanner from '../vendors/academy/addBanner'
import AddGallery from '../vendors/academy/addGallery'
import AddViedo from '../vendors/academy/addViedo'
import StartDate from '../vendors/academy/StartDate'
import Aservice from '../vendors/service/addService';
import ServiceDates from '../vendors/service/availableDates';
import Servicephoto from '../vendors/service/updatephoto';
import ServiceBanner from '../vendors/service/serviceBanner';
import ServiceGallery from '../vendors/service/serviceGallery';
import VenderCalender from '../vendors/components/calender';
import VSetting from '../vendors/components/settings';
import VSupport from '../vendors/components/support';
import Vorders from '../vendors/orders/order';
import VProfile from '../vendors/profile/profile';
import AddDrone from '../vendors/service/addDrone';
import CourseOrdersDetails from '../vendors/orders/courseorderDetails';
import ServiceOrderDetails from '../vendors/orders/serviceorderDetails';
import NotFound from '../errors/404';
import AddRental from '../vendors/rental/addRental';
import UpdateRental from '../vendors/rental/updateRental';
import RentalGallery from '../vendors/rental/rentalGallery';
import RentalBanner from '../vendors/rental/rentalBanner';
import ProductAvailability from '../vendors/rental/productavailability';
import RentalvendorOrdersDetails from '../vendors/orders/rentalorderDetails';
import AddJob from '../vendors/job/addjob';
import JobStatus from '../vendors/job/jobstatus';



const VendorRoutes =()=>{
    const [Authenticated,setAuthenticated]=useState(true)
   const history = useNavigate()
   const location = useLocation()
        useEffect(()=>{
    const value =localStorage.getItem('vtoken')
    if(value){
      setAuthenticated(true)
    }else{
      history('/vendors/login',{state:{form:location.pathname}})
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
                     <Route path='/service/addService' element={<Aservice/>}/>
                     <Route path='/service/addDrone' element={<AddDrone/>}/>
                     <Route path='/service/updateAvaliableDates' element={<ServiceDates/>}/>
                     <Route path='/service/updateservice' element={<Servicephoto/>}/>
                     <Route path='/service/addBanner' element={<ServiceBanner/>}/>
                     <Route path='/service/addGallery' element={<ServiceGallery/>}/>
                     <Route path='/rental/addRental' element={<AddRental/>}/>
                     <Route path='/rental/updateRental' element={<UpdateRental/>}/>
                     <Route path='/rental/rentalGallery' element={<RentalGallery/>}/>
                     <Route path='/rental/rentalBanner' element={<RentalBanner/>}/>
                     <Route path='/rental/productavailability' element={<ProductAvailability/>}/>
                     <Route path='/profile' element={<VProfile/>}/>
                     <Route path='/orders' element={<Vorders/>}/>
                     <Route path='/courseorder/:id' element={<CourseOrdersDetails/>}/>
                     <Route path='/serviceorder/:id' element={<ServiceOrderDetails/>}/>
                     <Route path='/rentalorder/:id' element={<RentalvendorOrdersDetails/>}/>
                     <Route path='/addjob' element={<AddJob/>}/>
                     <Route path='/jobStatus' element={<JobStatus/>}/>
                     <Route path='/calender' element={<VenderCalender/>}/>
                     <Route path='/settings' element={<VSetting/>}/>
                     <Route path='/support' element={<VSupport/>}/>
            
    </Route>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Suspense>
      ):(
  <Routes>
  <Route element={<Navigate to='/vendors/login'/>}/>
  </Routes>
      )
  }

  export default VendorRoutes