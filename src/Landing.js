import React from 'react'
import './Landing.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <>
      <div className='landing'>
        {/* <h1>Signal Detector</h1> */}
        <div style={{ paddingTop: '20px' }} className='maps'>
          <iframe
            className='frame'
            title='map'
            src='https://www.google.com/maps/d/embed?mid=1ymtEZ2oeD0waWzpE-17HVxgJlHl3QF5q'
            width='300'
            height='450'
          ></iframe>
          <div class='getstarted'>
            <Link to='/pincode' type='submit'>
              <button>
                <div className='button-style'>
                  Get Started
                  <KeyboardArrowRightIcon />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
