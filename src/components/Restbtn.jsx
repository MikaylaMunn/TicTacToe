import React from 'react';
import { Button } from 'react-bootstrap'

// Notice how we passed in the onClick function
// then the rest of the styles which can be nearly
// any HTML/CSS attributes. This could also be hard-coded
// with className="a class name here" or style={{ property: value }}
// Take a look in the web inspector to see how these are rendered
function Reset({ onClick }) {
    return (
        <div>
            <Button variant="secondary" size="lg" onClick={onClick}>
                Reset
    </Button>
        </div>
    );
}

export default Reset;
