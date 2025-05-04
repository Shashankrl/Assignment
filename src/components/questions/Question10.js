import React from 'react';

function Question10() {
  return (
    <div className="question-answer">
      <p>
        Here's a React component that shows the current URL path using useLocation from React Router:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React from 'react';
import { useLocation } from 'react-router-dom';

function CurrentPath() {
  // useLocation hook returns the current location object
  const location = useLocation();
  
  return (
    <div className="current-path">
      <h2>Current URL Information</h2>
      
      <div className="path-info">
        <p><strong>Current Path:</strong> {location.pathname}</p>
        <p><strong>Full URL:</strong> {window.location.href}</p>
        
        {location.search && (
          <p><strong>Query Parameters:</strong> {location.search}</p>
        )}
        
        {location.hash && (
          <p><strong>Hash:</strong> {location.hash}</p>
        )}
      </div>
      
      <div className="note">
        <p>
          <em>Note: To use this component, you need to have React Router installed 
          and your component must be inside a Router context.</em>
        </p>
      </div>
    </div>
  );
}

// Example of how to set up Router context in your app
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<CurrentPath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CurrentPath;`}
        </code>
      </pre>
      
      <p>
        This component uses the <code>useLocation</code> hook from React Router to access information about the 
        current URL. The <code>location</code> object provides several properties:
      </p>
      
      <ul>
        <li><code>pathname</code>: The current path (e.g., "/about")</li>
        <li><code>search</code>: The query string (e.g., "?id=123")</li>
        <li><code>hash</code>: The URL hash (e.g., "#section1")</li>
        <li><code>state</code>: Any state passed to this location</li>
      </ul>
      
      <p>
        To use this component, you need to install React Router:
      </p>
      
      <pre>
        <code>
          npm install react-router-dom
        </code>
      </pre>
    </div>
  );
}

export default Question10;
