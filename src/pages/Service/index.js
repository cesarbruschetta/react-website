import React, { Component, Fragment } from 'react';

import BasePage from '../Base';
let loremIpsum = require('lorem-ipsum');

class Service extends Component {
  constructor(props) {
    super(props);
    var N = 9; 

    this.state = {
      items: Array.apply(null, {length: N}).map(Number.call, Number)
    }
  }
  render() {
    return (
      <Fragment>
        <BasePage title="Serviços">
        
          <div className="row">
            
            {this.state.items.map((item, i) => {
              var text = loremIpsum({
                      count: 1               // Number of words, sentences, or paragraphs to generate.
                    , units: 'sentences'     // Generate words, sentences, or paragraphs.
                    , sentenceLowerBound: 10  // Minimum words per sentence.
                    , sentenceUpperBound: 15 // Maximum words per sentence.
              });
            
              return (
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img className="card-img-top" src={`https://picsum.photos/255/225/?_i=${item}`} alt="" />
                      <div className="card-body">
                        <p className="card-text">{text}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            }

          </div>

        </BasePage>
      </Fragment>
    );
  }
}

export default Service;