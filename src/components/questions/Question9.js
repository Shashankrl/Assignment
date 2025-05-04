import React from 'react';

function Question9() {
  return (
    <div className="question-answer">
      <p>
        Here's how to use useEffect to display a message "Component Mounted" only once when the component loads:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState, useEffect } from 'react';

function MountMessage() {
  // State to store the mount message
  const [message, setMessage] = useState('');
  
  // useEffect with empty dependency array runs only once after initial render
  useEffect(() => {
    setMessage('Component Mounted');
    
    // You could also log to console
    console.log('Component Mounted');
    
    // Optional cleanup function (runs when component unmounts)
    return () => {
      console.log('Component Unmounted');
    };
  }, []); // Empty dependency array means this effect runs once on mount
  
  return (
    <div className="mount-message">
      <h2>Mount Notification Example</h2>
      {message && <div className="notification">{message}</div>}
      <p>This component displays a mount message when it first loads.</p>
    </div>
  );
}

export default MountMessage;`}
        </code>
      </pre>
      
      <p>
        In this component, the useEffect hook is used with an empty dependency array <code>[]</code>, which 
        means it will only run once after the component's initial render. Inside the effect, we set the message 
        state to "Component Mounted". The message is then displayed in the component's JSX.
      </p>
      
      <p>
        The cleanup function (the function returned from useEffect) will run when the component unmounts, 
        which can be useful for cleanup operations like removing event listeners or canceling subscriptions.
      </p>
    </div>
  );
}

export default Question9;
