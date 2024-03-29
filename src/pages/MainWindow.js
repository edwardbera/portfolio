import React, { Component, Suspense } from 'react';
import StartMenu from '../components/StartMenu';
import TaskBar from '../components/TaskBar';
import Window from '../components/Window';
import '../style/main.css';
import axios from 'axios';
import WeatherWidget from '../components/WeatherWidget';
import DesktopIcon from '../components/DesktopIcon';
import Tagline from '../components/Tagline';
import Calculator from '../Apps/calculator/Calculator';
import HeaderText from '../components/HeaderText';
const googleapikey= process.env.REACT_APP_GKEY;

export default function MainWindow() {

  const [task, setTask] = React.useState('')
  const [isWindowVisible, setWindowVisible] = React.useState('')
  const [weather, setWeather] = React.useState('')
  const [App, setApp] = React.useState('')
  const [isAppVisible, setAppVisibility] = React.useState(false)
  const [about, setAbout] = React.useState({"title" : "About",
    "icon" : "https://i.ibb.co/WPKDrQ4/edify-logo-2.png",
    "link" : "https://legendary-crumble-1b032f.netlify.app/",
    "description" : "Hi, I am Edward Bera a full stack web developer and software engineer. My expertise is developing websites and web applications including full frontend design. ",
    "stack" : [
        {"title" : "Node JS",  "url" : "https://i.ibb.co/GFY7z2d/nodejs-icon.png"},
        {"title" : "MongoDB",  "url" : "https://i.ibb.co/yBYRj0b/mongo.png"},
        {"title" : "React JS",  "url" : "https://i.ibb.co/GP1yCDx/react.png"},
        {"title" : "Python",  "url" : "https://i.ibb.co/Vxv6s60/python.png"}
    ]})

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
   
   const res = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key="+ googleapikey)

  
    getWeather(res.data.plus_code.compound_code)
  }

  async function getWeather(city){

    
   try{
    const res = await axios.get('https://api.weatherapi.com/v1/current.json?key=51fb9fb1bcad4441b0c213452230105&q=bulawayo')
    setWeather(<WeatherWidget data = {res.data}/>)
   }catch(e){
    console.log(e)
   }
   
   return weather
  }

  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    setApp(HeaderText)
     },[])

  return (
    
    <div className="App">
      <Suspense>
      {weather}
      </Suspense>
      <div className='Desktop'>
      <DesktopIcon icon ="https://i.ibb.co/qChCk0c/ico-logo.png" title ='edify' link="https://legendary-crumble-1b032f.netlify.app/" />
     <DesktopIcon icon ="https://i.ibb.co/7KJqb4C/cloudy.png" title ='Weather App' link="https://main--vocal-kringle-c75e1a.netlify.app/"/>

      <Tagline/>
      {App}
       <Window close = {closeWindow}  visibility = {isWindowVisible} data = {about} toggle = {toggleVisible}/>
 
      </div>
      <Window close = {closeWindow}  visibility = {isWindowVisible} data = {task} toggle = {toggleVisible}/>
      <TaskBar visibility = {toggleVisible} task = {task.title} getTask = {getTask}/>
    </div>
    
  );
}


