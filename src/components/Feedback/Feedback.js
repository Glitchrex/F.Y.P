import React, { createRef } from 'react'
import './Feedback.scss'
let address = createRef()
let jiostrength = createRef()
let jiodata = createRef()
let airtelstrength = createRef()
let airteldata = createRef()
let vistrength = createRef()
let vidata = createRef()
let bsnlstrength = createRef()
let bsnldata = createRef()
let pincode = createRef()
export default function Feedback({ user }) {
  const handleClick = (e) => {
    e.preventDefault()
    // console.log(address.current.value, pincode.current.value)
    // console.log('JIO', jiostrength.current.value, jiodata.current.value)
    // console.log(
    //   'Airtel',
    //   airtelstrength.current.value,
    //   airteldata.current.value
    // )
    // console.log('VI', vistrength.current.value, vidata.current.value)
    // console.log('BSNL', bsnlstrength.current.value, bsnldata.current.value)
    var addressPattern = '[a-zA-Z]+[ ]+[a-zA-Z]'
    var res = new RegExp(addressPattern)
    if (res.test(address.current.value) !== true) {
      alert('Enter a valid address')
      address.current.value = null
    }
    var pincodePattern = '^[1-9]{1}[0-9]{2}s{0,1}[0-9]{3}$'
    var re = new RegExp(pincodePattern)
    if (re.test(pincode.current.value) !== true) {
      alert('Enter a valid pincode')
      pincode.current.value = null
    }

    var dataspeedExp = '^100(.[0]{1,2})?|([0-9]|[1-9][0-9])(.[0-9]{1,2})?$'
    var rexp = new RegExp(dataspeedExp)
    if (rexp.test(jiodata.current.value) !== true) {
      console.log('error')
      alert('Data Speed Must be between 0-100Mbps')
      jiodata.current.value = null
      airteldata.current.value = null
      vidata.current.value = null
      bsnldata.current.value = null
    }
  }
  return (
    <div>
      <h1>Welcome to feedback</h1>
      <div className='user'>
        <div className='user_left'>
          <img
            style={{ width: '70px', height: '70px', borderRadius: '100%' }}
            src={user?.photoURL}
            alt='avatar'
          />
        </div>
        <div className='user_right'>
          <div>
            <p>
              Name: <span>{user?.displayName}</span>{' '}
            </p>
          </div>
          <div className='emailid_user'>
            <p>
              Email: <span>{user?.email}</span>{' '}
            </p>
          </div>
        </div>
      </div>
      <form className='form'>
        <div className='form-element'>
          <label style={{ float: 'left', marginRight: '10px' }} htmlFor='email'>
            Email:
          </label>
          <br />
          <input
            className='form-control'
            style={{
              width: '100%',
              float: 'left',
              marginLeft: '0',
              marginBottom: '20px',
            }}
            type='text'
            readOnly
            id='email'
            name='email'
            value={user?.email}
            disabled
          />
        </div>
        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px' }}
            htmlFor='address'
          >
            Address:
          </label>
          <br />
          <input
            style={{
              width: '100%',
              float: 'left',
              marginLeft: '0',
              marginBottom: '20px',
            }}
            type='text'
            className='form-control'
            id='address'
            placeholder='Address'
            name='address'
            ref={address}
          />
        </div>
        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px' }}
            htmlFor='pincode'
          >
            Pincode:
          </label>
          <br />
          <input
            style={{
              width: '100%',
              float: 'left',
              marginLeft: '0',
              marginBottom: '20px',
            }}
            type='text'
            className='form-control'
            id='pincode'
            placeholder='Pincode'
            name='pincode'
            required
            ref={pincode}
          />
        </div>

        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            htmlFor='jio'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='jio'
            name='jio'
            value='JIO'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} htmlFor='jiosignal_strength'>
              Signal Strength:
            </label>
            <br />
            <select
              style={{
                width: '110%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='text'
              className='form-control'
              id='jiosignal_strength'
              name='jiosignal_strength'
              ref={jiostrength}
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} htmlFor='jiodata_speed'>
              Data Speed:
            </label>
            <br />
            <input
              style={{
                width: '100%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='number'
              className='form-control'
              id='jiodata_speed'
              name='jiodata_speed'
              placeholder='0-100Mbps'
              ref={jiodata}
            />
          </div>
        </div>

        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            htmlFor='airtel'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='airtel'
            name='airtel'
            value='Airtel'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} htmlFor='airtelsignal_strength'>
              Signal Strength:
            </label>
            <br />
            <select
              style={{
                width: '110%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='text'
              className='form-control'
              id='airtelsignal_strength'
              name='airtelsignal_strength'
              ref={airtelstrength}
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} htmlFor='airteldata_speed'>
              Data Speed:
            </label>
            <br />
            <input
              style={{
                width: '100%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='number'
              className='form-control'
              id='airteldata_speed'
              name='airteldata_speed'
              placeholder='0-100Mbps'
              ref={airteldata}
            />
          </div>
        </div>
        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            htmlFor='vi'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='vi'
            name='vi'
            value='VI'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} htmlFor='visignal_strength'>
              Signal Strength:
            </label>
            <br />
            <select
              style={{
                width: '110%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='text'
              className='form-control'
              id='visignal_strength'
              name='visignal_strength'
              ref={vistrength}
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} htmlFor='vidata_speed'>
              Data Speed:
            </label>
            <br />
            <input
              style={{
                width: '100%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='number'
              className='form-control'
              id='vidata_speed'
              name='vidata_speed'
              placeholder='0-100Mbps'
              ref={vidata}
            />
          </div>
        </div>
        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            htmlFor='bsnl'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='bsnl'
            name='bsnl'
            value='BSNL'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} htmlFor='bsnlsignal_strength'>
              Signal Strength:
            </label>

            <br />
            <select
              style={{
                width: '110%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='text'
              className='form-control'
              id='bsnlsignal_strength'
              name='bsnlsignal_strength'
              ref={bsnlstrength}
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} htmlFor='bsnldata_speed'>
              Data Speed:
            </label>
            <br />
            <input
              style={{
                width: '100%',
                float: 'left',
                marginLeft: '0',
                marginBottom: '20px',
              }}
              type='number'
              className='form-control'
              name='bsnldata_speed'
              id='bsnldata_speed'
              placeholder='0-100Mbps'
              ref={bsnldata}
            />
          </div>
        </div>
        <button name='submit' type='submit' onClick={(e) => handleClick(e)}>
          Submit
        </button>
      </form>
    </div>
  )
}
