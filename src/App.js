import Landing from './Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import Display from './Display'
import { Footer } from './Footer'
import Navbar from './Navbar'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Landing />
            <Footer />
          </Route>
          <Route exact path='/pincode' component={Search} />
          <Route exact path='/result' component={Display} />
        </Switch>
      </Router>
    </>
  )
}

export default App
