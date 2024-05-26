import Profile from "./component/profile"
import Login from "./component/login"
import UserContextProvider from "./context/userContextProvider"
import { Outlet} from 'react-router-dom'
import { Link } from "react-router-dom"


function App() {
 


  return (
    <UserContextProvider>    
      <h3>render 1</h3>
    <h1>Context API</h1><h1><Link to='choose'  >goto game</Link></h1>
    <Login/>
    <Profile/>
     <Outlet />
    </UserContextProvider>
  )
}

export default App
