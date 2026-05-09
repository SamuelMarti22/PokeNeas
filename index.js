const express = require('express')
const os = require("os")
const app = express()
const port = 80

app.set('view engine', 'ejs');
app.set('views', './views');

const PokeneasController = require('./src/controllers/PokeneasController');
const PokeneasApi = require('./src/api/pokeneasApi');

app.get('/', (req, res) => {
  PokeneasController.index(req, res);
});

app.get('/api/pokeneas', (req, res) => {
  PokeneasApi.getRandomPokenea(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

