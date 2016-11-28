const axios = require('axios');

const baseURL = process.env.BASEURL ||
                'https://api.magicthegathering.io/v1/cards';

function cards(input) {
  let link = `?name=${input}`;
  link = baseURL + link;
  const instance = axios.create({ baseURL: link });
  return instance.get(link);
}

function cardinfo(nameset) {
  const res = nameset.split('$');
  res[0] = `?name=${res[0]}&`;
  res[1] = `set=${res[1]}`;
  const infolink = baseURL + res[0] + res[1];
  const instance = axios.create({ baseURL: infolink }); // skoða seinna
  return instance.get(infolink);
}

function advanced(parameters) {
  const linkelems = [];
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
  // 10 = Text
  // 11 No other colors


  for (let i = 0; i < parameters.length; i++) {
    if (parameters[i] !== '') {
      if (parameters[i] !== undefined) {
        switch (i) {
          case 0:
            parameters[i] = `name=${parameters[i]}`;
            break;
          case 1:
            parameters[i] = `rarity=${parameters[i]}`;
            break;
          case 2:
            parameters[i] = `power=${parameters[i]}`;
            break;
          case 3:
            parameters[i] = `toughness=${parameters[i]}`;
            break;
          case 4:
            parameters[i] = `type=${parameters[i]}`;
            break;
          case 5:
            parameters[i] = `type=${parameters[i]}`;
            break;
          case 6:
            parameters[i] = `setName=${parameters[i]}`;
            break;
          case 7:
            parameters[i] = `artist=${parameters[i]}`;
            break;
          case 8:
            parameters[i] = `cmc=${parameters[i]}`;
            break;
          case 9:
            if (parameters[11] == 'true') {
              parameters[i] = `${'colors=' + '\"'}${parameters[i]}\"`;
              break;
            } else {
              parameters[i] = `colors=${parameters[i]}`;
              break;
            }
          case 10:
            parameters[i] = `text=${parameters[i]}`;
            break;
        }
        linkelems[x] = parameters[i];
        x += 1;
      }
    }
  }
  return linkelems;
}
// splittar stök í fylki á sama
function getsearchedfor(linkelems) {
  for (let i = 0; i < linkelems.length; i++) {
    const display = linkelems[i].split('=');
    console.log(`display er:${display}`);
    linkelems[i] = display[1];
    console.log(`linkelems er: ${linkelems}`);
  }
  return linkelems;
}

function advancedlink(linkelems, noc) {
  console.log('linkelms og noc: ', linkelems, noc);
  let link = '?';

  for (let i = 0; i < linkelems.length; i += 1) {
    link += `${linkelems[i]}&`;
  }

  link = link.substring(0, link.length - 1);
  console.log(link);
  return link;
}

function getlink(link) {
  link = baseURL + link;
  const instance = axios.create({ baseURL: link });
  return instance.get(link);
}

module.exports = {
  cards,
  cardinfo,
  advanced,
  advancedlink,
  getlink,
  getsearchedfor,
};
