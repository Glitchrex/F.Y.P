import React from 'react'
import { Link } from 'react-router-dom'
import Google from '../../assets/google.png'
import './FeedbackForm.css'
import { actionTypes } from '../../services/reducer'
import { useHistory } from 'react-router-dom'
import { auth, provider } from '../../services/firebase'
import { useStateValue } from '../../services/StateProvider'
export default function FeedbackForm(props) {

  const history = useHistory()
 
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue()
  const { state } = props.location
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .then(() => {
        history.push({ pathname: '/feedback', state: state })
      })

    // if(user){
    //   history.pushState('/feedback')
    // }
    // else{
    //   history.pushState('/error')
    // }
  }
  return (
    <div>
      <p style={{ fontSize: 'large' }}>
        You were looking for pincode "<span>{state || '......'}</span> "
      </p>
      <h4>
        You will be redirected to fill the feedback form to help others <br />{' '}
        find data related to Network Providers at Pincode: "{' '}
        <span>{state || '......'}</span> "
      </h4>
      <br />
      Before proceeding please Sign-in to verify your identity
      <br />
      <Link onClick={signIn}>
        <button style={{ width: '150px' }}>
          {' '}
          <img src={Google} alt='icon' />{' '}
          <span style={{ marginLeft: '0' }}>Sign in</span>{' '}
        </button>
      </Link>
    </div>
  )
}
