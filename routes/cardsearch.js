const axios = require('axios');
const mtg = require('mtgsdk');

const baseURL = process.env.BASEURL ||
                'https://api.magicthegathering.io/v1/cards';
const instance = axios.create({ baseURL });

function cards(input) {
  //console.log('input í cards: ', input);
  let link = '?name=' + input;
  //console.log('baseURL: ', baseURL);
  link = baseURL + link;
  console.log('link: ', link);
  const instance = axios.create({ baseURL: link });
  return instance.get(link);
}

function cardinfo(nameset) {
  let res = nameset.split('$');
  res[0] = '?name=' + res[0] + '&';
  res[1] = 'set=' + res[1];
  let infolink = baseURL + res[0] + res[1];
  const instance = axios.create({ baseURL: infolink });
  return instance.get(infolink);
}

module.exports = {
  cards,
  cardinfo,
}
