const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Handle POST request for user sign up
app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body;


    console.log('User Details:', firstName, lastName, email, password);
    res.send('Signup successful!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});