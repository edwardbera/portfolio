import React, { Component, useEffect } from 'react';
import './calculator.css';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

export default function Calculator(props){
    const [output, setOutput] = React.useState('');
    const amount = React.useRef([]);
    const ops = React.useRef('');
    const PrevOps = React.useRef('');
   
    
    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ];

    function sum(){
        
        var num = 0;
        var size = amount.current.length 
        let temp ;
        if (size === 1){
            num = amount.current[0]
            setOutput(num)
        }else{
            
            for (let i = 0; i < size; i++){
          
                temp = amount.current[i].replace(",","")
                num += parseFloat(temp)
                console.log(temp)
            } 

        amount.current = []
        amount.current.push(num)
        setOutput(num)
      
        }

        

        
      
    }


    function subtract(){
        
        var num = 0;
        var size = amount.current.length 
        let temp ;
        if (size === 1){
            num = amount.current[0]
            setOutput(num)
        }else{
            
            for (let i = 0; i < size; i++){
          
                temp = amount.current[i].replace(",","")
                num -= parseFloat(temp)
                console.log(temp)
            } 

        amount.current = []
        amount.current.push(num)
        setOutput(num)
      
        }

        

        
      
    }

    function multiply(){
        var num =1;
        var size = amount.current.length 
        let temp ;
        console.log(amount.current)

        if (size === 1){
            num = amount.current[0]
            setOutput(num)
        }else{
        for (let i = 0; i < size; i++){
          
            temp = amount.current[i].replace(",","")
            
            num *= parseFloat(temp)
        }       
            setOutput(num)
    }
    }

    function division(){
        var num =1;
        var size = amount.current.length 
        let temp ;
        console.log(amount.current)

        if (size === 1){
            num = amount.current[0].replace(",","")
            setOutput(num)
        }else{
     
            temp = parseFloat(amount.current[0].replace(",",""))/ parseFloat(amount.current[1].replace(",",""))
                  
            setOutput(temp)
    }
        
    }
    function getInput(btn){
        
        if (btn === "C"){
            setOutput([]) 
            amount.current = []
        }else if ((btn === "+")||(btn === "X")){
            
           amount.current.push(output.toString())
           ops.current = btn
           PrevOps.current = btn
           if(ops.current === "+"){
            sum()
            
             }else if (ops.current === "X"){
            multiply()
            }

            amount.current = []
            amount.current.push(output.toString())
            setOutput([])
        }else if(btn === "=" ){
            
            amount.current.push(output.toString())
            if(ops.current === "+"){
                sum()
               
            }else if (ops.current === "X"){
                multiply()
            }else if (ops.current === "/"){
                division()
            }
        
        }else if(btn === "%" ){

            amount.current.push(parseFloat(output)*100)
            setOutput(amount.current)
                PrevOps.current = btn
        }else if(btn === "-" ){
            amount.current.push(output.toString())
                ops.current = btn
                PrevOps.current = btn
        }else if(btn === "/" ){
            ops.current = btn
            amount.current.push(output.toString())
           
           PrevOps.current = btn
           division()

        }else{


            if(PrevOps.current === "+"){
                //console.log(amount.current)
                let a = amount.current.toString()
                a = a.replace(',','')
                var temp = parseFloat(a) + parseFloat(btn)
                setOutput(temp)
                
                PrevOps.current = '';
                 }else if (PrevOps.current === "X"){
                    let a = amount.current.toString()
                    a = a.replace(',','')
                     temp = parseFloat(a) * parseFloat(btn)
                    setOutput(temp)
                    PrevOps.current = '';
                 }else if (PrevOps.current === "%"){
                        let a = amount.current.toString()
                        a = a.replace(',','')
                         temp = parseFloat(a) * 100
                        setOutput(temp)
                        PrevOps.current = '';
                   
               
                }else if (PrevOps.current === "/"){
                    let a = amount.current.toString()
                    a = a.replace(',','')
                     temp = parseFloat(a) / parseFloat(btn)
                    setOutput(temp)
                    PrevOps.current = '';
               
           
            }else if (PrevOps.current === "-"){
                let a = amount.current.toString()
                a = a.replace(',','')
                console.log(a)
                 temp = parseFloat(a) - parseFloat(btn)
                setOutput(temp)
                PrevOps.current = '';
           
       
        }
                else{
                    setOutput(current => [...current, btn])
                }

            
            
             
            
                
            
              
        
       }

       
    }

    const AppStyle = {
        visibility : props.visibility ? "visible" : "hidden",
        
       }
   
    function minimise(){
        console.log(props.visibility)
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