import React from 'react';

function Dropdown({ selectedOptions, setSelectedOptions }) {
  const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

  const handleSelect = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((opt) => opt !== option) : [...prev, option]
    );
  };

  return (
    <div>
      <label>Select options to display:</label>
      <select multiple onChange={(e) => handleSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;