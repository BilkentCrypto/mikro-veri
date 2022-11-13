import config from "./config.json"
import abi from "./abi.json"
import keccak256 from "keccak256";
import {ethers} from "ethers";

async function retrieveFiles (tcKimlik) {

    let provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
    let contract = new ethers.Contract(config.contractAddress, abi, provider);
    let ipfsCid = await contract.citizenRoots(keccak256(tcKimlik));

    const url = "https://w3s.link/ipfs/" + ipfsCid.ipfs + "/veri.json"
    let veri = await fetch(url)
    let jsonVeri = await veri.json();
    return jsonVeri;
}


export default retrieveFiles;