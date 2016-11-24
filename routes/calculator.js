

//hahahahahahahahahahahahahhahahahahahahaha
function calculator() {
console.log('Geir herra magic kall');
  return;
}

function geir() {
  console.log ('geir er ekki magic kall');
  return 'heya';
}

//original
function manacalc2(black,blue,red,green,white,grey,lands){
  let total = (parseInt(black))+(parseInt(blue))+(parseInt(red))+(parseInt(green))+(parseInt(white))+(parseInt(grey));
  let colors = [(parseInt(black)),(parseInt(blue)),(parseInt(red)),(parseInt(green)),(parseInt(white)),(parseInt(grey))];
  /*colors[0]=black;
  colors[1]=blue;
  colors[2]=red;
  colors[3]=green;
  colors[4]=white;
  colors[5]=grey;*/
  let mana = [0,0,0,0,0,0];
  console.log("total er:" + total);
  console.log("lands er:" + lands);
  for(let i=0;i<6;i++){
    console.log("umferð"+i+"litur:"+colors[i]);
    mana[i]=Math.round(((colors[i]/total)*lands));
    console.log("útkoman:"+ Math.round(((colors[i]/total)*lands)));
  }
  console.log(mana);
  console.log(mana[1]);
  return mana;
}

function manacalc(Colors,lands){
  let land=(parseInt(lands));
  console.log('lands er' + lands);
  console.log('land er:' + land)
  for (let i=0;i<Colors.length; i++){
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined) {
        Colors[i]=(parseInt(Colors[i]));
      }
    }
  }

  let total=0;
  for(let i=0;i<Colors.length; i++){
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined) {
        total=total+Colors[i];
      }
    }
  }

  /*colors[0]=black;
  colors[1]=blue;
  colors[2]=red;
  colors[3]=green;
  colors[4]=white;
  colors[5]=grey;*/
  let mana = [0,0,0,0,0,0];
  console.log("total er:" + total);
  console.log("lands er:" + land);
  for(let i=0;i<6;i++){
    console.log("umferð"+i+"litur:"+Colors[i]);
    mana[i]=Math.round(((Colors[i]/total)*land));
    console.log("útkoman:"+ Math.round(((Colors[i]/total)*land)));
  }
  console.log(mana);
  console.log(mana[1]);
  return mana;
}


module.exports = {
  calculator,
  manacalc,
}
