import React from 'react';

function Question6() {
  return (
    <div className="question-answer">
      <p>
        Here's a React component that changes the background color of a div when a button is clicked:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function ColorChanger() {
  // State to track the current background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to change the background color
  const changeColor = () => {
    // Array of colors to choose from
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    
    // Get a random color different from the current one
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === backgroundColor);
    
    setBackgroundColor(newColor);
  };

  return (
    <div className="color-changer">
      <h2>Color Changer</h2>
      
      <div 
        style={{
          backgroundColor: backgroundColor,
          width: '200px',
          height: '200px',
          margin: '20px auto',
          border: '2px solid black',
          transition: 'background-color 0.5s ease'
        }}
      >
      </div>
      
      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default ColorChanger;`}
        </code>
      </pre>
      
      <p>
        This component creates a div with an initial white background. When the button is clicked, 
        it randomly selects a new color from the array and updates the state, which causes the div's 
        background color to change.
      </p>
    </div>
  );
}

export default Question6;
