import React, { Component } from 'react';
import {faArrowRight,faFolder,  faQuestion} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import ListItem from './ListItem';
const projecturl= process.env.REACT_APP_GETPROJECTS;

export default function StartMenu(props){
    const [open, setOpen] = React.useState(false)
    const [projects, setProjects] = React.useState('')
    const [about, setAbout] = React.useState({"title" : "About",
    "icon" : "https://i.ibb.co/WPKDrQ4/edify-logo-2.png",
    "link" : "https://legendary-crumble-1b032f.netlify.app/",
    "description" : "Hi, I am Edward Bera a full stack web developer and software engineer. My expertise is developing websites and web applications including full frontend design. ",
    "stack" : [
        {"title" : "Node JS",  "url" : "https://i.ibb.co/GFY7z2d/nodejs-icon.png"},
        {"title" : "MongoDB",  "url" : "https://i.ibb.co/yBYRj0b/mongo.png"},
        {"title" : "React JS",  "url" : "https://i.ibb.co/GP1yCDx/react.png"},
        {"title" : "Python",  "url" : "https://i.ibb.co/Vxv6s60/python.png"}
    ]}

    
    )
       const menuStyle = {
        visibility : props.visibility ? "visible" : "hidden",
       

       }

       async function getProject(){

        await axios.get(projecturl, {

        },).then((response)=>{
            const projectdata = response.data.map((data)=>{
                
                return <ListItem icon ={data.icon} task={props.getTask} data={data}/>

           
        })
            setProjects(projectdata)
       });
     
    }

     
       function handleClick(event){
        //console.log(event.target.innerText)
        const option = event.target.innerText
        props.getTask(option)


       }

       React.useEffect(()=>{
        getProject()
       },[])

    return(

        <div className='StartMenu' style = {menuStyle}>
            <div className='StartMenu-header'>
                <div className='StartMenu-DP'>
                   
                </div>
            </div>
            <ul className='StartMenu-list'>
                
                <ListItem icon ="https://i.ibb.co/CvkXKZS/pm878fhp015al30ohupi92f76r-3c972c4ad87131621982aa81206e0e25.png" task={props.getTask} data={about} />
                <li className='StartMenu-list-item'>
                <a target="_blank"
   rel="noreferrer"
   href="https://github.com/edwardbera"> 
        
                <div className='list-item-wrapper'>
                       <span><img src='github-logo.png' height="20px"/></span> <p>  Github Profile</p>
                    </div>
                    </a>
                </li>
                {projects}
                
                

            </ul>

           
           

        </div>



    )
}