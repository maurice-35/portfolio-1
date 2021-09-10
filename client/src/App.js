import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navigation from './components/common/Navigation'
import ContactForm from './components/ContactForm'
 

const App = () => {



  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ContactForm" component={ContactForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
