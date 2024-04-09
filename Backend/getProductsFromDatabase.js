const { Client } = require('pg');

// Database connection
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Roin0605Emia',
    port: 5433,
})

// Database connection
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: ' ',
//   port: 5432,
// })

//Connecting to database
client.connect((error) => {
  if (error) {
    console.error('Error connecting to PostgreSQL database:', error);
  } else {
    console.log('Connected to PostgreSQL database!');
  }
});

//Getting products from database and sending results as a result
function GetProducts() {
  return new Promise((resolve, reject) => {
    client.query('SELECT * FROM public."Products"', (error, results) => {
      if (error) {
        console.error('Error fetching data:', error);
        reject(error);
      } else {
        // console.log('Data fetched successfully:', results.rows);
        resolve(results.rows);
      }
    });
  });
}

module.exports = GetProducts;