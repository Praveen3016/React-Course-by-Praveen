import React from 'react'
import { useState , useEffect ,useContext } from 'react'
import GameContext from '../context/gameContext'
function Gamebot() {
    
    const [random , setrandom] = useState("");

    const {input , setmsg} = useContext(GameContext);

    useEffect(()=>{
        setrandom(Math.floor(Math.random()* 99 ))
        
    } , [])
   
    function checkmasage(){
console.log(random)

if(input == "")
{
setmsg("enter some value")
}   
else if(input < random)
       {
        setmsg("value is low")
       }else if(input > 100){
        setmsg("value out of salabus")
       }
       else if( input > random)
       {
        setmsg("value is high")
       }else if( input == random)
       {
        setmsg("congrats")
       }else{
        setmsg("value out of salabus")
       }
      
    }
    
  return (
  <div>
    <div className="btn btn-danger m-4" onClick={() => checkmasage()}>check</div>
  </div>
  )
}

export default Gamebot
