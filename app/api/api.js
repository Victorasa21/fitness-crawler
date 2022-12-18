const axios = require('axios');

const callApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = { callApi };
