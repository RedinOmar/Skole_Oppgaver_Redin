class joker {
  constructor(randomNumber) {
    this.randomNumber = Math.floor(Math.random() * 10);
  }
  buttonStart() {
    document.getElementById('IDMiddle').innerHTML = this.randomNumber;
  }
}
