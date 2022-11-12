
require('dotenv').config()

const {Web3Storage, getFilesFromPath} = require('web3.storage')
const { File } = require('web3.storage')
 

 
 async function storeFiles (obj) {
    const token = process.env.API_TOKEN
    const client = new Web3Storage({ token });
    const files = makeFileObjects(obj)
   const cid = await client.put(files)
   console.log(cid)
 }

const obj = {name: "Hello"}
storeFiles(obj)


function makeFileObjects (obj) {

  
  const buffer = Buffer.from(JSON.stringify(obj))

  const files = [
    new File([buffer], 'veri.json')
  ]
  return files
}
