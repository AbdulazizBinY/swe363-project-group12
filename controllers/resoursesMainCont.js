const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const uri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs').promises;


app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

exports.Main = async (req, res) => {
  try {
    // app.set('view engine', 'ejs');



    await client.connect();
    const db = client.db("KFUPMCC");
    const courses = db.collection("Courses");

    // const majorCourses =  await courses.find({shortcut:"ICS"})
    const majorCourses = await courses.find({
      shortcut: { $regex: /^(ICS|SWE)/ }
    }).toArray();

    const nonIcsSweCourses = await collection.find({ courseName: { $regex: /^(?!ICS|SWE)/i } }).toArray();



    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${majorCourses[0].shortcut}</title>
    </head>
    <body>
      <h1>${majorCourses[0].credit}</h1>
      <p>${majorCourses}</p>
    </body>
    </html>
    `;
    //await fs.writeFile('createdHTML.html', htmlContent);



    // Check if the user already exists
    res.render('resoursesMain', { majorCourses });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
};

// export majorCourses; 