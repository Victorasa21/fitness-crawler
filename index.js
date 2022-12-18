const express = require('express');

const app = express();

require('dotenv').config();

const { cronDataReading } = require('./app/cron/cronReading.js');

require('./app/db/db.js');

app.get('/health-check', (req, res) => {
  res.json({ msg: 'All good!' });
});

cronDataReading();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
