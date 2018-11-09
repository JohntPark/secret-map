const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const fs            = require('fs');
const bodyParser = require('body-parser');
const country = require('./routes/country');
const products = require('./routes/products');
const countryDatabase = require('./routes/countrydatabase')
const test = require('./routes/searchterm')
const path          = require('path');
const mongomorgan   = require('mongo-morgan')
const logger        = require('morgan');
const port = 5000;

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').load();
require('./config/db');


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});


// Logging
app.use(logger('dev')); //write to console
app.use(logger('combined', {stream: accessLogStream})); //writes to a file
app.use(mongomorgan(process.env.DB_URL, 'dev'));

// Allow CORS
app.use(cors());

app.use('/country', country);
app.use('/products', products);
app.use('/countrydatabase', countryDatabase);
app.use('/searchcategory', test)

app.listen(port, () => console.log(`🏃🏃 Running on port: ${port}`));

module.exports = app;