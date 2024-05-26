import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user , mode} = useContext(UserContext);

    if(!user) return <h2>nunnn</h2>
  return (
    <div>
      <h1>welcome {user.username} </h1>
      <h2>mode is {mode}</h2>
    </div>
  )
}

export default Profile
