import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function Login() {
  const [inval , setinval] = useState("")

 function addsassion()
 {
    sessionStorage.setItem("session" , true)
 }
  return (
    <div>
      <input type="text" value={inval}  onClick={addsassion} onChange={(e) => setinval(e.target.value)} />
      <button ><Link to="about" >login</Link></button>
    </div>
  )
}

export default Login
