import React from 'react'
import Gametop from './gametop'
import Gamebot from './gamebot'
import GameContextProvider from '../context/GameContextProvider'

function Game() {
  return (
    <GameContextProvider>
    <div className='mt-5  rounded shadow  container d-flex flex-column justify-content-center align-items-center border' style={{height : '400px ' ,width : "400px" }}>
        <h3>guese | <span className='text-primary'>Ract</span></h3>
   <Gametop/>
   <Gamebot/>
    </div>
    </GameContextProvider>
  )
}

export default Game
