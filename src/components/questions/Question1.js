import React from 'react';

function Question1() {
  return (
    <div className="question-answer">
      <p>
        Props (short for properties) are used to pass data from a parent component to a child component. 
        They are read-only and cannot be modified by the child component. State is used to manage data 
        within a component that can change over time.
      </p>
      
      <h3>Example of Props:</h3>
      <pre>
        <code className="language-jsx">
{`// Parent component
function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}

// Child component
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}`}
        </code>
      </pre>
      
      <h3>Example of State:</h3>
      <pre>
        <code className="language-jsx">
{`function Counter() {
  // useState hook to create state
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
        </code>
      </pre>
    </div>
  );
}

export default Question1;
