import { useStateValue } from './services/StateProvider'
import Landing from './components/Landing/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './components/Search/Search'
import Aos from 'aos'
import "aos/dist/aos.css"
import Display from './components/Display/Display'
import { Footer } from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Feedback from './components/Feedback/Feedback'
import Error from './components/Error/Error'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import Information from './components/Information/Information'
import { useEffect } from 'react'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue()
  console.log(user)
  useEffect(()=>{
Aos.init({duration:2000})
  },[])
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Landing />
            <Footer />
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
          <Route exact path='/result' component={Display} />
          <Route exact path='/feedbackform' component={FeedbackForm} />

          <Route exact path='/feedback'>
            {console.log(user)}
            {user ? <Feedback user={user} /> : <Error />}
          </Route>
          <Route exact path='/information' component={Information} />
          <Route exact path='/*'>
            <Navbar />
            <Landing />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
