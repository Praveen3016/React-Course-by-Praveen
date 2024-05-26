import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Router } from 'react-router-dom/cjs/react-router-dom.min'


export default function Navbar(props) {
  return (
    <nav id='nav' className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Router>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </Router>
          </li>
          <li className="nav-item">
            <Router>
            <Link className="nav-link" to="/about">{props.about}</Link>
            </Router>
          </li>
        </ul>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={props.func} role="switch" id="flexSwitchCheckDefault"/>
  <label class={`form-check-label text-${props.mode === "dark"?"light":"dark  "}`} for="flexSwitchCheckDefault">Enable DarkMood</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype = {
    title : PropTypes.string,
    about : PropTypes.string
}
Navbar.defaultProps = {
    title : " not valid",
    about : "ok is fine"
}