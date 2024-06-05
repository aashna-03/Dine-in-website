import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import FoodMenu from './components/FoodMenu';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FoodMenu />
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} /> {/* Assuming Login is the default route */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
