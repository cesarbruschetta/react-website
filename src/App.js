import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import CategoriePage from './pages/Categorie';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

import "./blog-home.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about/' component={About}/>
        <Route exact path='/service/' component={Service}/>
        <Route exact path='/contact/' component={Contact}/>
        <Route path='/categorie/:categorie_uid/:post_uid/' component={BlogPost}/>
        <Route path='/categorie/:categorie_uid/' component={CategoriePage}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    );
  }
}
export default App;