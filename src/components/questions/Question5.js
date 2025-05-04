import React from 'react';

function Question5() {
  return (
    <div className="question-answer">
      <p>
        Here's a simple voting application with three candidates:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function VotingApp() {
  // State to track if the user has voted
  const [hasVoted, setHasVoted] = useState(false);
  
  // State to track votes for each candidate
  const [votes, setVotes] = useState({
    candidate1: 0,
    candidate2: 0,
    candidate3: 0
  });

  // Function to handle voting
  const handleVote = (candidate) => {
    if (!hasVoted) {
      setVotes({
        ...votes,
        [candidate]: votes[candidate] + 1
      });
      setHasVoted(true);
    }
  };

  return (
    <div className="voting-app">
      <h1>Voting Application</h1>
      
      <div className="candidates">
        <div className="candidate">
          <h2>Candidate 1</h2>
          <p>Votes: {votes.candidate1}</p>
          <button 
            onClick={() => handleVote('candidate1')}
            disabled={hasVoted}
          >
            Vote
          </button>
        </div>
        
        <div className="candidate">
          <h2>Candidate 2</h2>
          <p>Votes: {votes.candidate2}</p>
          <button 
            onClick={() => handleVote('candidate2')}
            disabled={hasVoted}
          >
            Vote
          </button>
        </div>
        
        <div className="candidate">
          <h2>Candidate 3</h2>
          <p>Votes: {votes.candidate3}</p>
          <button 
            onClick={() => handleVote('candidate3')}
            disabled={hasVoted}
          >
            Vote
          </button>
        </div>
      </div>
      
      {hasVoted && (
        <p className="message">Thank you for voting!</p>
      )}
    </div>
  );
}

export default VotingApp;`}
        </code>
      </pre>
      
      <p>
        This application allows a user to vote for one of three candidates. Once they've voted, 
        the buttons are disabled and a thank you message appears.
      </p>
    </div>
  );
}

export default Question5;
