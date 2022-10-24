var express = require('express')
var router = express.Router()
const db = require('../model/helper')

async function getPlants() {
  try {
    let results = await db(
      'SELECT id, electrical_capacity, energy_source_level_2, lon, lat, as_of_year FROM mytable WHERE id < 1500;'
    )
    return results.data
  } catch (err) {
    return err
  }
}

//localhost:5002/api
router.get('/', (req, res) => {
  res.send('Welcome to the API')
})

//localhost:5002/power-plants
router.get('/power-plants', async (req, res) => {
  const results = await getPlants()
  res.send(results)
  // Send back the full list of items
})

/*router.post('/power-plants', async (req, res) => {
  // The request's body is available in req.body
  const { text } = req.body
  await db(`INSERT INTO items (text, complete) VALUES ("${text}", 0);`)
  // If the query is successfull you should send back the full list of items
  const results = await getPlants()
  res.send(results)
})

router.put('/power-plants:todo_id', async (req, res) => {
  console.log('REQ.PARAMS', req.params)
  // URL params are available in req.params
  await db(
    `UPDATE items SET complete = !complete WHERE id=${req.params.todo_id};`
  )

  // If the query is successfull you should send back the full list of items
  const results = await getPlants()
  res.send(results)
})
*/
module.exports = router
