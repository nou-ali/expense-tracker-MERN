const express = require('express');
const router = express.Router();
const {getTransactions} = require('../controllers/transaction-control')

router
.route("/")
.get(getTransactions);

module.exports = router;