import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navigation from './components/common/Navigation'
import ContactForm from './components/ContactForm'
import CardIn from './components/common/CardIn'
// import Footer from './components/common/Footer.js'
// import Interests from './components/common/Interests'


const App = () => {



  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ContactForm" component={ContactForm} />
        <Route path="/CardIn" component={CardIn} />
        {/* <Route path="/interests" component={Interests} /> */}
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
