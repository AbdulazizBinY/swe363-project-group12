// // uncomment this
// const { data } = require('cheerio/lib/api/attributes');
// const puppeteer = require('puppeteer');

let completeCourses= [
    [ 'ENGL 101', 'Introduction to Academic Discourse', 3, 0, [], [] ],
    [ 'IAS 121', 'Language Foundation', 2, 0, [], [] ],
    [
      'ICS 104',
      'Introduction to Programming in Python and C',
      3,
      3,
      [],
      []
    ],
    [ 'MATH 101', 'Calculus I', 4, 0, [], [] ],
    [ 'PE 101', 'Health & Physical Education I', 1, 2, [], [] ],
    [ 'PHYS 101', 'General Physics I', 4, 3, [], [] ],
    [
      'ENGL 102',
      'Introduction to Report Writing',
      3,
      0,
      [ 'ENGL 101' ],
      []
    ],
    [ 'IAS 111', 'Belief and its Consequences', 2, 0, [], [] ],
    [ 'ICS 108', 'Object-Oriented Programming', 4, 3, [ 'ICS 104' ], [] ],
    [ 'MATH 102', 'Calculus II', 4, 0, [ 'MATH 101' ], [] ],
    [
      'PHYS 102',
      'General Physics II',
      4,
      3,
      [ 'PHYS 101' ],
      [ 'MATH 102' ]
    ],
    [
      'ISE 291',
      'Introduction to Data Science',
      3,
      0,
      [ 'ICS 104', 'MATH 102' ],
      []
    ],
    [
      'ICS 202',
      'Data Structures and Algorithms',
      4,
      3,
      [ 'ICS 108' ],
      []
    ],
    [ 'MATH 201', 'Calculus III', 3, 0, [ 'MATH 102' ], [] ],
    [ 'CHEM 101', 'Principles of Chemical Science I', 4, 3, [], [] ],
    [
      'SWE 206',
      'Introduction to Software Engineering',
      3,
      3,
      [ 'ICS 108' ],
      []
    ],
    [
      'MATH 208',
      'Introduction to Differential Equations & Linear Algebra',
      3,
      0,
      [ 'MATH 102' ],
      []
    ],
    [
      'COE 233',
      'Digital Logic & Computer Organization',
      3,
      0,
      [ 'ICS 104' ],
      [ 'ICS 104' ]
    ],
    [
      'COE 292',
      'Introduction to Artificial Intelligence',
      3,
      0,
      [ 'ISE 291' ],
      [ 'ISE 291' ]
    ],
    [ 'IAS 212', 'Ethics and Governance', 2, 0, [ 'IAS 111' ], [] ],
    [ 'ICS 253', 'Discrete Structures', 3, 0, [ 'ICS 104' ], [] ],
    [
      'SWE 216',
      'Software Requirements Engineering',
      3,
      0,
      [ 'SWE 206' ],
      []
    ],
    [ 'ICS 321', 'Database Systems', 3, 0, [ 'ICS 202' ], [] ],
    [
      'ICS 343',
      'Fundamentals of Computer Networks',
      4,
      3,
      [ 'ICS 108' ],
      []
    ],
    [
      'STAT 319',
      'Probability and Statistics for Engineers and Scientists',
      3,
      3,
      [ 'MATH 102' ],
      []
    ],
    [
      'SWE 316',
      'Software Design and Construction',
      3,
      0,
      [ 'SWE 206' ],
      []
    ],
    [
      'SWE 387',
      'Software Project Management',
      3,
      0,
      [ 'Junior Standing' ],
      []
    ],
    [ 'BUS 200', 'Business & Entrepreneurship', 3, 0, [], [] ],
    [
      'ENGL 214',
      'Academic & Professional Communication',
      3,
      0,
      [ 'ENGL 102' ],
      []
    ],
    [ 'ICS 344', 'Information Security', 3, 0, [ 'ICS 343' ], [] ],
    [ 'SWE 326', 'Software Testing', 3, 0, [ 'SWE 216' ], [] ],
    [
      'SWE 363',
      'Web Engineering & Development',
      3,
      0,
      [ 'Junior Standing' ],
      []
    ],
    [
      'CGS 392',
      'Career Essentials',
      1,
      2,
      [ 'ENGL 214' ],
      [ 'ENGL 214' ]
    ],
    [ 'SWE 399', 'Summer Training', 0, 0, [ 'ENGL 214', 'SWE 363' ], [] ],
    [
      'SWE 411',
      'Software Engineering Project I',
      3,
      0,
      [ 'SWE 387', 'SWE 316' ],
      []
    ],
    [
      'SWE 439',
      'Software Quality Engineering',
      3,
      0,
      [ 'SWE 316', 'STAT 319' ],
      []
    ],
    [ 'IAS xxx', 'Islamic/Arabic Elective', 2, 0, [], [] ],
    [ 'ICS/SWE xxx', 'Major Elective I', 3, 0, [], [] ],
    [ 'ICS/SWE xxx', 'Major Elective II', 3, 0, [], [] ],
    [ 'ICS 433', 'Operating Systems', 3, 1, [ 'COE 233' ], [] ],
    [
      'SWE 412',
      'Software Engineering Project II',
      2,
      0,
      [ 'SWE 411', 'SWE 326' ],
      []
    ],
    [ 'GS xxx', 'GS Elective', 3, 0, [], [] ],
    [ 'ICS/SWE xxx', 'Major Elective IV', 3, 0, [], [] ],
    [ 'ICS/SWE xxx', 'Major Elective III', 3, 0, [], [] ]
  ]


