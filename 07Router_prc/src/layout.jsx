import React from 'react'
import Navbar from './component/navbar'
import UserContextProvider from './context/userContextProv'
import Login from './component/login'
import Takedata from './component/takedata'

function Layout() {
 

  return (
  
  <UserContextProvider>
   <Navbar/>
   <Login/>
   <Takedata/>

   </UserContextProvider>
  
  )
}

export default Layout
