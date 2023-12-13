const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const resourcesMainRoutes=  require('./routes/resoursesMainRoutes');
// Initialize Express app
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use Express built-in middleware for parsing JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});


app.post("/fun", (req,res) => {
    try {
        // app.set('view engine', 'ejs');
        

        
        await client.connect();
        const db = client.db("KFUPMCC");
        const courses = db.collection("Courses");

        // const majorCourses =  await courses.find({shortcut:"ICS"})
         const majorCourses =  await courses.find({
            shortcut: { $regex: /^(ICS|SWE)/ }
          }).toArray();

          const nonIcsSweCourses = await collection.find({ courseName: { $regex: /^(?!ICS|SWE)/i} }).toArray();
          res.json()
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        } finally {
            await client.close();
        }
})

// app.get('/resourcesMainPage', (req,res) => {
//     //res.sendFile(__dirname + '/public/resourcesMainPage.html');
//     try {

//         app.set('view engine', 'ejs');
//         // Connect to MongoDB
//          client.connect();
    
//         // Access the specific collection (replace 'your_collection' with the actual collection name)
//         const db = client.db("KFUPMCC");
//         const users = db.collection("Courses");
    
//         // Fetch data from MongoDB
//         const majorCourses =  collection.find({ $or: [{ shortcut: 'ICS' }, { shortcut: 'SWE' }] }).toArray();
    
//         // Render HTML with the fetched data
//         res.render('resoursesMain', { majorCourses });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//       } finally {
//         // Close the MongoDB connection
//          client.close();
//       }



// }); 

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
        app.use('/resourcesMainPage', resourcesMainRoutes )
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