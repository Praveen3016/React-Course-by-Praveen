import UseRef from "./hooks/UseRef"
import { Route , createBrowserRouter , createRoutesFromElements , RouterProvider } from "react-router-dom"
import Layout from "./Layout"

function App() {

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<UseRef/>} />
    </Route>
  )
 )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
