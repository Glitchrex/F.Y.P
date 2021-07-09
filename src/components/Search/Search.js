import React, { useState } from 'react'
import './Search.css'
import { useHistory, useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
export default function Search({ props }) {
  const history = useHistory()
  const location = useLocation()
  var pin=location.state ? location.state :null
 
  const [pincode, setPincode] = useState(pin)
  const handlePincode = (e) => {
    e.preventDefault()
    let pincodeval = document.querySelector('#pincode')
    var pattern = '^[1-9]{1}[0-9]{2}s{0,1}[0-9]{3}$'
    var re = new RegExp(pattern)
    if (re.test(pincodeval.value)) {
      history.push({
        pathname: '/result',
        state: pincodeval.value,
      })
    } else {
      alert('Enter a valid pincode')
      pincodeval.value = null
    }
  }
  return (
    <>
      <div className='mainbody'>
        <div className='main'>
          <div className='content'>
            <div className='text'>Signal Detector</div>
            <form method='POST' id='feedback'>
              <div className='field'>
                <input
                  name='pincode'
                  style={{ marginLeft: '0' }}
                  id='pincode'
                  value={pincode}
                  onChange={({ target }) => setPincode(target.value)}
                  type='text'
                  required
                />
                <span className='fas fa-user'></span>
                <label>Enter Pincode</label>
              </div>
              <Link
                to={{
                  pathname: '/result',
                  state: pincode,
                }}
              >
                <button id='submitbtn' onClick={handlePincode}>
                  <div className='button-style'>
                    <SearchIcon />
                    Search
                  </div>
                </button>
              </Link>
              <Link to='/' type='submit'>
                <button>
                  <div className='button-style'>
                    <ArrowBackIcon />
                    Back
                  </div>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
