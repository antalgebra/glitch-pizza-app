# Serving Static Files with Express (2-static-files)

In this lesson, we'll modify our Express server to serve HTML pages and static assets (like CSS, images, and client-side JavaScript) instead of just sending plain text responses.

## Project Structure

First, let's set up our project directories. Create the following folder structure:
```
your-project/
├── public/         # Static assets (CSS, client JS, images)
│   ├── css/        # Stylesheets
│   ├── js/         # Client side JavaScript (empty for now)
│   └── images/     # Images
├── views/          # Web pages
│   └── home.html   # Home page
├── app.js          # Node.js application code
└── package.json    # Project configuration
```

## Setting Up Static File Serving

1. First, modify your `app.js` to add static file serving. Add this line before your routes:
   ```javascript
   app.use(express.static('public'));
   ```
   This middleware tells Express to automatically serve any files in the 'public' directory. Middleware is code that runs between the request and response. `app.use()` is a method that adds middleware to the Express application and `express.static()` is a middleware function that serves static files.

2. Update the root route to serve an HTML file instead of plain text:
   ```javascript
   app.get('/', (req, res) => {
       res.sendFile(`${import.meta.dirname}/views/home.html`);
   });

   ```
   This route is now serving the `home.html` file in the `views` directory. The `import.meta.dirname` is a special variable that gives us the directory name of the current module. We use this to tell Express where to find the `home.html` file.

3. Add your HTML file in the `views` directory and any CSS files in the `public/css` directory.

4. In your HTML, you can link to CSS files as if they were in the root directory, because Express is serving any files in the 'public' folder:
   ```html
   <link rel="stylesheet" href="/css/home.css">
   ```

## How Static File Serving Works

When you use `express.static('public')`:
- Any file in the `public` directory becomes accessible via URL
- For example, `public/css/style.css` is available at `http://localhost:3000/css/style.css`
- This works automatically for any file type: CSS, JavaScript, images, etc.
- No need to create separate routes for each static file

## Running the Application

1. Start the server:
   ```bash
   node app.js
   ```
2. Visit `http://localhost:3000` in your browser
3. You should now see your styled HTML page instead of the previous "Hello, World!" text

## Using Nodemon

Nodemon is a tool that helps you develop Node.js applications by automatically restarting the server when you make changes to the code.

1. Install Nodemon:
   ```bash
   npm install nodemon --save-dev
   ```
   This will add nodemon to your project's dev  dependencies. Dev dependencies are packages that are only needed for development, such as testing and debugging tools. After you install nodemon, you will see a new section in your `package.json` file called `devDependencies` to track these packages.

2. In the terminal, run `npx nodemon` or  `npx nodemon app.js` to start the server and automatically restart it when you make changes. npx is a tool that allows you to run Node.js packages.

## Troubleshooting

If your static files aren't loading:
1. Check that the files are in the correct directories.
2. Make sure file paths in your HTML match your directory structure starting from the public folder.
3. Verify that `express.static('public')` is before your routes in `app.js`

<br/>

*Note: This tutorial was created with the help of AI tools.*