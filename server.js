const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ErrorHandler = require("./utils/errorHandler")
const routes = require('./routes/records');
const db = require('./database/db');
const config = require('./config');

app.use(bodyParser.urlencoded({ extended : true }))
app.use( bodyParser.json())
app.use(express.json())

db.connect(config.mongo_url);

app.use('/', routes);
app.use((req, res, next)=> {
    return ErrorHandler.sendErrorResponse('NotFound', 'Invalid request Url', res);
});
app.listen(config.port, () => {
    console.log("Server is Up & Running");
});

module.exports = app;