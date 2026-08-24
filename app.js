// WEB-SERVER RUNNING NODE.JS VB-ENGINE
// ==================================================

// EXTERNAL LIBRARIES / MODULES
// --------------------------------------------------------------
const express = require('express');
const {engine} = require('express-handlebars');


// APPLICATION SETTINGS
// --------------------------------------------------------------
const PORT = process.env.PORT || 8080;

// create web app
const app = express();
app.use(express.static('public')); // Serves static (Image files, CSS files, JavaScript files) from the public folder

app.set('views', './views'); // Sets views folder for Handlebars templates


// Create View Engine for Handlebars
app.engine('handlebars', engine());

app.set('view engine', 'handlebars'); // Sets Handlebars as the default template engine

// URL ROUTES
// ----------------------------------

// Route to the home page
app.get('/', (req, res) => {
    // Testing data to be passed to the template
    let today = 'Wednesday';
    let weather = 'sunny';

    let dataToSend = {
        'dayName': today,
        'todaysweather': weather,
        'body': 'This is the body content.'
    };
    
    // Render home page
    res.render('index', dataToSend); // Render the 'index' template with the data
});

// URL ROUTE FOR ABOUT PAGE

app.get('/about', (req, res) => {
    // Testing data to be passed to the template
    let aboutInfo = {
        'body': 'This is the about page.'
    };

    // Render about page
    res.render('about', aboutInfo); // Render the 'about' template with the data
});

// RUN ENGINE AND LOG EVENTS
// --------------------------

app.listen(PORT)
console.log('Started server on port', PORT)

// node app.js // to run server
// ctrl + c // to stop server

