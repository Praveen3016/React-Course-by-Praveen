import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='d-flex justify-content-between px-4 py-3 align-items-center'>
    <div>
      <h2>Context API</h2>
    </div>
    <ul className=' navul d-flex list-unstyled m-0 gap-3 align-items-center'>
    <li>home</li>
    <li>about</li>
    <li>contect</li>
    <li>more</li>
    </ul>
    <div className="btn btn-danger">Login</div>
</nav>
  )
}

export default Navbar
