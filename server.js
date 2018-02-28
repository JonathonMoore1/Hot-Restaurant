// Dependencies
var express = require('express');
var bp = require('body-parser');
var path = require('path');

// Express Configuration
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, './routes/public/home.html'));
})

// Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log('Listening on port ' + PORT);
})