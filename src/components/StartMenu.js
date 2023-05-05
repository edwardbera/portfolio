import React, { Component } from 'react';
import {  faFolder,  faQuestion} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function StartMenu(props){
   // const [open, setOpen] = React.useEffect(false)
    //const menu = document.getElementsByClassName("StartMenu")
 
       const menuStyle = {
        visibility : props.visibility ? "visible" : "hidden",
       

       }

       function handleClick(event){
        //console.log(event.target.innerText)
        const option = event.target.innerText
        props.getTask(option)
       }

    return(

        <div className='StartMenu' style = {menuStyle}>
            <div className='StartMenu-header'>
                <div className='StartMenu-DP'></div>
            </div>
            <ul className='StartMenu-list'>
                <li className='StartMenu-list-item' onClick={handleClick}>
                    <div className='list-item-wrapper'>
                        <p> <FontAwesomeIcon icon={faQuestion}/> About</p>
                    </div>
                </li>
                <li className='StartMenu-list-item' onClick={handleClick}>
                <div className='list-item-wrapper'>
                        <p> <img src='github-logo.png' height="20px"/> Github Profile</p>
                    </div>
                </li>
                <li className='StartMenu-list-item' onClick={handleClick}>
                <div className='list-item-wrapper'>
                        <p> <FontAwesomeIcon icon={faFolder}/> All Projects</p>
                    </div>
                </li>
                

            </ul>

        </div>



    )
}