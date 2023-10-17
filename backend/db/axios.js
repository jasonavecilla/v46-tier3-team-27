const axios = require("axios");

const customFetch = async (endpoint, paramsObject) => {
  const options = {
    method: "GET",
    url: `${process.env.RAPID_API_URL}/${endpoint}`,
    params: paramsObject,
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { customFetch };
