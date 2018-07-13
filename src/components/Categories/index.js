import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase.js'; 
import './style.css';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }
  componentWillMount() {
      const itemsRef = firebase.database().ref("/categorie");
        itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let values = [];
        for (let item in items) {
          values.push(items[item]);
        }
        this.setState({
          categories: values
        });
      });    
  }
  render(){
    // Categories Widget
    return(
      <div className="card my-4">
        <h5 className="card-header">Categorias</h5>
        <div className="card-body">
          <ul className="list-unstyled mb-0 list-categories">
            {this.state.categories.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={`/categorie/${item.uid}`}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>     
      );
  }
}

export default Categories;