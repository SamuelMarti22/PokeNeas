const PokeneasService = require('../services/PokeneasService');

class PokeneasApiController {

  static getRandomPokenea(req, res) {
    const pokenea = PokeneasService.getRandomPokenea();
    res.json(pokenea);
  }
}

module.exports = PokeneasApiController;