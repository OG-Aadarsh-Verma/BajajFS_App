const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];

    const numbers = data.filter(item => !isNaN(item) && item !== ' ');
    const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]$/.test(item));
    
    // Find the highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(char => char >= 'a' && char <= 'z');
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
        ? [lowercaseAlphabets.sort().pop()]
        : [];

    // Creating the response object
    const response = {
        is_status: "Success",
        user_id: "aadarsh_verma_26082003",
        email: "aadarshdeepak.verma2021@vitstudent.ac.in",
        roll_number: "21BCE0134",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    // Sending the response back
    res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    const operationCode = "OPERATION_12345";
    res.status(200).json({ operation_code: "1" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
