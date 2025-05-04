import React from 'react';

function Question20() {
  return (
    <div className="question-answer">
      <p>
        Here's how to create a simple feedback form with fields for Name, Email, and Feedback message that shows a confirmation message on submit:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function FeedbackForm() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  
  // State to track if form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to a server
    // For this example, we'll just set isSubmitted to true
    console.log('Form submitted:', formData);
    
    // Show confirmation message
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        feedback: ''
      });
    }, 5000);
  };
  
  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      
      {isSubmitted ? (
        <div className="confirmation-message">
          <h3>Thank You for Your Feedback!</h3>
          <p>We appreciate you taking the time to share your thoughts with us.</p>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              placeholder="Please share your feedback here..."
              rows="5"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;`}
        </code>
      </pre>
      
      <p>
        This component creates a feedback form with the following features:
      </p>
      
      <ul>
        <li>Input fields for Name, Email, and Feedback message</li>
        <li>Form validation using the <code>required</code> attribute</li>
        <li>State management for form data using <code>useState</code></li>
        <li>A confirmation message that appears after submission</li>
        <li>Automatic form reset after the confirmation is displayed</li>
      </ul>
      
      <p>
        The component uses controlled form elements, where React state is the "single source of truth" for all input values. 
        When the form is submitted, it prevents the default form submission behavior, logs the form data to the console 
        (where in a real application you would send it to a server), and displays a confirmation message.
      </p>
      
      <p>
        You could enhance this form by adding:
      </p>
      
      <ul>
        <li>More detailed form validation</li>
        <li>A rating system (e.g., 1-5 stars)</li>
        <li>Categories for the feedback</li>
        <li>A loading state while the form is being submitted</li>
      </ul>
    </div>
  );
}

export default Question20;
