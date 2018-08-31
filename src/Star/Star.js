import React, { Component } from 'react';

import createStar from './func';

import './Star.css';

export default class Star extends Component {
  componentDidMount() {
    setTimeout(() => {
      const location = {
        pathname: '/explosion',
        state: { fromDashboard: true }
      };
      const prevCanvas = document.querySelector('canvas');
      this.props.history.push(location);
      setTimeout(() => {
        prevCanvas.remove();
      }, 3000);
    }, 10000);
    createStar();
  }
  render() {
    return (
      <div id="star-system">
        <canvas className="canvas" />
      </div>
    );
  }
}
