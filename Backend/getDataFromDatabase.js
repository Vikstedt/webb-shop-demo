const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "rdbms.strato.de",
  user: "dbu5696269",
  password: "Hejsans1234",
  database: "dbs12657679"
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// Close the MySQL connection when done
connection.end();
