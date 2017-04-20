import React, {Component} from 'react';
import {Line} from 'react-konva';

class ConnectLine extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    console.log(this.line.points());
  }

  render = () => {
    let x1, x2, y1, y2, points;
    switch (this.props.hp1) {
      case 1:
        x1 = this.props.x1 + this.props.s1/2;
        y1 = this.props.y1;
        break;
      case 2:
        x1 = this.props.x1 + this.props.s1;
        y1 = this.props.y1 + this.props.s1/2;
        break;
      case 3:
        x1 = this.props.x1 + this.props.s1/2;
        y1 = this.props.y1 + this.props.s1;
        break;
      case 4:
        x1 = this.props.x1;
        y1 = this.props.y1 + this.props.s1/2;
        break;
      default:
        x1 = this.props.x1;
        y1 = this.props.y1;
        break;
    }
    switch (this.props.hp2) {
      case 1:
        x2 = this.props.x2 + this.props.s2/2;
        y2 = this.props.y2;
        break;
      case 2:
        x2 = this.props.x2 + this.props.s2;
        y2 = this.props.y2 + this.props.s2/2;
        break;
      case 3:
        x2 = this.props.x2 + this.props.s2/2;
        y2 = this.props.y2 + this.props.s2;
        break;
      case 4:
        x2 = this.props.x2;
        y2 = this.props.y2 + this.props.s2/2;
        break;
      default:
        x2 = this.props.x2;
        y2 = this.props.y2;
        break;
    }
    if ((this.props.hp1 === 2 && this.props.hp2 === 4) || (this.props.hp1 === 4 && this.props.hp2 === 2)) {
      points = [x1, y1, x1+(x2-x1)/2, y1, x1+(x2-x1)/2, y2, x2, y2];
    } else if ((this.props.hp1 === 3 && this.props.hp2 === 1) || (this.props.hp1 === 1 && this.props.hp2 === 3)) {
      points = [x1, y1, x1, y1+(y2-y1)/2, x2, y1+(y2-y1)/2, x2, y2];
    }
    return (
      <Line
        ref={(line) =>this.line=line}
        stroke={'red'}
        strokeWidth={5}
        lineCap={'round'}
        lineJoin={'round'}
        points={points}/>
    )
  }
}

export default ConnectLine;
