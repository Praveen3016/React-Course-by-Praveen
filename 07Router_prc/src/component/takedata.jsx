import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'


function Takedata() {

    const {user} = useContext(UserContext);

    if(!user) return <h2>nun</h2>
   return (
    <h1>hello {user.pass}</h1>
  )
}

export default Takedata
