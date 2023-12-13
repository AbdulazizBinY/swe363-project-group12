const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');

// Initialize Express app
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

const mongoUri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority";

app.use(
    session({
        secret: "1234@1234",
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: mongoUri }),
        cookie: { maxAge: 24 * 60 * 60 * 1000 } // Session expires after 1 day
    })
);

// Serve static files
app.use(express.static("public"));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.render("home", { user: req.session.user });
});

// Login route
app.get("/login", (req, res) => {
    res.render("login", { user: req.session.user });
});
app.use("/login", loginRoutes);

// Sign up route
app.get("/signup", (req, res) => {
    res.render("signup", { user: req.session.user });
});
app.use("/signup", signupRoutes);

// Profile route
app.get("/profile", (req, res) => {
    res.render("profile", { user: req.session.user });
});

// resourceAddingForm route
app.get("/resourceAddingForm", (req, res) => {
    res.render("resourceAddingForm", { user: req.session.user });
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

// resourcesList route
app.get("/resourcesList", (req, res) => {
    res.render("resourcesList", { user: req.session.user });
});

// resourcesMainPage route
app.get("/resourcesMainPage", (req, res) => {
    res.render("resourcesMainPage", { user: req.session.user });
});

// schedule route
app.get("/schedule", (req, res) => {
    res.render("schedule", { user: req.session.user });
});

// Log-out route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Session destruction error:', err);

            return res.status(500).json({ message: 'Failed to log out due to server error' });
            // return res.redirect('/error-page');
        }

        res.redirect('/login');
    });
});

app.get('/profile', async (req, res) => {
    try {
        const db = client.db("KFUPMCC");
        const users = db.collection("users");

        const userProfile = await users.findOne({ _id: req.session.user.id });

        if (!userProfile) {
            // Handle the case where the user's profile is not found
            return res.status(404).send('Profile not found');
        }

        // Render the profile page with the user's data
        res.render('profile', { user: userProfile });
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        res.status(500).send('Internal Server Error');
    }
});


// MongoDB connection setup
const client = new MongoClient(mongoUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        app.use('/signup', signupRoutes);
        app.use('/login', loginRoutes);
     // app.use('/forgot-password', forgotPasswordRoutes(client)); // use the new route

        // Start the Express server
        const port = process.env.PORT || 3000;
        app.listen(port, () =>
            console.log(`Server running on http://localhost:${port}`)
        );
    } catch (e) {
        console.error(e);
    }

    process.on("SIGINT", async () => {
        await client.close();
        process.exit(0);
    });
}

run().catch(console.dir);
