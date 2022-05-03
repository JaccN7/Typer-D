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
var endGameContainer = document.getElementById("end-game-container");

function randomWords() {
  palabraAleatoria = words[Math.floor(Math.random() * words.length)];
  return palabraAleatoria;
}

function eventoInput(e) {
  palabraIngresada = e.target.value;
  console.log("Palabra Ingresada: " + palabraIngresada);
  console.log("Cuenta regresiva: " + time);
  //console.log(e)
  if (palabraIngresada == palabraAleatoria) {
    console.log("Atinaste");
    time += 3;
    console.log("Nuevo valor time: " + time);
    palabraIngresada = e.target.value = "";
    console.log(addToDom());
    updateScore();
  }
}

function addToDom() {
  palabraAleatoria = document.getElementById('randomWord').textContent = randomWords();
  return palabraAleatoria;
}

console.log(addToDom());

function actualizarTiempo() {

  if (time < 0) {
    console.log("Perdiste");
    segundos.textContent = "Perdiste";
    clearInterval(timeInterval);
    gameOver();
  } else {
    segundos.textContent = time;
    time -= 1;
  }
}

function updateScore() {
  score += 1;
  console.log("Puntaje: " + score);
  document.getElementById('score').textContent = score;
  return score;
}

function gameOver() {
  endGameContainer.innerHTML = ('<h1>Se acabo el tiempo!</h1><p id="parrafo">Has obtenido ' + score + ' aciertos</p><button type="button" id="volverJugar">Volver a Jugar</button>');
  var volverJugar = document.getElementById('volverJugar');
  volverJugar.addEventListener("click", () => { //declarar función anónima
    location.reload();
  })
  document.getElementById('main').innerHTML = '';
}
