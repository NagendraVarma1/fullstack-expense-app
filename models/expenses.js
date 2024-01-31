const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense-table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        defaultValue: '-',
    }
})

module.exports = Expense;