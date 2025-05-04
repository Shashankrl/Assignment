import React from 'react';

function Question4() {
  return (
    <div className="question-answer">
      <p>
        Here's a simple Student component that receives name and grade as props and displays them:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React from 'react';

function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Information</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Grade:</strong> {props.grade}</p>
    </div>
  );
}

// Usage example
function App() {
  return (
    <div>
      <Student name="John Doe" grade="A" />
      <Student name="Jane Smith" grade="B+" />
    </div>
  );
}

export default Student;`}
        </code>
      </pre>
      
      <p>You can also use destructuring to make the code cleaner:</p>
      
      <pre>
        <code className="language-jsx">
{`function Student({ name, grade }) {
  return (
    <div className="student-card">
      <h2>Student Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  );
}`}
        </code>
      </pre>
    </div>
  );
}

export default Question4;
