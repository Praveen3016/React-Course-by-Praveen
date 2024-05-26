

import React from 'react'
import Header from './component/header'
import Footer from './component/footer'
import { Outlet } from 'react-router-dom' 
import Login from './component/login'

function Layout() {

  
 let sas =  sessionStorage.getItem("session");

  if(sas)
  {
    return (
      <>
       <Header/>
      <Outlet />
      <Footer/>
      </>
    )
  }
  else{
    return (
      <>
     <Login/>
      </>
    )
  }
 
}

export default Layout
