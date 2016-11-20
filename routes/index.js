const express = require('express');
const router = express.Router();
const cardsearch = require('./cardsearch.js');
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  cardsearch.cards()
  .then((result) => {
    console.log(result.data.cards);
    res.render('card', { title: 'Magic the Gathering', card: result.data.cards });
  })
  .catch((error) => {
    res.render('error', { title: 'Villa kom upp', error});
  });
});

module.exports = router;
