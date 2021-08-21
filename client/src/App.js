import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
// import Navbar from './components/common/Navbar'

const App = () => {



  return (
    <BrowserRouter>
      
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
