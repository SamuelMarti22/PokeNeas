const express = require('express')

const app = express()
const port = 8080

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const PokeneasController = require('./src/controllers/PokeneasController');
const PokeneasApiController = require('./src/api/pokeneasApiController');

app.get('/', (req, res) => {
  PokeneasController.index(req, res);
});

app.get('/api/pokenea', (req, res) => {
  res.json(PokeneasApiController.getRandomPokenea());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

