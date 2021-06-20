import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className="nav-items">
          <div className="item_one">
            <a className='navbar-brand' style={{fontSize:"xx-large"}} href='/'>
              Signal Detector
            </a>
          </div>

          <div className='navbar-insert' id='navbarSupportedContent'>
            {/* <div className='onnavbar-collapse'>
              <select className='select-operator' name='' id=''>
                <option value=''>Home</option>
                <option value=''>About Us</option>
                <option value=''>Info</option>
                <option value=''>Contact</option>
              </select>
            </div> */}
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
        </div>
      </nav>
    </>
  )
}
