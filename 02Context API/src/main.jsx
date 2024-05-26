import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route , createBrowserRouter , RouterProvider , createRoutesFromElements} from 'react-router-dom'
import Game from './component/Game.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>} >
    
    </Route>
    <Route path="choose" element={<Game />}/>
    </>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)
