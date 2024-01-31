const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expense');

router.post('/add-expense', expenseController.postAddExpense);
router.get('/get-expense', expenseController.getAllExpenses);

module.exports = router;