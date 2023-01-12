
class Joker {
    constructor(name) {
        this.name = name;
        this.middle = []; //5 tall
        this.answers = []; //5 tall
    }

    startGame() {

        for (let i = 0; i < 5; i++) {

            let randomMiddle = Math.floor(Math.random() * 10);
            let randomAnswer = Math.floor(Math.random() * 10);

            this.middle.push(randomMiddle);
            this.answers.push(randomAnswer);

            document.getElementById("btn"+i.toString()).innerHTML = randomMiddle.toString();


        }




    }
}

let jokerGame = new Joker('Joakim')

document.getElementById("startButton").onclick = (e) => {
    jokerGame.startGame();
}