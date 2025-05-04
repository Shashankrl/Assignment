import React from 'react';

function Question23() {
  return (
    <div className="question-answer">
      <p>
        Here's how to create a React app that allows users to like or dislike a post and displays total likes and dislikes:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function PostRating() {
  // State for likes and dislikes
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  
  // State to track user's vote (null, 'like', or 'dislike')
  const [userVote, setUserVote] = useState(null);
  
  // Handle like button click
  const handleLike = () => {
    if (userVote === 'like') {
      // User is un-liking
      setLikes(likes - 1);
      setUserVote(null);
    } else {
      // User is liking
      if (userVote === 'dislike') {
        // If user previously disliked, remove the dislike
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setUserVote('like');
    }
  };
  
  // Handle dislike button click
  const handleDislike = () => {
    if (userVote === 'dislike') {
      // User is un-disliking
      setDislikes(dislikes - 1);
      setUserVote(null);
    } else {
      // User is disliking
      if (userVote === 'like') {
        // If user previously liked, remove the like
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setUserVote('dislike');
    }
  };
  
  return (
    <div className="post-container">
      <div className="post-content">
        <h2>Sample Post</h2>
        <p>
          This is a sample post that demonstrates how to implement a like/dislike
          feature in React. You can click the buttons below to like or dislike
          this post.
        </p>
      </div>
      
      <div className="rating-container">
        <div className="rating-buttons">
          <button 
            onClick={handleLike}
            className={\`like-button \${userVote === 'like' ? 'active' : ''}\`}
          >
            <span role="img" aria-label="thumbs up">👍</span> Like
          </button>
          
          <button 
            onClick={handleDislike}
            className={\`dislike-button \${userVote === 'dislike' ? 'active' : ''}\`}
          >
            <span role="img" aria-label="thumbs down">👎</span> Dislike
          </button>
        </div>
        
        <div className="rating-stats">
          <div className="likes-count">
            <span role="img" aria-label="thumbs up">👍</span> {likes} likes
          </div>
          
          <div className="dislikes-count">
            <span role="img" aria-label="thumbs down">👎</span> {dislikes} dislikes
          </div>
        </div>
        
        {userVote && (
          <p className="user-vote-message">
            You {userVote === 'like' ? 'liked' : 'disliked'} this post. 
            Click the same button again to remove your vote.
          </p>
        )}
      </div>
    </div>
  );
}

export default PostRating;`}
        </code>
      </pre>
      
      <p>
        This component creates a post with like and dislike functionality:
      </p>
      
      <ul>
        <li>It uses <code>useState</code> to track likes, dislikes, and the user's current vote.</li>
        <li>Users can like or dislike the post, and their vote is visually indicated.</li>
        <li>Users can change their vote or remove it by clicking the same button again.</li>
        <li>The total number of likes and dislikes is displayed.</li>
        <li>A message indicates the user's current vote status.</li>
      </ul>
      
      <p>
        The component implements the following logic:
      </p>
      
      <ul>
        <li>If a user clicks "Like" when they haven't voted, the like count increases.</li>
        <li>If a user clicks "Like" when they've already liked, their like is removed.</li>
        <li>If a user clicks "Like" when they've previously disliked, their dislike is removed and a like is added.</li>
        <li>Similar logic applies to the dislike functionality.</li>
      </ul>
      
      <p>
        In a real application, you would typically:
      </p>
      
      <ul>
        <li>Store this data in a database</li>
        <li>Use cookies or user authentication to prevent multiple votes</li>
        <li>Add animations for a more interactive experience</li>
        <li>Include additional metrics like a percentage of positive votes</li>
      </ul>
    </div>
  );
}

export default Question23;
