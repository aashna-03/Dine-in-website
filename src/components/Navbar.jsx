import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <CiMenuBurger className="icons MenuBurger" size={30}/>
        </div>
        <h1 className='text-2xl sm:text-5xl lg:text-4xl px-2 text-red-600'>
          Pizzaria
        </h1>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
      <IoMdSearch  size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search for pizza'
        />
      </div>
      <button className='bg-red-600 text-white hidden md:flex items-center py-2 '>
      <FaShoppingCart  size={20} className='mr-3' /> Cart
      </button>
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <IoClose onClick={()=> setNav(!nav)} size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Pizzaria</h2>
       
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><GiFullPizza  size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><FaHandsHelping size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><MdOutlineContactSupport size={25} className='mr-4' />Contact us </li>
                
            </ul>
        </nav>
      </div>
    </div>
    
  );
};

export default Navbar;
