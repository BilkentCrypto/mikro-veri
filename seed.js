const seedrandom = require('seedrandom');

const generator = seedrandom('32121321321');
const randomNumber = generator();

console.log(randomNumber);