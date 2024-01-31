const Expense = require('../models/expenses');
const sequelize = require('../util/database');

exports.postAddExpense = async (req, res, next) => {
    try {
        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        const data = await Expense.create({amount: amount, description: description, category: category})

        res.status(201).json({newExpenseDetail: data})
    }
    catch (err){
        res.status(500).json({error: err})
    }
}

exports.getAllExpenses = (req, res, next) => {
    Expense.findAll()
    .then((data) => {
        res.status(200).json({allExpenseDetails: data})
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}