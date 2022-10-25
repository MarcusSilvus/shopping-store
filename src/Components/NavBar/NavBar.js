import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-items">
          <li>Products</li>
          <li>Locations</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar