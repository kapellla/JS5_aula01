teste 02 - formaçao "a"

function setup() {
  createCanvas(600, 400);
}

function inicializaCores() {
background("#E91E63");
  fill("#4CAF50");
  textSize(70);
  textAlign(CENTER, CENTER);
}
  function draw(){
    inicializaCores();
    let maximo = width;
  let minímo = 0;
  let palavra = "ESTAMOS MORTOS"
  let quantidade = map( mouseX, 0, width, 0, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 300, 200); 
  }
