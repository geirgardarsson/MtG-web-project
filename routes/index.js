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
    res.render('calc', {title: 'GeirGatheringWizard', geir: 'þetta virkar'})
  .catch((error) => {
    res.render('error', { title: 'Villa', message: 'Eitthvað kom uppá'});
  });
});


router.post('/calc', (req, res) => {
  let lands = req.body.lands;
  let black = req.body.black;
  let blue = req.body.blue;
  let red = req.body.red;
  let green = req.body.green;
  let white = req.body.white;
  let grey = req.body.grey;
  let colors = [black,blue,red,green,white, grey,]
  let calculated = calculator.manacalc(colors, lands);
  let checker= calculator.checker(colors);

  black = calculated[0];
  blue = calculated[1];
  red = calculated[2];
  green = calculated[3];
  white = calculated[4];
  grey = calculated[5];
  console.log("black:" + black);
  console.log("blue" + blue);
  console.log("red" + red);
  console.log("green" + green);
  console.log("white" +white);
  console.log("grey" +grey);
  console.log("checker:" + checker);

  res.render('calc', { black, blue, red, green, white, grey, checker });
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
