const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const uri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

exports.signup = async (req, res) => {
    try {
        await client.connect();
        const db = client.db("KFUPMCC");
        const users = db.collection("users");

        const { firstName, lastName, email, kfupmId, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        // Check if the user already exists
        const existingUser = await users.findOne({ kfupmId });
        if (existingUser) {
            res.status(409).json({ message: 'This user is already exist' });
            return;
        }

        // Insert the new user if they do not exist
        const result = await users.insertOne({
            firstName,
            lastName,
            email,
            kfupmId,
            password: hashedPassword
        });

        if (result.acknowledged) {
            res.status(201).json({ message: 'Signup successful!' });
        } else {
            throw new Error('Signup failed');
        }
    } catch (error) {
        res.status(500).json({ message: 'Error signing up user', error: error.message });
    } finally {
        await client.close();
    }
};

exports.login = async (req, res) => {
    try {
        await client.connect();
        const db = client.db("KFUPMCC");
        const users = db.collection("users");

        const { kfupmId, password } = req.body;
        
        // Check if the user exists
        const user = await users.findOne({ kfupmId });
        if (!user) {
            res.status(401).json({ message: 'Your KFUPM ID and/or password do not match' });
            return;
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Your KFUPM ID and/or password do not match' });
            return;
        }

        // Login successful
        res.status(200).json({ message: 'Login successful' });
        
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    } finally {
        await client.close();
    }
};