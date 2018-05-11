import React, { Component } from 'react';

class Side extends Component {
  render() {
    return (
      // Widget
      <div className="card my-4">
        <h5 className="card-header">Side Widget</h5>
        <div className="card-body">
          You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
        </div>
      </div>
    );
  }
}

export default Side;