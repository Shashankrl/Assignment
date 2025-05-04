import React from 'react';

function Question2() {
  return (
    <div className="question-answer">
      <p>
        React Hooks allow function components to use state and lifecycle features that were previously 
        only available in class components.
      </p>
      
      <h3>Example of useState:</h3>
      <pre>
        <code className="language-jsx">
{`function NameDisplay() {
  // useState hook for managing state
  const [name, setName] = React.useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}`}
        </code>
      </pre>
      
      <h3>Example of useEffect:</h3>
      <pre>
        <code className="language-jsx">
{`function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  // useEffect runs after render and for side effects
  React.useEffect(() => {
    // Set up timer
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    
    // Clean up function (runs when component unmounts)
    return () => clearInterval(interval);
  }, []); // Empty dependency array means it only runs once on mount

  return <p>Seconds: {seconds}</p>;
}`}
        </code>
      </pre>
    </div>
  );
}

export default Question2;
