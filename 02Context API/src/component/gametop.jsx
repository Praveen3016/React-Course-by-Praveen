import React from 'react'
import { useState , useContext } from 'react'
import GameContext from '../context/gameContext'

function Gametop() {


    const {setinput,msg ,input} = useContext(GameContext)

  return (
    <div className='' >
      <div className="game d-flex flex-column " style={{height : ""}}  >
        <span className='text-center text-danger' >{msg}</span>
        <input 
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value) } 
        />
      </div>
    </div>
  )
}

export default Gametop
