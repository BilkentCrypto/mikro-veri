//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.7;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MerkleTree is Ownable {
    
    mapping (bytes32 => Veri) public citizenRoots;

    struct Veri {
        string ipfs;
        bytes32 rootHash;
    }

    function changeData(bytes32 _hashedMessage, string calldata _ipfs, bytes32 _newHash) public onlyOwner{
        citizenRoots[_hashedMessage] = Veri(_ipfs, _newHash);
    }

    function verifyData(bytes32 id, bytes32 _hashedMessage, bytes32[] calldata _merkleProof) public view returns (bool) {
        Veri storage data = citizenRoots[id];
        return MerkleProof.verify(_merkleProof, data.rootHash, _hashedMessage);
    }
}