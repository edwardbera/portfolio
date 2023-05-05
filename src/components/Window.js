import React, { Component } from 'react';
import { faMagnifyingGlass, faFolderOpen,  faQuestion} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Window(props){
    

    
    const windowStyle = {
        visibility : props.visibility ? "visible" : "hidden",
       }

    function minimise(){
        props.toggle()
    }

    function close(){
        props.close()
    }
  

    return(
        <div className='Window' style = {windowStyle}>
            <div className='top-menu'>
                <h5><FontAwesomeIcon icon={faFolderOpen}/> {props.title}</h5>
                <div className='top-menu-buttons'>
                <button className='minimise'onClick={minimise}>-</button>
                <button className='maximise'>H</button>
                <button className='close' onClick={close}>X</button>
                </div>
            </div>
            <div className='inner-menu'>
                <div className='inner-menu-container'></div>
                <div className='search-bar-container'>
                    <p>Search</p>
                <div className='search-bar'>
                    <p>{props.title}</p>
                </div>
                </div>
            </div>
            <div className='inner-wrapper'></div>
            
        </div>
    )
}