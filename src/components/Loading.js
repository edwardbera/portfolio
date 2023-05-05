import React, { Component, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../style/main.css';

export default function Loading(){
    const Navigate = useNavigate();

    function loadpage(){
       
        Navigate( '/Main',{replace : true})
        //console.log("gone")
    }
    function timeout(){
        setTimeout(()=>{loadpage()}, 6000)
    }

   timeout()

    return(
        <div className='Loading'>
            <img className='gif' src="loading.gif" alt='Loading'/>
            <p>Please Wait...</p>
        </div>
    )
}