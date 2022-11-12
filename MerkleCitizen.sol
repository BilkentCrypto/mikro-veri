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
    bytes32 public merkleRoot = 0x56acbdfe222fc182d2a520ed8dfd463d8768708021037f3412e91a736448089b;

    function changeData(bytes32 _hashedMessage, string calldata _ipfs, bytes32 _newHash) public onlyOwner{
        citizenRoots[_hashedMessage] = Veri(_ipfs, _newHash);
    }
    
}