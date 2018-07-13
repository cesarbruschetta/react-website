import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nagigation extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink exact className="navbar-brand" to="/">Start Blog in Bootstrap and React</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" className="nav-link">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/contact" className="nav-link">Contato</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}
export default Nagigation; 