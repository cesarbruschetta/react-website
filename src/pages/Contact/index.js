import React, { Component, Fragment } from 'react';

import BasePage from '../Base';


class Contact extends Component {
  render() {
    return (
      <Fragment>
        <BasePage title="Contato">
        
          <h2 className="pb-3 align-left mbr-fonts-style display-2">
              Drop a Line
          </h2>
          <div>
              <div className="icon-block pb-3">
                  <span className="icon-block__icon">
                      <span className="mbri-letter mbr-iconfont" media-simple="true"></span>
                  </span>
                  <h4 className="icon-block__title align-left mbr-fonts-style display-5">
                      Don't hesitate to contact us
                  </h4>
              </div>
              <div className="icon-contacts pb-3">
                  <h5 className="align-left mbr-fonts-style display-7">
                      Ready for offers and cooperation
                  </h5>
                  <p className="mbr-text align-left mbr-fonts-style display-7">
                      Phone: +1 (0) 000 0000 001 <br/>
                      Email: youremail@mail.com
                  </p>
              </div>
          </div>
          <div data-form-type="formoid">
              <div data-form-alert="" hidden="">
                  Thanks for filling out the form!
              </div>
              <form className="block mbr-form" action="https://mobirise.com/" method="post" data-form-title="Mobirise Form">
                  <div className="row">
                      <div className="col-md-6 multi-horizontal" data-for="name">
                          <input type="text" className="form-control input" name="name" data-form-field="Name" placeholder="Your Name" required="" id="name-form4-2y"  />
                      </div>
                      <div className="col-md-6 multi-horizontal" data-for="phone">
                          <input type="text" className="form-control input" name="phone" data-form-field="Phone" placeholder="Phone" required="" id="phone-form4-2y" />
                      </div>
                      <div className="col-md-12" data-for="email">
                          <input type="text" className="form-control input" name="email" data-form-field="Email" placeholder="Email" required="" id="email-form4-2y" />
                      </div>
                      <div className="col-md-12" data-for="message">
                          <textarea className="form-control input" name="message" rows="3" data-form-field="Message" placeholder="Message" id="message-form4-2y"></textarea>
                      </div>
                      <div className="input-group-btn col-md-12">
                          <button href="" type="submit" className="btn btn-primary btn-form display-4">SEND MESSAGE</button>
                      </div>
                  </div>
              </form>
          </div>
          

        </BasePage>
      </Fragment>
    );
  }
}

export default Contact;
//https://mobirise.com/bootstrap-4-theme/contact-form-template.html