// App draws in a canvas element with native canvas functions
//
import React, {Component} from 'react';

class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount = () => {
    this.updateCanvas();
  }

  updateCanvas = () => {
    const ctx = this.canvasElement.getContext('2d');
    ctx.fillStyle = 'rgba(200,0,0,0.7)';
    ctx.fillRect(20,20, 50, 50);
  }

  // Use a ref react prop to access a DOM element directly.
  render = () => {
    return (
      <canvas ref={(canvas) => this.canvasElement = canvas} height={300} width={300} >
      </canvas>
    );
  }
}

export default App;
