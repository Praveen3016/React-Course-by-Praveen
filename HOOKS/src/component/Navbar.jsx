import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark "  style={{backgroundColor : "rgb(24, 60, 46)!important"}} arial-label="Furni navigation bar">

    <div className="container">
      <Link className="navbar-brand" href="index.html">Soft Shop<span>.</span></Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item ">
            <Link className="nav-link" to=''>Home</Link>
          </li>
          <li><Link className="nav-link" to='about'>About us</Link></li>
          <li><Link className="nav-link" to='product'>Product</Link></li>
      
          <li><Link className="nav-link" to='contect'>Contact us</Link></li>
        </ul>

        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li><Link className="nav-link" to=''> <img src="src/assets/images/user.svg" alt="" /></Link></li>
         
          <li><Link className="nav-link" to='cart'><img src="src/assets/images/cart.svg"/></Link></li>
        </ul>
      </div>
    </div>
      
  </nav>
 
  </>
  )
}

export default Navbar
