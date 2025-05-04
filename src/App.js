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
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);

  // Handle initial URL and browser back button
  useEffect(() => {
    // Function to update active question based on URL
    const updateActiveQuestionFromURL = () => {
      const params = new URLSearchParams(window.location.search);
      const questionParam = params.get('q');
      
      if (questionParam) {
        const questionId = parseInt(questionParam, 10);
        if (!isNaN(questionId) && questionId > 0 && questionId <= questionsList.length) {
          setActiveQuestion(questionId);
        }
      } else {
        setActiveQuestion(null);
      }
    };
    
    // Check URL params on initial load
    updateActiveQuestionFromURL();
    
    // Handle the popstate event (when back button is clicked)
    window.addEventListener('popstate', updateActiveQuestionFromURL);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('popstate', updateActiveQuestionFromURL);
    };
  }, [questionsList.length]);

  // Update URL when activeQuestion changes and scroll to top
  useEffect(() => {
    // Get current URL state
    const currentUrl = new URL(window.location.href);
    const currentQuestionParam = currentUrl.searchParams.get('q');
    const currentQuestionId = currentQuestionParam ? parseInt(currentQuestionParam, 10) : null;
    
    // Only update history if the state actually changed
    if (activeQuestion !== currentQuestionId) {
      if (activeQuestion) {
        // When a question is selected, push a new state to history
        window.history.pushState({questionId: activeQuestion}, '', `?q=${activeQuestion}`);
        
        // Scroll to the top of the page instantly
        window.scrollTo(0, 0);
      } else {
        // When going back to the questions list, push a new state to history
        window.history.pushState({questionId: null}, '', `/`);
      }
    }
  }, [activeQuestion]);
  
  // Add keyboard navigation
  useEffect(() => {
    // Only add keyboard listeners when a question is active
    if (!activeQuestion) return;
    
    const handleKeyDown = (e) => {
      // Set keyboard navigating state to true when using navigation keys
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key) && 
          !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        setIsKeyboardNavigating(true);
        
        // Only prevent default for navigation keys
        if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
        }
      }
      
      // Left arrow key - previous question (only when not in text field)
      if (e.key === 'ArrowLeft' && activeQuestion > 1 && 
          !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        toggleQuestion(activeQuestion - 1);
      }
      
      // Right arrow key - next question (only when not in text field)
      if (e.key === 'ArrowRight' && activeQuestion < QuestionComponents.length && 
          !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        toggleQuestion(activeQuestion + 1);
      }
      
      // Up arrow key - scroll up (only when not in text field)
      if (e.key === 'ArrowUp' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        window.scrollBy({
          top: -100,
          behavior: 'smooth'
        });
      }
      
      // Down arrow key - scroll down (only when not in text field)
      if (e.key === 'ArrowDown' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
        });
      }
      
      // Page Up key - scroll up more (only when not in text field)
      if (e.key === 'PageUp' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        window.scrollBy({
          top: -500,
          behavior: 'smooth'
        });
      }
      
      // Page Down key - scroll down more (only when not in text field)
      if (e.key === 'PageDown' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        window.scrollBy({
          top: 500,
          behavior: 'smooth'
        });
      }
      
      // Home key - scroll to top (only when not in text field)
      if (e.key === 'Home' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      
      // End key - scroll to bottom (only when not in text field)
      if (e.key === 'End' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
      
      // Escape key - go back to questions list
      if (e.key === 'Escape') {
        setActiveQuestion(null);
        window.scrollTo(0, 0);
      }
    };
    
    // Mouse movement handler to disable keyboard navigation mode
    const handleMouseMove = () => {
      if (isKeyboardNavigating) {
        setIsKeyboardNavigating(false);
      }
    };
    
    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeQuestion, QuestionComponents.length, isKeyboardNavigating]);

  const toggleQuestion = (id) => {
    setActiveQuestion(id);
    // Scroll to top immediately when toggling questions (instant scroll)
    window.scrollTo(0, 0);
  };

  return (
    <div className={`App ${isKeyboardNavigating ? 'keyboard-navigating' : ''}`}>
      <header className="App-header">
        <h1>FSD ASSIGNMENT II</h1>
      </header>
      <div className="container">
        {activeQuestion ? (
          <div className="answer-container">
            <div className="answer-box">
              <div className="question-header">
                <button 
                  className="nav-button home-button" 
                  onClick={() => {
                    setActiveQuestion(null);
                    window.scrollTo(0, 0);
                  }}
                  title="Return to questions list (Escape key)"
                >
                  <span className="nav-icon">⌂</span> Home
                </button>
                <h2 className="question-title">
                  <span className="question-number">{activeQuestion}</span>
                  {QuestionComponents.find(q => q.id === activeQuestion)?.question}
                </h2>
              </div>
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
                          title="Previous question (Left Arrow key)"
                        >
                          <span className="nav-icon">←</span> Previous
                        </button>
                      )}
                      {activeQuestion < QuestionComponents.length && (
                        <button 
                          className="nav-button next-button" 
                          onClick={() => toggleQuestion(activeQuestion + 1)}
                          title="Next question (Right Arrow key)"
                        >
                          Next <span className="nav-icon">→</span>
                        </button>
                      )}
                    </div>
                    <div className="keyboard-hint">
                      <span>Keyboard shortcuts: <kbd>←</kbd> Previous | <kbd>→</kbd> Next | <kbd>↑</kbd> Scroll Up | <kbd>↓</kbd> Scroll Down | <kbd>Esc</kbd> Home</span>
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