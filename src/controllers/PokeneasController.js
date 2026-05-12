const os = require('os');
const { getRandomPokenea } = require('../api/pokeneasApiController');


function index(req, res) {
    const pokeneaData = getRandomPokenea();
    const viewData = {
        containerId: os.hostname(),
        pokenea: pokeneaData
    };

    res.render('home', viewData);
}

module.exports = { index };