const express = require('express')
const os = require("os") 
const app = express()
const port = 80

app.set('view engine', 'ejs');
app.set('views', './views');

router.get('/', "./src/controllers/PokeneasController.index");
router.get('/', "./src/controllers/PokeneasController.index");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

