const express = require('express');
const router = express.Router();
const cardsearch = require('./cardsearch.js');
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Magic the Gathering'})
  .catch((error) => {
    res.render('error', { title: 'Villa kom upp', message: 'U n00b'});
  });
});






router.get('/card', (req, res, next) => {
  cardsearch.cards()
  .then((result) => {
    console.log(result.data.cards);
    res.render('card', { title: 'Magic the Gathering', card: result.data.cards });
  })
  .catch((error) => {
    res.render('error', { title: 'Villa kom upp', message: 'U don goof'});
  });
});

// annað router.get function hér

module.exports = router;
