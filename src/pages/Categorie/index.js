import React, { Component, Fragment } from 'react';

import BasePage from '../Base';
import HighlightPost from './../../components/HighlightPost';
import Pagination from './../../components/Pagination';

import firebase from './../../firebase.js';

class CategoriePage extends Component {
  
  build_categorie(){
    let categorie_uid = this.props.match.params.categorie_uid;
    let categorieRef = firebase.database().ref("/categorie/"+categorie_uid);
    categorieRef.on('value', (snapshot) => {
      this.setState({
        categorie: snapshot.val()
      });
    });
  
    let itemsRef = categorieRef.orderByChild("isoDate");
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let values = [];
      for (let item in items) {
        values.push(items[item]);
      }
      this.setState({
        posts :values
      });
    });    
  }
  
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      categorie_uid: props.match.params.categorie_uid,
      categorie: {},
      pageOfItems: []
    };
    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentWillReceiveProps(props){
    this.build_categorie();
  }
  componentWillMount() {
    this.build_categorie();
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <Fragment>
        <BasePage perPage={3} title={`Noticias do ${this.state.categorie.title}`}>
        
          {this.state.pageOfItems.map((item, i) => {
            return (
              <HighlightPost item={item} key={i}/>
            );
          })}
          <Pagination items={this.state.posts} onChangePage={this.onChangePage} />

        </BasePage>
      </Fragment>
    );
  }
}

export default CategoriePage;