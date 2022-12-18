const cron = require('node-cron');
const { callApi } = require('../api/api.js');
const { Moment } = require('../db/Model.js');

const cronDataReading = () => {
  return cron.schedule('*/10 6-23 19-26 Dec *', async () => {
    try {
      const response = await callApi(process.env.SOURCE_URL);
      const newMoment = new Moment({
        numberOfPerson: response.data.data.check_ins,
      });
      await newMoment.save();
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = { cronDataReading };
