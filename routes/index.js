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
  //})
  .catch((error) => {
    res.render('error', { title: 'Villa', message: 'Eitthvað kom uppá'});
  });
});

router.post('/calc', (req, res) => {
  console.log('galdrar');
  const numberFromInput = req.body.tala;
  console.log(numberFromInput);
  console.log(req.body.tala);
  //const numbers = multiplier.parseNumber(numberFromInput);
  //const number = multiplier.multiply(numbers);
  //const factors = multiplier.factorize(number);
  res.render('calc', { geir: numberFromInput });
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
  parameters[10] = req.body.noOtherColors;

  console.log('parameters: ', parameters);

  console.log('noc:', req.body.noOtherColors);

  console.log('name-test: ', req.body.name);
  console.log('rarity-test: ', req.body.rarity) //virkar
  console.log('power-test: ', req.body.po + req.body.wer);
  console.log('toughness-test: ', req.body.tough + req.body.ness);
  console.log('cardtype-test: ', req.body.type);
  console.log('subtype-test: ', req.body.subtype);
  console.log('setname-test: ', req.body.setName);
  console.log('artist-test: ', req.body.artist)
  console.log('cmc-test: ', req.body.cm + req.body.cost);
  console.log('color-test: ', req.body.color);
  if (req.body.color === undefined) {
    console.log('jeboi');
  }
  if (req.body.name === '') {
    console.log('jeboooooi');
  }
  console.log(req.body.po + req.body.wer);

  cardsearch.advanced(parameters);

  res.render('advancedsearch', { title: 'Ítarleg leit' });
})

module.exports = router;
