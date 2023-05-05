import React, { Component, useEffect, useId } from 'react';
import '../style/main.css';
import StartMenu from './StartMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faVolumeUp} from "@fortawesome/free-solid-svg-icons";

export default function TaskBar(props){

    const [time, setTime] = React.useState("")
    const [toggle, setToggle] = React.useState(false)

    


function currentTime() {
    let date = new Date();
    let day = date.getDay();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time =  hh + ":" + mm + ":" + ss + " " + session;
  
    
    let t = setTimeout(function(){ currentTime() }, 1000);
    setTime(time)
  }
  
  
  
  

    function toggleStartMenu(event){
        
        if ( toggle === false){
            setToggle(true)
            
           
        }else{
            setToggle(false)
            
        }

    
    }

    const activityStyle = {
        visibility : props.task ? "visible" : "hidden",
    }
    useEffect (() =>{
        //getTime()
        currentTime();
        
    })

 

    return(
        <div className='TaskBar'>
            <StartMenu visibility = {toggle} getTask = {props.getTask}/>
            <div className='StartMenuButton' onClick={toggleStartMenu}>
                <strong className='title'>start</strong>
            </div>
        <div className='TaskBarActivity' onClick={props.visibility} style={activityStyle}>
            <div className='activity'>
                <p>{props.task}</p>
            </div>
        </div>

        <div className='TaskBarEnd'>
            <FontAwesomeIcon className='taskbarend-icon' icon={faVolumeUp} />
        <p className='taskbarend-icon'>{time}</p>
        </div>
        </div>



    )
}