import React from 'react';

function Question17() {
  return (
    <div className="question-answer">
      <p>
        Here's how to create a React component that fetches and displays a random joke using an API:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState, useEffect } from 'react';

function RandomJoke() {
  // State to store the joke
  const [joke, setJoke] = useState({
    setup: '',
    punchline: ''
  });
  
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);
  
  // State to track errors
  const [error, setError] = useState(null);
  
  // State to control showing the punchline
  const [showPunchline, setShowPunchline] = useState(false);
  
  // Function to fetch a random joke
  const fetchRandomJoke = async () => {
    setIsLoading(true);
    setError(null);
    setShowPunchline(false);
    
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      
      if (!response.ok) {
        throw new Error(\`HTTP error! Status: \${response.status}\`);
      }
      
      const data = await response.json();
      setJoke({
        setup: data.setup,
        punchline: data.punchline
      });
    } catch (err) {
      setError('Failed to fetch joke. Please try again later.');
      console.error('Error fetching joke:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchRandomJoke();
  }, []);
  
  return (
    <div className="joke-container">
      <h2>Random Joke Generator</h2>
      
      {isLoading ? (
        <p className="loading">Loading joke...</p>
      ) : error ? (
        <div className="error">
          <p>{error}</p>
          <button onClick={fetchRandomJoke}>Try Again</button>
        </div>
      ) : (
        <div className="joke-content">
          <p className="joke-setup">{joke.setup}</p>
          
          {!showPunchline ? (
            <button 
              onClick={() => setShowPunchline(true)}
              className="show-punchline-btn"
            >
              Show Punchline
            </button>
          ) : (
            <p className="joke-punchline">{joke.punchline}</p>
          )}
        </div>
      )}
      
      <button 
        onClick={fetchRandomJoke}
        className="new-joke-btn"
        disabled={isLoading}
      >
        Get New Joke
      </button>
    </div>
  );
}

export default RandomJoke;`}
        </code>
      </pre>
      
      <p>
        This component fetches and displays random jokes from the Official Joke API:
      </p>
      
      <ul>
        <li>It uses <code>useState</code> to manage the joke data, loading state, error state, and whether to show the punchline.</li>
        <li>It uses <code>useEffect</code> to fetch a joke when the component first mounts.</li>
        <li>The <code>fetchRandomJoke</code> function makes an API request and updates the state accordingly.</li>
        <li>It handles loading states and potential errors gracefully.</li>
        <li>It includes a "Show Punchline" button to reveal the punchline after reading the setup.</li>
        <li>It provides a "Get New Joke" button to fetch another random joke.</li>
      </ul>
      
      <p>
        This component demonstrates several important React concepts:
      </p>
      
      <ul>
        <li>Using <code>useEffect</code> for data fetching</li>
        <li>Managing multiple state variables</li>
        <li>Handling asynchronous operations</li>
        <li>Error handling</li>
        <li>Conditional rendering based on state</li>
      </ul>
    </div>
  );
}

export default Question17;
