const router = require('express')
const app = router.Router()
const multer = require('multer')
const papa = require('papaparse')

const {Companies} = require('../db/models')

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

app.post('/', upload.single('rates'), async (req, res, next) => {
  const file = req.file
  const fileString = file.buffer.toString()
  const csv = papa.parse(fileString)
  const {data} = csv
  try {
    for (let row of data) {
      const [companiesId, companiesName, date, rate, additionalInfo] = row
      const [insertedUpdatedCompany, _] = await Companies.upsert(
        {
          companiesId,
          companiesName
        },
        {
          returning: true
        }
      )
      await insertedUpdatedCompany.createStockRate({
        rate,
        date,
        additionalInfo
      })
    }
  } catch (err) {
    next(err)
    return
  }
  res.json({rows: data.length})
})

module.exports = app
