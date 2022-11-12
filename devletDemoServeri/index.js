require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const crypto = require('crypto');
const {encryptWithAES, decryptWithAES} = require('./Cryptography/encryption')

const PORT = process.env.PORT || 3000
app.use(cors());

const database = {}


app.post("/update-citizen-data", async (req, res) => {
    if (req.headers.authorization !== process.env.AUTH_KEY) {
        return res.status(403).json({ error: 'No credentials sent!' }).end();
    } else {

        const data = req.headers.data;
        const dataPrivateKey = crypto.randomUUID(); 
        
        res.sendStatus(200).end();
    }


})


