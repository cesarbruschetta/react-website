import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nagigation extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Start Blog in Bootstrap and React</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Sobre</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}
export default Nagigation; 