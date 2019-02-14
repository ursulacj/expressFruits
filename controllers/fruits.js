const express = require('express');
const router = express.Router();
const Fruits = require('../models/fruit');

router.get('/', function(req, res) {
    res.send(`Here's the fruit`);
})
