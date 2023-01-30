import React, {Component} from 'react';
// Note that renderSquare() returns a component called Square, which has been imported on line 2 of this file, but does not exist in these starting files
import Square from './Square';
class Board extends Component {
  renderSquare(i) {
    // this makes the squares display on the screen and you get it from the import
    return (
      <Square  
        // Props: It allows you to pass data from a parent component to a child component.
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    // This make the board to be displayed on screen
     return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;