//   // uncomment this
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
//     let courses = []   
//     let totalCredit=0 
//     let n=3 
//     while (totalCredit<100){

//         // if(document.querySelector(`#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(${n}) td:nth-child(1)  `).classList.contains('tfoot')){
//         //     n++2
//         // }


//         let element1 = document.querySelector(`#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(${n}) td:nth-child(1) a `)  //shourcut 
//         if (element1 === null){
//             element1= document.querySelector(`#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(${n}) td:nth-child(1)  `)
//         }
//         let element2 = document.querySelector(`#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(${n}) td:nth-child(3) `);    // full name
//         let element3 = document.querySelector(`#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(${n}) td:nth-child(6) `);    //credit 
//         let element4 = document.querySelector(`#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(${n}) td:nth-child(5) `); 


//         let currentCourse = []
//         if (element1 !== null && element2 !== null && element3 !== null && element4 !== null){
//             currentCourse.push(element1.textContent.trim())
//             currentCourse.push(element2.textContent)
//             currentCourse.push(parseInt(element3.textContent))
//             currentCourse.push(parseInt(element4.textContent))
//             currentCourse.push([])
//             currentCourse.push([])
//             courses.push(currentCourse)
//         }

        
//         n++
//         totalCredit++ 
//     }

//     courses[6][4].push("ENGL 101")

//     courses[8][4].push("ICS 104")

//     courses[9][4].push("MATH 101")

//     courses[10][4].push("PHYS 101")
//     courses[10][5].push("MATH 102")

//     courses[11][4].push("ICS 104")
//     courses[11][4].push("MATH 102")

//     courses[12][4].push("ICS 108")   //ics202


//     courses[13][4].push("MATH 102")



//     courses[15][4].push("ICS 108")

//     courses[16][4].push("MATH 102")


//     courses[17][4].push("ICS 104")         //233
//     courses[17][5].push("ICS 104")



//     courses[18][4].push("ISE 291")
//     courses[18][5].push("ISE 291")


//     courses[19][4].push("IAS 111")



//     courses[20][4].push("ICS 104")  //253



//     courses[21][4].push("SWE 206")

//     courses[22][4].push("ICS 202")   //321 


//     courses[23][4].push("ICS 108")


//     courses[24][4].push("MATH 102")  //stat


//     courses[25][4].push("SWE 206")


//     courses[26][4].push("Junior Standing")   //387

//     courses[28][4].push("ENGL 102")

//     courses[29][4].push("ICS 343")

//     courses[30][4].push("SWE 216") //326 


//     courses[31][4].push("Junior Standing")  //363


//     courses[32][4].push("ENGL 214")
//     courses[32][5].push("ENGL 214")


//     courses[33][4].push("ENGL 214")
//     courses[33][4].push("SWE 363")


//     courses[34][4].push("SWE 387")
//     courses[34][4].push("SWE 316")


//     courses[35][4].push("SWE 316")   //Quality
//     courses[35][4].push("STAT 319")


//     courses[39][4].push("COE 233")


//     courses[40][4].push("SWE 411")
//     courses[40][4].push("SWE 326")




     
//     // let element1 = document.querySelector(`#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(${n}) td:nth-child(1) a `)  //shourcut 
//     // let element2 = document.querySelector('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(3) ');    // full name
//     // let element3 = document.querySelector('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(6) ');    //credit 
//     // let element4 = document.querySelector('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(5) ');

