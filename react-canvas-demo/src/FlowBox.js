import React, {Component} from 'react';
import {Rect, Circle, Group} from 'react-konva';

class FlowBox extends Component {
  componentDidMount = () => {
    const attrs = this.box.getAttrs();
    console.log(attrs);
  }

  handleDragEnd = () => {
    const battrs = this.box.getAttrs();
    const gattrs = this.group.getAttrs();
    console.log(battrs);
    console.log(gattrs);
    this.props.updateCoors(gattrs['x'], gattrs['y'], this.props.boxNum);
  }

  handleClick = (num) => {
    console.log("Clicked circle ", num);
  }

  render = () => {
    return (
      <Group draggable
        x={this.props.x}
        y={this.props.y}
        ref={(group) => this.group=group}
        onDragEnd={() => {this.handleDragEnd()}}>
        <Rect x={0}
          y={0}
          ref={(box) => this.box=box}
          width={this.props.width}
          height={this.props.height}
          fill={'green'}/>
        <Circle x={0}
        y={this.props.height/2}
        radius={5} fill={'red'}
        onClick={() => this.handleClick(4)} />
        <Circle x={this.props.width/2}
        y={0}
        radius={5} fill={'red'}
        onClick={() => this.handleClick(1)} />
        <Circle x={this.props.width}
        y={this.props.height/2}
        radius={5} fill={'red'}
        onClick={() => this.handleClick(2)} />
        <Circle x={this.props.width/2}
        y={this.props.height}
        radius={5} fill={'red'}
        onClick={() => this.handleClick(3)} />
      </Group>
    )
  }
}

export default FlowBox;
