const { Client } = require('pg');
const express = require('express');
const cors = require('cors');

// Creating an Express application
const app = express();
const port = 5000; // Port number to run the server
app.use(cors({
    origin: 'http://localhost:3000'
  }));

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Roin0605Emia',
    port: 5433,
})

client.connect((error) => {
    if (error) {
        console.error('Error connecting to PostgreSQL database:', error);
    } else {
        console.log('Connected to PostgreSQL database!');
    }
});

// Setting up a route
app.get('/products', (req, res) => {
    // Select data from "Products" table
    client.query('SELECT * FROM public."Products"', (error, results) => {
      if (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
      } else {
        console.log('Data fetched successfully:', results.rows);
        res.json(results.rows); // Sending the fetched data as a JSON response
      }
    });
  });
// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


// client.connect()
//     .then(() => {
//         console.log('Connected to PostgreSQL database');
//     })
//     .finally(() => {
//         client.end()
//     })



// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(data => {
//     // Insert fetched data into PostgreSQL database
//     data.forEach(item => {
//       const { id, title, description, image, price } = item;
//       client.query('INSERT INTO public."Products" (id, title, description, img, price) VALUES ($1, $2, $3, $4, $5)', [id, title, description, image, price], (error, results) => {
//         if (error) {
//           console.error('Error inserting data:', error);
//         } else {
//           console.log('Data inserted successfully:', results.rowCount);
//         }
//       });
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));