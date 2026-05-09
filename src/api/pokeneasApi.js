const { pokeneas } = require('../data/pokeneas.js');

function getRandomPokena() {
    const number = Math.floor(Math.random() * pokeneas.length);

    const pokeneaData = {
        id: pokeneas[number].id,
        name: pokeneas[number].name,
        height: pokeneas[number].height,
        skill: pokeneas[number].skill,
        imageUrl: pokeneas[number].imageUrl,
        phrase: pokeneas[number].phrase
    };

    return pokeneaData;
}

module.exports = { getRandomPokena };