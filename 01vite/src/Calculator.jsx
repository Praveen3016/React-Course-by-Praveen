import React from 'react'
import { useState } from 'react'
import './index.css'
function Calculator() {
    const calcu = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'c', '0', '/']

    const btn = calcu.map((ev) => {
        return <button value={ev} onClick={(e) => setvalue(value + e.target.value)}>{ev}</button>
    })

    const [value, setvalue] = useState("")
    return (
        <div>
            <div className="cal d-flex flex-col justify-content-center ">
               <h1>Calculator</h1>
                <div className="row">
                    <input className='border' type="text" value={value} onChange={(e) => setvalue(e.target.value)} />
                </div>
                <div className=" row1 ">
                    {btn}
                    <button onClick={(e) => setvalue(eval(value))}>=</button>
                </div>
            </div>
        </div>
    )
}
export default Calculator
