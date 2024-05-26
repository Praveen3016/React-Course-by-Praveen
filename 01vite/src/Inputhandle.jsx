import React from 'react'
import { useState } from 'react'

function Inputhandle() {
    const [name , setname] = useState('')
    const [pass , setpass] = useState('')

    
    const [head , sethead] = useState('please enter')



    const handlesub = (e) =>{
        e.preventDefault();
 const name = e.target.name.value;
const pass = e.target.pass.value;

sethead(`hello ${name} , with ${pass}`)
    }  
  return (
    <form onSubmit={handlesub} className='border'>
      <h1>{head}</h1>
      <input type="text" className='border mx-2' placeholder='enter your name' name="name" value={name} onChange={(e) => setname(e.target.value)} />
      <input type="text" className='border mx-2' placeholder='enter your password' name="pass" value={pass} onChange={(e) => setpass(e.target.value)} />
      <button type='submit' >submit</button>
    </form>
  )
}

export default Inputhandle
