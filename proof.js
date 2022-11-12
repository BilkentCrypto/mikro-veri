const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const fs = require("fs");
const addresses = require("./addresses.json");
const CryptoJS = require('crypto-js');

const allowlist = addresses.addresses;
console.log(allowlist.length);

const encryptWithAES = (text) => {
    const passphrase = '123';
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  };

const leafNodes = allowlist.map(data => encryptWithAES(data));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const data = JSON.stringify(merkleTree);

// write JSON string to a file
fs.writeFile('merkletree.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("Addresses are saved as JSON successfully.");
});


const rootHexHash = merkleTree.getHexRoot();
//const rootHash = merkleTree.getRoot();


console.log("Whitelist Merkle Tree: \n", merkleTree.toString());
console.log(rootHexHash);