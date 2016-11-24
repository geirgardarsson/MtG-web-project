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
  const lands = req.body.tala;
  const black = req.body.black;
  const blue = req.body.blue;
  const red = req.body.red;
  const green = req.body.green;
  const white = req.body.white;
  const grey = req.body.grey;
  const calculated = calculator.thisisit(black,blue,red,green,white,grey,lands);


  res.render('calc', { calculated });
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
  res.render('advancedsearch', { title: 'Ítarleg leit' });
});

module.exports = router;
