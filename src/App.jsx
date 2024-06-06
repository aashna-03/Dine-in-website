import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import FoodMenu from './components/FoodMenu';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
     <Signup/>
        <Routes>
         
         
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App;
