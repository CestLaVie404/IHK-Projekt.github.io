
let rects = [...document.querySelectorAll("rect")];
rects.forEach(rect => rect.style.fill = "white");

console.log(rects.map(elem => elem.id));

let lines = [...document.querySelectorAll("line")];
lines.forEach(lines => lines.style.stroke = "white");

console.log(lines.map(elem => elem.id));

/*
function getLineIDs(searchTerm){
  let line = [...document.querySelectorAll("line")];
 let line2=[];
  
line.forEach(function(line) {
  if(line.id.includes(searchTerm)){line2.push(line.id);}
})
return line2;
}

console.log(getLineIDs('A0D'));
*/




/*
lines.forEach(function(lines){
  if(lines.id.includes('A0-Route-00')){lines.style.stroke = "red"}
  if(lines.id.includes('A0-Route-01')){lines.style.stroke = "red"}
  if(lines.id.includes('A0D0')){lines.style.stroke = "red"}
})
*/

//--------------------

function binaryToPriorityCode(binary) {
  let priorityCode = 0;
  let weight = 1;

  while (binary > 0) {
    const bit = binary % 2; 
    priorityCode += bit * weight;
    weight *= 2;
    binary = Math.floor(binary / 2); 
  }

  return priorityCode;

}

let binArray = ['0','0','0','0'];



let D=binArray[0];  //0
let C=binArray[1];  //1
let B=binArray[2];  //2
let A=binArray[3];  //3

let binaryNumber = D+C+B+A;

function updateRects() {
//0b1000


 D=binArray[0];
 C=binArray[1];
 B=binArray[2];
 A=binArray[3];

 binaryNumber = D+C+B+A;

//let binaryNumber='1001';
binaryValue = '0b' + binaryNumber;

const priorityCode = binaryToPriorityCode(binaryValue);

console.log('Binary: ', binaryNumber)
console.log('Decimal:', priorityCode);



  

if(binArray[3]=='1') {document.getElementById(rects[1].id).style.fill = "green"} else document.getElementById(rects[1].id).style.fill = "white"
if(binArray[2]=='1') {document.getElementById(rects[3].id).style.fill = "green"} else document.getElementById(rects[3].id).style.fill = "white"
if(binArray[1]=='1') {document.getElementById(rects[5].id).style.fill = "green"} else document.getElementById(rects[5].id).style.fill = "white"
if(binArray[0]=='1') {document.getElementById(rects[7].id).style.fill = "green"} else document.getElementById(rects[7].id).style.fill = "white"


if(binaryToPriorityCode(binaryValue)==0){document.getElementById(rects[8].id).style.fill = "green"}else document.getElementById(rects[8].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==1){document.getElementById(rects[9].id).style.fill = "green"}else document.getElementById(rects[9].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==2){document.getElementById(rects[10].id).style.fill = "green"}else document.getElementById(rects[10].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==3){document.getElementById(rects[11].id).style.fill = "green"}else document.getElementById(rects[11].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==4){document.getElementById(rects[12].id).style.fill = "green"}else document.getElementById(rects[12].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==5){document.getElementById(rects[13].id).style.fill = "green"}else document.getElementById(rects[13].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==6){document.getElementById(rects[14].id).style.fill = "green"}else document.getElementById(rects[14].id).style.fill = "white" 
if(binaryToPriorityCode(binaryValue)==7){document.getElementById(rects[15].id).style.fill = "green"}else document.getElementById(rects[15].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==8){document.getElementById(rects[16].id).style.fill = "green"}else document.getElementById(rects[16].id).style.fill = "white"
if(binaryToPriorityCode(binaryValue)==9){document.getElementById(rects[17].id).style.fill = "green"}else document.getElementById(rects[17].id).style.fill = "white"




}


