

//hahahahahahahahahahahahahhahahahahahahaha
function calculator() {
console.log('Geir herra magic kall');
  return;
}

function geir() {
  console.log ('geir er ekki magic kall');
  return 'heya';
}


function manacalc(black,blue,red,green,white,grey,lands){
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
//ef 2 litir
function mana(size,colors1,colors2,lands) {
  var fj=colors1+colors2; //fjöldi mana tákna
  var land1=color1/fj;//hlutfall af liti 1
  var land2=color2/fh;//hlutfall af lit 2
  land1=land1*lands;
  land2=land2*lands;
  return ('fjöldi x landa:' + land1 + 'fjöldi y landa:' + land2);
}

module.exports = {
  calculator,
  manacalc,
}
