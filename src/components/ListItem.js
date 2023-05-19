import React, { Component } from 'react';

export default function ListItem(props){



    function handleClick(event){
        //console.log(event.target.innerText)
        const option = event.target.innerText
        props.task(props.data)


       }

    return(
        <li className='StartMenu-list-item' onClick={handleClick} >
                <div className='list-item-wrapper'>
                <span><img src={props.icon} height="20px" alt='icon'/></span> <p> {props.data.title}</p>
                    </div>
                </li>
    )
}