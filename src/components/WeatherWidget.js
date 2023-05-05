import React, { Component, Suspense } from 'react';



export default function WeatherWidget(props){


    return(
        <div className='Widget'>
          
           <h3 className='city'>{props.data.location.name}</h3>
           <p className='city'>{props.data.location.region}</p>
           <p className='city'>{props.data.location.country}</p>
           <p className='city'>{props.data.location.localtime.split(" ")[0]}</p>
           
            
            <div className='weather-info'> <p>{props.data.current.condition.text} </p><img className="icon" alt="icon" src={props.data.current.condition.icon}/></div>
            <p className='weather-info'> Temperature : {props.data.current.temp_c} C</p>
            <p className='weather-info'> Humidity : {props.data.current.humidity}</p>
            <p className='weather-info'> Wind Speed : {props.data.current.wind_kph} kph</p>
            
        </div>
    )

}