//     //    element1.waitForSelector('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(16) td:nth-child(1) a')
//     //    element1.click('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(16) td:nth-child(1) a');
//     //  element1.click()
     

//     // let preReqs = document.querySelectorAll('.row mt-6 .col-md-9  p:nth-child(2)  a ')
//     // let coReqs = document.querySelectorAll('.row mt-6 .col-md-9  p:nth-child(3)  a ')
//     // window.history.back()

//     //original 
//     //let element = document.querySelectorAll('#tab-buggy div:nth-child(1) table:nth-child(1) tr:nth-child(3) td:nth-child(1) a ');
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

//     // element1.forEach(item => {
//     //   console.log("yes")
//     //   extractedData.push(item.textContent);
//     // });

//     // extractedData.push(element1.textContent);
//     // extractedData.push(element2.textContent);
//     // extractedData.push(element3.textContent);
//     // extractedData.push(parseInt(element4.textContent));

//     // preReqs.forEach(item => {
//     //      // console.log("yes")
//     //       extractedData.push(item.textContent);
//     //  });

//     // coReqs.forEach(item => {
//     //         //console.log("yes")
//     //         extractedData.push(item.textContent);
//     //  });
  


//     // extractedData.push(preReqs);
//     // extractedData.push(coReqs);

//     // return extractedData;
//     return courses;
//     // return element 



//     // Example: Extracting text content from an element with class 'example-class'
//     // const element = document.querySelector('.fw-bold');
    
//     // return element ? element.textContent : null;
//   });

//   //Print the extracted data
//   console.log("reach")
//   console.log('Extracted data:', data)


// data.forEach(ele =>{
//     completeCourses.push(ele)
// })
//   // data.forEach(ele => {
//   //   console.log(ele.textContent)
//   // })

//   // Close the browser
//   await browser.close();
// })();
// Up to here 



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
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('Connected to MongoDB...'))
//  .catch(err => console.error('Could not connect to MongoDB...', err));


 //another 
//  const { MongoClient, ServerApiVersion } = require('mongodb');
//  const uri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority"; 
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// Connect to MongoDB
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");
//         const port = process.env.PORT || 3000;
//         app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

//       } catch (e) {
//         console.error(e);
//     }
//   }
//   run().catch(console.dir);
// console.log("yes")
// completeCourses.forEach(ele => {
    
//     console.log(ele[0])
// }

// )


// //from here
// const MongoClient = require('mongodb').MongoClient;

// // Connection URI
// const uri = 'mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority';

// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


let pushedCourse=[]

// let Course1= {
//           shortcut: completeCourses[0][0],
//           title: completeCourses[0][1],
//           credit: completeCourses[0][2],
//           labHours: completeCourses[0][3],
//           preReqs: completeCourses[0][4],
//           coReqs: completeCourses[0][5], 

// }

// // completeCourses.forEach(course =>{
// //     pushedCourse.push(
// //         { shortcut: course[0],
// //           title: course[1],
// //           credit: course[2],
// //           labHours: course[3],
// //           preReqs: course[4],
// //           coReqs: course[5],  

// //     })
// // })

// client.connect(async (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
  
//     // Reference to your database
//     const database = client.db();
  
//     // Reference to your courses collection
//     const coursesCollection = database.collection('Courses');
  
//     // Insert the courses data into the collection
//     try {
//       const result1 = await coursesCollection.insertOne(Course1);  
//       //const result = await coursesCollection.insertMany(pushedCourse);
//       console.log(`Inserted ${result1.insertedCount} documents`);
//     } catch (insertError) {
//       console.error(insertError);
//     } finally {
//       // Close the connection
//       client.close();
//     }
//   });
//   // Reference to your users collection



  
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Luay:1234@kfupmcc.i1mhych.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    completeCourses.forEach(course =>{
    pushedCourse.push(
        { shortcut: course[0],
          title: course[1],
          credit: course[2],
          labHours: course[3],
          preReqs: course[4],
          coReqs: course[5],  

        })
      })


        const database = client.db("KFUPMCC");
        const coursesCollection = database.collection('Courses');
        const result = await coursesCollection.insertMany(pushedCourse);
        console.log(`Inserted ${result.insertedCount} documents`);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

  