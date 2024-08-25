import React from 'react';

function ResponseDisplay({ response, selectedOptions }) {
  return (
    <div>
      {selectedOptions.includes('Alphabets') && (
        <div>
          <h3>Alphabets:</h3>
          <p>{response.alphabets.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('Numbers') && (
        <div>
          <h3>Numbers:</h3>
          <p>{response.numbers.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('Highest lowercase alphabet') && (
        <div>
          <h3>Highest Lowercase Alphabet:</h3>
          <p>{response.highest_lowercase_alphabet.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default ResponseDisplay;