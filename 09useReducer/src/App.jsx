import { useReducer } from "react"


const init = 0;




function reducer(state , action){

  
    // if(action.type === "INCREASE")
    // {
     
    // }

    // if(action.type === "DECREASE")
    // {
    //   return state - 1
    // }
  
switch(action.type)
{
  case "INCREASE" :  return state + 1
  case "DECREASE" :  return state + 1

}

}

function App() {

const [state , dispatch] = useReducer(reducer , init);

  return (
    <>
      <div className=" d-flex  justify-content-center shadow p-5 " style={{ width: "100vw" , backgroundColor: " #e4e4e4" }} >
        <div>
          <h1>useReducer</h1>
          <div className="w-100 d-flex justify-content-center">
      <h1 className="">{state}</h1>
          </div>
          <div className="d-flex justify-content-between">
          <button className="border" onClick={() => dispatch({type : "INCREASE"})}>Increase</button>
          <button  className="border" onClick={() => dispatch({type : "DECREASE"})}>Decrease</button>
          <button  className="border" onClick={() => dispatch({type : "T_F"})}></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App