const { generateDataNonces } = require( "./Cryptography/dataGenerator")
const testData = require("./newData.json");

console.log(generateDataNonces( testData, 16216 ))