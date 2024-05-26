import React from 'react'
import { useState ,useContext } from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username , setusername] =  useState("")
    const [password , setpassword] =  useState("")
    const [darkmode , setdarkmode] = useState(false)

    const {setUser,setmode} = useContext(UserContext) 

const changemode = () =>{



  if(darkmode)
  {
    document.body.style.backgroundColor = "grey"
    document.body.style.color = "white"

    setmode('dark')
  }else{
    document.body.style.backgroundColor = " white"
    document.body.style.color = "black"
    setmode("light")
  }
}


    const handlesub = (e) =>{
  console.log(darkmode)
        e.preventDefault()
        setUser({username , password})
   
        // document.body.style.backgroundColor = " red";
        // document.getElementById("log").parentElement.parentElement.style.backgroundColor = "red";
    }

  return (
    <div id='log'>
      <input type="checkbox" onClick={changemode} onChange={ () => darkmode == true ? setdarkmode(false) : setdarkmode(true)} />
      <h1>login</h1>
      <input 
      type="text" 
      value={username}
      onChange={(e) => setusername(e.target.value)}
      placeholder='username'
      />
      {"  "}
      <input 
      type="text" 
      value={password}
      onChange={(e) => setpassword(e.target.value)}
      placeholder='password'
      />
      <button onClick={handlesub}>submit</button>

    </div>
  )
}

export default Login
