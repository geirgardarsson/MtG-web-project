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
  res.render('calc');
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
  console.log('name-test: ', req.body.name);
  console.log('rarity-test: ', req.body.rarity) //virkar
  console.log('power-test: ', req.body.po, req.body.wer);
  console.log('toughness-test: ', req.body.tough, req.body.ness);
  console.log('cardtype-test: ', req.body.type);
  console.log('subtype-test: ', req.body.subtype);
  console.log('setname-test: ', req.body.setName);
  console.log('cmc-test: ', req.body.cm, req.body.cost);
  console.log('color-test: ', req.body.colors);
  res.render('advancedsearch', { title: 'Ítarleg leit' });
})

module.exports = router;
