import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CategoriePage from './pages/Categorie';
import BlogPost from './pages/BlogPost';

import "./blog-home.css";

class NotFound extends Component {
    render() {
        return (<div>Page Not Found</div>);
    }
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/categorie/:string/:string' component={BlogPost}/>
        <Route path='/categorie/:string' component={CategoriePage}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    );
  }
}

export default App;
