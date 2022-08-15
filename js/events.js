console.log('dom event learn');

const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)


function makePink(){
    document.body.style.backgroundColor = 'pink'
}

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})


document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})