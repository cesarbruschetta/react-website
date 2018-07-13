import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };

class HighlightPost extends Component {
  render() {
    var cts = this.props.item.isoDate || this.props.item.pubDate,
        cdate = (new Date(cts));
        // console.log(cts)
    return (
      <div className="card mb-4">
        <img className="card-img-top" src={`https://picsum.photos/750/300?_i=${this.props.item.uid}`} alt=""/>
        <div className="card-body">
          <h2 className="card-title">{this.props.item.title}</h2>
          <p className="card-text">{this.props.item.contentSnippet}</p>
            <Link to={`/categorie/${this.props.item.categorieUID}/${this.props.item.uid}/`} 
                  className="btn btn-primary">Leia Mais &rarr;</Link>
        </div>
        <div className="card-footer text-muted">
            Publicada em { cdate.toLocaleDateString('pt-BR', DATE_OPTIONS) } às {cdate.toLocaleTimeString("pt-BR") } por 
            <Link to={`/categorie/${this.props.item.categorieUID}/`}> {this.props.item.categorieTitle}</Link>
        </div>
      </div>
    );
  }
}
export default HighlightPost
