import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Interests from './components/common/Footer'


const App = () => {



  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Interests />
      <Footer />
    </BrowserRouter>
  )
}

export default App
