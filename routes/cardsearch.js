const axios = require('axios');
const mtg = require('mtgsdk');

const baseURL = process.env.BASEURL ||
                'https://api.magicthegathering.io/v1/cards';
const instance = axios.create({ baseURL });


function start() {
  // baseURL virkar ekki þannig línar fyrir neðan er backup á meðan síðan er
  // í vinnslu
  const instance = axios.create({ baseURL: "https://api.magicthegathering.io/v1/cards?page=316&pageSize=100"});
  return instance.get('/');
}


function cards(input) {
  console.log('input í cards: ', input);
  let link = '?name=' + input;
  console.log('baseURL: ', baseURL);
  link = baseURL + link;
  console.log('link: ', link);
  const instance = axios.create({ baseURL: link });
  return instance.get('/');
}

function test(input) {
  mtg.card.all({ name: input })
  .on('data', result => {
    console.log(result.name);
  });
  return result;
}


module.exports = {
  cards,
  start,
  test,
}
