const axios = require("axios");

const customFetch = async (endpoint, paramsObject) => {
  const options = {
    method: "GET",
    url: `https://tasty.p.rapidapi.com/recipes/${endpoint}`,
    params: paramsObject,
    headers: {
      "X-RapidAPI-Key": "952b88b8e9mshe59f94dc5c03010p19a7aajsn71ca71073c9b",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { customFetch };
