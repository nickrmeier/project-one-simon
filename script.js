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
    }, 500);
    compArray.push(randomItem);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        turnTwo();
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
    }, 2000);

    compArray.push(randomItem);
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        turnThree();
    }, false);
    console.log(compArray)
};

// TURN THREE

function turnThree(event) {
    turnCounter.innerHTML = 'Round 3';
    startButton.style.backgroundColor = "white";
    let randomItem = gameArray[Math.floor(Math.random() * gameArray.length)];
    randomItem.style.backgroundColor = "yellow";
    setTimeout(function () {
        randomItem.style.backgroundColor = randomItem.dataset.color
    }, 4000);
    console.log(compArray)

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        turnFour();
    }, false);
    console.log(compArray)
};

// TURN FOUR

function turnFour(event) {
    turnCounter.innerHTML = 'Round 4';
    startButton.style.backgroundColor = "white";
    let randomItem = gameArray[Math.floor(Math.random() * gameArray.length)];
    randomItem.style.backgroundColor = "yellow";
    setTimeout(function () {
        randomItem.style.backgroundColor = randomItem.dataset.color
    }, 5000);
    console.log(compArray)

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        turnFive();
    }, false);
    console.log(compArray)
};

// TURN FIVE

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
    }, 8000);
    console.log(compArray)

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.button')) return;
        let userInput = (event.target);
        console.log(userInput)
        showAlert();
    }, false);
    console.log(compArray)
};



// function turnThree() {
//     turnCounter.innerHTML = 'Round 3';
//     startButton.style.backgroundColor = "white";
//     chooseRandomItem();
//     console.log(compArray);

//     let userArrayThree = [];

//     document.addEventListener('click', function (event) {
//         if (!event.target.matches('.button')) return;
//         var userInputThree = (event.target);
//         userArrayThree.push(userInputThree);
//         console.log(userArrayThree);
//         if (userArrayThree[0] == compArray[1]) {
//             turnFour();
//         };
//     }, false);
// };






// //  RANDOM GENERATOR 3
// let randomItemThree = gameArray[Math.floor(Math.random() * gameArray.length)];

// function turnThree() {
//     turnCounter.innerHTML = 'Round 3';
//     startButton.style.backgroundColor = "white";
//     compArray.push(randomItemThree);
//     console.log(compArray);

//     let userArrayThree = [];
//     console.log('turnThree running')
//     document.addEventListener('click', function (event) {
//         if (!event.target.matches('.button')) return;
//         event.preventDefault();
//         var userInputThree = (event.target);
//         userArrayThree.push(userInputThree);
//         console.log(userArrayThree);
//         if (userArrayThree[0] == compArray[3]) {
//             turnFour();
//         };
//     }, false);

//     // document.removeEventListener('click', turnThree);

// };


// //  RANDOM GENERATOR 4
// let randomItemFour = gameArray[Math.floor(Math.random() * gameArray.length)];

// function turnFour() {
//     turnCounter.innerHTML = 'Round 4';
//     startButton.style.backgroundColor = "white";
//     compArray.push(randomItemFour);
//     console.log(compArray);

//     let userArrayFour = [];

//     document.addEventListener('click', function (event) {
//         if (!event.target.matches('.button')) return;
//         event.preventDefault();
//         var userInputFour = (event.target);
//         userArrayFour.push(userInputFour);
//         console.log(userArrayFour);
//         if (userArrayFour[0] == compArray[6]) {
//             turnFive();
//         };
//     }, false);

//     // document.removeEventListener('click', this);

// };


// function showAlert() {
//     alert('YOU WIN!');
// };

// //  RANDOM GENERATOR 5
// let randomItemFive = gameArray[Math.floor(Math.random() * gameArray.length)];

// function turnFive() {
//     turnCounter.innerHTML = 'Round 5';
//     startButton.style.backgroundColor = "white";
//     compArray.push(randomItemFive);
//     console.log(compArray);

//     let userArrayFive = [];

//     document.addEventListener('click', function (event) {
//         if (!event.target.matches('.button')) return;
//         event.preventDefault();
//         var userInputFive = (event.target);
//         userArrayFive.push(userInputFive);
//         console.log(userArrayFive);
//         if (userArrayFive[0] == compArray[11]) {
//             showAlert();
//         };
//     }, false);

//     // document.removeEventListener('click', this);

// };












// SCORES
// track scores across games



// ROUNDS





// Array (user)
    // this array stores the clicks of the user.
    // if array is equal to computer array, computer runs function to make the next array.


// Array within an array (computer)
    // Put buttons in an array. 



// Random Generator
    // must choose an integer between 1 & 4 [0, 1, 2, 3] at random.

    // That number that is stored in an array.

    // each turn that array is copied, one more number is added to the array.


    // array stops at 10 (>11) rounds.
    // GOLD VERSION would include adding new levels increasing round by 10).
