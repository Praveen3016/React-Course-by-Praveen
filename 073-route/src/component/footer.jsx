import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <>
  <div className="container-flued h-25 bg-dark text-center text-decoration-none  ">
 <ul>
  <li>
  <Link  className=' navul' to="/" >Home</Link>
  </li>
  <li>
<Link className=' navul' to="about" >About </Link>
</li> 
</ul>
  </div>
  </>
  )
}

export default Footer
