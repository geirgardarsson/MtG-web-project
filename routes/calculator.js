/////////script(type="text/javascript", src="https://www.gstatic.com/charts/loader.js")
//MUNDU AÐ TAKA TIL Í ÞESSUM KÓÐA!!!!
function manacalc(Colors,lands){
  let land=(parseInt(lands));
  console.log('lands er' + lands);
  //skráir inn gildin sem tölur
  for (let i=0;i<Colors.length; i++){
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined) {
        Colors[i]=(parseInt(Colors[i]));
      }
    }
  }
  console.log('þetta eru gildin sem voru slegin inn:' + Colors);
  let numofcolors = 0;
  let total=0;
  //reiknar út heildar manatákna og fjölda lita
  for(let i=0;i<Colors.length; i++){
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined) {
        total=total+Colors[i];
        numofcolors= numofcolors+1;
      }
    }
  }
  console.log("numofcolors er:" + numofcolors);
  let mana = [0,0,0,0,0,0,0]; //bætt við auka 0 í test
  console.log("total er:" + total);
  console.log("lands er:" + land);

  //reiknar út hversu mikið af landi eiga að vera af hverjum lit og skilar í
  //fylkinu mana
  for(let i=0;i<6;i++){
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined){
        mana[i]=Math.round(((Colors[i]/total)*land));
        if(mana[i]==0){
          mana[i]=mana[i]+1;
        }
          console.log("útkoman:"+ Math.round(((Colors[i]/total)*land)));
      }
    }
  }


  let landtotal=0;
  //reiknar út minnsta fjölda landa sem hver litur þarf að hafa
  let minlands= (Math.floor((Math.ceil(land/numofcolors))/2));
  console.log("minlands er: "+ minlands);
//heildarfjöldi landa sem á að skila
  for(let i=0;i<6;i++){
    if (mana[i] !== '') {
      if (mana[i] !== undefined) {
        landtotal=landtotal+mana[i];
      }
    }
  }
  //totla fjöldi landa sem er gert ráð fyrir
  console.log("þetta er landtotal:" + landtotal);
  let check=0;
//athugar hvort að fjöldi stemmi við fjölda landa
  if(landtotal !=0){
   check = lands-landtotal;
 }

  console.log("þetta er landafjöldinn" + mana);

  while(check !=0){
    //fjöldinn er minni en fjöldi landa
    if(check>0){
      mana[6]=mana[6]+1;
      check=check-1;
      console.log('check>0 GeirGatheringWizard');
      //villa!!
    }
    //fjöldinn er stærri en fjöldi landa
    else if(check<0){
      console.log('check<0 GeirGatheringWizard');
      let cnt=0;
      //þarf að minnka öll gildi um 1
      for(var i=0;i<mana.length-1;i++){
        if(mana[i]!=''){
          console.log('geir í draumalandi');
          mana[i]=mana[i]-1;
          cnt=cnt+1;

        }
      }

      mana[6]=mana[6]+cnt-1;
      check=0;
    }
  }

  //sértilfelli, aðeins notað ef notandi er vitleysingur :)
  if(mana[6]>land){
    mana[6]=land;
  }
/*
//ÞETTA ER GAMLA CHECK SEM BÆITR EÐA DREGUR FRÁ FRÁ FYRSTA STAKI
  //ef fjöldinn er minni en fjöldi landa
  //þá bæta við minnsta gildinu þar til check er 0
  if(check > 0){
    while(check != 0){
      //lyykja sem bætir við minnsta gildinu
      let min=Infinity;
      let pointer;
      for(let i=0;i<mana.length;i++){
        if(mana[i]<min && mana[i] != '' ){
          min=mana[i];
          pointer=i;
        }
      }
      console.log("pointerinn er" + pointer);
      mana[pointer]=mana[pointer]+1;
      --check;
    }
    console.log("check>0 mana: " + mana);
    //return mana;
  }
  //ef fjöldinn er stærri en fjöldi landa
  //þá draga frá hæsta gildinu þar til check er 0
  //HÉRNA GETUR ÞÚ LAGAÐ VILLUNA EF ALLIR ERU MEÐ SAMA FJÖLDA!!!!!!!!!!!!!
  if(check < 0){
    while(check !=0){
      let maxpointer=maxpoint(mana);
      mana[maxpointer]=mana[maxpointer]-1;
      check++;
      console.log("geir athugar stöðuna nokkrum sinnum");
    }
    console.log("check<0 mana: " + mana);
  }
  */
  var mincount=0;

 let maxpointer=maxpoint(mana);
 console.log('geir fann villu');
 console.log('mana er núna:' + mana);
  //Athugar hvort að öll gildi ná minumum
  for(var i=0;i<mana.length-1;i++){
    //þarf mögulega að hafa þessi gildi
    //if (mana[i] !== '') {
      //if (mana[i] !== undefined) {
      console.log('geir athugar villuna me' + mana[i]);
        while(mana[i]<minlands && mana[i] !=''){
          console.log("mana[i] fyrir:" + mana[i]);
          console.log("mana[max] fyrir:" + mana[maxpointer]);
          mana[maxpointer]=mana[maxpointer]-1;
          mana[i]=mana[i]+1;
          console.log("mana[i] eftir" + mana[i]);
          console.log("mana[max] eftir:" + mana[maxpointer]);
          maxpointer=maxpoint(mana);
        }
    //7  }
  //7  }
}
  console.log("geir komst á leiðarenda");
  return mana;
}

//finnur staðsetningu hæstagildis í fylki og skilar pointernum
function maxpoint(mana){
  let max=0;
  let maxpointer;
  for(let i=0;i<mana.length-1;i++){
    if(mana[i]>max){
      max=mana[i];
      maxpointer=i;
    }
  }
  return maxpointer;
}


//athugar hvort að gildi í fylki sé tómt og skilar fjölda af gildum sem eru tóm
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
  manacalc,
  checker,
}
