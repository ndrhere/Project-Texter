import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = (props) => {
  let location = useLocation();

 
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          {/* //Hre we can use props.mode like this because bg is a valid attribute for nav but we can't write it like that in textarea because props is not a valid attribute for textarea Element// */}
  <div className="container-fluid" >
    <a className="navbar-brand" href="/">Texter.Inc</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==='/about' ?'active' : ''}`} to="/about">About</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar