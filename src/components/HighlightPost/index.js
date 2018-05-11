import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HighlightPost extends Component {
  render() {
    return (
      <div className="card mb-4">
        <img className="card-img-top" src="http://placehold.it/750x300" alt=""/>
        <div className="card-body">
          <h2 className="card-title">{this.props.item.title}</h2>
          <p className="card-text">{this.props.item.contentSnippet}</p>
            <Link to={`/categorie/${this.props.item.categorie}/${this.props.item.uid}/`} className="btn btn-primary">Leia Mais &rarr;</Link>
          </div>
          <div className="card-footer text-muted">
              Publicada em {this.props.item.isoDate} por
              <Link to={`/categorie/${this.props.item.categorie}/`}> {this.props.item.categorieTitle}</Link>
          </div>
      </div>
    );
  }
}
export default HighlightPost
