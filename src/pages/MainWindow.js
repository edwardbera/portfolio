import React, { Component, Suspense } from 'react';
import StartMenu from '../components/StartMenu';
import TaskBar from '../components/TaskBar';
import Window from '../components/Window';
import '../style/main.css';
import axios from 'axios';
import WeatherWidget from '../components/WeatherWidget';
import DesktopIcon from '../components/DesktopIcon';
import Tagline from '../components/Tagline';
import PacmanWindow from '../Apps/Pacman/PacmanWindow'; 

export default function MainWindow() {

  const [task, setTask] = React.useState('')
  const [isWindowVisible, setWindowVisible] = React.useState('')
  const [weather, setWeather] = React.useState('')
  const [App, setApp] = React.useState('')

  const openApp = (name)=>{
     setApp(<PacmanWindow/>)
  }

  const toggleVisible = () =>{
      if (isWindowVisible){
        setWindowVisible(false)
      }else{
        setWindowVisible(true)
      }
  }

  const getTask = (data) => {
        setTask(data)
        setWindowVisible(true)
  }

  const closeWindow = () =>{
    setTask('')
    setWindowVisible(false)
  }
  const successCallback = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    
    getAddress(position.coords.latitude, position.coords.longitude)
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };

  async function getAddress(lat, long){
   const key =  "AIzaSyAFeL76S_7YvAWfttOTtdCLZu5K33HxVDQ"

   const res = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key="+ key)

  
    getWeather(res.data.plus_code.compound_code)
  }

  async function getWeather(city){

    
   try{
    const res = await axios.get('http://api.weatherapi.com/v1/current.json?key=51fb9fb1bcad4441b0c213452230105&q='+city)
    //console.log(res.data.current.condition)
    console.log(res.data)
    setWeather(<WeatherWidget data = {res.data}/>)
   }catch(e){
    console.log(e)
   }
   return 
  }

  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    
  },[])

  return (
    
    <div className="App">
      <Suspense>
      {weather}
      </Suspense>
      <div className='Desktop'>
      <DesktopIcon icon ="/desktopIcons/mongo.png" title ='MongoDB' open = {openApp}/>
      <DesktopIcon icon ="/desktopIcons/react.png" title ='React JS' open = {openApp}/>
      <DesktopIcon icon ="/desktopIcons/nodejs_icon.png" title ='Node Js' open = {openApp}/>
      <DesktopIcon icon ="/desktopIcons/python.png" title ='Python' open = {openApp}/>
      <DesktopIcon icon ="/desktopIcons/pacman.png" title ='Pacman' open = {openApp}/>
      <Tagline/>
      {App}
      </div>
      <Window close = {closeWindow}  visibility = {isWindowVisible} title = {task} toggle = {toggleVisible}/>
      <TaskBar visibility = {toggleVisible} task = {task} getTask = {getTask}/>
    </div>
    
  );
}


