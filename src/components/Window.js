import React, { Component } from 'react';
import { faMagnifyingGlass, faFolderOpen,  faQuestion} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WindowIcon from './WindowIcon';
import DesktopIcon from './DesktopIcon';


export default function Window(props){
    const [icon, setIcons] = React.useState('');
    const data = props.data
    

    const windowStyle = {
        visibility : props.visibility ? "visible" : "hidden",
       }

    function minimise(){
        props.toggle()
    }

    function close(){
        props.close()
    }
   
    function displayIcons(){
       
       
        if (data.stack){
        
            return data.stack.map( (key)=>(
            <WindowIcon icon ={key.url} title= {key.title}/> 
            
                
         ))
               
                
       
        }}
       
        

 
     
    return(
        <div className='Window' style = {windowStyle}>
            <div className='top-menu'>
                <h5><FontAwesomeIcon icon={faFolderOpen}/> {props.data.title}</h5>
                <div className='top-menu-buttons'>
                <button className='minimise'onClick={minimise}>-</button>
                <button className='maximise'>[ ]</button>
                <button className='close' onClick={close}>X</button>
                </div>
            </div>
            <div className='inner-menu'>
                <div className='inner-menu-container'>
                    <p>Stack</p>
                    {displayIcons()}
                </div>
                <div className='search-bar-container'>
                    <p></p>
                <div className='search-bar'>
                    <p>{props.data.title}</p>
                </div>
                </div>
            </div>
            <div className='inner-wrapper'><p>{props.data.description}</p>
            {data.github && (
            <div className='icons'>
            <DesktopIcon icon={data.icon} title={data.title} link={data.link}/>
            <DesktopIcon icon="github-logo.png" link={data.github} title="Github Repository"/>
            </div>)
            }</div>
        </div>
    )
}