import React from 'react'
import { useState } from 'react'

function Third() {
  
  const [random , setrandom] = useState("")
  const restart = () =>{
    return setrandom( Math.floor(Math.random() * 101))

  }
 
    const [header , setheader] = useState("Guess a number from 1 to  100");
    const [respo , setrespo] = useState("");
    const [count , setcount] = useState(10);
    
    // restart();

    const checkyet = () =>{
    
      console.log(random)
        setcount(count - 1)
        let input = document.getElementById("input");
console.log(random);
        if(random == input.value)
        {
          setrespo("congrets")
          document.getElementById("check").style.display= "none";
          document.getElementById("reload").style.display= "block";

        }
        if(input.value < random)
        {
            setrespo("value is small")
        }
        if(input.value > random)
        {
            setrespo("value is big")
        }

        input.value= "";
    }

   
    

   
  return (
    <div className='third'>
     <div className="container1">
        <p className="to">{header}</p>
        <span id="response">{respo}</span>

        <div className="btn-1">
           <input type="number" id="input"/>
           <button id="check" className="check" onClick={checkyet} >Check</button>
           <button id="reload" className="check" style={{display: " none"}} onClick={restart}  >Replay</button>
        </div>

       <p className="chance"> You have <span id="chance">{count}</span> Chances.</p>
    </div>
    
    </div>
  )
}

export default Third
