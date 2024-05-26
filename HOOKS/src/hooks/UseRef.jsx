import React from 'react'
import { useRef , useEffect , useState } from 'react'

function UseRef() {
const [value , setvalue] = useState("")
const [name , setname] = useState("")

    const count = useRef(10);
    const element = useRef();

    useEffect(()=>{
        
        console.log(count)
        count.current = count.current + 1;
      })

      function click()
      {
        setname(element.current.value)
      }
    
  return (
    <div>
        <h1>useRef hook</h1>
        <input ref={element} type="text" value={value} onChange={(e) => setvalue(e.target.value)} />
        <h1>useRef count is {count.current}</h1>
        <button onClick={click}>button</button>
        <p>{name}</p>
    </div>
  )
}

export default UseRef
