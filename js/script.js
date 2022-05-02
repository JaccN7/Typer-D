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