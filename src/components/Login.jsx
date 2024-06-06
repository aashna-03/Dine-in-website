import React from 'react';





export default function Login () {
   return(
      <>
      
      <div className='relative w-full h-screen bg-zinc-600  '> 
         <img className='absolute w-full h-full object-cover mix-blend-overlay ' src={"https://media.istockphoto.com/id/859900656/vector/kitchen-icon-of-dish-fork-and-knife-simple-set-of-restaurant-vector-line-icons.jpg?s=612x612&w=0&k=20&c=2Nr9P2nAPiXWpPuOlN8msjbhfH08TbR15v4lZ14jCK4="}/>

         <div className='flex justify-center items-center h-full'>
            <form className='max-w-[480px] w-full mx-auto bg-white p-8'>
               <h2 className='text-4xl font-bold text-centre py-4'>Login</h2>
               <div className='flex justify-between'>
              
                  
               </div>
               <div className='flex flex-col mb-4 '>
                  <label>Username</label>
                  <input className='border relative bg-gray-200 ' type="text"/>
                  </div>
                  <div className='flex flex-col'>
                  <label>Password</label>
                  <input className='border relative bg-gray-200 p-2' type="password"/>

               </div>
               <button className='w-full py-3 mt-8 bg-zinc-900 text-white'>Login</button>
               <p>Dont have an account?<a>Sign Up</a></p>
            </form>
         </div>
      </div>

      </>
      
   )
}
