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
  let mana = [0,0,0,0,0,0];
  console.log("total er:" + total);
  console.log("lands er:" + land);
  //reiknar út hversu mikið af landi eiga að vera af hverjum lit og skilar í
  //fylkinu mana
  for(let i=0;i<6;i++){
    if (Colors[i] !== '') {
      if (Colors[i] !== undefined){
        mana[i]=Math.round(((Colors[i]/total)*land));
          console.log("útkoman:"+ Math.round(((Colors[i]/total)*land)));
      }
    }
  }


  let landtotal=0;
  let minlands= ((Math.ceil(land/numofcolors))/2);
  console.log("minlands er: "+ minlands);
//heildarfjöldi landa sem á að skila
  for(let i=0;i<6;i++){
    if (mana[i] !== '') {
      if (mana[i] !== undefined) {
        landtotal=landtotal+mana[i];
      }
    }
  }

  console.log("þetta er landtotal:" + landtotal);
  let check=0;
//athugar hvort að fjöldi stemmi við fjölda landa
  if(landtotal !=0){
   check = lands-landtotal;
 }
  console.log("þetta er check gildið" + check);

  console.log("þetta er landafjöldinn" + mana);

  /*if(check==0){
    console.log(mana);
    //return mana;
}*/
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
    //return mana;
  }
  var mincount=0;

 let maxpointer=maxpoint(mana);
  //Athugar hvort að öll gildi ná minumum
  for(var i=0;i<mana.length;i++){
    if (mana[i] !== '') {
      if (mana[i] !== undefined) {
        while(mana[i]<minlands && mana[i] !=0){
          console.log("mana[i] fyrir:" + mana[i]);
          console.log("mana[max] fyrir:" + mana[maxpointer]);
          mana[maxpointer]=mana[maxpointer]-1;
          mana[i]=mana[i]+1;
          console.log("mana[i] eftir" + mana[i]);
          console.log("mana[max] eftir:" + mana[maxpointer]);
          maxpointer=maxpoint(mana);
        }
      }
    }
  }
  console.log("geir komst á leiðarenda");
  return mana;
}

        //lykkja sem dregur frá hæsta gildinu
        //lyykja sem bætir við minnsta gildinu
function maxpoint(mana){
  let max=0;
  let maxpointer;
  for(let i=0;i<mana.length;i++){
    if(mana[i]>max){
      max=mana[i];
      maxpointer=i;
    }
  }
  return maxpointer;
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
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
/*google.charts.load('current', {'packages':['corechart']})
google.charts.setOnLoadCallback(drawChart)
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);

  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
  }
*/
module.exports = {
  manacalc,
  checker,
}
