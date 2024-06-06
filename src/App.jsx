import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import FoodMenu from './components/FoodMenu';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
     <Login/>
        <Routes>
         
         
          <Route path="/Login" element={<Signup />} />
          <Route path="/" element={<FoodMenu />} />
        
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App;
