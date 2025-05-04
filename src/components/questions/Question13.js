import React from 'react';

function Question13() {
  return (
    <div className="question-answer">
      <p>
        Here's how to create a counter component using useState and useEffect that increases automatically every second until it reaches 10:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState, useEffect } from 'react';

function AutoCounter() {
  // State to track the counter value
  const [count, setCount] = useState(0);
  
  // State to track if the counter is active
  const [isActive, setIsActive] = useState(false);
  
  // useEffect to handle the automatic counting
  useEffect(() => {
    let interval = null;
    
    // Only set up the interval if the counter is active and less than 10
    if (isActive && count < 10) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else if (count >= 10) {
      // When we reach 10, stop the counter
      setIsActive(false);
    }
    
    // Clean up the interval on component unmount or when dependencies change
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, count]); // Re-run effect when isActive or count changes
  
  // Function to start the counter
  const startCounter = () => {
    // Reset to 0 and activate
    setCount(0);
    setIsActive(true);
  };
  
  // Function to pause/resume the counter
  const toggleCounter = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div className="auto-counter">
      <h2>Automatic Counter</h2>
      
      <div className="counter-display">
        <p className="count">{count}</p>
        <p className="status">
          {count >= 10 ? 'Counter reached maximum!' : 
           isActive ? 'Counting...' : 'Counter paused'}
        </p>
      </div>
      
      <div className="counter-controls">
        {count < 10 && (
          <button onClick={toggleCounter}>
            {isActive ? 'Pause' : 'Resume'}
          </button>
        )}
        
        <button onClick={startCounter}>
          Restart Counter
        </button>
      </div>
    </div>
  );
}

export default AutoCounter;`}
        </code>
      </pre>
      
      <p>
        This component creates an automatic counter that increments every second until it reaches 10:
      </p>
      
      <ul>
        <li>It uses <code>useState</code> to track the current count and whether the counter is active.</li>
        <li>The <code>useEffect</code> hook sets up an interval that increments the counter every second, but only if the counter is active and less than 10.</li>
        <li>When the count reaches 10, it automatically stops the counter.</li>
        <li>The component includes buttons to pause/resume and restart the counter.</li>
        <li>The cleanup function in <code>useEffect</code> ensures that the interval is cleared when the component unmounts or when the dependencies change, preventing memory leaks.</li>
      </ul>
      
      <p>
        This is a good example of how <code>useState</code> and <code>useEffect</code> can work together to create interactive components with time-based functionality.
      </p>
    </div>
  );
}

export default Question13;
