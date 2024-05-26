import React from "react";
import GameContext from "./gameContext";
import { useState } from "react";

const GameContextProvider = ({children}) =>{
const [msg , setmsg] = useState("choose under 100")
const [ input , setinput] = useState("")

return(
    <GameContext.Provider value={{msg ,setmsg , input , setinput}}>
        {children}
    </GameContext.Provider>
)
}

export default GameContextProvider