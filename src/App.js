import React, { Component, Suspense } from 'react';
import StartMenu from './components/StartMenu';
import TaskBar from './components/TaskBar';
import Window from './components/Window';
import './style/main.css';
import Loading from './components/Loading';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainWindow from './pages/MainWindow';

function App() {

  
  return (
    
     <Routes>
    <Route path ='/' element ={<Loading/>}/>
    <Route path ='/Main' element ={<MainWindow/>}/>
</Routes>

    
  );
}

export default App;
