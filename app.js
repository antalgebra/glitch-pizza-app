// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define the port number where our server will listen
const PORT = 3000;

// Store orders in memory (this will reset when server restarts)
const orders = [];

/*
 * Define routes for different pages and actions
 */

// Home page with order form
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

// Handle form submission
app.post('/submit-order', (req, res) => {
    // Get form data from request body
    const order = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        method: req.body.method,
        toppings: req.body.toppings,
        size: req.body.size,
        timestamp: new Date()
    };
    
    // Save order to our array
    orders.push(order);
    
    // Send confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Admin route to view all orders
app.get('/admin/orders', (req, res) => {
    res.json(orders);
});

// Start the server and make it listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 