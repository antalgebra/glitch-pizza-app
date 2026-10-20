# Node.js and Express: pizza-order tutorial

An educational web application demonstrating HTTP routes, static assets, HTML forms, and server-side request handling.

**The runnable application is on [`3-posting-data`](https://github.com/antalgebra/glitch-pizza-app/tree/3-posting-data).** The `main` branch provides this overview.

[Daniel Hoffmaster](https://github.com/antalgebra) · [Engineering portfolio](https://github.com/antalgebra/antalgebra/blob/main/portfolio/README.md)

## What the application demonstrates

- Express routes serving home, contact, and confirmation pages.
- Static CSS and image assets.
- URL-encoded form submission through `POST /submit-order`.
- In-memory order storage and an HTML order-list route.

## Run locally

Use a current Node.js LTS release that supports `import.meta.dirname`.

```bash
git clone --branch 3-posting-data https://github.com/antalgebra/glitch-pizza-app.git
cd glitch-pizza-app
npm ci
node app.js
```

Open [http://localhost:3000](http://localhost:3000). Submitted orders can be viewed at [http://localhost:3000/admin/orders](http://localhost:3000/admin/orders).

## Repository branches

| Branch | Contents |
| --- | --- |
| [main](https://github.com/antalgebra/glitch-pizza-app/tree/main) | Repository overview |
| [3-posting-data](https://github.com/antalgebra/glitch-pizza-app/tree/3-posting-data) | Express application, forms, static assets, and request handling |

## Scope

This is a learning project. Orders are stored in memory and disappear when the process restarts. The order-list route has no authentication, and submitted values are interpolated into HTML without escaping. Use synthetic data in a local environment.

The project does not include persistent storage, payments, production access controls, or an implemented automated test suite.
