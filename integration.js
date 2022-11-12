//require("dotenv").config();
const ethers = require('ethers');
const config = require("./config.json");
const abi = require("./abi.json");

//0x6449A2F673FA357aA2aB0A8eAc51e861D67567d1

let provider = new ethers.providers.JsonRpcProvider("http://176.236.121.139:9656/ext/bc/C/rpc");

async function getBalance(address) {
    let balance = await provider.getBalance(address);
    console.log(ethers.utils.formatEther(balance));
}

let balance = getBalance("0x203560aCa0Aa5AAc09d9708CE29b60Aa3E4366A8");
console.log(balance.toString());

async function changeData(id, rootHash, ipfsURL) {
    let contract = new ethers.Contract(config.address, abi, provider);
    await contract.changeData(id, rootHash, ipfsURL);
}

//let randomWallet = ethers.Wallet.createRandom();
//console.log(randomWallet.privateKey);
//console.log(randomWallet);