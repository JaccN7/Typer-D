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

    function randomWords(){
      palabraAleatoria = words[Math.floor(Math.random()*words.length)];
      return palabraAleatoria;
    }

    function addToDom(){
        document.getElementById('randomWord').textContent = randomWords();
    }

    console.log(addToDom());