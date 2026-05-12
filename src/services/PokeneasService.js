const { pokeneas } = require('../data/pokeneas.js');

class PokeneasService {

    static getRandomPokenea() {
        const number = Math.floor(Math.random() * pokeneas.length);
        const pokenea = {
            id: pokeneas[number].id,
            name: pokeneas[number].name,
            height: pokeneas[number].height,
            skill: pokeneas[number].skill,
            imageUrl: pokeneas[number].imageUrl,
            phrase: pokeneas[number].phrase
        };
        return pokenea;
    }
}

module.exports = PokeneasService;