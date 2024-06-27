# HTTP authorization project
This project provides a basic HTTP authorization and authentication functionality using Express.js server, JWT and MongoDB database.

## Installation
First, make sure you have [MongoDB Community server](https://docs.mongodb.com/manual/administration/install-community/) installed and running on your system.

Then clone this repo to your machine and install all dependencies:
```bash
git clone https://github.com/arthemis2001/HTTP-authorization-project.git
npm install
```

You must also configure the `.env` file in the root directory to include the following variables:
* `PORT` - the port the server is running on (optional, default is 8080)
* `API_SECRET` - an API secret key used for the authentication middleware. To generate it, simply run `node generate_secret.js` and copy the output.

## Usage
The entry point for this application is `app.js`. Run it with `nodemon app.js`, it will run on http://localhost/PORT (default is http://localhost:8080).

The application is just a simple HTTP authorization service consisting of three HTML pages:
* `login.html` - a page for logging in.
* `register.html` - a page for registering a new user.
* `main.html` - the main page that can be only accessible if a user is logged in. It is taken from [Codepen](https://codepen.io/Live-Canal-475/pen/eYbYJXL).

## Structure
