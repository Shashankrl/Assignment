import React from 'react';

function Question8() {
  return (
    <div className="question-answer">
      <p>
        Here's a React form with controlled components for Name and Email that displays the submitted data:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function ContactForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  // State to track if form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

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
    setSubmittedData({...formData});
    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
      
      {isSubmitted && submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;`}
        </code>
      </pre>
      
      <p>
        This form uses controlled components where React state is the "single source of truth" for input values. 
        When the form is submitted, it prevents the default form submission behavior, saves the current form data 
        to a separate state variable, and displays it below the form.
      </p>
    </div>
  );
}

export default Question8;
