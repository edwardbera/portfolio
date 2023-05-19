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
import Calculator from '../Apps/calculator/Calculator';

export default function MainWindow() {

  const [task, setTask] = React.useState('')
  const [isWindowVisible, setWindowVisible] = React.useState('')
  const [weather, setWeather] = React.useState('')
  const [App, setApp] = React.useState('')
  const [isAppVisible, setAppVisibility] = React.useState(false)



  const toggleVisible = () =>{
      if (isWindowVisible){
        setWindowVisible(false)
      }else{
        setWindowVisible(true)
      }
  }

  
  const toggleAppVisible = () =>{
    if (isAppVisible){
      setAppVisibility(false)
      
    }else{
      setAppVisibility(false)
    }
}

const openApp = ()=>{
  
  setApp(<Calculator close = {closeWindow}  visibility = {isAppVisible} toggle = {toggleAppVisible} />)
  setTask("Calculator")
  setAppVisibility(true)
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
      <DesktopIcon icon ="https://i.ibb.co/qChCk0c/ico-logo.png" title ='edify' link="https://legendary-crumble-1b032f.netlify.app/" />
     {//<DesktopIcon icon ="https://i.ibb.co/qChCk0c/ico-logo.png" title ='calculator' open={openApp} />
}
      <Tagline/>
      {App}
      </div>
      <Window close = {closeWindow}  visibility = {isWindowVisible} data = {task} toggle = {toggleVisible}/>
      <TaskBar visibility = {toggleVisible} task = {task.title} getTask = {getTask}/>
    </div>
    
  );
}


