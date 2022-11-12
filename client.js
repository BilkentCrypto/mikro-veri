//SHOULD BE USED FOR NODE.JS

const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const merkleTree = require("./merkletree.json");
const CryptoJS = require('crypto-js');

const encryptWithAES = (text) => {
  const passphrase = '123';
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext) => {
    const passphrase = '123';
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

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
    const allowed_addr = keccak256(leaf);
    const hexProof = tree.getHexProof(allowed_addr);

    console.log(JSON.stringify(hexProof));

    return tree.verify(hexProof, allowed_addr, rootHash);
}

const result = isWhitelisted("Ankara");
console.log(result);