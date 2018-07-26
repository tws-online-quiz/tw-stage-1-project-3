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
        resetScoreAndTime();
        peep();
        // 设置延时，当时间到达gameTime时，将timeUp设置为True
        setTimeout(() => {
            timeUp = true;
            titleH1.innerText = 'TIME UP! ';
        }, gameTime)
    }

    /**
     * 初始化设置.
     */
    function resetScoreAndTime() {

    }

    /**
     * 出洞.
     */
    function peep() {
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        comeOutAndStop(hole, time);
    }

    /**
     * 随机生成地鼠出洞停留时间.
     *
     * @param min
     * @param max
     * @returns {number}
     */
    function randomTime(min, max) {
        return 0;
    }

    /**
     * 随机选择地鼠钻出的地洞，如果与上一个是相同地洞，则重新选择一个地洞.
     *
     * @param holes
     * @returns {*}
     */
    function randomHole(holes) {
        return null;
    }

    /**
     * 地鼠出洞并停留相应时间，如果游戏时间未结束(timeUp)，继续出洞(peep).
     *
     * @param hole 地鼠所出地洞.
     * @param time 地鼠停留时间.
     */
    function comeOutAndStop(hole, time) {

    }

    /**
     * 打地鼠。为每个moles添加点击事件，点击后分数显示+1，地鼠入洞。
     */

    // 在这里实现打地鼠代码，为每个moles添加点击事件，参照start按钮点击事件

};