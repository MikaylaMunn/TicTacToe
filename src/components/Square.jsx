import React from 'react';
import { Button } from 'react-bootstrap'

// this is a function passing in the props
function Square(props) {
    return (
        // Props: It allows you to pass data from a parent component to a child component.
      <Button variant="primary" className="square" onClick={props.onClick}>
        {props.value}
      </Button>
    );
  }

export default Square