# Posting Form Data (3-posting-data)

In this lesson, we'll expand our pizza ordering site to handle form submissions and add multiple pages. We'll learn about:
- Creating and linking multiple pages
- Processing form submissions with Express
- Storing and retrieving data in memory

## Adding a Contact Page

Let's start by adding a simple contact page and organizing our styles better.

1. Add a new route in app.js:
   ```javascript
   app.get('/contact', (req, res) => {
      res.sendFile(`${import.meta.dirname}/views/contact.html`);
   });
   ```

2. Create views/contact.html with basic contact information
3. Update the contact button in home.html to link to the new page:
   ```html
   <a id="contact-button" href="/contact" class="main-button">Contact Us</a>
   ```

4. Let's organize our CSS better by:
   - Creating base-styles.css for shared styles (body, layout, headers)
   - Keeping form-specific styles in home.css
   - Linking both in our HTML files:
   ```html
   <link rel="stylesheet" href="css/base-styles.css">
   <link rel="stylesheet" href="css/home.css">
   ```

Test it out: Visit http://localhost:3000 and click "Contact Us". You'll notice that the URL changes to http://localhost:3000/contact because we added that new route to serve the contact page. You should see your contact page with the base styles applied.

## Setting Up Form Processing

Now let's make our order form actually do something. First, add middleware to parse form data in app.js:

```javascript
app.use(express.urlencoded({ extended: true }));
```

This middleware allows Express to read form submissions and store them in `req.body`. For example, form data like `fname=John&lname=Doe` becomes `{ fname: 'John', lname: 'Doe' }`.

## Storing Orders

Add this line to app.js to store our orders in memory:

```javascript
const orders = [];
```

This creates an array to hold orders temporarily. They'll be lost when the server restarts - in a real app, you'd use a database.

## Handling Form Submissions

1. Add this route to app.js:
   ```javascript
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
   ```

2. Create views/confirmation.html - a simple page thanking the user for their order

3. Update the form in home.html to submit to our new endpoint:
   ```html
   <form action="/submit-order" method="post">
   ```

Test the order flow:
1. Fill out and submit the order form
2. You should see the confirmation page

## 5. Adding Admin Access

Add a route to view all orders:
```javascript
app.get('/admin/orders', (req, res) => {
    res.json(orders);
});
```

Test it out:
- Place a few orders
- Visit http://localhost:3000/admin/orders
- You should see a JSON array with all your orders, including customer details, order selections, and timestamps

## Troubleshooting

If form submission isn't working:
- Check that the form's `action` and `method` match your route
- Verify that all form fields have `name` attributes
- Make sure the `urlencoded` middleware is before your routes

If pages aren't loading:
- Check file paths in your `sendFile` calls
- Verify that HTML files exist in the correct locations


<br/>

*Note: This tutorial was created with the help of AI tools.*