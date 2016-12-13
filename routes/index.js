const express = require('express');

const router = express.Router();
const cardsearch = require('./cardsearch.js');
const calculator = require('./calculator.js');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Magic the Gathering' });
});

router.post('/card', (req, res) => {
  const input = req.body.text;
  cardsearch.cards(input)
  .then((result) => {
    const card = result.data.cards;
    // console.log(card);
    card.reverse();
    res.render('card', { title: 'Magic the Gathering', card, yourCard: input });
  })
  .catch((error) => {
    res.render('error', { title: 'Error', message: error });
  });
});

router.get('/calc', (req, res) => {
  const checker = 7;
  res.render('calc', { title: 'Calculator', checker })
  .catch((error) => {
    res.render('error', { title: 'Error', message: error });
  });
});

router.post('/calc', (req, res) => {
  const lands = req.body.lands;
  let black = req.body.black;
  let blue = req.body.blue;
  let red = req.body.red;
  let green = req.body.green;
  let white = req.body.white;
  let grey = req.body.grey;
  let extra;
  const colors = [black, blue, red, green, white, grey, extra];
  const calculated = calculator.manacalc(colors, lands);
  const checker = calculator.checker(colors);

  let blackCalc = calculated[0];
  let blueCalc = calculated[1];
  let redCalc = calculated[2];
  let greenCalc = calculated[3];
  let whiteCalc = calculated[4];
  let greyCalc = calculated[5];
  extra = calculated[6];
  // console.log(`black:${black}`);
  // console.log(`blue${blue}`);
  // console.log(`red${red}`);
  // console.log(`green${green}`);
  // console.log(`white${white}`);
  // console.log(`grey${grey}`);
  // console.log(`extra${extra}`);
  // console.log(`checker:${checker}`);

  res.render('calc', { title: 'Calculator', lands, blackCalc, blueCalc, redCalc, greenCalc, whiteCalc, greyCalc, extra, black, blue, red, green, white, grey, checker });
});

router.get('/new', (req, res) => {
  res.render('', { title: 'Free for all'})
  .catch((error) => {
    res.render('error', { title: 'Error', message: error });
  });
});


router.get('/card/:nameset', (req, res) => {
  cardsearch.cardinfo(req.params.nameset)
  .then((result) => {
    res.render('info', { card: result.data.cards });
  })
  .catch((error) => {
    res.render('error', { title: 'Error', message: error });
  });
});

router.get('/advancedsearch', (req, res) => {
  res.render('advancedsearch', { title: 'Advanced search' });
});

router.post('/advancedsearch', (req, res) => {
  const parameters = [];

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
  parameters[10] = req.body.text;
  parameters[11] = req.body.noOtherColors;

  const linkelems = cardsearch.advanced(parameters);
  // console.log(linkelems);
  const link = cardsearch.advancedlink(linkelems);
  const info = cardsearch.getsearchedfor(linkelems);
  // console.log(info);
  // console.log('link: ', link);
  cardsearch.getlink(link)
  .then((result) => {
    const card1 = result.data.cards;
    card1.reverse();
    res.render('card', { title: 'Magic the Gathering', card: card1, yourCard: info });
  })
  .catch((error) => {
    res.render('error', { title: 'Error', message: error });
  });
});


module.exports = router;
