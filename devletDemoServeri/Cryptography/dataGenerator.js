const {generateRandomNumbers} = require('./random.js')
const keccak256 = require("keccak256");

const generateDataNonces = (dataArray, dataPrivateKey) => {

    const nonces = generateRandomNumbers(dataPrivateKey, dataArray.length );
    const noncedArray = dataArray.map( (data, index) => {
        return {
            veriTuru: data.veriTuru,
            veriIcerigi: data.veriIcerigi,
            nonce: nonces[index]
        }
    } )

    const hashedArray = noncedArray.map((data) => {
        return keccak256( JSON.stringify(data) );
    })

    return {
        noncedArray: noncedArray,
        hashedArray: hashedArray
    }
}

module.exports = {generateDataNonces}