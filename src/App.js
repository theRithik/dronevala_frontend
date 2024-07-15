import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './global.css';
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import MainSuspense from "./suspense/mainSuspense";

const  AdminRoutes= lazy (()=>import ("./routes/adminRoutes"))
const  UserRoutes = lazy(()=>import ("./routes/userRoutes"))
const CommonRoutes =lazy(()=>import('./routes/commonRoutes'))
const VendorRoutes = lazy(()=>import ('./routes/vendorRoutes'))


function App() {
  return (
    <>
    <ErrorBoundary>
    <Suspense fallback={<MainSuspense/>}>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<CommonRoutes/>}/>
      <Route path='/user/*' element={<UserRoutes/>}/>
      <Route path='/vendor/*' element={<VendorRoutes/>}/>
      <Route path='/admin/*' element={<AdminRoutes/>}/>
    </Routes>
    </BrowserRouter>
    </Suspense>
    </ErrorBoundary>
    </>
  
  );
}
 

export default App;
