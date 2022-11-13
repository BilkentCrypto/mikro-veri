import { Web3Storage, getFilesFromPath } from 'web3.storage'

async function retrieveFiles () {

  const token = process.env.API_TOKEN
  const client = new Web3Storage({ token })

  const cid =
     'bafybeibt3f4fuzpkyx27fkwds3ernatihvahmanc4rg44schcghdav5qui'

  const res = await client.get(cid)
  const files = await res.files()

  for (const file of files) {
    console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)
  }

  let reader = new FileReader();
  reader.readAsText(files[0]);
  reader.onload = function() {
    console.log(reader.result);
  };
}

export default retrieveFiles;