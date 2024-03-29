import React, { Component } from 'react';
import '../style/main.css';

export default function DesktopIcon(props){

    function handleClick(event){
        console.log(event.target.name)
       props.open()

    }

    return(
        <div className='DesktopIcon' onClick={handleClick} name ={props.title} link={props.link}>
        <a target="_blank"
   rel="noreferrer"
   href={props.link}> 
        <img src={props.icon} alt='icon' name ={props.title}/>
        <p name ={props.title}>{props.title}</p>
        </a>
        </div>
    )
}