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

// Create View Engine for Handlebars
app.engine('handlebars', engine());
app.set('view engine','handlebars');

// URL ROUTES
// ----------------------------------

// Route to the home page
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'My Handlebars Page',
        description: 'This is a simple Handlebars page.'
    });
});


// RUN ENGINE AND LOG EVENTS
// --------------------------


