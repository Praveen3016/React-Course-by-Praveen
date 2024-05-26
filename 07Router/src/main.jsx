import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout.jsx';
import Home from './component/home/home.jsx';
import About from './component/about/about.jsx';
import Contect from './component/contect/contect.jsx';
import Id from './component/id/id.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contect",
//         element : <Contect />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contect" element={<Contect/>} />
    <Route path="user/id" element={<Id/>} />
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
