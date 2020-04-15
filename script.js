// FOUR LIGHTS
// assign these and their attributes to a set of divs.
// onClick - should change color when called in function and when clicked.
// GOLD VERSION has sounds attached to each button.
const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');

// BUTTON ONE
buttonOne.addEventListener('click', changeColorOne);
function changeColorOne() {
    this.style.backgroundColor = "yellow";
    setTimeout(changeBackA, 500);
}
let changeBackA = () => {
    buttonOne.style.backgroundColor = "rgb(146, 253, 218)";
}
// BUTTON TWO
buttonTwo.addEventListener('click', changeColorTwo);
function changeColorTwo() {
    this.style.backgroundColor = "yellow";
    setTimeout(changeBackB, 500);
}
let changeBackB = () => {
    buttonTwo.style.backgroundColor = "rgb(253, 203, 181)";
}
// BUTTON THREE
buttonThree.addEventListener('click', changeColorThree);
function changeColorThree() {
    this.style.backgroundColor = "yellow";
    setTimeout(changeBackC, 500);
}
let changeBackC = () => {
    buttonThree.style.backgroundColor = "rgb(133, 39, 39)";
}
// BUTTON FOUR
buttonFour.addEventListener('click', changeColorFour);
function changeColorFour() {
    this.style.backgroundColor = "yellow";
    setTimeout(changeBackD, 500);
}
let changeBackD = () => {
    buttonFour.style.backgroundColor = "rgb(91, 134, 147)";
}

// EACH BUTTON IN AN ARRAY
let gameArray = [];
gameArray.push(buttonOne, buttonTwo, buttonThree, buttonFour);
console.log(gameArray);

// TURN COUNTER
const turnCounter = document.querySelector('.turncount');

//  COMP ARRAY
const compArray = [];

// START BUTTON/COMPUTER TURN 1
// click FUNCTION (this is also reset)
let startButton = document.querySelector('.play');
startButton.addEventListener('click', chooseRandomItem);

function chooseRandomItem(event) {
    turnCounter.innerHTML = 'Round 1';
    startButton.style.backgroundColor = "grey";
    let randomItem = gameArray[Math.floor(Math.random() * gameArray.length)];
    randomItem.style.backgroundColor = "yellow";

    setTimeout(function () {
        randomItem.style.backgroundColor = randomItem.dataset.color
    }, 400);

    compArray.push(randomItem);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        setTimeout(() => { turnTwo() }, 600);
    }, false);
    console.log(compArray)
};

// TURN TWO
function turnTwo(event) {
    turnCounter.innerHTML = 'Round 2';
    startButton.style.backgroundColor = "white";
    let randomItem = gameArray[Math.floor(Math.random() * gameArray.length)];
    randomItem.style.backgroundColor = "yellow";

    setTimeout(function () {
        randomItem.style.backgroundColor = randomItem.dataset.color
    }, 600);
    compArray.push(randomItem);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        setTimeout(() => { turnThree() }, 600);
        // turnThree();
    }, false);
    console.log(compArray)
};

// TURN THREE
function turnThree(event) {
    turnCounter.innerHTML = 'Round 3';
    startButton.style.backgroundColor = "white";
    let randomItem = gameArray[Math.floor(Math.random() * gameArray.length)];
    randomItem.style.backgroundColor = "yellow";;

    setTimeout(function () {
        randomItem.style.backgroundColor = randomItem.dataset.color
    }, 600);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        setTimeout(() => { turnFour() }, 600);0
        // turnFour();
    }, false);
    console.log(compArray)
};

// // TURN FOUR
function turnFour(event) {
    turnCounter.innerHTML = 'Round 4';
    startButton.style.backgroundColor = "white";
    let randomItem = gameArray[Math.floor(Math.random() * gameArray.length)];
    randomItem.style.backgroundColor = "yellow";

    setTimeout(function () {
        randomItem.style.backgroundColor = randomItem.dataset.color
    }, 600);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        setTimeout(() => { turnFive() }, 600);
    }, false);
    console.log(compArray)
};

// // TURN FIVE

function showAlert() {
    alert('YOU WIN!');
};

function turnFive(event) {
    turnCounter.innerHTML = 'Round 5';
    startButton.style.backgroundColor = "white";
    let randomItem = gameArray[Math.floor(Math.random() * gameArray.length)];
    randomItem.style.backgroundColor = "yellow";

    setTimeout(function () {
        randomItem.style.backgroundColor = randomItem.dataset.color
    }, 600);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        showAlert();
    }, false);
    console.log(compArray)
};
