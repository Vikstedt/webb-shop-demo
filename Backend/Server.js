const express = require('express');
const cors = require('cors');

const GetProducts = require('./getProductsFromDatabase');
const SendContactMessage = require('./SendContactMessage');
// Creating an Express application
const app = express();
const port = 5000; // Port number to run the server


// Allowing http://localhost:3000 to send requests to this server
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// Starting express server and respond if it does it succesfuly 
app.listen(port, (error) => {
    if (error) {
        console.error('Error starting server:', error);
    } else {
        console.log('Server is online');
        console.log(`Server is listening at http://localhost:${port}`);
    }
});

// Sending data from database an call from Webb to Webb
app.get('/products', (req, res) => {
    GetProducts()
        .then(products => {
            res.json(products); // Sending the fetched data as a JSON response
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        });
});


// Getting Post from Webb for Contact Form
app.post('/send_message', function (req, res, next) {
    try {
        const receivedData = req.body; // Assuming the frontend sends data as JSON

        SendContactMessage(receivedData)

        res.json({ message: 'API is working properly' });
    } catch (error) {
        console.error('Error handling request:', error.message);
        res.status(400).json({ error: error.message }); // Respond with an error message
    }
});




