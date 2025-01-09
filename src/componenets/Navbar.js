import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="@" style={{ paddingLeft: '100px' }}>ReviveFit</Link> {/* Corrected style for React */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="d-flex justify-content-around    w-100">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            
          <Link className="nav-link" to="/">Home </Link>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <Link className="nav-link" to="/Client">Link</Link>
=======
          <Link className="nav-link" to="@">Link</Link>
>>>>>>> 9dd821d667dba30e3a0cba96695fc1f8794dc664
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="@">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="@">AboutUs</Link>
        </li>
<<<<<<< HEAD
=======
        
>>>>>>> 9dd821d667dba30e3a0cba96695fc1f8794dc664
      </ul>
      <div className="form-inline my-2 my-lg-0">
        <Link className="btn btn-outline-light my-2 my-sm-0 mr-2" to="/login">Login</Link>
        <Link className="btn btn-outline-light my-2 my-sm-0" to="/signup">Signup</Link>
      </div>
    </div>
  </div>
</nav>


  )
}

export default Navbar