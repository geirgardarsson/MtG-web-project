const express = require('express');
const router = express.Router();
const cardsearch = require('./cardsearch.js');
const calculator = require('./calculator.js');
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {title: 'Magic the Gathering' });
});

router.post('/card', (req, res, next) => {
  const input = req.body.text;
  cardsearch.cards(input)
  .then((result) => {
    res.render('card', { title: 'Magic the Gathering', card: result.data.cards, yourCard: input });
  })
  .catch((error) => {
    res.render('error', { title: 'Villa', message: 'Eitthvað kom uppá'});
  });
});

router.get('/calc', (req, res, next) => {
  calculator.calculator();
    //console.log("þetta eru result");
    res.render('calc', {title: 'GeirGatheringWizard', geir: 'þetta virkar'})
  .catch((error) => {
    res.render('error', { title: 'Villa', message: 'Eitthvað kom uppá'});
  });
});

/*router.post('/calc', (req, res) => {
  console.log('galdrar');
  const lands = req.body.lands;
  let black = req.body.black;
  let blue = req.body.blue;
  let red = req.body.red;
  let green = req.body.green;
  let white = req.body.white;
  let grey = req.body.grey;
  let colors = [black,blue,red,green, white, grey,]
  //let calculated = calculator.manacalc(black,blue,red,green,white,grey,lands);
  let calculated = calculator.manacalc(colors);
console.log("calculated:"+calculated)
console.log("calculated[3]:"+calculated[3])
  black = calculated[0];
  blue = calculated[1];
  red = calculated[2];
  green = calculated[3];
  white = calculated[4];
  grey = calculated[5];
//  console.log(calculated);
//  console.log(calculated[0]);



  res.render('calc', { black, blue, red, green, white, grey });
});*/

router.post('/calc', (req, res) => {
  console.log('galdrar');
  let lands = req.body.lands;
  console.log('lands í indexjs er:' + lands);
  let black = req.body.black;
  let blue = req.body.blue;
  let red = req.body.red;
  let green = req.body.green;
  let white = req.body.white;
  let grey = req.body.grey;
  let colors = [black,blue,red,green,white, grey,]
  //let calculated = calculator.manacalc(black,blue,red,green,white,grey,lands);
  let calculated = calculator.manacalc(colors, lands);
//console.log("calculated:"+calculated)
//console.log("calculated[3]:"+calculated[3])
/*for(let i=0;i<Colors.length; i++){
  if (Colors[i] !== '') {
    if (Colors[i] !== undefined) {
      total=total+Colors[i];
    }
  }
}*/

  black = calculated[0];
  blue = calculated[1];
  red = calculated[2];
  green = calculated[3];
  white = calculated[4];
  grey = calculated[5];
//  console.log(calculated);
//  console.log(calculated[0]);



  res.render('calc', { black, blue, red, green, white, grey });
});

router.get('/card/:nameset', (req, res) => {
  cardsearch.cardinfo(req.params.nameset)
  .then((result) => {
    res.render('info', { card: result.data.cards });
  })
  .catch((error) => {
    res.render('error', { title: 'Villa', message: 'Eitthvað kom uppá' });
  });
});

router.get('/advancedsearch', (req, res) => {
  res.render('advancedsearch', { title: 'Ítarleg leit' });
});

router.post('/advancedsearch', (req, res) => {

  let parameters = [];

  parameters[0] = req.body.name;
  parameters[1] = req.body.rarity;
  parameters[2] = req.body.po + req.body.wer;
  parameters[3] = req.body.tough + req.body.ness;
  parameters[4] = req.body.type;
  parameters[5] = req.body.subtype;
  parameters[6] = req.body.setName;
  parameters[7] = req.body.artist;
  parameters[8] = req.body.cm + req.body.cost;
  parameters[9] = req.body.color;

  let linkelems = cardsearch.advanced(parameters);
  console.log('linkelems í index.js: ', linkelems);
  let link = cardsearch.advancedlink(linkelems, req.body.noOtherColors);
  console.log('link: ', link);
  cardsearch.getlink(link)
  .then((result) => {
    res.render('card', { title: 'Magic the Gathering', card: result.data.cards, yourCard: link });
  })
  .catch((error) => {
    res.render('error', { title: 'Villa', message: 'Eitthvað kom uppá'});
  });
});

module.exports = router;
