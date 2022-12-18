const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/schedule')
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log('Connected to database! Name: ', dbName);
  })
  .catch((err) => console.log(err));
