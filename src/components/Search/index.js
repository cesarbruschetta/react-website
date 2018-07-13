import React, { Component } from 'react'

class Search extends Component {
  render(){
    // Search Widget
    return(
      <div className="card my-4">
        <h5 className="card-header">Buscar</h5>
        <div className="card-body">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Palavra chave..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">OK!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;