import React from 'react';

function Question15() {
  return (
    <div className="question-answer">
      <p>
        Here's how to design a simple React application with a button to toggle the visibility of a paragraph using useState:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function ToggleVisibility() {
  // State to track visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);
  
  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div className="toggle-container">
      <h2>Toggle Visibility Example</h2>
      
      <button 
        onClick={toggleVisibility}
        className="toggle-button"
      >
        {isVisible ? 'Hide Paragraph' : 'Show Paragraph'}
      </button>
      
      {isVisible && (
        <div className="content-box">
          <p>
            This is a paragraph that can be shown or hidden by clicking the button above.
            It demonstrates how to use the useState hook to manage the visibility state of
            an element in React.
          </p>
          <p>
            You can toggle this content as many times as you want by clicking the button.
          </p>
        </div>
      )}
    </div>
  );
}

export default ToggleVisibility;`}
        </code>
      </pre>
      
      <p>
        This component demonstrates how to toggle the visibility of a paragraph:
      </p>
      
      <ul>
        <li>It uses the <code>useState</code> hook to create a boolean state variable <code>isVisible</code> that tracks whether the paragraph should be displayed.</li>
        <li>The <code>toggleVisibility</code> function flips the value of <code>isVisible</code> when the button is clicked.</li>
        <li>Conditional rendering with the logical AND operator (<code>{`{isVisible && <div>...</div>}`}</code>) shows the paragraph only when <code>isVisible</code> is true.</li>
        <li>The button text also changes based on the current state, providing clear feedback to the user.</li>
      </ul>
      
      <p>
        You could enhance this component with animations for smoother transitions or extend it to toggle multiple elements independently.
      </p>
    </div>
  );
}

export default Question15;
