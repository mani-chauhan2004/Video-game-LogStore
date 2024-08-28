import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import { GiBackpack } from "react-icons/gi";
function Navbar() {
  let navigate = useNavigate();
  return (
    <div className='h-16 bg-gray-900 items-center pl-5 pr-5 flex justify-between ' data-scroll data-scroll-speed ='2'>
        <ul className='flex gap-4 align-center'>
          <li className='text-gray-300 text-lg font-bold font-sans'><button onClick={() => navigate(-1)}><GoArrowLeft className='stroke-2 mt-1'/></button></li>
          <li className='text-gray-300 text-lg font-bold font-sans'><button onClick={() => navigate(+1)}><GoArrowRight className='stroke-2 mt-1'/></button></li>
          <li className='text-gray-300 text-lg font-semibold font-sans active:text-blue-600' ><Link to='/'>STORE</Link></li>
          <li className='text-gray-300 text-lg font-semibold font-sans active:text-blue-600'><Link to='/library'>LIBRARY</Link></li>
          <li className='text-gray-300 text-lg font-semibold font-sans active:text-blue-600'><Link to='/community'>COMMUNITY</Link></li>
          <li className='text-gray-300 text-lg font-semibold font-sans active:text-blue-600'><Link to='/username'>USERNAME</Link></li>
        </ul>

        <div>
          <GiBackpack className='text-gray-300 stroke-2 text-4xl rounded-xl bg-gray-800 p-2'/>
        </div>
    </div>

  )
}

export default Navbar;