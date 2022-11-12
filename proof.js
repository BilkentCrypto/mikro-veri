const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const fs = require("fs");
const addresses = require("./addresses.json");
const CryptoJS = require('crypto-js');

const allowlist = addresses.addresses;
const passphrase = '123';

const encryptWithAES = (text) => {
    const passphrase = '123';
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  };

const leafNodes = allowlist.map(data => {
    return data + " " + keccak256(passphrase);
});
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
console.log(encryptWithAES("Ankara"));


let leaves = [];

for (let leaf in merkleTree.leaves) {
    //console.log(merkleTree.leaves[leaf].data.toString("hex"));
    leaves.push(Buffer.from(merkleTree.leaves[leaf].data));
}

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

//Root of the Merkle tree in Buffer
const rootHash = tree.getRoot();

//Root of the Merkle tree in hex format
console.log(tree.getHexRoot());

function isWhitelisted(data) {
    const leaf = encryptWithAES(data);
    console.log(leaf)
    const allowed = keccak256(leaf);
    const hexProof = tree.getHexProof(allowed);

    console.log(JSON.stringify(hexProof));

    return tree.verify(hexProof, allowed, rootHash);
}

const result = isWhitelisted("Ankara");