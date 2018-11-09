const express = require('express');
const router = express.Router();

const {
    getProduct,
    findOneProduct,
    newProduct,
    removeProduct,
    editProduct,
    addCountryToProduct,
    removeCountryFromProduct,
} = require('../controllers/products')

// Get all products in the database
router.get('/', getProduct);
router.get('/:name', findOneProduct);

// Create a product and add to database
router.post('/new', newProduct);

// Delete a product from the database
router.delete('/:id', removeProduct);

// Edit a product in the database
router.put('/edit', editProduct);

// Add a product to a country
router.post('/addcountry', addCountryToProduct);

// Remove a product to a country
router.post('/removecountry', removeCountryFromProduct);

module.exports = router;