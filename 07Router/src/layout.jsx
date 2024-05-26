import React from 'react'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    
      <Header />
      <Outlet />
      <Footer />
    
    </>
  )
}

export default Layout
