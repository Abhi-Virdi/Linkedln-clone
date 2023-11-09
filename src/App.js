import React from 'react';
import './App.css'; 
import Header from './Header.js';
import "./Slidebarcomp.css";
import Slidebar from './Slidebar.js';
import Feed from "./Feed.js";
function App(){ 
  return (
    <div className='app'>
      <Header/>
      <div classname='app_body'>
      <Slidebar/>
      <Feed/>
      </div>
    </div>
  );
}

export default App;
