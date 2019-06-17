const Companies = require('./companies')
const StockRate = require('./stockRate')

Companies.hasMany(StockRate)
StockRate.belongsTo(Companies)

module.exports = {
  Companies,
  StockRate
}
