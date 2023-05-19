import React, { Component, useEffect } from 'react';
import './calculator.css';

export default function Calculator(props){
    const [output, setOutput] = React.useState('');
    const [amount, setAmount] = React.useState([]);
    const [count, setCount] = React.useState(0);

    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ];

    function calculate(){
     
        var num = 0;
        var size = amount.length 
        console.log(amount)

        for (let i = 0; i < size; i++){
            //console.log(amount[i])
            //num += parseFloat(amount[i])
        }       
            // setOutput(num)
       // console.log(num)
    }


    function getInput(btn){
       
        if (btn === "C"){
            setOutput([]) 
            setAmount([])
        }else if (btn === "+"){
            setAmount(current => [...current, output.toString() ])
            setOutput([])
           
        }else if(btn === "=" ){
            setAmount(current => [...current, output.toString() ])
         
           
            //calculate()

        }else{
            setOutput(current => [...current, btn])
       }

       console.log(amount)
    }

    const AppStyle = {
        visibility : props.visibility ? "visible" : "hidden",
        
       }
   
    function minimise(){
        console.log("mini")
        props.toggle()
    }

    function close(){
        props.close()
    }


    


    return(

        <div className='calculator' style={AppStyle}>
            <div className='top-menu'>
                <h5> Calculator</h5>
                <div className='top-menu-buttons'>
                <button className='minimise'onClick={minimise}>-</button>
                <button className='maximise'>[ ]</button>
                <button className='close' onClick={close}>X</button>
                </div>
            </div>
        <div className='screen'><p>{output}</p></div>
        <div className='inputs'>
        <div className='num-buttons'>
      
        {
          btnValues.flat().map((btn, i) => {
            return (
              <button
                key={i}
                className={btn === "=" ? "equals" : ""}
                
                onClick={() => {
                getInput(btn)    
                }}
              >{btn}</button>
            );
          })
        }
        </div>
        
     
        </div>
        
        </div>
    )
}