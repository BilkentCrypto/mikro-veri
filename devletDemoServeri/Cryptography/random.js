const seedrandom = require('seedrandom');

const generateRandomNumbers = (seed, count) => {
    let array = [];

    for (let i = 0; i < count; i++) {
        const generator = seedrandom(seed + i);
        let randomNumber = generator() * 1000000000;
        randomNumber = Math.floor(randomNumber)
        array.push(randomNumber);
    }

    return array;
}

module.exports = {generateRandomNumbers};