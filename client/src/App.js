import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navigation from './components/common/Navigation'
import CardIn from './components/common/CardIn'
// import Footer from './components/common/Footer.js'
// import Interests from './components/common/Footer.js'


const App = () => {



  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/CardIn" component={CardIn} />
      </Switch>
      {/* <Interests /> */}
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
