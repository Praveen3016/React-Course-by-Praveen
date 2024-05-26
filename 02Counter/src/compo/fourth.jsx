import React from 'react'
import { useState } from 'react';

function Fourth() {


const [respo , setrespo] = useState("") 

    function callit()
    {
       fetch("https://api.quotable.io/random")
      .then((response)=>  response.json())
      .then((value) =>{
        setrespo(JSON.stringify(value))
      console.log(value)})
    }

    const sum =(a ,b) =>{
return a+b;
    }
      const mul =(a ,b) =>{
return a*b;
    }
     const div =(a ,b) =>{
     return (a/b).toFixed(2);
    }


  return (
    <div>
        <div>{respo}</div>
      <button onClick={callit}>api call</button>
      <p>sum of two number is {sum(23 ,2)}</p>
      <p>multiplies of two number is {mul(2,3)}</p>
      <p>devide of two number is {div(2,3)}</p>
    </div>
  )
}

export default Fourth
