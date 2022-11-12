require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const crypto = require('crypto');
const {encryptWithAES, decryptWithAES} = require('./Cryptography/encryption');
const { generateDataNonces } = require("./Cryptography/dataGenerator");
const { generateMerkleTree } = require("./Cryptography/merkleTreeFunctions.js");
const {storeJSON} = require('./ipfs_store.js');

const testData = require('./newData.json');
const { changeData } = require("./web3/web3eDevletSunucusu");

const PORT = process.env.PORT || 3000
app.use(cors());


const database = new Map();

async function setDatabase(tcKimlik, dataPrivateKey) {
    database.set(tcKimlik, dataPrivateKey);
}

async function getDatabase() {
    let output;
    output = database.get(tcKimlik);
    return output;
}

async function setContract(tcKimlik, rootHash, ipfsCid) {
    await changeData(tcKimlik, rootHash, ipfsCid);
}

const updateCitizenData = async (tcKimlik, dataArray) => {
    const dataPrivateKey = crypto.randomUUID(); 
    console.log("dataPrivateKey", dataPrivateKey)

    const {noncedArray, hashedArray} = generateDataNonces(dataArray, dataPrivateKey);
    const encryptedData = encryptWithAES( JSON.stringify(noncedArray), dataPrivateKey );
    
    const tree = generateMerkleTree(hashedArray);

    const uploadData = {
        merkleTree: tree,
        sifreliVeri: encryptedData,
    }
    const ipfsCid = await storeJSON( uploadData );
    //ethers'de kontratı imzala ve database'e kaydet

    const rootHash = tree.getHexRoot();

    await setDatabase(tcKimlik, dataPrivateKey);
    await setContract(tcKimlik, rootHash, ipfsCid);
    return ipfsCid;
}

app.post("/update-citizen-data", async (req, res) => {
    if (req.headers.authorization !== process.env.AUTH_KEY) {
        return res.status(403).json({ error: 'No credentials sent!' }).end();
    } else {

        const tcKimlik = req.headers.kimlik;
        const dataArray = req.headers.data;
        
        await updateCitizenData(tcKimlik, dataArray);        

        res.sendStatus(200).end();
    }


})

async function test() {
    let cid = await updateCitizenData("100", testData)
    console.log("cid", cid)
}
test()

app.listen(PORT)


