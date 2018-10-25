const axios = require('axios');

module.exports = async (root, args) => await axios
  .get(`https://swapi.co/api/people/${args.id}`)
  .then(response => response.data);