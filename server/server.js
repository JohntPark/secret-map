const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const country = require('./routes/country');
const Products = require('./routes/products');
const newUsers = require('./routes/users');
const passport = require('passport');

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database config
const db = require('./config/keys').mongoURI;

// Connection to Mongoose
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Initialize Passport 
app.use(passport.initialize());
require('./config/passport')(passport)

const port = process.env.PORT || 5000;

// Allow CORS
app.use(cors());

// Verify JWT Token
// app.use((req,res,next) => {
//     const token = req.body.token
// })

app.use('/country', country);
app.use('/product', Products);
app.use('/auth', newUsers);

app.listen(port, () => console.log(`🏃🏃 Running on port: ${port}`));

module.exports = app;