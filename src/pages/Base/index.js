import React, { Component, Fragment } from 'react';

import Navigation from '../../components/Navigation';
import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Side from '../../components/Side';
import Footer from '../../components/Footer';

class BasePage extends Component {
    render() {
        return (
            <Fragment>
              <Navigation />
              {/* Page Content */}
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    {/* Blog Entries Colum */}
                    <h1 className="my-4">{ this.props.title }</h1>
                    { this.props.children }
                  </div>
                  <div className="col-md-4">
                    {/* Sidebar Widgets Column */}
                    <Search />
                    <Categories />
                    <Side />
                  </div>
                </div>
              </div>
              <Footer />
          </Fragment>
        );
    }
}
export default BasePage;