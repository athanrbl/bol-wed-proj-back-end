const express = require('express')
const cors = require('cors')
const fs = require('fs');
const app = express()
const port = 3000

const jsonData = JSON.parse(fs.readFileSync('src/mapCredentials.json'));

app.get('/', (req, res) => {
  res.send("Home")
})

app.get('/mapCreds', cors(), (req, res, next) => {
  res.send(jsonData)
})

app.listen(port, () => {
  console.log(`Running on localhost with port ${port}`)
})