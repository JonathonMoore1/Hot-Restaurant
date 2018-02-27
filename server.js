// Dependencies
var express = require('express');
var bp = require('body-parser');

// Express Configuration
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

// Router
require('./routes/apiRoutes.js');
require('./routes/htmlRoutes.js');

// Listener
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log('Listening on port ' + PORT);
})