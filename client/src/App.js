import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import CardIn from './components/common/CardIn'
// import Footer from './components/common/Footer.js'
// import Interests from './components/common/Footer.js'


const App = () => {



  return (
    <BrowserRouter>
      <Navbar />
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
