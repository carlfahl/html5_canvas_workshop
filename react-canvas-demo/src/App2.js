//  App2 draws to canvas through the konva library.
//
import React, {Component} from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import FlowBox from './FlowBox';
import ConnectLine from './ConnectLine';

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 30,
      y: 30,
      color: 'green',
      size: 50,
    }
  }

  handleMouseEnter = () => {
    this.setState({color: 'red'});
  }

  handleMouseLeave = () => {
    this.setState({color: 'green'});
  }

  handleDragStart = () => {
    this.setState({size: 100});
  }

  handleDragEnd = () => {
    const attrs = this.rect.getAttrs();
    this.setState({size: 100, x: attrs['x'], y: attrs['y']});
    this.setState({size: 50});
  }

  render = () => {
    return (
      <div>
        <Stage width={1000} height={1000}>
          <Layer>
            <Group draggable>
              <Rect x={300} y={200} width={60} height={60} fill={'red'} />
              <Rect x={300} y={300} width={60} height={60} fill={'black'} />
              <Rect x={300} y={400} width={60} height={60} fill={'blue'} />
            </Group>
            <Rect x={this.state.x} y={this.state.y} width={this.state.size} height={this.state.size}
              ref={(rect) => this.rect=rect}
              fill={this.state.color}
              onDragStart={() => this.handleDragStart()}
              onDragEnd={() => this.handleDragEnd()}
              onMouseEnter={() => this.handleMouseEnter()}
              onMouseLeave={() => this.handleMouseLeave()}
              draggable
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App2;
