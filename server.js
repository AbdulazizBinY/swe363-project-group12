const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { MongoClient, ServerApiVersion } = require("mongodb");
const signupRoutes = require("./routes/signupRoute");
const loginRoutes = require("./routes/loginRoute");

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

// resourcesList route
app.get("/resourcesList", (req, res) => {
    res.render("resourcesList", { user: req.session.user });
});

// resourcesMainPage route
// app.get("/resourcesMainPage", (req, res) => {
//     res.render("resourcesMainPage", { user: req.session.user });
// });


// resourcesMainPage route
app.get('/resourcesMainPage', async (req, res) => {
    try {
        const db = client.db("KFUPMCC");
        const coursesCollection = db.collection("Courses");

        //const courses = await coursesCollection.find().toArray();

        //const majorCourses =  await courses.find({shortcut:"ICS"})
         const majorCourses =  await coursesCollection.find({
            shortcut: { $regex: /^(ICS|SWE)/ }
          }).toArray();
        //   { $regex: /^(?!ICS|SWE)/i}
        const nonMajorCourses = await coursesCollection.find({ shortcut: { $regex: /^(?!ICS|SWE)/i} }).toArray();
        console.log(req.session.user)
          let allCourses= [majorCourses,nonMajorCourses,req.session.user]

        // Render the profile page with the user's data
        res.render('resourcesMainPage', {  allCourses });
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        res.status(500).send('Internal Server Error');
    }
});




// schedule route
app.get("/schedule", async (req, res) => {
    try {
        const db = client.db("KFUPMCC");
        const coursesCollection = db.collection("Courses");

        // Fetch courses from the database
        const courses = await coursesCollection.find().toArray();

        // Create allCourses array with courses and user
        const allCourses = { courses, user: req.session.user };

        res.render("schedule", { allCourses });
    } catch (error) {
        console.error('Error retrieving courses:', error);

        // If there's an error, pass an empty array for courses
        const allCourses = { courses: [], user: req.session.user };
        
        res.render("schedule", { allCourses });
    }
});






// terms route
app.get("/terms", (req, res) => {
    res.render("terms", { user: req.session.user });
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