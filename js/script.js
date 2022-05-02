const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'
];

var palabraAleatoria;
var time = 10;
var score = 0;
var palabraIngresada;
palabraIngresada = document.querySelector('input');
palabraIngresada.addEventListener('input', eventoInput);
var timeInterval = setInterval(actualizarTiempo, 1000); // cada segundo se ejecuta actualizar tiempo
var segundos = document.getElementById("timeSpan");

function randomWords() {
  palabraAleatoria = words[Math.floor(Math.random() * words.length)];
  return palabraAleatoria;
}

function eventoInput(e) {
  palabraIngresada = e.target.value;
  console.log(palabraIngresada);
  if (palabraIngresada == palabraAleatoria) {
    console.log("Atinaste");
    time += 3;
    console.log("nuevo valor time: " + time);
    palabraIngresada = e.target.value = "";
    console.log(addToDom())
  }
}

function addToDom() {
  palabraAleatoria = document.getElementById('randomWord').textContent = randomWords();
}

console.log(addToDom())

function actualizarTiempo(){
  
  if (time <= -1){
    console.log("Perdiste");
    segundos.textContent = "Perdiste"
    clearInterval(timeInterval);
    endGame();
  }else {
    segundos.textContent = time;
    time = time - 1;
  }
}

function updateScore() {
  score += 1;
  console.log(score);
  document.getElementById('score').textContent = score;
}
