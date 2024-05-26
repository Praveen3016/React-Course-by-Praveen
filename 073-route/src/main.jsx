import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layout'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Login from './component/login';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
    </Route>
    <Route path="login" element={<Login/>} />

    </>
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
