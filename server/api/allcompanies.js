const router = require('express')
const app = router.Router()

const {Companies, StockRate} = require('../db/models')

app.get('/', async (req, res, next) => {
  try {
    const allCompanyRates = await Companies.findAll({
      include: [{model: StockRate}]
    })
    res.send(allCompanyRates)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const {name, id} = req.body

  if (!(name && id)) {
    const err = new Error()
    err.status = 400
    next(err)
    return
  }
  try {
    const newCompany = await Companies.create(
      {
        companyId: id,
        companyName: name
      },
      {
        returning: true
      }
    )
    res.send(newCompany)
  } catch (err) {
    next(err)
  }
})

module.exports = app
