import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import Dropdown from './Dropdown';
import ResponseDisplay from './ResponseDisplay';

function App() {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    document.title = "21BCE0134";  // Replace with your actual roll number
  }, []);

  const handleResponse = (apiResponse) => {
    setResponse(apiResponse);
  };

  return (
    <div className="App">
      <h1>API Processor</h1>
      <InputForm onResponse={handleResponse} />
      {response && (
        <>
          <Dropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
}

export default App;