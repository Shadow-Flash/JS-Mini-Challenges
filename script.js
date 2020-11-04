//Challenge 1
function ageIndays() {
    var birthYear = prompt("What is your age brahh...?");
    var ageresult = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1'); //create tag in html (element in HTML)
    var textAns = document.createTextNode("You are " + ageresult + " days."); //Generate the value of the element used
    h1.setAttribute('id', 'ageIndays'); //It will set "id" element with "ageIndays"
    h1.appendChild(textAns); //It will add the item (textAns) in h1 tag
    document.getElementById('flex_result').appendChild(h1);
}

function Reset() {
    document.getElementById('ageIndays').remove();
}

// Challenge 2
function generate() {
    var image = document.createElement('img');
    var div = document.getElementById('flex_cat_gen');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function reset_pic() {
    document.getElementById('flex_cat_gen').remove();
}

//Challenge 3
function rpsgame(yourChoice) {
    var humanChoice = yourChoice.id;
    var botChoice = botTochoose(randomForbot());
    results = decideWinner(humanChoice, botChoice);
    rmessage = message(results);
    rpsFrontEnd(yourChoice.id, botChoice, rmessage);
    console.log("bot choice: ", botChoice);
    console.log(results);
    console.log(rmessage);
}

function randomForbot() {
    return Math.floor(Math.random() * 3);
}

function botTochoose(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, botChoice) {
    var rpsDB = {
        'rock': {
            'scissor': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'scissor': 0,
            'rock': 1,
            'paper': 0.5
        },
        'scissor': {
            'scissor': 0.5,
            'rock': 0,
            'paper': 1
        }
    };
    var yourScore = rpsDB[yourChoice][botChoice];
    var botScore = rpsDB[botChoice][yourChoice];

    return [yourScore, botScore];
}

function message([yourScore, botScore]) {
    if (yourScore === 0) {
        return {
            'message': 'You Lost!',
            'color': 'red'
        };
    } else if (yourScore === 0.5) {
        return {
            'message': 'Match Tied!',
            'color': 'orange'
        };
    } else {
        return {
            'message': 'You Won!',
            'color': "green"
        };
    }
}

function rpsFrontEnd(humanImgchoice, botImgchoice, fmessage) {
    var imgDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDB[humanImgchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px purple;'>"
    messageDiv.innerHTML = "<h1 style='color:" + fmessage['color'] + "; font-size:60px; padding: 30px;'>" + fmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imgDB[botImgchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px green;'>"

    document.getElementById('flex_box_rps').appendChild(humanDiv);
    document.getElementById('flex_box_rps').appendChild(messageDiv);
    document.getElementById('flex_box_rps').appendChild(botDiv);
}

//Challenge 4

var all_Buttons = document.getElementsByTagName('button');
var copyButtons = {
    '0': 'btn-primary',
    '1': 'btn-danger',
    '2': 'btn-success',
    '3': 'btn-danger',
    '4': 'btn-primary',
    '5': 'btn-danger',
    '6': 'btn-warning',
    '7': 'btn-success'
};

function buttonColorChange(buttonThing) {
    if (buttonThing.value === 'red') {
        buttonRed();
    } else if (buttonThing.value === 'green') {
        buttonGreen();
    } else if (buttonThing.value === 'resets') {
        buttonReset();
    } else if (buttonThing.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < all_Buttons.length; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_Buttons.length; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_Buttons.length; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(copyButtons[i]);
    }
}

function buttonRandom() {
    let choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning']
    let numchoice = Math.floor(Math.random() * 4);
    for (let i = 0; i < 8; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(choices[numchoice]);
    }

}

//Challenge 5

let bjGame = {
    'you': {
        'scoreSpan': '#your-box-result',
        'div': '#your-box',
        'score': 0
    },
    'dealer': {
        'scoreSpan': '#dealer-box-result',
        'div': '#dealer-box',
        'score': 0
    },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardsMap': {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'K': 10,
        'Q': 10,
        'J': 10,
        'A': [1, 11]
    },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = bjGame['you'];
const DEALER = bjGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a')
const winSound = new Audio('sounds/cash.mp3')
const lossSound = new Audio('sounds/aww.mp3')

document.querySelector("#Hit-button").addEventListener('click', hitButton);
document.querySelector("#Deal-button").addEventListener('click', bjDeal);
document.querySelector("#Stand-button").addEventListener('click', dealerLogic);

function hitButton() {
    if (bjGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return bjGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function bjDeal() {
    //showResult(computeWinner()); //For two players uncomment this line
    if (bjGame['turnsOver'] === true) {
        bjGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-box-result').textContent = 0;
        document.querySelector('#dealer-box-result').textContent = 0;
        document.querySelector('#your-box-result').style.color = 'white';
        document.querySelector('#dealer-box-result').style.color = 'white';
        document.querySelector('#blackjack_result').textContent = "Let's Play";
        document.querySelector('#blackjack_result').style.color = 'black';

        bjDeal['turnsOver'] = true;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + bjGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += bjGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += bjGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += bjGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUSTED!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';

    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    bjGame['isStand'] = true;
    while (DEALER['score'] < 18 && bjGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    bjGame['turnsOver'] = true;
    showResult(computeWinner());
}

function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            bjGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            bjGame['losses']++;
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            bjGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        bjGame['losses']++;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        bjGame['draws']++;
    }
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (bjGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = bjGame['wins'];
            message = 'YOU WON!';
            messageColor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = bjGame['losses'];
            message = 'YOU LOST!';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = bjGame['draws'];
            message = "Tied !!";
            messageColor = 'black';
        }
        document.querySelector('#blackjack_result').textContent = message;
        document.querySelector('#blackjack_result').style.color = messageColor;
    }


}