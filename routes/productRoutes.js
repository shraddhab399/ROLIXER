const express = require('express');
const router = express.Router();
const ProductTransaction = require('../models/ProductTransaction');
const axios = require('axios');

// API to initialize the database
router.get('/init', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;
        await ProductTransaction.insertMany(transactions);
        res.status(200).json({ message: 'Database initialized with seed data' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to initialize the database' });
    }
});

// Other APIs for search, statistics, bar chart, and pie chart...

module.exports = router;
