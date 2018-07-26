window.onload = function () {

    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const startBtn = document.getElementById('start_btn');

    let titleH1 = document.getElementById('title');
    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;


    startBtn.addEventListener('click', function () {
        showBtnAnimation();
        startGame();
        if (startBtn.innerHTML === 'Start!') {
            startBtn.innerHTML = 'Replay!';
        }
    }, false);

    function showBtnAnimation() {
        event.preventDefault();
        //reset animation
        startBtn.classList.remove('animate');

        startBtn.classList.add('animate');
        setTimeout(() => startBtn.classList.remove('animate'), 700);
    }


    function startGame() {
    //    Write Your Code Here!
    }

};