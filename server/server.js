const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./api');

// listen on port 5000 by default
// override with env param
require('dotenv').config()
const port = process.env.PORT || 5000
app.listen(port, () => 
    console.log(`Listening on port ${port}`)
);

// setup express
app.use(cors())
app.use(express.json())

// listen to get request at /api/getProof
app.get('/api/getProof', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send(api(req.query.address));
})