// Load Data
var tableData = require('../data/tableData.js');
var waitingData = require('../data/waitinglistData.js');

module.exports = function(app) {
    app.get('/api/tables', function(req, res) {
        res.json(tableData);
    })

    app.get('/api/waitlist', function(req, res) {
        res.json(waitingData);
    })

    app.post('/api/tables', function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
        }
        else {
            waitingData.push(req.body);
        }
    })
}