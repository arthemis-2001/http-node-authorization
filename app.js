const express = require("express"),
  app = express(),
  path = require('path'),
  mongoose = require("mongoose"),
  userRoutes = require("./routes/user");

require("dotenv").config();

// Serve static files in the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

//Connect to database
try {
  mongoose.connect("mongodb://localhost:27017/usersdb");
  console.log("connected to db");
} catch (error) {
  handleError(error);
}
process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

//using user route
app.use(userRoutes);

//setup server to listen on port 8080
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is live on port ${process.env.PORT || 8080}`);
});
