

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
  let mana = [0,0,0,0,0,0];
  console.log("total er:" + total);
  console.log("lands er:" + land);
  for(let i=0;i<6;i++){
    mana[i]=Math.round(((Colors[i]/total)*land));
    console.log("útkoman:"+ Math.round(((Colors[i]/total)*land)));
  }
  console.log(mana);
  return mana;
}

function checker(colors){
  let check=0;
  for(let i = 0;i<colors.length; i++ ){
    if (colors[i]==''){
      check=check+1;
    }
  }
  return check;
}


module.exports = {
  calculator,
  manacalc,
  checker,
}
