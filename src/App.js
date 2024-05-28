
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import CommonRoutes from './commonRoutes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<CommonRoutes/>}/>
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
