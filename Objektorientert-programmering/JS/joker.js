class Joker {
  constructor(name) {
    this.name = name;
    this.middle = []; // 5 tall
    this.asnwers = []; // 5 tall
  }

  startGame() {
    for (let i = 0; i < 5; i++) {

      let randomMiddle = Math.floot(Math.random() * 10);
      let randomAnswer = Math.floot(Math.random() * 10);

      this.middle.push(randomMiddle);
      this.asnwers.push(randomAnswer);

      document.getElementById('btn'+i.toString()).innerHTML = randomMiddle.toString();
    }

  }
}
let jokerGame = new joker('Redin');
document.getElementById('startButton').onclick = (e) => {
  jokerGame.startGame();
}
