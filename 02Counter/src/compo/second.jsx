import React from 'react'
import { useState} from "react";



function Second() {

    const [hour , sethour] = useState(0);
const [minute , setminute] = useState(0);
let [second , setsecond] = useState(0);

setInterval(() => {
  const date = new Date();

 setsecond(date.getSeconds())
 sethour(date.getHours())
 setminute(date.getMinutes())
   
},1000);

  return (
    <div className='border-bottom'>
      <h1 className='text-center text-primary text-decoration-underline'>It's my Time </h1>
      <div className="container">
        <h2 className='well well-success text-center'>{hour}:{minute}:{second}</h2>
        
        </div>
    </div >
  )
}

export default Second
