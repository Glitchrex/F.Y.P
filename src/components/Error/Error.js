import { Link } from 'react-router-dom'
import Google from '../../assets/google.png'
import { actionTypes } from '../../services/reducer'
import { useHistory } from 'react-router-dom'
import { auth, provider } from '../../services/firebase'
import { useStateValue } from '../../services/StateProvider'
export default function Error() {
  const history = useHistory()
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue()
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
        history.push('/feedback')
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
      <h2>Oops! Something went wrong!!!</h2>
      <br />
      <h2>Please Sign-in to Continue</h2>
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
