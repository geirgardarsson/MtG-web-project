
// finnur staðsetningu hæstagildis í fylki og skilar pointernum
function maxpoint(mana) {
  let max = 0;
  let maxpointer;
  for (let i = 0; i < mana.length - 1; i += 1) {
    if (mana[i] > max) {
      max = mana[i];
      maxpointer = i;
    }
  }
  return maxpointer;
}


function manacalc(OriginalColors, lands) {
  const Colors = OriginalColors;
  const land = (parseInt(lands, 10));
  // console.log(`lands er${lands}`);
  // skráir inn gildin sem tölur
  for (let i = 0; i < Colors.length; i += 1) {
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined) {
        Colors[i] = (parseInt(Colors[i], 10));
      }
    }
  }
  // console.log(`þetta eru gildin sem voru slegin inn:${Colors}`);
  let numofcolors = 0;
  let total = 0;
  // reiknar út heildar manatákna og fjölda lita
  for (let i = 0; i < Colors.length; i += 1) {
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined) {
        total += Colors[i];
        numofcolors += 1;
      }
    }
  }
  // console.log(`numofcolors er:${numofcolors}`);
  const mana = [0, 0, 0, 0, 0, 0, 0]; // bætt við auka 0 í test
  // console.log(`total er:${total}`);
  // console.log(`lands er:${land}`);

  // reiknar út hversu mikið af landi eiga að vera af hverjum lit og skilar í
  // fylkinu mana
  for (let i = 0; i < 6; i += 1) {
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined) {
        mana[i] = Math.round(((Colors[i] / total) * land));
        if (mana[i] === 0) {
          mana[i] += 1;
        }
        // console.log(`útkoman:${Math.round(((Colors[i] / total) * land))}`);
      }
    }
  }

  let landtotal = 0;
  // reiknar út minnsta fjölda landa sem hver litur þarf að hafa
  let minlands = (Math.floor((Math.ceil(land / numofcolors)) / 2));
  if (minlands === 0) {
    minlands = 1;
  }
  // console.log(`minlands er: ${minlands}`);
// heildarfjöldi landa sem á að skila
  for (let i = 0; i < 6; i += 1) {
    if (mana[i] !== '') {
      if (mana[i] !== undefined) {
        landtotal += mana[i];
      }
    }
  }

  // sértilfelli, aðeins notað ef notandi er vitleysingur :)
  // sem sagt ef notandi ætlar að hafa fleiri liti en lönd
  if (numofcolors > lands) {
    for (let i = 0; i < 6; i += 1) {
      if (mana[i] !== '') {
        if (mana[i] !== undefined) {
          mana[i] = '';
        }
      }
    }
    mana[6] = lands;
    // console.log(`lagavillujá svona er mana:${mana}`);
    return mana;
  }


  // totla fjöldi landa sem er gert ráð fyrir
  // console.log(`þetta er landtotal:${landtotal}`);
  let check = 0;
  // athugar hvort að fjöldi stemmi við fjölda landa
  if (landtotal !== 0) {
    check = lands - landtotal;
  }

  // console.log(`þetta er landafjöldinn${mana}`);

  while (check !== 0) {
    // fjöldinn er minni en fjöldi landa
    if (check > 0) {
      mana[6] += 1;
      check -= 1;
      // console.log('check>0 GeirGatheringWizard');
    } else if (check < 0) { // fjöldinn er stærri en fjöldi landa
      // console.log('check<0 GeirGatheringWizard');
      let cnt = 0;
      // þarf að minnka öll gildi um 1
      for (let i = 0; i < mana.length - 1; i += 1) {
        if (mana[i] !== '' && mana[i] !== 0) {
          // console.log(`þetta er mana[i],nyjacheck${mana[i]}`);
          mana[i] -= 1;
          // console.log(`þetta er mana[i],nyjacheckv2${mana[i]}`);
          // ef þettta minnkar landafjölda af einhverjum lit í 0
          // þá minnkum við extra um 1 og hækkum þann landafjölda aftur um 1
          if (mana[i] === 0) {
            mana[i] += 1;
            cnt -= 1;
          }
          cnt += 1;
        }
      }
      cnt -= 1;
      mana[6] += cnt;
      check = 0;
    }
  }


  let maxpointer = maxpoint(mana);
  // Athugar hvort að öll gildi ná minumum
  for (let i = 0; i < mana.length - 1; i += 1) {
    while (mana[i] < minlands && mana[i] !== 0) {
      // console.log(`geir skynjar maðk í mysunni${mana[i]}`);
      mana[maxpointer] -= 1;
      mana[i] += 1;
      // console.log(`geir nálgast svarið${mana[i]}`);
      maxpointer = maxpoint(mana);
    }
  }
  // console.log(`geir komst á leiðarenda mana er:${mana}`);
  return mana;
}


// athugar hvort að gildi í fylki sé tómt og skilar fjölda af gildum sem eru tóm
function checker(colors) {
  let check = 0;
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i] === '') {
      check += 1;
    }
  }
  return check;
}

module.exports = {
  manacalc,
  checker,
};
