import React, { useState, useEffect } from 'react';
import './App.css';
import { questionsList } from './components/QuestionsList';

// Import all question components statically
import Question1 from './components/questions/Question1';
import Question2 from './components/questions/Question2';
import Question3 from './components/questions/Question3';
import Question4 from './components/questions/Question4';
import Question5 from './components/questions/Question5';
import Question6 from './components/questions/Question6';
import Question7 from './components/questions/Question7';
import Question8 from './components/questions/Question8';
import Question9 from './components/questions/Question9';
import Question10 from './components/questions/Question10';
import Question11 from './components/questions/Question11';
import Question12 from './components/questions/Question12';
import Question13 from './components/questions/Question13';
import Question14 from './components/questions/Question14';
import Question15 from './components/questions/Question15';
import Question16 from './components/questions/Question16';
import Question17 from './components/questions/Question17';
import Question18 from './components/questions/Question18';
import Question19 from './components/questions/Question19';
import Question20 from './components/questions/Question20';
import Question21 from './components/questions/Question21';
import Question22 from './components/questions/Question22';
import Question23 from './components/questions/Question23';

// Map components to questions
const questionComponents = {
  1: Question1,
  2: Question2,
  3: Question3,
  4: Question4,
  5: Question5,
  6: Question6,
  7: Question7,
  8: Question8,
  9: Question9,
  10: Question10,
  11: Question11,
  12: Question12,
  13: Question13,
  14: Question14,
  15: Question15,
  16: Question16,
  17: Question17,
  18: Question18,
  19: Question19,
  20: Question20,
  21: Question21,
  22: Question22,
  23: Question23
};

const QuestionComponents = questionsList.map(item => ({
  ...item,
  component: questionComponents[item.id]
}));

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Handle browser history for back button functionality
  useEffect(() => {
    // Check URL params on initial load (only once)
    const params = new URLSearchParams(window.location.search);
    const questionParam = params.get('q');
    if (questionParam) {
      const questionId = parseInt(questionParam, 10);
      if (!isNaN(questionId) && questionId > 0 && questionId <= questionsList.length) {
        setActiveQuestion(questionId);
      }
    }

    // Handle the popstate event (when back button is clicked)
    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const currentQuestionParam = currentParams.get('q');
      
      if (currentQuestionParam) {
        const questionId = parseInt(currentQuestionParam, 10);
        if (!isNaN(questionId) && questionId > 0 && questionId <= questionsList.length) {
          setActiveQuestion(questionId);
        }
      } else {
        setActiveQuestion(null);
      }
    };

    // Add event listener for back button
    window.addEventListener('popstate', handlePopState);

    // Clean up event listener
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []); 

  // Update URL when activeQuestion changes
  useEffect(() => {
    // Get current URL state
    const currentUrl = new URL(window.location.href);
    const currentQuestionParam = currentUrl.searchParams.get('q');
    const currentQuestionId = currentQuestionParam ? parseInt(currentQuestionParam, 10) : null;
    
    // Only update history if the state actually changed
    if (activeQuestion !== currentQuestionId) {
      if (activeQuestion) {
        // When a question is selected, replace the current state
        window.history.pushState(null, '', `?q=${activeQuestion}`);
      } else {
        // When going back to the questions list, replace the current state
        window.history.pushState(null, '', `/`);
      }
    }
  }, [activeQuestion]);

  const toggleQuestion = (id) => {
    setActiveQuestion(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>FSD ASSIGNMENT II</h1>
      </header>
      <div className="container">
        {activeQuestion ? (
          <div className="answer-container">
            <div className="answer-box">
              <h2 className="question-title">
                <span className="question-number">{activeQuestion}</span>
                {QuestionComponents.find(q => q.id === activeQuestion)?.question}
              </h2>
              <div className="answer-content">
                {QuestionComponents.find(q => q.id === activeQuestion)?.component && (
                  <React.Fragment>
                    <p className="answer-label"><strong>ANSWER:</strong></p>
                    <div className="answer-details">
                      {React.createElement(
                        QuestionComponents.find(q => q.id === activeQuestion).component
                      )}
                    </div>
                    <div className="navigation-controls">
                      {activeQuestion > 1 && (
                        <button 
                          className="nav-button prev-button" 
                          onClick={() => toggleQuestion(activeQuestion - 1)}
                        >
                          <span className="nav-icon">←</span> Previous
                        </button>
                      )}
                      {activeQuestion < QuestionComponents.length && (
                        <button 
                          className="nav-button next-button" 
                          onClick={() => toggleQuestion(activeQuestion + 1)}
                        >
                          Next <span className="nav-icon">→</span>
                        </button>
                      )}
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="questions-grid">
            <div className="instructions-box">
              <p className="instructions-text">Click on any question to view detailed explanation with code examples.</p>
            </div>
            {QuestionComponents.map((item) => (
              <div 
                className="question-plate" 
                key={item.id}
                onClick={() => toggleQuestion(item.id)}
              >
                <div className="question-content">
                  <h3 data-number={item.id}>{item.question}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;