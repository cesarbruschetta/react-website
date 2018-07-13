import React, { Component, Fragment } from 'react';

import BasePage from '../Base';
import HighlightPost from './../../components/HighlightPost';

import firebase from './../../firebase.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePosts: []
    }
  }
  componentWillMount() {
      let itemsRef = firebase.database().ref("/news");
        
      itemsRef = itemsRef.orderByChild("isoDate").limitToLast(3);
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let values = [];
        for (let item in items) {
          values.push(items[item]);
        }
        this.setState({
          homePosts: values
        });
      });    
  }
  
  render() {
    return (
      <Fragment>
        <BasePage title="Noticias em Destaque">
         {this.state.homePosts.map((item, i) => {
            return (
              <HighlightPost item={item} key={i}/>
            );
         })
         }
        </BasePage>
      </Fragment>
    );
  }
}

export default Home;