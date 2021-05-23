import Landing from './Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import Display from './Display'
import { Footer } from './Footer'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
          <Landing/>
          <Footer/>
          </Route>
          <Route exact path='/pincode' component={Search} />
          <Route exact path='/result' component={Display} />
        </Switch>
      </Router>
    </>
  )
}

export default App
