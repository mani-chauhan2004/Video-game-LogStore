import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from './components/pages/Homepage';
import Library from './components/pages/Library';
import Details from './components/pages/Details';
import { ScrollProvider } from './components/context/scrollContext';

function App(){
  return (
    
      <Router>
        {/* <ScrollProvider> */}
        <div className='bg-gradient-to-b from-gray-900 to-blue-800 h-auto'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/library' element={<Library/>}></Route>
            <Route path='/library' element={<Library/>}></Route>
            <Route path='/:id' element={<Details/>}></Route>
          </Routes>
          
        </div>
        {/* </ScrollProvider> */}
      </Router>
    
  );
}

export default App;