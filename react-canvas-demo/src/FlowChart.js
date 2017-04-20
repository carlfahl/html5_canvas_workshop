// FlowChart is a very basic flowchart app built with konva.
import React, {Component} from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import FlowBox from './FlowBox';
import ConnectLine from './ConnectLine';

class FlowChart extends Component {
  constructor(props) {
    super(props);
    this.boxes = [];
    this.state = {
      color: 'green',
      boxes: [
        {x: 200, y: 200, size: 100},
        {x: 600, y: 600, size: 100},
        {x: 300, y: 450, size: 100},
        {x: 700, y: 400, size: 100}
      ],
      connections: [
        {
          source: 0,
          dest: 1,
          hp1: 2,
          hp2: 4
        },
        {
          source: 0,
          dest: 2,
          hp1: 3,
          hp2: 1
        },
        {
          source: 1,
          dest: 3,
          hp1: 1,
          hp2: 3
        }
      ]
    }
  }

  setAttrsFromFlowBox = (x, y, index) => {
    console.log("updating state");
    let newBoxes = this.state.boxes;
    newBoxes[index]['x'] = x;
    newBoxes[index]['y'] = y;
    console.log(newBoxes);
    this.setState({boxes: newBoxes});
  }

  componentDidMount = () => {
    // const attrs1 = this.box1.getAttrs();
    // const attrs2 = this.box2.getAttrs();
    // console.log(attrs1, attrs2);
  }

  handleMouseEnter = () => {
  }

  handleMouseLeave = () => {
  }

  handleDragStart = () => {
  }

  handleDragEnd = () => {
  }

  render = () => {
    const flowBoxes = this.state.boxes.map((box, index) => {
      return (
        <FlowBox
          ref={(box) => this.boxes.push(box)}
          boxNum={index}
          x={box.x}
          y={box.y}
          width={box.size}
          height={box.size}
          updateCoors={this.setAttrsFromFlowBox}
        />
      );
    });

    const flowLines = this.state.connections.map((item) => {
      return (
        <ConnectLine
          x1={this.state.boxes[item.source].x}
          y1={this.state.boxes[item.source].y}
          x2={this.state.boxes[item.dest].x}
          y2={this.state.boxes[item.dest].y}
          s1={this.state.boxes[item.source].size}
          s2={this.state.boxes[item.dest].size}
          hp1={item.hp1}
          hp2={item.hp2}
        />
      );
    });
    return (
      <div>
        <Stage width={1000} height={1000}>
          <Layer>
            {flowBoxes}
            {flowLines}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default FlowChart;
