import React from 'react';

function Question3() {
  return (
    <div className="question-answer">
      <p>
        Conditional rendering in React allows you to render different UI elements based on certain conditions.
      </p>
      
      <h3>Different ways to implement conditional rendering:</h3>
      
      <h4>1. Using if/else statements:</h4>
      <pre>
        <code className="language-jsx">
{`function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}`}
        </code>
      </pre>
      
      <h4>2. Using ternary operator:</h4>
      <pre>
        <code className="language-jsx">
{`function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}`}
        </code>
      </pre>
      
      <h4>3. Using logical && operator:</h4>
      <pre>
        <code className="language-jsx">
{`function Notification({ hasMessages }) {
  return (
    <div>
      {hasMessages && <p>You have unread messages!</p>}
    </div>
  );
}`}
        </code>
      </pre>
      
      <h4>4. Using switch statements (for multiple conditions):</h4>
      <pre>
        <code className="language-jsx">
{`function StatusMessage({ status }) {
  switch(status) {
    case 'loading': return <p>Loading...</p>;
    case 'success': return <p>Data loaded successfully!</p>;
    case 'error': return <p>Error loading data</p>;
    default: return null;
  }
}`}
        </code>
      </pre>
    </div>
  );
}

export default Question3;
