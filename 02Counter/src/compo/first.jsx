import React from 'react'
import './app.css';
import {useState} from 'react'

export default function First() {

    const [counter ,setcounter] = useState(0)

  function increass()
  {
   setcounter(counter + 1)
   if(counter >= 20)
   {
    alert("20+ value not valid")
    setcounter(counter)
   }
  }

  const decreass =()=>{
    setcounter(counter - 1)
    if(counter <= 0)
    {
      alert("Negative value not valid")
      setcounter(counter)
    }
  }
  return (
    <div>
      
         <div className="Container d-flex align-item-center justify-content-center w-100 mt-4 my-3">
      <div className="div1">
      <h1 className='heading'>Counter |<span>React</span></h1>
      <div className="content ">
        <div className="btn btn-primary" id="increass" onClick={increass} >Increase</div>
        <span className=" countBox px-3 py-2 mt-1 border mx-4">{counter}</span>
        <div className="btn btn-primary" id="decreass" onClick={decreass} >Decrease</div>
      </div>
      </div>
    </div>
    </div>
  )
}
