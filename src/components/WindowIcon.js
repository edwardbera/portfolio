
import React, { Component } from 'react';
import '../style/main.css';

export default function WindowIcon(props){

    function handleClick(event){
        console.log(event.target.name)
        props.open()

    }

    return(
        <div className='WindowIcon' onClick={handleClick} name ={props.title}>

        <img src={props.icon} alt='icon' name ={props.title}/>
        </div>
    )
}