import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosSearch } from "react-icons/io";
import HomePage from './pages/HomePage';
import { useSearchParams } from 'react-router-dom';
import { getPlanet } from './redux/planet/action';

function App() {
 const dispatch=useDispatch()

  const planetdata = useSelector((state) => state.planetReducer.planet);
  const [searchParams, setSearchParams] = useSearchParams();
 useEffect(()=>{
dispatch(getPlanet(searchParams))
 },[searchParams])
  
  return (
    <div className="App">
      <div className='om' >
        <input className='om1' onChange={(e)=>setSearchParams({q:e.target.value.toLocaleLowerCase()})} type='text'/>
       
         <label> <IoIosSearch className='search'/></label>
        
      </div>

   
   <HomePage/>
   

    </div>
  );
}

export default App;
