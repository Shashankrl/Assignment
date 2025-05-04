import React from 'react';

function Question14() {
  return (
    <div className="question-answer">
      <p>
        Here's a React component that accepts a list of students as props and displays only those who scored more than 50 marks:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React from 'react';

function HighScoreStudents({ students }) {
  // Filter students who scored more than 50 marks
  const highScorers = students.filter(student => student.marks > 50);
  
  return (
    <div className="high-score-students">
      <h2>High Scoring Students</h2>
      
      {highScorers.length > 0 ? (
        <div className="students-list">
          <p>Showing {highScorers.length} students with scores above 50:</p>
          
          <ul>
            {highScorers.map(student => (
              <li key={student.id} className="student-item">
                <div className="student-info">
                  <strong>{student.name}</strong>
                  <span className="score">Score: {student.marks}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No students scored above 50 marks.</p>
      )}
    </div>
  );
}

// Example usage
function App() {
  // Sample student data
  const studentsList = [
    { id: 1, name: 'John Doe', marks: 78 },
    { id: 2, name: 'Jane Smith', marks: 92 },
    { id: 3, name: 'Bob Johnson', marks: 45 },
    { id: 4, name: 'Alice Brown', marks: 68 },
    { id: 5, name: 'Charlie Wilson', marks: 35 }
  ];
  
  return (
    <div className="app">
      <HighScoreStudents students={studentsList} />
    </div>
  );
}

export default HighScoreStudents;`}
        </code>
      </pre>
      
      <p>
        This component filters and displays students who scored more than 50 marks:
      </p>
      
      <ul>
        <li>It accepts a <code>students</code> prop, which is an array of student objects.</li>
        <li>It uses the <code>filter()</code> method to create a new array containing only students with marks > 50.</li>
        <li>It renders different content based on whether any students meet the criteria.</li>
        <li>For each high-scoring student, it displays their name and score.</li>
        <li>The <code>key</code> prop is used in the list to help React identify which items have changed.</li>
      </ul>
      
      <p>
        You can enhance this component by adding more details about each student, sorting the list by score, 
        or adding the ability to change the minimum score threshold.
      </p>
    </div>
  );
}

export default Question14;
