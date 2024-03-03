import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/HomePage';
import { useSearchParams } from 'react-router-dom';
import { getPlanet } from './redux/planet/action';

function App() {
 


  return (
    <div className="App">
      

      <HomePage />
    </div>
  );
}







// ... (rest of the code remains unchanged)


export default App;
