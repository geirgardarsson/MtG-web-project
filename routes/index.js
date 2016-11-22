const express = require('express');
const router = express.Router();
const cardsearch = require('./cardsearch.js');
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res, next) => {
  cardsearch.start()
  .then((result) => {
    // console.log(result.data.cards);
    res.render('index', {title: 'Magic the Gathering', card: result.data.cards });
  })
  .catch((error) => {
    res.render('error', { title: 'Villa kom upp', message: 'U n00b'});
  });
});

router.post('/card', (req, res, next) => {
  const input = req.body.text;
//  console.log('input: ', input);
  cardsearch.cards(input)
  .then((result) => {
     //console.log('result: ', result);
    cardsearch.test(input);
    // console.log('result: ', outcome.name);
    res.render('card', { title: 'Magic the Gathering', card: result.data.cards, yourCard: input });
  })
  .catch((error) => {
    res.render('error', { title: 'Villa', message: 'Eitthvað kom uppá'});
  });
});


module.exports = router;
