require("dotenv").config();
const ethers = require('ethers');
const config = require("./config.json");
const abi = require("./abi.json");

//0x8F1A55D83a3376ACC0f5549A3A3Eb1349664C7aa

async function changeData(id, rootHash, ipfsURL) {
    let provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
    const wallet = new ethers.Wallet( process.env.ETH_PRIVATE_KEY, provider )
    let contract = new ethers.Contract(config.contractAddress, abi, wallet);
    await contract.changeData(id, ipfsURL, rootHash);
}



module.exports = {changeData}

