const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-main', 'root', 'Veera@512', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;