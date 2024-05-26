
import './praveen.css';
import Navbar  from './component/Navbar';
import Textarea   from './component/Textarea';
import Aleart from './component/aleart'
import React ,{ useState } from 'react';
import About from './component/about';
import {
  BrowserRouter as Router,
 Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [dark , setdark] = useState("light");
  const [alert , setalert] = useState("");
 

 const showalert = (massage,type)=>{
 setalert({
  msg : massage,
  typ: type
 });

 setTimeout(()=>{
  setalert(null)
 },1500);
 }


const mood =()=>{
  if(dark === "light")
  {
    setdark("dark")
    document.body.style.backgroundColor="dark";
    document.title="TextUtils - dark mode"

     showalert("dark mode on","success");
  }
  else{
    setdark("light")
    document.body.style.backgroundColor="light";
    showalert("Light mode on","success");
    document.title="TextUtils - Light mode"
  }
  
}

  return (
    <>
   
   {/* <Navbar title="TextUtiles" about="About Us" mode={dark} func={mood} /> 
  <Aleart alert={alert}  />
  <div className="container my-4">
  <Router> 
          <Route path="/" element={<Textarea funcAlert={showalert} heading="Enter some text" mode={dark} />}/>
          <Route path="about" element={<About />} />

   </Router> 

  </div>
  */}
   <Router>
      <Navbar title="TextUtils"mode={dark} func={mood}/>
      <Aleart alert = {alert}/>  
      <div className="container my-3">
        <Switch>   
          <Route path="/" element={<About />} />
          <Route path="/" element={<Textarea  funcAlert={showalert} heading="Enter some text" mode={dark}/>} />
        </Switch>
      </div>
   </Router>
  </>
  );
}

export default App;