function updateLines() {

  if(A=='0'){
    //A0
    lines.forEach(function(lines){
      if(lines.id.includes('A0-Route-00')){lines.style.stroke = "red"}
      if(lines.id.includes('A0-Route-01')){lines.style.stroke = "red"}
      if(lines.id.includes('A0D0'))       {lines.style.stroke = "red"}

      if(lines.id.includes('A0-Route-02')){lines.style.stroke = "red"}
      if(lines.id.includes('A0D2'))       {lines.style.stroke = "red"}

      if(lines.id.includes('A0-Route-03')){lines.style.stroke = "red"}
      if(lines.id.includes('A0D4'))       {lines.style.stroke = "red"}

      if(lines.id.includes('A0-Route-04')){lines.style.stroke = "red"}
      if(lines.id.includes('A0D6'))       {lines.style.stroke = "red"}

      if(lines.id.includes('A0-Route-05')){lines.style.stroke = "red"}
      if(lines.id.includes('A0D8'))       {lines.style.stroke = "red"}
      //-------------------------
      if(lines.id.includes('A1-Route-00')){lines.style.stroke = "white"}
      if(lines.id.includes('A1-Route-01')){lines.style.stroke = "white"}
      if(lines.id.includes('A1-Route-02')){lines.style.stroke = "white"}
      if(lines.id.includes('A1-Route-03')){lines.style.stroke = "white"}
      if(lines.id.includes('A1-Route-04')){lines.style.stroke = "white"}
      if(lines.id.includes('A1-Route-05')){lines.style.stroke = "white"}
      if(lines.id.includes('A1-Route-06')){lines.style.stroke = "white"}

      if(lines.id.includes('A1D1')){lines.style.stroke = "white"}
      if(lines.id.includes('A1D3')){lines.style.stroke = "white"}
      if(lines.id.includes('A1D5')){lines.style.stroke = "white"}
      if(lines.id.includes('A1D7')){lines.style.stroke = "white"}
      if(lines.id.includes('A1D9')){lines.style.stroke = "white"}
    })
  }
  else {
    //A1
      lines.forEach(function(lines){
      if(lines.id.includes('A1-Route-00')){lines.style.stroke = "red"}
      if(lines.id.includes('A1-Route-01')){lines.style.stroke = "red"}
      if(lines.id.includes('A1-Route-02')){lines.style.stroke = "red"}
      if(lines.id.includes('A1-Route-03')){lines.style.stroke = "red"}
      if(lines.id.includes('A1-Route-04')){lines.style.stroke = "red"}
      if(lines.id.includes('A1-Route-05')){lines.style.stroke = "red"}
      if(lines.id.includes('A1-Route-06')){lines.style.stroke = "red"}

      if(lines.id.includes('A1D1')){lines.style.stroke = "red"}
      if(lines.id.includes('A1D3')){lines.style.stroke = "red"}
      if(lines.id.includes('A1D5')){lines.style.stroke = "red"}
      if(lines.id.includes('A1D7')){lines.style.stroke = "red"}
      if(lines.id.includes('A1D9')){lines.style.stroke = "red"}
      //--------------------------------
      if(lines.id.includes('A0-Route-00')){lines.style.stroke = "white"}
      if(lines.id.includes('A0-Route-01')){lines.style.stroke = "white"}
      if(lines.id.includes('A0D0'))       {lines.style.stroke = "white"}

      if(lines.id.includes('A0-Route-02')){lines.style.stroke = "white"}
      if(lines.id.includes('A0D2'))       {lines.style.stroke = "white"}

      if(lines.id.includes('A0-Route-03')){lines.style.stroke = "white"}
      if(lines.id.includes('A0D4'))       {lines.style.stroke = "white"}

      if(lines.id.includes('A0-Route-04')){lines.style.stroke = "white"}
      if(lines.id.includes('A0D6'))       {lines.style.stroke = "white"}

      if(lines.id.includes('A0-Route-05')){lines.style.stroke = "white"}
      if(lines.id.includes('A0D8'))       {lines.style.stroke = "white"}
      })
      }
//---------------
    
  if(B=='0'){
      //B0
      lines.forEach(function(lines){
        if(lines.id.includes('B0-Route-00')){lines.style.stroke = "red"}
        if(lines.id.includes('B0-Route-01')){lines.style.stroke = "red"}
        if(lines.id.includes('B0-Route-02')){lines.style.stroke = "red"}
        if(lines.id.includes('B0-Route-03')){lines.style.stroke = "red"}
        if(lines.id.includes('B0-Route-04')){lines.style.stroke = "red"}
        if(lines.id.includes('B0-Route-05')){lines.style.stroke = "red"}
        if(lines.id.includes('B0-Route-06')){lines.style.stroke = "red"}
        if(lines.id.includes('B0-Route-07')){lines.style.stroke = "red"}

        if(lines.id.includes('B0D0')){lines.style.stroke = "red"}
        if(lines.id.includes('B0D1')){lines.style.stroke = "red"}
        if(lines.id.includes('B0D4')){lines.style.stroke = "red"}
        if(lines.id.includes('B0D5')){lines.style.stroke = "red"}
        if(lines.id.includes('B0D8')){lines.style.stroke = "red"}
        if(lines.id.includes('B0D9')){lines.style.stroke = "red"}
        //----------------------------------
        if(lines.id.includes('B1-Route-00')){lines.style.stroke = "white"}
        if(lines.id.includes('B1-Route-01')){lines.style.stroke = "white"}
        if(lines.id.includes('B1-Route-02')){lines.style.stroke = "white"}
        if(lines.id.includes('B1-Route-03')){lines.style.stroke = "white"}
        if(lines.id.includes('B1-Route-04')){lines.style.stroke = "white"}
    
        if(lines.id.includes('B1D2')){lines.style.stroke = "white"}
        if(lines.id.includes('B1D3')){lines.style.stroke = "white"}
        if(lines.id.includes('B1D6')){lines.style.stroke = "white"}
        if(lines.id.includes('B1D7')){lines.style.stroke = "white"}
      })
  }
  else {
    lines.forEach(function(lines){
    if(lines.id.includes('B1-Route-00')){lines.style.stroke = "red"}
    if(lines.id.includes('B1-Route-01')){lines.style.stroke = "red"}
    if(lines.id.includes('B1-Route-02')){lines.style.stroke = "red"}
    if(lines.id.includes('B1-Route-03')){lines.style.stroke = "red"}
    if(lines.id.includes('B1-Route-04')){lines.style.stroke = "red"}

    if(lines.id.includes('B1D2')){lines.style.stroke = "red"}
    if(lines.id.includes('B1D3')){lines.style.stroke = "red"}
    if(lines.id.includes('B1D6')){lines.style.stroke = "red"}
    if(lines.id.includes('B1D7')){lines.style.stroke = "red"}
    //----------------------------------
    if(lines.id.includes('B0-Route-00')){lines.style.stroke = "white"}
    if(lines.id.includes('B0-Route-01')){lines.style.stroke = "white"}
    if(lines.id.includes('B0-Route-02')){lines.style.stroke = "white"}
    if(lines.id.includes('B0-Route-03')){lines.style.stroke = "white"}
    if(lines.id.includes('B0-Route-04')){lines.style.stroke = "white"}
    if(lines.id.includes('B0-Route-05')){lines.style.stroke = "white"}
    if(lines.id.includes('B0-Route-06')){lines.style.stroke = "white"}
    if(lines.id.includes('B0-Route-07')){lines.style.stroke = "white"}

    if(lines.id.includes('B0D0')){lines.style.stroke = "white"}
    if(lines.id.includes('B0D1')){lines.style.stroke = "white"}
    if(lines.id.includes('B0D4')){lines.style.stroke = "white"}
    if(lines.id.includes('B0D5')){lines.style.stroke = "white"}
    if(lines.id.includes('B0D8')){lines.style.stroke = "white"}
    if(lines.id.includes('B0D9')){lines.style.stroke = "white"}
    })
  }

  if(C=='0'){
//C0
lines.forEach(function(lines){
  if(lines.id.includes('C0-Route-00')){lines.style.stroke = "red"}
  if(lines.id.includes('C0-Route-01')){lines.style.stroke = "red"}
  if(lines.id.includes('C0-Route-02')){lines.style.stroke = "red"}
  if(lines.id.includes('C0-Route-03')){lines.style.stroke = "red"}
  if(lines.id.includes('C0-Route-04')){lines.style.stroke = "red"}
  if(lines.id.includes('C0-Route-05')){lines.style.stroke = "red"}
  if(lines.id.includes('C0-Route-06')){lines.style.stroke = "red"}
  if(lines.id.includes('C0-Route-07')){lines.style.stroke = "red"}

  if(lines.id.includes('C0D0')){lines.style.stroke = "red"}
  if(lines.id.includes('C0D1')){lines.style.stroke = "red"}
  if(lines.id.includes('C0D2')){lines.style.stroke = "red"}
  if(lines.id.includes('C0D3')){lines.style.stroke = "red"}
  if(lines.id.includes('C0D8')){lines.style.stroke = "red"}
  if(lines.id.includes('C0D9')){lines.style.stroke = "red"}
  //---------------------------
  if(lines.id.includes('C1-Route-00')){lines.style.stroke = "white"}
  if(lines.id.includes('C1-Route-01')){lines.style.stroke = "white"}
  if(lines.id.includes('C1-Route-02')){lines.style.stroke = "white"}
  if(lines.id.includes('C1-Route-03')){lines.style.stroke = "white"}
  if(lines.id.includes('C1-Route-04')){lines.style.stroke = "white"}

  if(lines.id.includes('C1D4')){lines.style.stroke = "white"}
  if(lines.id.includes('C1D5')){lines.style.stroke = "white"}
  if(lines.id.includes('C1D6')){lines.style.stroke = "white"}
  if(lines.id.includes('C1D7')){lines.style.stroke = "white"}
})
  }
  else {
    lines.forEach(function(lines){
      if(lines.id.includes('C1-Route-00')){lines.style.stroke = "red"}
      if(lines.id.includes('C1-Route-01')){lines.style.stroke = "red"}
      if(lines.id.includes('C1-Route-02')){lines.style.stroke = "red"}
      if(lines.id.includes('C1-Route-03')){lines.style.stroke = "red"}
      if(lines.id.includes('C1-Route-04')){lines.style.stroke = "red"}

      if(lines.id.includes('C1D4')){lines.style.stroke = "red"}
      if(lines.id.includes('C1D5')){lines.style.stroke = "red"}
      if(lines.id.includes('C1D6')){lines.style.stroke = "red"}
      if(lines.id.includes('C1D7')){lines.style.stroke = "red"}
      //---------------------------------------
      if(lines.id.includes('C0-Route-00')){lines.style.stroke = "white"}
      if(lines.id.includes('C0-Route-01')){lines.style.stroke = "white"}
      if(lines.id.includes('C0-Route-02')){lines.style.stroke = "white"}
      if(lines.id.includes('C0-Route-03')){lines.style.stroke = "white"}
      if(lines.id.includes('C0-Route-04')){lines.style.stroke = "white"}
      if(lines.id.includes('C0-Route-05')){lines.style.stroke = "white"}
      if(lines.id.includes('C0-Route-06')){lines.style.stroke = "white"}
      if(lines.id.includes('C0-Route-07')){lines.style.stroke = "white"}
    
      if(lines.id.includes('C0D0')){lines.style.stroke = "white"}
      if(lines.id.includes('C0D1')){lines.style.stroke = "white"}
      if(lines.id.includes('C0D2')){lines.style.stroke = "white"}
      if(lines.id.includes('C0D3')){lines.style.stroke = "white"}
      if(lines.id.includes('C0D8')){lines.style.stroke = "white"}
      if(lines.id.includes('C0D9')){lines.style.stroke = "white"}
    })
  }

  if(D=='0'){
//D0
lines.forEach(function(lines){
  if(lines.id.includes('D0-Route-00')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-01')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-02')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-03')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-04')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-05')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-06')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-07')){lines.style.stroke = "red"}
  if(lines.id.includes('D0-Route-08')){lines.style.stroke = "red"}

  if(lines.id.includes('D0D0')){lines.style.stroke = "red"}
  if(lines.id.includes('D0D1')){lines.style.stroke = "red"}
  if(lines.id.includes('D0D2')){lines.style.stroke = "red"}
  if(lines.id.includes('D0D3')){lines.style.stroke = "red"}
  if(lines.id.includes('D0D4')){lines.style.stroke = "red"}
  if(lines.id.includes('D0D5')){lines.style.stroke = "red"}
  if(lines.id.includes('D0D6')){lines.style.stroke = "red"}
  if(lines.id.includes('D0D7')){lines.style.stroke = "red"}
  //-----------------------------------------
  if(lines.id.includes('D1-Route-00')){lines.style.stroke = "white"}
  if(lines.id.includes('D1-Route-01')){lines.style.stroke = "white"}

  if(lines.id.includes('D1D8')){lines.style.stroke = "white"}
  if(lines.id.includes('D1D9')){lines.style.stroke = "white"}
})
  }
  else {
    lines.forEach(function(lines){
      if(lines.id.includes('D1-Route-00')){lines.style.stroke = "red"}
      if(lines.id.includes('D1-Route-01')){lines.style.stroke = "red"}

      if(lines.id.includes('D1D8')){lines.style.stroke = "red"}
      if(lines.id.includes('D1D9')){lines.style.stroke = "red"}
      //-----------------------------------------
      if(lines.id.includes('D0-Route-00')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-01')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-02')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-03')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-04')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-05')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-06')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-07')){lines.style.stroke = "white"}
      if(lines.id.includes('D0-Route-08')){lines.style.stroke = "white"}
    
      if(lines.id.includes('D0D0')){lines.style.stroke = "white"}
      if(lines.id.includes('D0D1')){lines.style.stroke = "white"}
      if(lines.id.includes('D0D2')){lines.style.stroke = "white"}
      if(lines.id.includes('D0D3')){lines.style.stroke = "white"}
      if(lines.id.includes('D0D4')){lines.style.stroke = "white"}
      if(lines.id.includes('D0D5')){lines.style.stroke = "white"}
      if(lines.id.includes('D0D6')){lines.style.stroke = "white"}
      if(lines.id.includes('D0D7')){lines.style.stroke = "white"}
    })
  }

}


  function changeValue(index,b) {
    // Umkehrung des Werts (von '0' zu '1' und umgekehrt)
    binArray[index] = binArray[index] === '0' ? '1' : '0';
  
    // Aktualisiere den Text der Buttons entsprechend
    //updateButtonTexts();
  
    updateRects();

    updateLines();


    const buttons = document.querySelectorAll('.button');
    if (buttons[b].style.backgroundColor === 'green') {
      // Setze die Farbe zurück
      buttons[b].style.backgroundColor = '';
      buttons[b].textContent='aus';
  } else {
      // Ändere die Farbe
      buttons[b].style.backgroundColor = 'green'; // Hier kannst du die gewünschte Farbe angeben
      buttons[b].textContent='an';
  }

  }
  
  function updateButtonTexts() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        button.textContent = `Feld ${index + 1}: ${binArray[index]}`;
    });
  }