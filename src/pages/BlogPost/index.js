import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../Base';

import firebase from './../../firebase.js';
import './style.css';

const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };

class BlogPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        categorie_uid: props.match.params.categorie_uid,
        post_uid: props.match.params.post_uid,
        post: {}
      };
    }
    componentWillMount() {
        let postRef = firebase.database().ref(
          "/categorie/"+this.state.categorie_uid+"/"+this.state.post_uid);
        postRef.on('value', (snapshot) => {
          this.setState({
            post: snapshot.val()
          });
        });
    }
    
    render() {
        const post = this.state.post;
        var cts = post.isoDate || post.pubDate,
            cdate = (new Date(cts));

        return (
          <Fragment>
            <BasePage title="Noticia">
              <div>
                {/* Title */}
                <h1 className="mt-4">{post.title}</h1>
                
                {/* Author */}
                <p className="lead">por <Link to={`/categorie/${post.categorieUID}/`}>{post.categorieTitle}</Link></p>
      
                <hr />
                {/* Date/Time */}
                <p>Postado em { cdate.toLocaleDateString('pt-BR', DATE_OPTIONS) } às {cdate.toLocaleTimeString("pt-BR") }</p>
      
                <hr />
                {/* Preview Image */}
                <img className="img-fluid rounded" src={`https://picsum.photos/750/300?_i=${post.uid}`} alt="" />
      
                <hr />
                {/* Post Content */}
                <div className="content">
                  <p className="lead" dangerouslySetInnerHTML={{__html: post.content}} ></p>
                </div>
              </div>
              <hr />
            </BasePage>
          </Fragment>
        );
    }
}

export default BlogPost;