const express = require('express')
const router = express.Router()
const os = require("os")
const app = express()
const port = 80

router.get('/', "./src/controllers/PokeneasController.index");
router.get('/api/pokeneas', "./src/api/pokeneasApi.getRandomPokenea");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

