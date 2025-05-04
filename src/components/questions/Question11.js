import React from 'react';

function Question11() {
  return (
    <div className="question-answer">
      <p>
        Here's how to build a navigation bar using React Router with links for Home, About, and Contact components:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Simple page components
function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>Learn more about our company and mission.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with our team.</p>
    </div>
  );
}

// Navigation component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyWebsite</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// Main App component
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;`}
        </code>
      </pre>
      
      <p>
        This example creates a navigation bar with links to Home, About, and Contact pages using React Router. 
        Here's what each part does:
      </p>
      
      <ul>
        <li>The <code>Navbar</code> component contains the navigation links using the <code>Link</code> component from React Router.</li>
        <li>The <code>BrowserRouter</code> component provides the routing context for the application.</li>
        <li>The <code>Routes</code> and <code>Route</code> components define the routes for the application.</li>
        <li>Each route maps a URL path to a specific component to render.</li>
      </ul>
      
      <p>
        To use this code, you need to install React Router:
      </p>
      
      <pre>
        <code>
          npm install react-router-dom
        </code>
      </pre>
      
      <p>
        You might also want to add some CSS to style your navigation bar. For example:
      </p>
      
      <pre>
        <code className="language-css">
{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
}

.nav-links a:hover {
  background-color: #555;
  border-radius: 4px;
}`}
        </code>
      </pre>
    </div>
  );
}

export default Question11;
