import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

const generateMerkleTree = (dataArray) => {
    const data = dataArray.map( value => keccak256(value) );
    const merkleTree = new MerkleTree(data, keccak256, { sortPairs: true });
    return merkleTree;
}

const verifyMerkleTree = (tree, dataToVerify) => {
    const leaf = dataToVerify;
    const allowed_addr = keccak256(leaf);
    const hexProof = tree.getHexProof(allowed_addr);
    const rootHash = tree.getRoot();
    return tree.verify(hexProof, allowed_addr, rootHash);
}

const generateMerkleProof = ( tree, dataToVerify ) => {
    const leaf = dataToVerify;
    const allowed_addr = keccak256(leaf);
    const hexProof = tree.getHexProof(allowed_addr);
    const rootHash = tree.getRoot();
    return {
        hexProof,
        rootHash,
    }
} 


export { generateMerkleTree, verifyMerkleTree, generateMerkleProof}

