class joker {
  constructor(randomNumber) {
    this.randomNumber = randomNumber;
  }
  buttonstart() {
    this.randomNumber = Math.floor(Math.random() * 11);
  }
}