const axios = require('axios');

const baseURL = process.env.BASEURL ||
                'https://api.magicthegathering.io/v1/cards';
const instance = axios.create({ baseURL });


function start() {
  // baseURL virkar ekki þannig línar fyrir neðan er backup á meðan síðan er
  // í vinnslu
  const instance = axios.create({ baseURL: "https://api.magicthegathering.io/v1/cards?set=ktk"});
  return instance.get('/');
}


function cards() {
  const instance = axios.create({ baseURL: "https://api.magicthegathering.io/v1/cards?set=ktk"});
  return instance.get('/');
}

module.exports = {
  cards,
  start,
}
