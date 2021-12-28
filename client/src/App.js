import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navigation from './components/common/Navigation'
import Contact from './components/common/Contact'


const App = () => {



  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/#contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
