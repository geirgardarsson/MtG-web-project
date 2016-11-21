const axios = require('axios');
const mtg = require('mtgsdk');

const baseURL = process.env.BASEURL ||
                'https://api.magicthegathering.io/v1/cards';
const instance = axios.create({ baseURL });


function start() {
  // baseURL virkar ekki þannig línar fyrir neðan er backup á meðan síðan er
  // í vinnslu
  const instance = axios.create({ baseURL: "https://api.magicthegathering.io/v1/cards"});
  return instance.get('/');
}


function cards() {
  const instance = axios.create({ baseURL: "https://api.magicthegathering.io/v1/cards?page=316&pageSize=100"});
  return instance.get('/');
}

function filter() {
  return;
}


module.exports = {
  cards,
  start,
  filter,
}
