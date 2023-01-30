import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import {Button} from 'react-bootstrap';
class Game extends Component {
  constructor(props) {
    super(props);
    // State: While props allow you to pass data from a parent component to a child component, the state is used to change the component, well, state from within. Changes to the state also trigger a UI update.
    this.state = {
      oldMoves: [{
        squares: Array(9).fill(null),
      }],
      oIsNext: true,
      nextMove: 0,
    };
  }
  handleClick(i) {
    const oldMoves = this.state.oldMoves.slice(0, this.state.nextMove + 1),
   theCurrentMove = oldMoves[oldMoves.length - 1],
   squares = theCurrentMove.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.oIsNext ? 'O' : 'X';
    this.setState({
      oldMoves: oldMoves.concat([{
        squares: squares,
      }]),
      nextMove: oldMoves.length,
      oIsNext: !this.state.oIsNext,
    });
  }
 nextStep(step) {
    this.setState({
      nextMove: step,
      // The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
      oIsNext: (step % 2) === 0,
    });
  }
  render() {
    // old moves means history, it is going to be displayed on the side in button form 
    const oldMoves = this.state.oldMoves,
    theCurrentMove = oldMoves[this.state.nextMove],
     winner = calculateWinner(theCurrentMove.squares);
     const moves = oldMoves.map((step, move) => {
      const viewHistory = move ?
        'Go to move #' + move :
        'Reset Game';
      return (
        <>
        <li key={move}>
          {/* this stays and allows user to see the old moves */}
          <Button variant="secondary" onClick={() => this.nextStep(move)}>{viewHistory}</Button>
        </li>
        <br/>
        </>
      );
    });
// is displayed on the board game to allow the user to see whose move it is and who wins
    let status;
    if(winner && winner != 'draw'){
      status = 'Winner: ' + winner;
  } else if (winner && winner === 'draw'){
      status = "It's a " + winner;
  } else {
      status = 'Next player: ' + (this.state.oIsNext ? 'O' : 'X');
  }
    return (
      // Displays the board game 
      <>
        <h1 className="text-center">Tic Tac Toe</h1>
      <div className="game">
        <div className="game-board">
          {/* comes from the board.jsx */}
          <Board
            squares={theCurrentMove.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        {/* displays the moves and the status of each move */}
        <div className="game-info">
          <div className = "status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
      </>
    );
  }
}
// calculates the winner
function calculateWinner(squares) {
  // all possible solutions
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
// the for loop, loops over the possible combinations each time
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    // if nothing else works than its a draw
    else if (!squares.includes(null)) {
      return 'draw';
    }
  }
  // if not return this null 
  return null;
}
export default Game;
