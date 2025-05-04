import React from 'react';

function Question12() {
  return (
    <div className="question-answer">
      <p>
        Here's how to implement conditional rendering in React based on login status:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function LoginStatus() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Function to toggle login status
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div className="login-status">
      <h2>User Authentication Example</h2>
      
      {/* Conditional rendering based on login status */}
      <div className="message-box">
        {isLoggedIn ? (
          <h3 className="welcome-message">Welcome!</h3>
        ) : (
          <h3 className="login-message">Please login</h3>
        )}
      </div>
      
      {/* Button to toggle login status */}
      <button 
        onClick={toggleLogin}
        className={isLoggedIn ? "logout-btn" : "login-btn"}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      
      {/* Additional content that depends on login status */}
      {isLoggedIn && (
        <div className="user-dashboard">
          <p>You now have access to the dashboard.</p>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Messages</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginStatus;`}
        </code>
      </pre>
      
      <p>
        This component demonstrates conditional rendering based on a user's login status:
      </p>
      
      <ul>
        <li>It uses the <code>useState</code> hook to track whether the user is logged in.</li>
        <li>The <code>toggleLogin</code> function switches the login state when the button is clicked.</li>
        <li>It uses a ternary operator (<code>{`{isLoggedIn ? <Welcome /> : <PleaseLogin />}`}</code>) to show different content based on login status.</li>
        <li>It also uses the logical AND operator (<code>{`{isLoggedIn && <Dashboard />}`}</code>) to conditionally render the dashboard only when logged in.</li>
        <li>The button text and class also change based on the login status.</li>
      </ul>
      
      <p>
        This is a common pattern in React applications for handling authentication UI. You can expand this 
        by integrating with a real authentication system and storing the login state in a more persistent 
        way (like using Context API or Redux).
      </p>
    </div>
  );
}

export default Question12;
