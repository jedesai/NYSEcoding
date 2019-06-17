const Sequelize = require('sequelize')
const db = require('../db')

const StockRate = db.define('stockRate', {
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  additionalInfo: {
    type: Sequelize.STRING(256),
    allowNull: false
  }
})

module.exports = StockRate
