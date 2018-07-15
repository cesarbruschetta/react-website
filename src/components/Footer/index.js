import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; <a href="http://www.cesarbruschetta.com.br" target="blank"> Cesar Augusto </a> 
          { (new Date()).getFullYear() }</p>
      </div>
    </footer>
    );
  }
}

export default Footer;
