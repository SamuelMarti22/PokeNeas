const { pokeneas } = require('../data/pokeneas.js');

class PokeneasApiController {
  static getRandomPokenea() {
    const number = Math.floor(Math.random() * pokeneas.length);
    return {
      id: pokeneas[number].id,
      name: pokeneas[number].name,
      height: pokeneas[number].height,
      skill: pokeneas[number].skill,
      imageUrl: pokeneas[number].imageUrl,
      phrase: pokeneas[number].phrase
    };
  }
}

module.exports = PokeneasApiController;