const express = require('express')
const cors = require('cors')
const fs = require('fs');
const app = express()
const port = 3000

const jsonData = JSON.parse(fs.readFileSync('src/mapCredentials.json'));

app.get('/', (res) => {
  res.send("Home")
})

app.get('/mapCreds', cors(), (req, res) => {
  res.send(jsonData)
})

app.get('/StationSVGs/List', cors(), (req, res) => {
  const stationList = fs.readdir(`/src/`);
  res.send(stationList);
})

app.get('/StationSVGs/:station', cors(), (req, res) => {
  const station = req.params.station;
  const file = `/src/${station}.svg`;
  res.sendFile(__dirname + file);
})

app.listen(port, () => {
  console.log(`Running on localhost with port ${port}`)
})