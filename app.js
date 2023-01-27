// class Card com a informação do character "face" e a resposta "answer"
class Card {
    constructor(face, answer){
        this.face = face;
        this.answer = answer;
    }
}

// array de cards
let cardArray = [
    new Card("A", "a"),
    new Card("B", "b"),
    new Card("C", "c"),
    new Card("D", "d"),
    new Card("E", "e"),
    new Card("F", "f"),
    new Card("G", "g"),
    new Card("H", "h"),
    new Card("I", "i"),
    new Card("J", "j"),
    new Card("K", "k"),
    new Card("L", "l"),
    new Card("M", "m"),
    new Card("N", "n"),
    new Card("O", "o"),
    new Card("P", "p"),
    new Card("Q", "q"),
    new Card("R", "r"),
    new Card("S", "s"),
    new Card("T", "t"),
    new Card("U", "u"),
    new Card("V", "v"),
    new Card("W", "w"),
    new Card("X", "x"),
    new Card("Y", "y"),
    new Card("Z", "z")
];

cardArray.sort((a, b) => { return 0.5 - Math.random()});

//vai buscar o elemento onde entram as cartas
let game = document.getElementById("game");

//poe cartas no html
cardArray.forEach((card, index)=>{
    game.innerHTML += "<div class=\"card col-2\"><p class=\"face\">" + card.face + "</p><input id=\"input" + index + "\" type=\"text\" onkeydown=\"validateAnswer(" + index + ")\"></div>"
});

// função que valida a resposta, dado a sua posição no array
function validateAnswer(id) {
    //valida enter
    if (event.key === "Enter") {
        //vai buscar o elemento pela sua posição
        let input = document.getElementById("input" + id);
        //valida a input com a resposta 
        if (input.value.toLowerCase() === cardArray[id].answer) {
            //focus next
            if (id < 25) {
                document.getElementById("input" + (id + 1)).focus();
            }
            else {
                alert("you've reached the end of the card array");
            }
        }
        // se errar limpa
        else {
            input.value = '';
        }
    }
};