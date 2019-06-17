const Sequelize = require('sequelize')
const db = require('../db')

const Companies = db.define(
  'companies',
  {
    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    index: [{unique: true, fields: ['companyId']}]
  }
)

module.exports = Companies
