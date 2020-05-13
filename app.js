const express = require('express');
const serverless = require('serverless-http');
const app = express();
const config = require('./app/config/environment');
const http = require('http').Server(app);

// App configuration
require('./app/config')(app);

// Routes Registration
app.use('/', require('./app/api/routes.js'));

// Server start
let server = http.listen(config.port, () => {
    console.log('Express server listening on %d, in %s mode', config.port, config.env);
});

module.exports = server; // For testing

module.exports.handler = serverless(app);
