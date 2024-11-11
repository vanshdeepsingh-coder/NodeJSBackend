const express = require('express');
const userRoutes = require('./users/user.js');
const signupRoutes = require('./signup/signup.js');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/signup', signupRoutes);
module.exports = app;