const seedrandom = require('seedrandom');

const generateRandomNumber = (seed, count) => {
    let array = [];

    for (let i = 0; i < count; i++) {
        const generator = seedrandom(seed + i);
        const randomNumber = generator();
        array.push(randomNumber);
    }
}

module.exports = {generateRandomNumber};