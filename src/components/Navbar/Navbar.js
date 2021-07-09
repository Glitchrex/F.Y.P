import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav id='above' className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='nav-items'>
          <div className='item_one'>
            <a
              className='navbar-brand'
              style={{ fontSize: 'xx-large' }}
              href='/'
            >
              Signal Detector
            </a>
          </div>

          <div className='navbar-insert' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li id='navbaritems' className='nav-item active'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
              <li id='navbaritems' className='nav-item'>
                <a className='nav-link' href='#about'>
                  About Us
                </a>
              </li>
              <li id='navbaritems' className='nav-item'>
                <a className='nav-link' href='#insights'>
                  Insights
                </a>
              </li>
              <li id='navbaritems' className='nav-item'>
                <a className='nav-link' href='#contact'>
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
