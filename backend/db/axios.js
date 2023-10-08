const axios = require("axios");

const customFetch = async (endpoint, paramsObject) => {
  const options = {
    method: "GET",
    url: `https://tasty.p.rapidapi.com/recipes/${endpoint}`,
    params: paramsObject,
    headers: {
      "X-RapidAPI-Key": "e1d3e94607msh1632b8f53337dffp109fdajsn3503455670fa",
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
