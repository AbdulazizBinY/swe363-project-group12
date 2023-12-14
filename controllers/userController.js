const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let db;

// Initialize and connect to the database
async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db("KFUPMCC");
    }
    return db;
}

exports.signup = async (req, res) => {
    try {
        const users = (await connectDB()).collection("users");

        const { firstName, lastName, email, kfupmId, major, classLevel, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        // Check if the user already exists
        const existingUser = await users.findOne({ kfupmId });
        if (existingUser) {
            res.status(409).json({ message: 'This user already exists' });
            return;
        }

        // Insert the new user if they do not exist
        const result = await users.insertOne({
            firstName,
            lastName,
            email,
            kfupmId,
            major,
            classLevel,
            password: hashedPassword,
            terms:[]

        });

        if (result.acknowledged) {
            res.status(201).json({ message: 'Signup successful!' });
        } else {
            throw new Error('Signup failed');
        }
    } catch (error) {
        res.status(500).json({ message: 'Error signing up user', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const users = (await connectDB()).collection("users");

        const { kfupmId, password } = req.body;

        // Check if the user exists
        const user = await users.findOne({ kfupmId });
        if (!user) {
            res.status(401).json({ message: 'This user does not exists' });
            return;
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid KFUPM ID and/or password' });
            return;
        }

        // Set more user information in session
        req.session.user = {
            id: user._id,
            kfupmId: user.kfupmId,
            name: user.firstName, 
            major: user.major,  
            classLevel: user.classLevel,
            email: user.email,,
            terms: user.terms
        };

        res.status(200). json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};
