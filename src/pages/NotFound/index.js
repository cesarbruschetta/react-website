import React, { Component, Fragment } from 'react';

import BasePage from '../Base';
import './style.css'

  
class NotFound extends Component {
  componentDidMount(){
    function randomNum(){
        return Math.floor(Math.random() * 9)+1;
    }
    
    var loop1,loop2,loop3,time=30, i=0, 
      selector3 = document.querySelector('.thirdDigit'), 
      selector2 = document.querySelector('.secondDigit'),
      selector1 = document.querySelector('.firstDigit');
      
    loop3 = setInterval(function(){
      if(i > 40)
      {
          clearInterval(loop3);
          selector3.textContent = 4;
      }else
      {
          selector3.textContent = randomNum();
          i++;
      }
    }, time);
    
    loop2 = setInterval(function(){
    if(i > 80)
    {
        clearInterval(loop2);
        selector2.textContent = 0;
    }else
    {
        selector2.textContent = randomNum();
        i++;
    }
    }, time);
    
    loop1 = setInterval(function(){
      if(i > 100)
      {
          clearInterval(loop1);
          selector1.textContent = 4;
      }else
      {
          selector1.textContent = randomNum();
          i++;
      }
    }, time);
    
  }
  render() {
    return (
      <Fragment>
        <BasePage title="Pagina Não Encontrada">

          <div className="error">
              <div className="container-floud">
                  <div className="col-xs-12 ground-color text-center">
                      <div className="container-error-404">
                          <div className="clip"><div className="shadow"><span className="digit thirdDigit"></span></div></div>
                          <div className="clip"><div className="shadow"><span className="digit secondDigit"></span></div></div>
                          <div className="clip"><div className="shadow"><span className="digit firstDigit"></span></div></div>
                          <div className="msg">OH!<span className="triangle"></span></div>
                      </div>
                      <h2 className="h1">Sorry! Page not found</h2>
                  </div>
              </div>
          </div>
        
        </BasePage>
      </Fragment>
    );
  }
}
export default NotFound;