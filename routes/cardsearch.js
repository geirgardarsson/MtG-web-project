const axios = require('axios');

const baseURL = process.env.BASEURL ||
                'https://api.magicthegathering.io/v1/cards';
const instance = axios.create({ baseURL });

function cards() {
  const instance = axios.create({baseURL: "https://api.magicthegathering.io/v1/cards"});
  return instance.get('/');
}

module.exports = {
  cards,
}
