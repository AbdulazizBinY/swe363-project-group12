// const puppeteer = require('puppeteer');

// (async () => {
//   // Launch a headless browser
//   const browser = await puppeteer.launch();

//   // Open a new page
//   const page = await browser.newPage();

//   // Navigate to a website
//   await page.goto('https://bulletin.kfupm.edu.sa/program?program_id=119&title=bachelor-of-science-in-software-engineering');

//   // Extract data from the website
//   const data = await page.evaluate(() => {
//     // This function runs in the context of the browser
//     // You can use DOM manipulation and extraction methods here


//     // let myArray = []
//     // myArray.push(document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(1) a '))
//     // myArray.push(document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(3) '))
//     // myArray.push(document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(6) '))
//      let element1 = document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(1) a ')  //shourcut 
//      let element2= document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(3) ');    // full name
//      let element3= document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(6) ');    //credit 
   

//     //original 
//     let element = document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(1) a ');
//     // element=element + document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(3) ');
//     // element=element + document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(6) ');
//     const extractedData = [];

//     // myArray.forEach(item => {
//     //   extractedData.push(item.textContent);
//     //   extractedData.push(item.textContent);
//     //   extractedData.push(item.textContent);
//     // });

//       // extractedData.push(element1.textContent);
//       // extractedData.push(element2.textContent);
//       // extractedData.push(element3.textContent);

//       //orginal 
//     // element.forEach(item => {
//     //   console.log("yes")
//     //   extractedData.push(item.textContent);
//     // });

//     element3.forEach(item => {
//       console.log("yes")
//       extractedData.push(item.textContent);
//     });

//     return extractedData;
    
//     return element 



//     // Example: Extracting text content from an element with class 'example-class'
//     // const element = document.querySelector('.fw-bold');
    
//     // return element ? element.textContent : null;
//   });

//   // Print the extracted data
//   // console.log("reach")
//   // console.log('Extracted data:', data)

//   // data.forEach(ele => {
//   //   console.log(ele.textContent)
//   // })

//   // Close the browser
//   await browser.close();
// })();


//For DB


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


//another connection method
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to MongoDB...'))
 .catch(err => console.error('Could not connect to MongoDB...', err));
