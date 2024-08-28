import React from 'react'
import Searchbox from '../Searchbar';
import { GameList } from '../GameLIst';
//data-scroll data-scroll-speed='2'
function Homepage() {
  return (
    <div className='flex flex-col align-center justify-center ' >
      
      <Searchbox/>
      <h1 className='mt-4 text-gray-300 text-3xl font-bold p-2 ml-16'>Catalogue</h1>
      <GameList/>
    </div>

    
  )
}

export default Homepage;