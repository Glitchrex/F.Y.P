import React from 'react'
import './Feedback.scss'
export default function Feedback({ user }) {
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
          <div className="emailid_user">
            <p>
              Email: <span>{user?.email}</span>{' '}
            </p>
          </div>
        </div>
      </div>
      <form className='form'>
        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px' }}
            for='staticEmail'
          >
            Email:
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
            readonly
            className='form-control'
            id='email'
            value={user?.email}
            disabled
          />
        </div>
        <div className='form-element'>
          <label style={{ float: 'left', marginRight: '10px' }} for='address'>
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
            id='inputPassword'
            placeholder='Address'
          />
        </div>

        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            for='inputPassword'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='inputPassword'
            value='JIO'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              id='quality'
              placeholder='Enter value as 20, 40, 60, 80, 100'
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              type='text'
              className='form-control'
              id='inputPassword'
              placeholder='0-100Mbps'
            />
          </div>
        </div>

        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            for='inputPassword'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='inputPassword'
            value='Airtel'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              id='quality'
              placeholder='Enter value as 20, 40, 60, 80, 100'
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              type='text'
              className='form-control'
              id='inputPassword'
              placeholder='0-100Mbps'
            />
          </div>
        </div>
        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            for='inputPassword'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='inputPassword'
            value='VI'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              id='quality'
              placeholder='Enter value as 20, 40, 60, 80, 100'
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              type='text'
              className='form-control'
              id='inputPassword'
              placeholder='0-100Mbps'
            />
          </div>
        </div>
        <div className='form-element'>
          <label
            style={{ float: 'left', marginRight: '10px', marginTop: '8px' }}
            for='inputPassword'
          >
            Network Provider:
          </label>
          <input
            style={{ width: '30%' }}
            type='text'
            className='form-control'
            id='inputPassword'
            value='BSNL'
            disabled
          />
        </div>
        <div className='group'>
          <div className='div_one'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              id='quality'
              placeholder='Enter value as 20, 40, 60, 80, 100'
            >
              <option value='20'>Poor</option>
              <option value='40'>Good</option>
              <option value='60'>Better</option>
              <option value='80'>Best</option>
              <option value='100'>Excellent</option>
            </select>
          </div>
          <div className='div_two'>
            <label style={{ float: 'left' }} for='inputPassword'>
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
              type='text'
              className='form-control'
              id='inputPassword'
              placeholder='0-100Mbps'
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
