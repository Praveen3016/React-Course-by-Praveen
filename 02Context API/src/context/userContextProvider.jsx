import React from "react";
import UserContext from "./userContext";
import { useState } from "react";

const UserContextProvider = ({children})=>{
const [user ,setUser] = useState(null);
const [mode , setmode] = useState("")

return(
    <UserContext.Provider value={{user,setUser,mode, setmode}}>
    {children}
    </UserContext.Provider>
)
   
}

export default UserContextProvider