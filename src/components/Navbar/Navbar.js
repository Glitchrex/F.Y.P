import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>
          Signal Detector
        </a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li id='navbaritems' className='nav-item active'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li id='navbaritems' className='nav-item'>
              <a className='nav-link' href='/'>
                About Us
              </a>
            </li>
            <li id='navbaritems' className='nav-item'>
              <a className='nav-link' href='/'>
                Info
              </a>
            </li>
            <li id='navbaritems' className='nav-item'>
              <a className='nav-link' href='/'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
