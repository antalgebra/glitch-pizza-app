# Learning Node.js and Express

This repository is designed as a step-by-step tutorial for learning **Node.js and Express**. Each branch represents a new concept or feature, building upon the previous branches.

[![Remix on Glitch](https://img.shields.io/badge/remix%20on-Glitch-purple?logo=glitch)](https://glitch.com/edit/#!/your-glitch-project-name)

> **You are currently on the main branch, which only contains this README file. To start the tutorial, switch to the `1-hello-world` branch.**

---

## How to Use This Repository

I recommend following along with the tutorial by **writing the code yourself**. If you get stuck, you can always refer back to the code in this repository.

### **Option 1: Run Locally with Git & Node.js**
1. **Clone the repository:**
   ```bash
   git clone <repository-url>


This repository is designed as a step-by-step tutorial for learning Node.js and Express. Each branch represents a new concept or feature, building upon the previous branches.

>**You are currently on the main branch, which only contains this README file. To start the tutorial, switch to the 1-hello-world branch.**

## How to Use This Repository

I reccomend following along with the tutorial by writing the code yourself. If you get stuck, you can always refer back to the code in this repository. However, if you'd like to clone the repository locally, you can do so with the following steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. View available branches:
   ```bash
   git branch -a
   ```

3. Switch to different stages of the tutorial:
   ```bash
   git checkout 1-hello-world    # Basic Express server
   ```

4. To start the server, you will need to first install the project dependencies. You can do this by running `npm install` in the terminal from the project directory. This will install the dependencies listed in the `package.json` file. The npm packages can change between branches and are not tracked by git, so you may want to delete your `node_modules` folder and run `npm install` again after switching branches to ensure you have the correct dependencies.

5. Once the dependencies are installed, you can start the server by running `node app.js` in the terminal from the project directory.

Each branch has its own README that will:
1. Explain the concepts being introduced.
2. Walk you through the changes from the previous branch.
3. Guide you in implementing these changes yourself.

## Branches

**1-hello-world**: Basic Express server setup (you are here)  
**2-static-files**: Serving static HTML files  
**3-posting-data**: Posting data to the server  
**4-templating** (TODO): Using template engines (EJS) for dynamic HTML  
**5-database** (TODO): Connecting to a SQL database  
**6-frontend-validation** (TODO): Adding frontend validation to the form  
**7-route-params** (TODO): Route parameters and dynamic routes
