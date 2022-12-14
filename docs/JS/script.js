let questions = {
  "questions": [
  { "question": "Kan hester bli farge blinde?",
  "answers": [ "Hester er fargeblind", "Noen hester kan bli fargeblind", "Hester er ikke fargeblind", "Det er Umulig" ],
  "correctIndex": 1 },

  { "question": "Hvilket gruppe tilhører artene hestene til?",
  "answers": [ "Frøplanter", "Virveldyr", "Krypdyr", "Pattedyr" ],
  "correctIndex": 3 },

  { "question": "Hva er forventet levealderen til Hester?",
  "answers": [ "19-27", "42-50", "25-30", "31-35" ],
  "correctIndex": 2 },

  { "question": "I 2010, satt en hest ny rekord på å være den høyeste. Hvor høy var hesten?",
  "answers": [ "2,1 Meter høy", "1,8 Meter høy", "1,9 Meter høy", "2,0 Meter høy" ],
  "correctIndex": 0 },

  { "question": "hvor mye kan hester veie i gjennomsnitt?",
  "answers": [ "300-1000 Kg", "400-900 Kg", "620-850 Kg", "430-760 Kg" ],
  "correctIndex": 1 },

  { "question": "Hvor kjapt kan hester løpe maks?",
  "answers": [ "92 Km/t", "100 Km/t", "88 Km/t", "76 Km/t" ],
  "correctIndex": 2 },

  { "question": "Hva spiser hester vanligvis?",
  "answers": [ "gresskar", "gullerot", "eple", "Gress"],
  "correctIndex": 3 },

  { "question": "Hva er favoritt maten til hester?",
  "answers": [ "Eple og gullerot", "Banan og durer", "Gresskar og meloner", "Jordbær og bringbær" ],
  "correctIndex": 0 },

  { "question": "Hvor mye kan hester se rundt seg?",
  "answers": [ "Mer enn 90 grader", " Mer enn 180 grader", "270 grader", "Nesten 360 grader" ],
  "correctIndex": 3 },

  { "question": "Hva gjør hester hvis de skjeder seg?",
  "answers": [ "Gjør ingenting", "Spiser gress", "Finner objekter som de kan leke med", "Sover" ],
  "correctIndex": 2 }
  ]
};

let quiz = 0;
let display_highscore = 0;

function start() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById('theme').innerHTML = "Tema: Hest";
    document.getElementById('question_title').innerHTML = questions.questions[quiz].question;

    document.getElementById('svar_1').style.visibility = "visible";
    document.getElementById('svar_2').style.visibility = "visible";
    document.getElementById('svar_3').style.visibility = "visible";
    document.getElementById('svar_4').style.visibility = "visible";
    document.getElementById('highscore_text').style.visibility = "visible";

    document.getElementById('svar_1').innerHTML = questions.questions[quiz].answers[0];
    document.getElementById('svar_2').innerHTML = questions.questions[quiz].answers[1];
    document.getElementById('svar_3').innerHTML = questions.questions[quiz].answers[2];
    document.getElementById('svar_4').innerHTML = questions.questions[quiz].answers[3];
    display_highscore = document.getElementById('highscore_box').innerHTML = display_highscore;
};

function answer(button) {
  let correct = questions.questions[quiz].correctIndex;
  if (quiz >= 9) {
    document.getElementById('question_title').style.display = "none";
    document.getElementById('theme').style.display = "none";
    document.getElementById('svar_1').style.display = "none";
    document.getElementById('svar_2').style.display = "none";
    document.getElementById('svar_3').style.display = "none";
    document.getElementById('svar_4').style.display = "none";
    document.getElementById('end-game').style.display = "";
    document.getElementById('end-game').style.display = "flex";
  } else if (correct === button) {
    quiz++;
    display_highscore++;
    start(quiz);
  } else  {
    quiz++;
    display_highscore--;
    start(quiz);
  }
}

function try_again() {
  display_highscore = 0;
  quiz = 0;
  document.getElementById('end-game').style.display = "none";
  document.getElementById('question_title').style.display = "";
  document.getElementById('theme').style.display = "";
  document.getElementById('svar_1').style.display = "";
  document.getElementById('svar_2').style.display = "";
  document.getElementById('svar_3').style.display = "";
  document.getElementById('svar_4').style.display = "";
  start()
}

function stop_game() {
  location.href = 'index.html';
}
