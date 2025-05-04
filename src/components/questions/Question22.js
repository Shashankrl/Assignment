import React from 'react';

function Question22() {
  return (
    <div className="question-answer">
      <p>
        Here's how to build a temperature converter (Celsius to Fahrenheit) using React with controlled input fields:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function TemperatureConverter() {
  // State for temperature values
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  
  // Handle Celsius input change
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    
    // Convert to Fahrenheit if input is a valid number
    if (value === '') {
      setFahrenheit('');
    } else {
      const celsiusFloat = parseFloat(value);
      if (!isNaN(celsiusFloat)) {
        const fahrenheitValue = (celsiusFloat * 9/5) + 32;
        setFahrenheit(fahrenheitValue.toFixed(2));
      }
    }
  };
  
  // Handle Fahrenheit input change
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    
    // Convert to Celsius if input is a valid number
    if (value === '') {
      setCelsius('');
    } else {
      const fahrenheitFloat = parseFloat(value);
      if (!isNaN(fahrenheitFloat)) {
        const celsiusValue = (fahrenheitFloat - 32) * 5/9;
        setCelsius(celsiusValue.toFixed(2));
      }
    }
  };
  
  return (
    <div className="temperature-converter">
      <h2>Temperature Converter</h2>
      
      <div className="converter-container">
        <div className="input-group">
          <label htmlFor="celsius">Celsius (°C):</label>
          <input
            type="number"
            id="celsius"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter temperature in Celsius"
          />
        </div>
        
        <div className="equals-sign">=</div>
        
        <div className="input-group">
          <label htmlFor="fahrenheit">Fahrenheit (°F):</label>
          <input
            type="number"
            id="fahrenheit"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter temperature in Fahrenheit"
          />
        </div>
      </div>
      
      <div className="conversion-formula">
        <h3>Conversion Formulas:</h3>
        <p>Celsius to Fahrenheit: (°C × 9/5) + 32 = °F</p>
        <p>Fahrenheit to Celsius: (°F − 32) × 5/9 = °C</p>
      </div>
      
      {(celsius !== '' || fahrenheit !== '') && (
        <div className="conversion-result">
          <h3>Result:</h3>
          <p>
            {celsius !== '' ? \`\${celsius}°C is equal to \${fahrenheit}°F\` : 
             \`\${fahrenheit}°F is equal to \${celsius}°C\`}
          </p>
        </div>
      )}
    </div>
  );
}

export default TemperatureConverter;`}
        </code>
      </pre>
      
      <p>
        This component creates a temperature converter with the following features:
      </p>
      
      <ul>
        <li>Two input fields for Celsius and Fahrenheit temperatures</li>
        <li>Real-time conversion as the user types in either field</li>
        <li>Controlled components using React state</li>
        <li>Input validation to ensure only numbers are processed</li>
        <li>Display of conversion formulas for reference</li>
        <li>A result section showing the conversion in a readable format</li>
      </ul>
      
      <p>
        The component uses two state variables (<code>celsius</code> and <code>fahrenheit</code>) to track the temperature values. 
        When the user enters a value in one field, the corresponding handler function updates both state variables, 
        calculating the conversion using the appropriate formula.
      </p>
      
      <p>
        The conversion formulas used are:
      </p>
      
      <ul>
        <li>Celsius to Fahrenheit: (°C × 9/5) + 32 = °F</li>
        <li>Fahrenheit to Celsius: (°F − 32) × 5/9 = °C</li>
      </ul>
      
      <p>
        You could enhance this converter by:
      </p>
      
      <ul>
        <li>Adding support for Kelvin or other temperature scales</li>
        <li>Including a toggle button to switch between different conversion modes</li>
        <li>Adding visual indicators for freezing/boiling points</li>
        <li>Implementing a temperature slider as an alternative input method</li>
      </ul>
    </div>
  );
}

export default Question22;
