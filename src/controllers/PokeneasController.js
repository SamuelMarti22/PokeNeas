const os = require('os');
const PokeneasService = require('../services/PokeneasService');

class PokeneasController {

    static index(req, res) {
        const pokeneaData = PokeneasService.getRandomPokenea();
        const viewData = {
            containerId: os.hostname(),
            pokenea: pokeneaData
        };

        res.render('home', viewData);
    }
}

module.exports = PokeneasController;