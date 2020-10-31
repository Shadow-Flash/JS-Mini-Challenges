//Challenge 1
function ageIndays() {
    var birthYear = prompt("What is your age brahh...?");
    var ageresult = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1'); //create tag in html (element in HTML)
    var textAns = document.createTextNode("You are " + ageresult + " days."); //Generate the value of the element used
    h1.setAttribute('id','ageIndays'); //It will set "id" element with "ageIndays"
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
    results = decideWinner(humanChoice,botChoice);
    rmessage = message(results);
    rpsFrontEnd(yourChoice.id, botChoice, rmessage);
    console.log("bot choice: ",botChoice);
    console.log(results);
    console.log(rmessage);
}

function randomForbot() {
    return Math.floor(Math.random()*3);
}

function botTochoose(number) {
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice , botChoice) {
    var rpsDB = {
        'rock': {'scissor': 1 ,'rock': 0.5 ,'paper': 0 },
        'paper': {'scissor': 0 ,'rock': 1 ,'paper': 0.5 },
        'scissor': {'scissor': 0.5 ,'rock': 0 ,'paper': 1 }
    };
    var yourScore = rpsDB[yourChoice][botChoice];
    var botScore = rpsDB[botChoice][yourChoice];

    return [yourScore,botScore];
}

function message([yourScore,botScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': 'Match Tied!', 'color': 'orange'};
    }
    else {
        return {'message': 'You Won!', 'color': "green" };
    }
}

function rpsFrontEnd(humanImgchoice, botImgchoice, fmessage){
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
    messageDiv.innerHTML = "<h1 style='color:" + fmessage['color'] +"; font-size:60px; padding: 30px;'>" + fmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imgDB[botImgchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px green;'>"

    document.getElementById('flex_box_rps').appendChild(humanDiv);
    document.getElementById('flex_box_rps').appendChild(messageDiv);
    document.getElementById('flex_box_rps').appendChild(botDiv);
}

//Challenge 4
var all_Buttons = document.getElementsByTagName('button');
var copyButtons = {
    '0':'btn-primary',
    '1':'btn-danger',
    '2':'btn-success',
    '3':'btn-danger',
    '4':'btn-primary',
    '5':'btn-danger',
    '6':'btn-warning',
    '7':'btn-success'
};

function buttonColorChange(buttonThing) {
    if (buttonThing.value === 'red') {
        buttonRed();
    }
    else if (buttonThing.value === 'green') {
        buttonGreen();
    }
    else if (buttonThing.value === 'resets') {
        buttonReset();
    }
    else if (buttonThing.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for( let i=0;i<all_Buttons.length;i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for( let i=0;i<all_Buttons.length;i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for( let i=0;i<all_Buttons.length;i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(copyButtons[i]);
    }
}

function buttonRandom() {
    let choices = ['btn-primary','btn-success','btn-danger','btn-warning']
    let numchoice = Math.floor(Math.random()*4);
    for (let i = 0; i < 8; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(choices[numchoice]);
    }

}