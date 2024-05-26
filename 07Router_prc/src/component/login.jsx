import React from 'react'
import { useState , useContext } from 'react'
import UserContext from '../context/userContext';



function Login() {

    const [username , setusername] = useState("");
const [pass , setpass] = useState("");

const {setUser} = useContext(UserContext)

const takevalue = (e) =>{
    e.preventDefault()
    setUser({username, pass})
}
  return (
  <div className="login">
    <h2>login</h2>
    <input type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
    <input type="text" placeholder='password' value={pass} onChange={(e) => setpass(e.target.value)} />
    <button onClick={takevalue}>submit</button>
  </div>
  )
}

export default Login
