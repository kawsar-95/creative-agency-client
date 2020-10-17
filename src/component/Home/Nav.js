import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
const Nav = () => {
    return (
        <nav class="container navbar navbar-expand-lg navbar-light">
        <img src={logo} className="img-responsive ml-auto" style={{width:"15%"}} alt=""></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Our Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact us</a>
            </li>
      
            <li class="nav-item">
        <Link to="/adminSignIn">  <button className="btn btn-primary">Admin Login</button></Link>
            </li>
          
          
          
            
          </ul>
         
        </div>
      </nav>
    );
};

export default Nav;