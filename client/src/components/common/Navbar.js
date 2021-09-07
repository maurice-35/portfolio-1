import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {




  return (
    <>
      <div className="buttons">
        <Link className="button is-dark" to="/charities1">
        </Link>
        <Link to="/charities2" className="navbar-item"></Link>
      </div>
      <Link className="button is-dark" to="/charities3">
      </Link>
      <Link className="button is-dark" to="/charities4">
      </Link>
    </>
  )

}

export default Navbar