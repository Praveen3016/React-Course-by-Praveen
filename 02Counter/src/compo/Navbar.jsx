import React from 'react'




export default function Navbar() {
  return (
    <nav id='nav' className='navbar navbar-expand-lg navbar-dark  bg-dark'>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">React|Projects</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
    
            <a className="nav-link active" aria-current="page" >Home</a>
       
          </li>
          <li className="nav-item">
          
            <a className="nav-link" >About</a>
           
          </li>
        </ul>
        <div className="htmlForm-check htmlForm-switch">
  <input className="htmlForm-check-input" type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
  <label className='htmlForm-check-label text-white' htmlFor="flexSwitchCheckDefault">Enable DarkMood</label>
</div>
      </div>
    </div>
  </nav>
  )
}

