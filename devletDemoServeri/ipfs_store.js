
require('dotenv').config()
const {Web3Storage, File} = require('web3.storage')
 
 async function storeJSON (obj) {
    const token = process.env.API_TOKEN
    const client = new Web3Storage({ token });
    const files = makeFileObjects(obj)
    const cid = await client.put(files)
    return cid;
 }


function makeFileObjects (obj) {  
  const buffer = Buffer.from(JSON.stringify(obj))
  const files = [
    new File([buffer], 'veri.json')
  ]
  return files
}

module.exports =  {storeJSON}
