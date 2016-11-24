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

function advanced(parameters) {

  let linkelems = [];
  let x = 0;

  // 0 = Name
  // 1 = Rarity
  // 2 = Power
  // 3 = Toughness
  // 4 = Type
  // 5 = Subtype
  // 6 = Setname
  // 7 = Artist
  // 8 = Cmc
  // 9 = Color
  // 10 No other colors


  for (let i = 0; i < parameters.length; i++) {
    if (parameters[i] !== '') {
      if (parameters[i] !== undefined) {
        switch(i) {
          case 0:
            parameters[i] = 'name=' + parameters[i];
            break;
          case 1:
            parameters[i] = 'rarity=' + parameters[i];
            break;
          case 2:
            parameters[i] = 'power=' + parameters[i];
            break;
          case 3:
            parameters[i] = 'toughness=' + parameters[i];
            break;
          case 4:
            parameters[i] = 'type=' + parameters[i];
            break;
          case 5:
            parameters[i] = 'type=' + parameters[i];
            break;
          case 6:
            parameters[i] = 'setName=' + parameters[i];
            break;
          case 7:
            parameters[i] = 'artist=' + parameters[i];
            break;
          case 8:
            parameters[i] = 'cmc=' + parameters[i];
            break;
          case 9:
            parameters[i] = 'colors=' + parameters[i];
            break;
        }
        linkelems[x] = parameters[i];
        x += 1;
      }
    }
  }
  return linkelems;
}

function advancedlink(linkelems, noc) {
  console.log('linkelms og noc: ', linkelems, noc);
  let link = '';
  return link;
}


module.exports = {
  cards,
  cardinfo,
  advanced,
  advancedlink,
}
