import React, { useState } from 'react';
import axios from 'axios';

function InputForm({ onResponse }) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      const response = await axios.post('http://localhost:8080/bfhl', parsedData); // Update with your API URL
      onResponse(response.data);
      setError(null);
    } catch (err) {
        console.log(err);
        setError('Invalid JSON or API error');
    }
  };

  return (
    <div>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter your JSON here'
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default InputForm;