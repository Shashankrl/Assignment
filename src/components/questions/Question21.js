import React from 'react';

function Question21() {
  return (
    <div className="question-answer">
      <p>
        Here's how to implement a dropdown list in React with countries and display the selected country name below:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function CountryDropdown() {
  // State to store the selected country
  const [selectedCountry, setSelectedCountry] = useState('');
  
  // List of countries
  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'India',
    'Brazil',
    'South Africa'
  ];
  
  // Handle dropdown change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  
  return (
    <div className="country-selector">
      <h2>Country Selection</h2>
      
      <div className="dropdown-container">
        <label htmlFor="country">Select a Country:</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="country-dropdown"
        >
          <option value="">-- Select Country --</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      
      {selectedCountry && (
        <div className="selected-country">
          <h3>Selected Country:</h3>
          <p className="country-name">{selectedCountry}</p>
        </div>
      )}
    </div>
  );
}

export default CountryDropdown;`}
        </code>
      </pre>
      
      <p>
        This component creates a dropdown list of countries with the following features:
      </p>
      
      <ul>
        <li>A dropdown menu populated with a list of countries</li>
        <li>State management using <code>useState</code> to track the selected country</li>
        <li>An event handler that updates the state when a country is selected</li>
        <li>Conditional rendering to display the selected country below the dropdown</li>
      </ul>
      
      <p>
        The dropdown is implemented as a controlled component, where React state is the "single source of truth" for the 
        selected value. When a country is selected from the dropdown, the <code>handleCountryChange</code> function updates 
        the <code>selectedCountry</code> state, which then causes the selected country to be displayed below the dropdown.
      </p>
      
      <p>
        You could enhance this component by:
      </p>
      
      <ul>
        <li>Adding country flags next to each country name</li>
        <li>Grouping countries by continent</li>
        <li>Adding a search feature for finding countries quickly</li>
        <li>Displaying additional information about the selected country</li>
      </ul>
    </div>
  );
}

export default Question21;
