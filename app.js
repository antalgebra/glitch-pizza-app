/*
 * Import the express module
 * ES modules syntax allows us to use import/export like in modern JavaScript
 * and React applications
 */
import express from 'express';

// Create an instance of an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));


// Define the port number where our server will listen
const PORT = 3000;

/*
 * Create a route for the root path ('/')
 * When someone visits our website's home page, this function will run
 * req: contains information about the incoming request
 * res: allows us to send back a response to the client
 */
app.get('/', (req, res) => {
    // Send "Hello, World!" as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Start the server and make it listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 