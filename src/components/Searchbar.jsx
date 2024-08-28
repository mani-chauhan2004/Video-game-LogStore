// Searchbar.jsx
import React from 'react';

function Searchbox() {
  return (
    <div className='w-full flex align-center justify-center mt-4'>
      <form className='w-8/12 flex bg-gray-700 p-1 pl-8 rounded-3xl justify-between' action="">
        <div className='flex gap-8'>
            <button className='text-gray-300 font-semibold text-base h-full pr-2 pl-2 hover:bg-black rounded-lg'>New</button>
            <button className='text-gray-300 font-semibold text-base h-full pr-2 pl-2 hover:bg-black rounded-lg'>Backpack</button>
            <button className='text-gray-300 font-semibold text-base h-full pr-2 pl-2 hover:bg-black rounded-lg'>Trending</button>
            <button className='text-gray-300 font-semibold text-base h-full pr-2 pl-2 hover:bg-black rounded-lg'>Help</button>
        </div>
        <div>
            <input className=' rounded-tl-3xl rounded-bl-3xl pr-4 pl-4 p-2 text-gray-300 border-2 placeholder-gray-300 placeholder-opacity-25 border-gray-700 active: outline-none bg-gray-800' type="text" name="search" id="search" placeholder="Games" />
            <button className='rounded-br-3xl rounded-tr-3xl font-semibold bg-gray-800 border-gray-800 text-gray-300 pr-4 pl-4 p-2'>Search</button>
        </div>
      </form>
    </div>
  );
}

export default Searchbox;
