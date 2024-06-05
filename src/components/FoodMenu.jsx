import React from 'react'

const FoodMenu=()=>{
  
    return(
      <div className='space-x-8 text-xl'>
      <button
              onClick={() => filterType('veg')}
              className='rounded-3xl  text-black-600  hover:bg-green-400 hover:text-white'
            >
              Veg
            </button>
            <button
              onClick={() => filterType('non-veg')}
              className='rounded-3xl  text-black-600 hover:bg-red-400 hover:text-white'
            >
              Non-veg
            </button>
      
    
    
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Margherita Pizza</p>
          <p className='px-2'>Veg</p>
         
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-green-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg'
          alt='/'
        />
      </div>


        
        <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Spinach and Artichoke Pizza</p>
          <p className='px-2'>veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-green-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://www.tasteofhome.com/wp-content/uploads/2017/09/exps175485_TH153341B11_24_1b.jpg?fit=335,335'
          alt='/'
        />
      </div> 

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Mushroom Broccoli Pizza</p>
          <p className='px-2'>veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-green-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Mushroom-Broccoli-Pizza_EXPS_MIOPBZ17_14710_D10_13_4b-6.jpg?fit=335,335'
          alt='/'
        />
        </div>


         {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Pesto Pizza</p>
          <p className='px-2'>veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-green-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://foodhub.scene7.com/is/image/woolworthsltdprod/1806-chicken-and-pesto-pizza-in-three-easy-steps:Square-1300x1300'
          alt='/'
        />
        </div>

         {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Tandoori Paneer Pizza</p>
          <p className='px-2'>veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-green-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbSzcvaco2hMagZcoC1KlybpoL8fTjsKaCg&s'
          alt='/'
        />
        </div>

        {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Veggie delight Pizza</p>
          <p className='px-2'>veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-green-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7nBEFrpN2O4BAf0V30jJ5SR9hMlwr06y8g&s'
          alt='/'
        />
        </div>

        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Chicken tikka Pizza</p>
          <p className='px-2'>Non-veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-red-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://media.istockphoto.com/id/186295807/sv/foto/chicken-tikka-pizza.jpg?s=612x612&w=0&k=20&c=lxjenhX3MaT9247pVRbzuCQbT6ex_1DI86YpL6OpkNE='
          alt='/'
        />
        </div>

         <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Pepperoni Pizza</p>
          <p className='px-2'>Non-veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-red-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo='
          alt='/'
        />
        </div>

        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/25 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Chicken cheese Pizza</p>
          <p className='px-2'>Non-veg</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-red-500 hover:text-black'>Add to Cart</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://www.cscassets.com/recipes/wide_cknew/wide_24840.jpg'
          alt='/'
        />
        </div>
        






        
      </div></div>
        
    )

}
export default FoodMenu;
