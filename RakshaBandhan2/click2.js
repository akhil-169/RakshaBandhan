console.log("JavaScript is working!");


// =====================================
// GET ELEMENTS
// =====================================

let welcome = document.getElementById("welcome");
let start = document.getElementById("start");

let surprise = document.getElementById("surprise");
let letter = document.getElementById("letter");
let photo1 = document.getElementById("photo1");
let toCards = document.getElementById("tocards");

let surprise2 = document.getElementById("surprise2");
let cards = document.querySelectorAll(".card");
let toCatch = document.getElementById("tocatch");

let catchGame = document.getElementById("catchgame");
let runner = document.getElementById("runner");

let toFinal = document.getElementById("tofinal");

let question = document.getElementById("question");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let answerMessage = document.getElementById("answer-message");

let finalSection = document.getElementById("final");
let celebrate = document.getElementById("celebrate");


// =====================================
// WELCOME → SURPRISE 1
// =====================================

start.addEventListener("click", function () {

    welcome.style.display = "none";

    surprise.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// LETTER → OPEN
// =====================================

letter.addEventListener("click", function () {

    letter.classList.toggle("open");

    if (letter.classList.contains("open")) {

        photo1.style.display = "block";

    }

});


// =====================================
// SURPRISE 1 → MEMORY CARDS
// =====================================

toCards.addEventListener("click", function () {

    surprise.style.display = "none";

    surprise2.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// FLIP CARDS
// =====================================

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.classList.toggle("flipped");

    });

});


// =====================================
// MEMORY CARDS → CATCH GAME
// =====================================

toCatch.addEventListener("click", function () {

    surprise2.style.display = "none";

    catchGame.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// CATCH GAME
// =====================================

runner.addEventListener("mouseenter", function () {

    let area =
        document.getElementById("catch-area");

    let maxX =
        area.clientWidth -
        runner.offsetWidth;

    let maxY =
        area.clientHeight -
        runner.offsetHeight;

    let x =
        Math.random() * maxX;

    let y =
        Math.random() * maxY;

    runner.style.left =
        x + "px";

    runner.style.top =
        y + "px";

});


// =====================================
// CATCH GAME → QUESTION
// =====================================

toFinal.addEventListener("click", function () {

    catchGame.style.display = "none";

    question.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// YES → FINAL
// =====================================

yes.addEventListener("click", function () {

    question.style.display = "none";

    finalSection.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// NO BUTTON
// =====================================

no.addEventListener("mouseenter", function () {

    let area =
        document.getElementById("answer-area");

    let maxX =
        area.clientWidth -
        no.offsetWidth;

    let maxY =
        area.clientHeight -
        no.offsetHeight;

    let x =
        Math.random() * maxX;

    let y =
        Math.random() * maxY;

    no.style.left =
        x + "px";

    no.style.top =
        y + "px";

});


no.addEventListener("click", function () {

    answerMessage.innerText =
        "Nice try 😂 You can't escape the question ❤️";

});


// =====================================
// CELEBRATE
// =====================================

celebrate.addEventListener("click", function () {

    createBalloons();

    createConfetti();

    createHearts();

});


// =====================================
// BALLOONS 🎈
// =====================================

function createBalloons() {

    let balloonList = [

        "🎈",
        "🎈",
        "🎈",
        "💗",
        "💕",
        "🎈",
        "❤️",
        "🎈",
        "💝",
        "🎈",
        "💕",
        "🎈",
        "💖",
        "🎈",
        "💗",
        "🎈"

    ];


    balloonList.forEach(function (item, index) {

        let balloon =
            document.createElement("div");

        balloon.className =
            "balloon";

        balloon.innerText =
            item;

        balloon.style.left =
            Math.random() * 100 + "vw";

        balloon.style.animationDelay =
            index * 0.15 + "s";

        document.body.appendChild(balloon);


        setTimeout(function () {

            balloon.remove();

        }, 6000);

    });

}


// =====================================
// CONFETTI 🎊
//=====================================

function createConfetti() {

    let items = [

        "🎉",
        "🎊",
        "✨",
        "💖",
        "💕",
        "⭐",
        "❤️",
        "💝"

    ];


    for (let i = 0; i < 50; i++) {

        let piece =
            document.createElement("div");

        piece.className =
            "confetti";

        piece.innerText =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 5000);

    }

}


// =====================================
// HEART EXPLOSION ❤️
// =====================================

function createHearts() {

    let hearts = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💝"

    ];


    for (let i = 0; i < 30; i++) {

        let heart =
            document.createElement("div");

        heart.className =
            "explode-heart";

        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left = "50%";

        heart.style.top = "50%";


        heart.style.setProperty(
            "--x",
            Math.random() * 600 - 300 + "px"
        );


        heart.style.setProperty(
            "--y",
            Math.random() * 500 - 250 + "px"
        );


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 1800);

    }

}