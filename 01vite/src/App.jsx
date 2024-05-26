import { useState } from 'react'

import './App.css'

function App(props) {
  const [color ,setcolor] = useState("white");

  return (
    <div className=' h-screen bg-green-400' style={{height:"100vh" ,width:"100vw" , backgroundColor:color}}>
<div className=" position-fixed bottom-100 " style={{position:"fixed" , bottom:"10px" , left:"450px"}}>
<div className="bg-white px-3 border w-auto rounded d-flex flex-wrap justify-center gap-3 py-2">
  <button className='text-white bg-red-600 outline-none' onClick={() => setcolor("red")}>red</button>
  <button className='text-white bg-green-500 outline-none' onClick={() => setcolor("green")}>green</button>
  <button className='text-white bg-yellow-400 outline-none' onClick={() => setcolor("yellow")}>Yellow</button>
  <button className='text-white bg-blue-400 outline-none' onClick={() => setcolor("blue")}>blue</button>
  <button className='text-white bg-purple-900 outline-none' onClick={() => setcolor("purple")}>Purple</button>
  <button className='text-white bg-black outline-none' onClick={() => setcolor("black")}>black</button> 
</div>
</div>
    </div>
  )
}

export default App
