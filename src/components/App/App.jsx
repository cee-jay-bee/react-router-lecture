import React from 'react';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>SPAs!</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/plants" >Plants</Link></li>
        <li><Link to="/animals" >Animals</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/animals" element={ <Animals /> } ></Route>
        <Route path="/plants" element={ <Plants /> } ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
