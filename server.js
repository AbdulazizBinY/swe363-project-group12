const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');

// Initialize Express app
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use Express built-in middleware for parsing JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

// MongoDB URI - consider moving this to an environment variable for security
const uri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority"; 
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Connect to MongoDB
async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        app.use('/signup', signupRoutes);
        app.use('/login', loginRoutes);
     // app.use('/forgot-password', forgotPasswordRoutes(client)); // use the new route

        // Start the Express server
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

    } catch (e) {
        console.error(e);
    }

    // Properly handle server shutdown (like Ctrl+C)
    process.on('SIGINT', async () => {
        await client.close();
        process.exit(0);
    });
}

run().catch(console.dir);