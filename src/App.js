import { useStateValue } from './services/StateProvider'
import Landing from './components/Landing/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './components/Search/Search'
import Display from './components/Display/Display'
import { Footer } from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Feedback from './components/Feedback/Feedback'
import Error from './components/Error/Error'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue()
  console.log(user)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Landing />
            <Footer />
          </Route>
          <Route exact path='/pincode'>
            <Search />
          </Route>
          <Route exact path='/result' component={Display} />
          <Route exact path='/feedbackform' component={FeedbackForm} />
          <Route exact path='/feedback'>
            {console.log(user)}
            {user ? <Feedback user={user} /> : <Error />}
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
